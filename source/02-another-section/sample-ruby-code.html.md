---
title: Some Samply Ruby Code
---

```ruby
#!/usr/bin/ruby

#
# This creates a simple animation of five balls bouncing around inside a 
# rectagle.  Balls bounce off the sides, but pass through each other.  Nothing
# fancy.
#

# Import the library.
require 'tk'

# Dot diameter.
Diameter = 10

# Update rate (ms).
Frequency = 25

# Canvas size.
Width = 400
Height = 300

# Set defaults.  Some we keep in constants to use later.
BG = '#ccccff'
TkOption.add('*background', BG)

# Root window.
root = TkRoot.new('background' => BG) { title 'Bouncy, Bouncy' }

# Canvas.
c = TkCanvas.new(root) {
  width Width
  height Height
  pack('fill' => 'both')
}

# This is the circle that wanders around the canvas.
class MovingCircle < TkcOval 
  # Create with a moving circle on the canvas c with indicated color.
  def initialize(c, color)
    # Remember the canvas.
    @canv = c

    # Choose an initial location at random and create the object there.
    @xpos = rand(Width - Diameter)
    @ypos = rand(Height - Diameter)
    super(c, @xpos, @ypos, @xpos + Diameter, @ypos + Diameter, 'fill' => color)

    # Chose a velocity at random.  1 to 3 pixels per Frequency in each
    # dimension.
    @delx = (rand(3)+1)*(if rand(2) == 1 then 1 else -1 end)
    @dely = (rand(3)+1)*(if rand(2) == 1 then 1 else -1 end)

    # Start moving
    Tk.after(Frequency, proc { self.move } )
  end

  # This adjusts a single dimension by one step, taking account of the
  # walls.  Send a position, increment, and limit, and get back a new pos
  # and new increment (which might have its sign changed).
  def del(pos, inc, limit)
    # Move
    pos += inc

    # See if we hit the top or left, and reverse.
    if pos < 0 then
      pos = -pos
      inc = -inc

    # Likewise check for hitting the right or bottom
    elsif pos > limit - Diameter then
      pos = (limit - Diameter) - (pos - (limit - Diameter))
      inc = -inc
    end

    # Send back the results.
    return pos, inc
  end

  # Move one step, then schedule the next move.
  def move
    # Remember current position, and compute the new one.
    oldx, oldy = @xpos, @ypos
    @xpos, @delx = del(@xpos, @delx, Width)
    @ypos, @dely = del(@ypos, @dely, Height)
    
    # Tell Tk about it.
    @canv.move(self, @xpos - oldx, @ypos - oldy)

    Tk.after(Frequency, proc { self.move } )
  end
end

# Make several balls of different color.
for color in [ '#FF9999', '#99FFFF', '#005588', '#992211', '#FF0055' ]
  MovingCircle.new(c, color)
end

Tk.mainloop
```