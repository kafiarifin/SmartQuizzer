export const questionDataSetTest = [{
    questionComplexityIndex: 0,
    explanation: '',
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
    }, {
        questionComplexityIndex: 0,
        explanation: 'Which of the following is sufficient to run a Java program only ?',
        prompt: '',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: ' Java development kit (JDK)'
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
        answerExplanation: `Option C is the correct answer.

To run a java program, we only required to have java runtime environment. The JRE consists of the Java Virtual Machine (JVM), Java platform core classes, and supporting Java platform libraries. Hence option C is correct.

Reference                : http://www.oracle.com/technetwork/java/javase/tech/index.html

The correct answer is: Java Runtime Environment (JRE)`
    }, {
        questionComplexityIndex: 0,
        explanation: 'the following class in the file programs/mine/whiz/Fan.java:',
        prompt: 'C',
        correctAnswerId: 'Which of the following replaces INSERT CODE HERE if we compile from programs ( root folder ) ?',
        options: [
            {
                id: 'A',
                markdown: 'package programs.mine.whiz;'
            },
            {
                id: 'B',
                markdown: 'package Fan;'
            },
            {
                id: 'C',
                markdown: 'package mine.whiz;'
            },
            {
                id: 'D',
                markdown: 'package whiz;'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: `INSERT CODE HERE

public class Fan{ }`,
        answerExplanation: `Option C is the correct answer.

Option C is correct. The package name represents any folders underneath the current path, which is mine.whiz in this case. Option A is incorrect as we don't need to give whole path in this case.

Reference  : http://docs.oracle.com/javase/tutorial/java/package/usepkgs.html

The correct answer is: package mine.whiz;`
    }, {
        questionComplexityIndex: 0,
        explanation: 'Which of the following add form of multiple inheritance capability to java 8?',
        prompt: '',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: 'Static methods introduced in interfaces.'
            },
            {
                id: 'B',
                markdown: 'Default methods introduced in interfaces.'
            },
            {
                id: 'C',
                markdown: 'Enum introduced in java 8.'
            },
            {
                id: 'D',
                markdown: 'Multiple extending feature.'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option B is the correct answer.

From java 8 interface can have both default and static non abstract methods. From them default methods are inherited, since we can implement as many as interfaces, java 8 has form of multiple inheritance. So option B is correct.

Reference                : http://www.oracle.com/technetwork/java/javase/tech/index.html

The correct answer is: Default methods introduced in interfaces.`
    }, {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which is the output?',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: '9876543210'
            },
            {
                id: 'B',
                markdown: '876543210'
            },
            {
                id: 'C',
                markdown: 'Compilation fails due to error on line 5'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to error on line 6'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to multiple errors'
            },
        ],
        codeString: `       public class Whiz{
                       static int x = 9;
                                      
                       public static void main(String[] args) {
                                       int x = 8;
                                       for(;x>-1;x--)
                                                       System.out.print(x);
                       }
        }`,
        answerExplanation: `Option B is the correct answer.

When there are two variables declared with same name in two different scopes, the closest scope variable shadowed other variable. In this code at line 6, for loop use local variable at line 5 because it is closer to for loop at line 6 than the static variable at line 2.

So the output will be “876543210 “. Therefore option B is correct.

Option A is incorrect as the local variable is used in for loop at line 6.

Option C is incorrect, even the both names of variable are same; they are in two different scopes.

Option E is incorrect as the code compiles fine.

Reference                            :http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: 876543210`
    }, {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which is the output?',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: '3210'
            },
            {
                id: 'B',
                markdown: '210'
            },
            {
                id: 'C',
                markdown: '0'
            },
            {
                id: 'D',
                markdown: '-1'
            },
            {
                id: 'E',
                markdown: 'Compilation fails'
            },
        ],
        codeString: `       public class Whiz{
                                      
           public static void main(String[] args) {
        
                                       for(int x = 3;x>-1;x--);
                                                       System.out.print(x);
                       }
       }`,
        answerExplanation: `Option E is the correct answer.

The code fails to compile due to line 6. At line 5 we have ended the for loop by using semicolon so the variable scope of ‘x’ ends at line 5, and line 6 printing statement is not part of the for loop. Hence option E is correct.

Reference                            :http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: Compilation fails`
    }, {
        questionComplexityIndex: 0,
        explanation: 'Consider following statements.',
        prompt: 'Which is true?',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: 'Only I'
            },
            {
                id: 'B',
                markdown: 'Only II'
            },
            {
                id: 'C',
                markdown: 'Only III'
            },
            {
                id: 'D',
                markdown: 'Only I and III'
            },
            {
                id: 'E',
                markdown: 'All'
            },
        ],
        codeString: `   I.            We can use "#” symbol for single line comment in java.

      II.            We can use “//” for multi line comments in java.

    III.            We can use” /*”, “*/” for multi line comments in java.`,
        answerExplanation: `Option C is the correct answer.

Statement I is incorrect since we can’t use “#” for any commenting purposes in java. But some other languages like PHP allow this.

Statement II is incorrect as in java “//” is used for single line comments.

Statement III is correct we can use  /*”, “*/” for multi line comments in java like follow.

                                                /*           this is

                                                                a comment         */

 

Option C is correct as only the statement III is correct.

Reference                            :http://docs.oracle.com/javase/tutorial/getStarted/application/index.html

The correct answer is: Only III`
    }, {
        questionComplexityIndex: 0,
        explanation: 'Which of the following is valid top level class declaration',
        prompt: '',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: 'class one(){ }'
            },
            {
                id: 'B',
                markdown: 'static class Test{}'
            },
            {
                id: 'C',
                markdown: 'protected class Test{ }'
            },
            {
                id: 'D',
                markdown: 'class If{}'
            },
            {
                id: 'E',
                markdown: 'All of above'
            },
        ],
        codeString: ``,
        answerExplanation: `Option D is the correct answer.

Option D is correct because it is correct top level class declaration, note that java is case sensitive so “if” and “If” are two different things. Hence here using If is not a keyword.

Option A is incorrect as it is illegal to use parentheses for class declaration.

Option B is incorrect as it is illegal to use static with top level class declarations.

Options C is incorrect as both protected and private access level are not allowed with top level class declarations.

Reference                            :http://docs.oracle.com/javase/tutorial/java/javaOO/classes.html

The correct answer is: class If{}`
    }, {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What is the output?',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: 'This java program will run without the main method will be printed.'
            },
            {
                id: 'B',
                markdown: 'Compilation succeeds and no output.'
            },
            {
                id: 'C',
                markdown: 'An Exception is thrown at runtime.'
            },
            {
                id: 'D',
                markdown: 'Compilation fails.'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: `   public class Whiz {
            static
                    {
                       System.out.println("This java program will run without the main method");
                       System.exit(0);
                    }
   }
   Command line invocation:

                javac Whiz.java

                java Whiz`,
        answerExplanation: `Option E is the correct answer.

In Java 6 or earlier version, JVM first loads the byte code into memory. Static blocks will be executed at the time of class loading and then looks for the main method. But there is System.exit(0) statement which terminates JVM.So you don't get any error with this program. 
From Java 7 on wards , JVM first looks for the main method. If it doesn't find main method, it gives you error. If there is main method then it loads the class into memory.

A class may not have the main method, so there will be no compile time error when compiling such a class. However trying to execute the class file of that class causes an Error not an exception. So option E is correct.

Options A and B are incorrect as the code produce an error before producing any output.

Option D is incorrect as the code compiles fine.

Reference  :http://docs.oracle.com/javase/tutorial/getStarted/application/index.html

The correct answer is: None of the above.`
    }, {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which is the output?',
        correctAnswerId: 'A',
        options: [
            {
                id: 'A',
                markdown: 'A'
            },
            {
                id: 'B',
                markdown: 'Compilation fails due to an error on line 1'
            },
            {
                id: 'C',
                markdown: 'Compilation fails due to an error on line 5'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to multiple errors'
            }
        ],
        codeString: `
       import static java.lang.System.*;
       public class Whiz{
        
                     public static void main(String[] args){
                                     out.print("A");
                     }
                                    
       }`,
        answerExplanation: `Option A is the correct answer.

Option A is correct as the “A” will produce as the output.

Options B and C are incorrect as we can use static keyword for importing only the static member of a class; in this case we have imported all static members of java.lang.System class. So we don’t have to use “System.out” for printing.

Option D is incorrect as there are no compile time errors when compiling this code.

Reference : http://docs.oracle.com/javase/tutorial/java/package/usepkgs.html

The correct answer is: A`
    }, {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which of the following is true?',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: 'We should add “import java.lang.Math.*;” statement at line 2 to make this code compile'
            },
            {
                id: 'B',
                markdown: 'We should add “static import java.lang.Math.*;” statement at line 2 to make this code compile'
            },
            {
                id: 'C',
                markdown: 'We should add “import static java.lang.Math.PI;” statement before line 1 to make this code compile'
            },
            {
                id: 'D',
                markdown: 'We should add “static import java.lang.Math.*;” statement before line 1 to make this code compile'
            },
            {
                id: 'E',
                markdown: 'We should add “static import java.lang.Math;” statement before line 1 to make this code compile'
            },
        ],
        codeString: `       public class Whiz {
        
                     public static void main(String[ ] args) {
                                     System.out.print(PI);
                     }
                                    
       }
       // The java.lang package has a class called Math, and this class has static field called “PI”.`,
        answerExplanation: `Option C is the correct answer.

We can use static keyword for importing only the static member of a class; in this case we have import the static field “PI” from java.lang.Math class.

Option C is correct as it correctly uses the static import statement. It will import only PI.

Option A is incorrect as it is not static import.

Option B is incorrect as import statement must come before class declaration and it also use invalid static import syntax.

Options D and E are incorrect as there invalid static import syntax is used.

Reference                            :http://docs.oracle.com/javase/tutorial/java/package/usepkgs.html

The correct answer is: We should add “import static java.lang.Math.PI;” statement before line 1 to make this code compile`
    }, {
        questionComplexityIndex: 0,
        explanation: 'Which of the following is true?',
        prompt: '',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: 'Java is platform independent'
            },
            {
                id: 'B',
                markdown: 'Java is object oriented programming language'
            },
            {
                id: 'C',
                markdown: 'Java doesn’t support multiple inheritance completely'
            },
            {
                id: 'D',
                markdown: 'All of these'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option D is the correct answer.

Java is platform independent and this is achieved through Java runtime environment. Java is very high level object oriented programming language, but it doesn’t provide 100% support for multiple inheritance. However with java SE 8 with new static and default methods this issue is somewhat addressed.

Option D is correct as all given statements are correct.

Reference            :http://www.oracle.com/technetwork/java/javase/tech/index.html

The correct answer is: All of above`
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