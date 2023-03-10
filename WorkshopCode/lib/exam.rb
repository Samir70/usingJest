class Exam
  def initialise(subject, student, score, pass_mark)
    @subject = subject
    @student = student
    @score = score
    @pass_mark = pass_mark
  end
  attr_reader :subject, :student, :score, :pass_mark

  def passed?
    return @score >= @pass_mark
  end

  def report
    return "#{@student} #{passed? ? "passed" : "failed"} #{subject} with a score of #{@score}%, needing #{@pass_mark}% to pass"
  end
end
