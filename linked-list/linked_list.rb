class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
  end
end


class SingleLinkedList
  attr_accessor :head

  def initialize(value)
    @head = Node.new(value)
  end


  def insert(value)
    if @head.nil?
      head = Node.new(value)
    else
      current_node = @head
      while current_node.next
        current_node = current_node.next
      end
      current_node.next = Node.new(value)
    end
  end

end


list = SingleLinkedList.new(3)
list.insert(4)
list.insert(14)
list.insert(3)
p list
