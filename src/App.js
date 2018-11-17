import React, {Component} from 'react';
import QuizLogic from "./components/QuizLogic";

class App extends Component {
    render() {
        const questionDataSet = [{
            explanation: 'Test Explanation',
            prompt: 'What is the output?',
            options: [
                {
                    id: 'A',
                    markdown: '678910'
                },
                {
                    id: 'B',
                    markdown: '5'
                },
                {
                    id: 'C',
                    markdown: '4'
                },
                {
                    id: 'D',
                    markdown: '3'
                },
                {
                    id: 'E',
                    markdown: 'Compilation fails'
                },
            ],
            codeString: `public class Whiz {
 static int x = 4;

 public static void main(String[] args) {

  for (int x = 5; x < 10; x++)
   x++;
  System.out.print(x--);
 }
}`,
            answerExplanation: `Option C is the correct answer. At line 6 we have created a for loop since we haven’t
                                use the brackets there,
                                the printing statement is not in the scope of the for loop block. So the for loop
                                variable scope ends by line
                                7. At line 8 printing statement prints the value of the static variable x, which is 4.
                                There we have used post
                                decrement operator which has no effect on that line hence option C is correct.`
        }];

        return (
            <div className="App">
                <QuizLogic quizData={questionDataSet}/>
            </div>
        );
    }
}

export default App;
