require "eight_ball"

def add_classic_responses(an_8ball)
  classic_responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "Don't count on it.",
    "No, not a chance.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ]
  classic_responses.each do |r|
    an_8ball.add(r)
  end
end

RSpec.describe MagicEightBall do
  before(:all) do
  end
  it "initialises with an empty list of responses" do
    eb = MagicEightBall.new
    expect(eb.responses).to eq []
  end

  it "can add responses" do
    eb = MagicEightBall.new
    eb.add("Your day will be great!!!")
    expect(eb.responses).to eq ["Your day will be great!!!"]
  end

  it "can return a random response" do
    eb = MagicEightBall.new
    add_classic_responses(eb)
    expect(eb.random_response).to eq "You may rely on it."
    expect(eb.random_response).to eq "No, not a chance."
  end

  it "answers a question with 'It is decidedly so.'" do
    eb = MagicEightBall.new
    add_classic_responses(eb)
    expect(eb.answer_my_question("Will I have a good day?")).to eq "You asked 'Will I have a good day?'. My response: It is decidedly so."
  end
  it "answers a question with 'Outlook not so good.'" do
    eb = MagicEightBall.new
    add_classic_responses(eb)
    expect(eb.answer_my_question("Will I have a good day?")).to eq "You asked 'Will I have a good day?'. My response: Outlook not so good."
  end
end










# expect(eb).to receive(:rand).and_return(4)
# expect(eb).to receive(:rand).and_return(6)
# expect(eb.responses).to receive(:sample).and_return('It is decidedly so.')
# expect(eb.responses).to receive(:sample).and_return('Outlook not so good.')




# With dependency injection
# rnd_function_dbl = double :rnd_function, get: 4
# expect(rnd_function_dbl).to receive(:pick_num).and_return(4)
# eb = MagicEightBall.new(rnd_function_dbl)

# expect(rnd_function_dbl).to receive(:pick_num).and_return(6)

# def initialize(rnd_function)
#   @responses = []
#   @rnd_function = rnd_function
# end

# class MyRandFunc
#   def pick_num(maximum)
#     return rand maximum   
#   end
# end


# rndf = MyRandFunc.new
# eb = MagicEightBall.new(rndf)


# def random_response
#   i = @rnd_function.pick_num(@responses.length)
#   return @responses[i]
# end