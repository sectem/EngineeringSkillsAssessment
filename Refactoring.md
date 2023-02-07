# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
####Renaming Variable
Previously variable name 'event' is creating confusion because at first impression it was looking like its like a
enentHandler. So renamed the variable name to 'object' clear out that confusion.

####Added null value check
On line 8: I have addedd !! to make sure the value is there inside the object because of empty object the condition was
processing below code


####Removing extra IF condtion
I removed extra "if (candidate)" condition because candidate was undefined at this point and if it was assigned value
before no need to check it because it will always be undefined

