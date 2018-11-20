export const questionDataSetTest = [
    {
        questionComplexityIndex: 0,
        explanation: 'Which are true? (Choose 2)',
        prompt: '*GC - Garbage Collector',
        correctAnswerId: ['B', 'E'],
        options: [
            {
                id: 'A',
                markdown: 'Java applications never run out of memory as GC manages the memory'
            },
            {
                id: 'B',
                markdown: 'An object is eligible for GC when there is no reference to it'
            },
            {
                id: 'C',
                markdown: 'The purpose of GC is to delete objects that there is no use at the moment'
            },
            {
                id: 'D',
                markdown: 'When you request GC to run, it will start to run immediately'
            },
            {
                id: 'E',
                markdown: 'Object Class has a finalize() method'
            },
        ],
        codeString: ``,
        answerExplanation: `Options B and E are the correct answer.

Option B is correct since an object is eligible for GC when there is no reference to an object in a currently live thread.

Option E is correct since there is a method called “finalize” in Object class, it is a special method much like main method in java. finalize() is called before Garbage collector reclaims the Object, it is the last chance for any object to perform cleanup activity.

Like other any program, java applications can run out of memory. So option A is incorrect.

Option C is incorrect as the purpose of the GC is to remove the objects which have no reference in a currently live thread.

Option D is incorrect as the JVM decides when to run GC whether we request or not.

REFERENCE : http://docs.oracle.com/javase/tutorial/java/javaOO/usingobject.html

The correct answers are: An object is eligible for GC when there is no reference to it, Object Class has a finalize() method      *GC – Garbage Collector`
    },
    {
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
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following is valid?',
        prompt: '',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: 'boolean b = tr_ue;'
            },
            {
                id: 'B',
                markdown: 'double d = 0._42;'
            },
            {
                id: 'C',
                markdown: 'long l = 1000_l;'
            },
            {
                id: 'D',
                markdown: 'int i = _1000;'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option E is the correct answer.

When using underscore for literals, you need to remember followings

You can place underscores only between digits but you cannot place underscores in the following places:

At the beginning or end of a number – (so option D is incorrect)

Adjacent to a decimal point in a floating point literal – (so option B is incorrect)

Prior to an F or L suffix – (so option C is incorrect)

In positions where a string of digits is expected

Option A is incorrect since we can't use “_” with Boolean literals.

REFERNCE                           : 

http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

The correct answer is: None of above`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which is the output?',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: '30'
            },
            {
                id: 'B',
                markdown: '60'
            },
            {
                id: 'C',
                markdown: 'An Exception is thrown'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to error at line 4'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to error at line 5'
            },
        ],
        codeString: `             public class Whiz{
              
                         public static void main(String args[]){
                                         Integer i1 = Integer.decode("10");
                                         Integer i2 = new Integer("20");
                                         Integer i3 = Integer.valueOf("30");
              
                                         System.out.print(i1 + i2 + i3);
                         }
         }      `,
        answerExplanation: `Option B is the correct answer.

There are few ways to create Integer wrapper. Following legal ways have used in above code correctly.

-          We can invoke constructor by passing String which represents a number or int like line 5

-          We can call decode method by passing String which represents a number like line 4

-          We can invoke the valueOf method by passing String which represents a number like line 6

 

So at line 8, summation of three integers will be printed. Hence the option B is correct.

REFERENCE        : https://docs.oracle.com/javase/tutorial/java/data/numberclasses.html

 

`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following lines of code will compile?',
        prompt: '',
        correctAnswerId: 'A',
        options: [
            {
                id: 'A',
                markdown: 'double d1 = 1_22.7;'
            },
            {
                id: 'B',
                markdown: 'double d2 = 1_234._0;'
            },
            {
                id: 'C',
                markdown: 'double d3 = 122.7_;'
            },
            {
                id: 'D',
                markdown: 'double d4 = 122_.7;'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option A is the correct answer.

Underscores are allowed as long as they are directly between two other digits. Hence option A is correct. Options B and D are incorrect because the underscore is adjacent to the decimal point. Option C is incorrect because the underscore is the last character.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: double d1 = 1_22.7;`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What will be the result?',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: '100'
            },
            {
                id: 'B',
                markdown: '10'
            },
            {
                id: 'C',
                markdown: '0'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to an error on line 6.'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to an error on line 7.'
            },
        ],
        codeString: `public class Whiz{
                int y = 10;
                public static void main(String[] args){   
                                int y;
                                final int x;
                                 x = 10;
                                System.out.print(x*y);
                }
}`,
        answerExplanation: `Option E is the correct answer.

Method local variables are not initialized to its default their values, they should be initialized before using, however it is not illegal to declare them without initializing. So at line 7 trying to use uninitialized local variable results a compile time error hence option E is correct.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: Compilation fails due to an error on line 7.`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following creates a Boolean wrapper of false?',
        prompt: '',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: 'Boolean b1 = "false";'
            },
            {
                id: 'B',
                markdown: 'Boolean b2 = new Boolean("true");'
            },
            {
                id: 'C',
                markdown: 'Boolean b3 = new Boolean("T");'
            },
            {
                id: 'D',
                markdown: 'Boolean b4 = 4>3;'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option C is the correct answer.

Option A is incorrect since we cannot assign string to a boolean wrapper.

Option D is incorrect since it will create boolean wrapper of true.

We can use following constructor of the Boolean class to create a Boolean by passing string as parameter.

public Boolean(String s)

Allocates a Boolean object representing the value true if the string argument is not null and is equal, ignoring case, to the string "true". Otherwise, allocate a Boolean object representing the value false. Examples:

new Boolean("True") produces a Boolean object that represents true.

new Boolean("yes") produces a Boolean object that represents false.

As explained above option C will create a Boolean wrapper false.

REFERENCE : https://docs.oracle.com/javase/7/docs/api/java/lang/Boolean.html

The correct answer is: Boolean b3 = new Boolean("T");`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What is the output?',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: '0.0'
            },
            {
                id: 'B',
                markdown: '0.25'
            },
            {
                id: 'C',
                markdown: 'An Exception.'
            },
            {
                id: 'D',
                markdown: 'Compilation fails.'
            }
        ],
        codeString: `class Whiz{
                static Integer i;
                public static void main(String args[]){
                                Double j = 0.25;
                                Double z = j +i;
                                System.out.print(z);
                }
}`,
        answerExplanation: `Option C is the correct answer.

Option C is correct since the code throws a NullPointer Exception. The Integer defined at line 2 is not initialized so at line 5 trying to use is it result a null pointer exception.

REFERENCE  : https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html

The correct answer is: An Exception.`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'You read the following statement in a Java program that compiles and executes.',
        prompt: 'What observation can you make out here for sure?',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: 'speed must be a double.'
            },
            {
                id: 'B',
                markdown: 'drive must be a method.'
            },
            {
                id: 'C',
                markdown: 'drive must be the name of an instance field.'
            },
            {
                id: 'D',
                markdown: 'car must be the name of a class.'
            },
            {
                id: 'E',
                markdown: 'car must be a method.'
            },
        ],
        codeString: `car.drive(speed);`,
        answerExplanation: `Option B is the correct answer.

According to the given statement, we are invoking a method on a object via reference, here the object reference is the car, but class can have any name so only the option B is correct.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/javaOO/usingobject.html

The correct answer is: drive must be a method.`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'What is garbage collection in the context of Java?',
        prompt: '',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: 'The operating system periodically deletes all of the java files available on the system.'
            },
            {
                id: 'B',
                markdown: 'Any package imported in a program and not used is automatically deleted.'
            },
            {
                id: 'C',
                markdown: 'The JVM checks the output of any Java program and deletes anything that doesn\'t make sense.'
            },
            {
                id: 'D',
                markdown: 'When all references to an object are gone, the memory used by the object is automatically reclaimed.'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option D is the correct answer.

Option D is correct since when there is no active references to an object that object is eligiable for the GC to be collected. But we can't predict the exact time that would happen as it is decided by the GC.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: When all references to an object are gone, the memory used by the object is automatically reclaimed.`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What will be the result?',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: '21'
            },
            {
                id: 'B',
                markdown: '22'
            },
            {
                id: 'C',
                markdown: 'Compilation fails due to an error on line 4'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to an error on line 6'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to multiple errors'
            },
        ],
        codeString: `public class Whiz{
                public static void main(String[] args){   
                                short s = 10;
                                s += 10;
                                s++;
                                s = s+1;
                                System.out.println(s);
                }
}`,
        answerExplanation: `Option D is the correct answer.

The code fails to compile due to line 6. At line 6 trying to add integer value to a short value will result a integer since in java addition of integers result integer in default so option D is correct.

Increment operator and assignment operator will not result any compilation error since then there will be implicitly casting.

REFERENCE                         

https://docs.oracle.com/javase/specs/jls/se8/html/jls-5.html#jls-5.6.2
The correct answer is: Compilation fails due to an error on line 6`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What will be the result?',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: '5'
            },
            {
                id: 'B',
                markdown: '10'
            },
            {
                id: 'C',
                markdown: 'An exception will be thrown at runtime'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to an error on line 6'
            },
            {
                id: 'E',
                markdown: 'Compilation fails due to multiple errors'
            },
        ],
        codeString: `class Whiz {
    int j = 10;
    public static void main(String args[]) {
        int j;
        if (new Whiz().go(10)) j = 5;
        System.out.print(j);
    }
    boolean go(int y) {
        if (y > 5) return true;
        else return false;
    }
}`,
        answerExplanation: `Option D is the correct answer.

Option D is correct as local variables must be initialized before use them, here we has used if block to initialize value for variable “j”. When the compile time compiler sees that initialization might not happen so produce compile time error. 

Option A, B and C are incorrect as code fails to compile.

REFERENCE   : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

The correct answer is: Compilation fails due to an error on line 6`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following set contains only primitive literals? ',
        prompt: '',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: '1, ‘c’, “a”'
            },
            {
                id: 'B',
                markdown: '1, 1.5f, True'
            },
            {
                id: 'C',
                markdown: '‘BF’, 10, “Sure”'
            },
            {
                id: 'D',
                markdown: '1.2D, 1f, ‘c’'
            },
            {
                id: 'E',
                markdown: 'None of these'
            },
        ],
        codeString: ``,
        answerExplanation: `Option D is the correct answer.

Option D is correct since all are primitive literals, they are double, float and char.

Option A is incorrect as “a” is a String literal.

Option B is incorrect as True is incorrect literal is should be true.

Option C is incorrect as ‘BF’ is illegal; char literal can only has one letter.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

The correct answer is: 1.2D, 1f, ‘c’`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Consider following three statements.',
        prompt: 'Which is true?',
        correctAnswerId: 'B',
        options: [
            {
                id: 'A',
                markdown: 'Only II'
            },
            {
                id: 'B',
                markdown: 'Only III'
            },
            {
                id: 'C',
                markdown: 'Only I and II'
            },
            {
                id: 'D',
                markdown: 'Only II and III'
            },
            {
                id: 'E',
                markdown: 'None'
            },
        ],
        codeString: `                    I.            Reference variables can’t be declared as static.
                  II.            Reference variables haven’t got default values
                III.            String variables are examples of reference variables.
`,
        answerExplanation: `Option B is the correct answer.

Statement I is incorrect since it is legal to declare static reference variables, static String class variable is a simple example for this.

Statement II is incorrect as instance and class reference variables have a default value, it is null.

Statement III is correct as Strings are objects so String variables are object reference variables.

Option B is correct as only the statement III is correct.

REFERENCE  : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html

The correct answer is: Only III`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'Which of the following inserted at line 4, will produce compile time error?',
        correctAnswerId: 'D',
        options: [
            {
                id: 'A',
                markdown: 'System.out.print(ab.x);'
            },
            {
                id: 'B',
                markdown: 'System.out.print(B.j);'
            },
            {
                id: 'C',
                markdown: 'System.out.print(ab.j);'
            },
            {
                id: 'D',
                markdown: 'System.out.print(A.x);'
            },
            {
                id: 'E',
                markdown: 'None'
            },
        ],
        codeString: `class Whiz {
    public static void main(String args[]) {
        A ab = new B();
        //insert here
    }
}
class A {
    protected int x = 10;
    static int j = 21;
}

class B extends A {}`,
        answerExplanation: `Option D is the correct answer.

Option D is correct since it is illegal to access instance variables using class name, to access them we have to access it through valid object reference. So this will cause a compile time error.

Option A is incorrect since using the object reference we can access instance variables.

Option B is incorrect since we can access static variables using class name. Here we have accessed variable “j” because class B inherits it, there is no problem class B for accessing it.

Option C is incorrect as we can also access static variables using object reference but it is not appropriate.

REFERENCE : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

                                                http://docs.oracle.com/javase/tutorial/java/javaOO/usingobject.html

The correct answer is: System.out.print(A.x);`
    },
    {
        questionComplexityIndex: 0,
        explanation: '',
        prompt: 'What will be the result?',
        correctAnswerId: 'C',
        options: [
            {
                id: 'A',
                markdown: 'Value: 10'
            },
            {
                id: 'B',
                markdown: 'Whiz : 10'
            },
            {
                id: 'C',
                markdown: 'Compilation fails due to an error on line 3'
            },
            {
                id: 'D',
                markdown: 'Compilation fails due to multiple errors'
            },
            {
                id: 'E',
                markdown: 'An exception will be thrown at runtime'
            },
        ],
        codeString: `class Whiz implements A {
    public static void main(String args[]) {
        s = "Whiz : ";
        System.out.print(s);
        System.out.print(A.x);
    }
}

interface A {
    static int x = 10;
    String s = "Value: ";
}`,
        answerExplanation: `Option C is the correct answer.

The interface variables are implicitly final so at line 3, trying to modify the value of variable ‘s” cause a compile time error. Therefore option C is correct.

Options A, B and E are incorrect as code fails to compile.

Option D is incorrect since there are no other reasons for compile time errors.

REFERNCE                           : http://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html

                                                http://docs.oracle.com/javase/tutorial/java/javaOO/usingobject.html

The correct answer is: Compilation fails due to an error on line 3`
    },
    {
        questionComplexityIndex: 0,
        explanation: 'Which of the following will covert string to a Character wrapper?',
        prompt: '',
        correctAnswerId: 'E',
        options: [
            {
                id: 'A',
                markdown: 'new Character(“C”);'
            },
            {
                id: 'B',
                markdown: 'Character.valueof(“C”);'
            },
            {
                id: 'C',
                markdown: 'Character.of(“C”);'
            },
            {
                id: 'D',
                markdown: 'Character.decode(“C”);'
            },
            {
                id: 'E',
                markdown: 'None'
            },
        ],
        codeString: ``,
        answerExplanation: `Option E is the correct answer.

Option A is incorrect as the Character has one constructor which takes char the parameter.

Wrapper class Character has one static method that can return new Character object.

static Character valueOf(char c)

Returns a Character instance representing the specified char value.

So option B is incorrect. Other options are incorrect since there are no such methods.

REFERENCE        : https://docs.oracle.com/javase/tutorial/java/data/characters.html

 

The correct answer is: None of above`
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