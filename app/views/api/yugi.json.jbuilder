# json.array! @cards, partial: 'api/card', as: :card

json.array! @yugis, :id, :card_name, :attack, :defense, :description,
            :selected, :position, :has_attacked, :faceup, :has_changed_battle_position,
            :image_url, :stars