# frozen_string_literal: true

module Jobs
  class MoveEntriesToComments < ::Jobs::Base
    def execute(args)
      category = Category.find_by(id: args[:category_id])
      return if category.blank?

      Topic.where(category_id: category.id).each do |topic|
        if topic.journal?
          topic.move_entries_to_comments
        end
      end
    end
  end
end


