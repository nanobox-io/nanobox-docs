# -*- encoding: utf-8 -*-
# stub: middleman-breadcrumbs 0.3.3 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-breadcrumbs"
  s.version = "0.3.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Marnen Laibow-Koser"]
  s.date = "2015-12-10"
  s.description = "Breadcrumbs helper for Middleman"
  s.email = ["marnen@marnen.org"]
  s.homepage = "http://github.com/marnen/middleman-breadcrumbs"
  s.licenses = ["MIT"]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0")
  s.rubygems_version = "2.4.5.1"
  s.summary = "Breadcrumbs helper for Middleman"

  s.installed_by_version = "2.4.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman>, [">= 3.3.5"])
      s.add_development_dependency(%q<byebug>, [">= 0"])
      s.add_development_dependency(%q<guard>, ["~> 2.10.5"])
      s.add_development_dependency(%q<guard-minitest>, [">= 0"])
      s.add_development_dependency(%q<faker>, ["~> 1.5.0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<middleman>, [">= 3.3.5"])
      s.add_dependency(%q<byebug>, [">= 0"])
      s.add_dependency(%q<guard>, ["~> 2.10.5"])
      s.add_dependency(%q<guard-minitest>, [">= 0"])
      s.add_dependency(%q<faker>, ["~> 1.5.0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman>, [">= 3.3.5"])
    s.add_dependency(%q<byebug>, [">= 0"])
    s.add_dependency(%q<guard>, ["~> 2.10.5"])
    s.add_dependency(%q<guard-minitest>, [">= 0"])
    s.add_dependency(%q<faker>, ["~> 1.5.0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
