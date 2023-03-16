class MagicEightBall
  def initialize
    @responses = []
  end

  def add(response)
    @responses << response
  end

  def answer_my_question(question) 
    # return "You asked '#{question}'. My response: It is decidedly so."
    return "You asked '#{question}'. My response: #{@responses.sample}"
  end

  def random_response
    i = rand @responses.length
    return @responses[i]
  end

  def responses
    return @responses
  end
end
