#Component Types
##Atoms:
Atoms are the basic structure of matter, applied to web atoms are like HTML tags, a label, an input or a button.

##Molecules: 
They are a group of atoms put together with basic fundamentals of a unit. They serve as the basis for the design system. For example, a label, input and button together making a form element.

##Organisms:
 They are blocks of our system, where we can group molecules together to form relatively more complex components, a section of the application.

##Templates:
 They are mostly a group of organisms put together to form a final structure, this is where we begin to see the layout in action.
 
 # Rules
 1. Speaking of components, I believe they should be “dumb” and should not be aware of your application’s business 
 rule and only render what they were asked to do. Don’t use Fetch/Axios, properties that can’t be overridden or anything related to your application inside the component. Inject the dependencies of your project. A very common thing is to use high impact external libraries within components, such as:
 import {Link} from ‘react-router-dom’
 
 2. Avoid this within its components. It may be that you won’t use the sample library above in every project and you will lose component reusability.