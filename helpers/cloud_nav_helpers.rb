module CloudNavHelpers
  def cloud_articles_in_order
    articles = []
    data.cloud_contents.categories.each do |category|
      articles << { title: category.title, path: category.path }
      next if category.articles.nil?

      category.articles.each do |article|
        articles << { category: category.title, title: article.title, path: article.path }
        next if article.sub_articles.nil?

        article.sub_articles.each do |sub_article|
          articles << { category: category.title, article: article.title, title: sub_article.title, path: sub_article.path }
        end
      end
    end
    articles
  end

  def cloud_get_prev_article(current_article_path)
    articles = cloud_articles_in_order
    index = cloud_articles_in_order.find_index { |article| article[:path] == current_article_path }

    if index == 0
      nil
    else
      articles[index - 1]
    end
  end

  def cloud_get_next_article(current_article_path)
    articles = cloud_articles_in_order
    index = cloud_articles_in_order.find_index { |article| article[:path] == current_article_path }

    if index == articles.count - 1
      nil
    else
      articles[index + 1]
    end
  end
end
