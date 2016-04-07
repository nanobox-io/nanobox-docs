module NavHelpers

  # Builds the flat array of all articles
  def getArticles(parent, arr)
    arr << {title: parent.title, path: parent.path }
    parent.articles.each do |a|
      if a.articles
        getArticles(a, arr)
      end
      arr << { title: a.title, path: a.path }
    end

    arr.flatten.uniq
  end

  # A Nested Nav Tree used to build the left nav
  # def getNavTree(parent)
  #   arr = []
  #   parent.articles.each do |a|
  #     if a.articles
  #       getNavTree(a)
  #     end
  #     arr << { title: a.title, path: a.path }
  #   end
  # end

  # Test the getNavTree Method
  # def testNavTree
  #   getNavTree(data.contents)
  # end

  # Helps to builds the previous article link
  def get_prev_article(current_article_path)
    articles = getArticles(data.contents, [])
    index = articles.find_index {|a| a[:path] == current_article_path}
    index == 0 ? nil : articles[index - 1]
  end

  # Helps to builds the next article link
  def get_next_article(current_article_path)
    articles = getArticles(data.contents, [])
    index = articles.find_index {|a| a[:path] == current_article_path}
    index == articles.count - 1 ? nil : articles[index + 1]
  end
end
