class Card < ApplicationRecord
  has_many :users, through: :decks

end
