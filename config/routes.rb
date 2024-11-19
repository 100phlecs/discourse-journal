DiscourseJournal::Engine.routes.draw do
  post '/update-sort-order' => 'journal#update_sort_order'
  post '/move-entries-to-comments' => 'journal#entries_to_comments'
end

Discourse::Application.routes.append do
  mount ::DiscourseJournal::Engine, at: 'journal'
end
