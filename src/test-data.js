export const questionDataSetTest = [{
    questionComplexityIndex: 0,
    explanation: 'Test Explanation',
    prompt: 'What is the output?',
    correctAnswerId: 'C',
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
},
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What is the output?',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: '0'
            },
            {
                id: 'B',
                markdown: '2'
            },
            {
                id: 'C',
                markdown: '3'
            },
            {
                id: 'D',
                markdown: 'An Exception.'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to error on line 3.'
            },
        ],
        codeString: `public class Whiz {
         public static void main(String [ ] a) {
                 int [ ] a = {1,2,3};
                 System.out.print(a[3]);
         }
 }`,
        answerExplanation: `Option E is the correct answer.

Option E is correct as the code fails due to error on line 3 because the main method argument name and line 3 int array name are same. Trying to declare two variables with same name in same scope causes a compile time error.

Reference : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: Compilation fails due to error on line 3.`
    },
    {
        questionComplexityIndex: 0,
        explanation: '_________________ is responsible for the hardware- and operating system-independence of the Java SE platform, the small size of compiled code (bytecodes), and platform security',
        prompt: 'Which of the following can be used to fill above blank?',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: 'Java development kit (JDK)'
            },
            {
                id: 'B',
                markdown: 'Java virtual machine (JVM)'
            },
            {
                id: 'C',
                markdown: 'Java Runtime Environment (JRE)'
            },
            {
                id: 'D',
                markdown: 'Java SE platform'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option B is the correct answer.

Option B is correct since the jvm is responsible for the hardware- and operating system-independence of the Java SE platform, the small size of compiled code (bytecodes), and platform security.

Option A is incorrect as The JDK is a superset of the JRE, and contains everything that is in the JRE, plus tools such as the compilers and debuggers necessary for developing applets and applications.

Option C is incorrect as the Java Runtime Environment (JRE) provides the libraries, the Java Virtual Machine, and other components to run applets and applications written in the Java programming language.

Reference            :http://www.oracle.com/technetwork/java/javase/tech/index.html

The correct answer is: Java virtual machine (JVM)`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'which of the following must be included in a java source file to compile and generate bytecode?',
        prompt: '',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: 'Package declaration'
            },
            {
                id: 'B',
                markdown: 'Class declaration'
            },
            {
                id: 'C',
                markdown: 'Import statement/s'
            },
            {
                id: 'D',
                markdown: 'Main method'
            },
            {
                id: 'E',
                markdown: 'field declaration'
            },
        ],
        codeString: ``,
        answerExplanation: `Option B is the correct answer.

Element                                      Example                  Requirement      Place

Package declaration                   package whiz;           No                       First line in the file

Import statements                      import java.io.*;          No                       Immediately after the package

Class declaration                       public class Whiz      Yes                      Immediately after the import

Field declarations                       int value;                     No                       Anywhere inside a class

Method declarations                   void method()             No                       Anywhere inside a class

 

As summarize in the above table it is required to have class declaration for a class. Hence option B is correct.

Reference                            : http://docs.oracle.com/javase/tutorial/getStarted/application/index.html

The correct answer is: Class declaration`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following statement is true?',
        prompt: '',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: 'java command compiles a .class file into a .java file.'
            },
            {
                id: 'B',
                markdown: 'javac command compiles a .java file into a .bytecode file.'
            },
            {
                id: 'C',
                markdown: 'javac command compiles a .java file into a .class file.'
            },
            {
                id: 'D',
                markdown: 'Java takes the name of the class as a parameter with the .class extension.'
            },
            {
                id: 'E',
                markdown: 'Javac takes the name of the .class file as a parameter.'
            },
        ],
        codeString: ``,
        answerExplanation: `Option C is the correct answer.

Option C is correct since to compile java code we need to call the javac by passing the java source code name with the .java extension. To run the compiled bytecode we need to use the java command, not like javac command we only need to use the file name of the bytecode without the .class extension.

Reference  : http://docs.oracle.com/javase/tutorial/getStarted/application/index.html

 

The correct answer is: javac command compiles a .java file into a .class file.`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What is the output?',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: '012345'
            },
            {
                id: 'B',
                markdown: '01234'
            },
            {
                id: 'C',
                markdown: '1234'
            },
            {
                id: 'D',
                markdown: '12345'
            },
            {
                id: 'E',
                markdown: 'Compilation fails.'
            },
        ],
        codeString: `
       public class Whiz{
                                      
           public static void main(String[] args) {
                       int x = 0;
                       do{
                                       int y = x++;
                                       System.out.print(y);
                       }while(y<5);
           }
   }`,
        answerExplanation: `Option E is the correct answer.

Here inside the do block we have defined a variable called y and its scope limited to the do block only, since we try to access it out of that block inside while code results a compile time error, hence option E is correct.

Reference                            : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: Compilation fails.`
    }
];

const exampleObject = {
    questionComplexityIndex: 0,
    explanation: '',
    prompt: '',
    correctAnswerId: '',
    options: [
        {
            id: 'A',
            markdown: ''
        },
        {
            id: 'B',
            markdown: ''
        },
        {
            id: 'C',
            markdown: ''
        },
        {
            id: 'D',
            markdown: ''
        },
        {
            id: 'E',
            markdown: ''
        },
    ],
    codeString: ``,
    answerExplanation: ``
};