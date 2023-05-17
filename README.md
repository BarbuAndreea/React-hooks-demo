Documentation
-React hooks-


Introduction
React Hooks are functions that allow you to use React state and other React features without writing a class. They were introduced in React 16.8 and provide a simpler and more flexible way to reuse functionality across your React components.
Hooks provide a way to reuse stateful logic without changing the component hierarchy. They are a way to extract component logic into reusable functions. React hooks can be used in both functional and class components.

List of React Hooks
The following is a list of React Hooks that are commonly used:
1.	useState: useState is a state hook that provides a way to manage state in functional components.
2.	useEffect: useEffect is an effect hook that provides a way to manage side-effects in functional components.
3.	useContext: useContext is a hook that provides a way to share data between components.
4.	useReducer: useReducer is a hook that provides a way to manage complex state transitions.
5.	useCallback: useCallback is a hook that provides a way to memoize functions to prevent unnecessary re-renders.
6.	useMemo: useMemo is a hook that provides a way to memoize values to prevent unnecessary re-computations.
7.	useRef: useRef is a hook that provides a way to store mutable values across re-renders.
8.	useLayoutEffect: useLayoutEffect is an effect hook that provides a way to run side-effects after rendering but before painting.
9.	useImperativeHandle: useImperativeHandle is a hook that provides a way to customize the instance value that is exposed to parent components when using forwardRef.
10.	useDebugValue: useDebugValue is a hook that provides a way to display a label for custom hooks in the React DevTools.

Usage and Syntax - the syntax for using React Hooks is straightforward. To use a hook, you simply import it and call it inside a functional component.

Examples:
1.	useState
useState is a React hook that allows you to add state to a functional component. The useState hook returns an array containing two values: the current state value and a function to update that value.  
In the example, useState is used to manage an object called name which contains two properties: firstName and lastName. The initial value of name is an object with empty strings for both properties.
When the input fields change, the setName function is called to update the state of the name object. setName is passed a new object that is created with either the new value of firstName or lastName property, but leaves the other property unchanged.
This works because useState updates state by replacing the entire state object with a new one. When we pass in a new object with only one property updated, the other property remains the same.
Finally, the component renders the firstName and lastName values from the name object along with the entire name object as a JSON string.
Overall, useState is a very powerful hook that allows us to add state to functional components and manage it in a very intuitive way.

2.	useEffect
The useEffect hook in React is used to handle side effects of a component. Side effects include anything that happens as a result of rendering a component, such as fetching data from an API, updating the document title, or setting up event listeners.
 
In this example, the useEffect hook is used in two ways. The first useEffect hook is called whenever the counter2 state changes. This hook logs the message "counter" to the console. The second useEffect hook is called whenever the counter state changes. This hook logs the message "The number of clicks: " followed by the current value of the counter state.
The useEffect hook takes two arguments: a callback function and an array of dependencies. The callback function is executed after the component is rendered and every time one of the dependencies changes. The dependencies are passed as an array to the second argument of useEffect. If the dependencies array is empty, the callback function is only executed once, after the initial render of the component.
In the given example, the first useEffect hook has counter2 as its dependency, so it will be called every time the counter2 state changes. The second useEffect hook has counter as its dependency, so it will be called every time the counter state changes.
In summary, the useEffect hook in React is a powerful tool for handling side effects in components. By specifying dependencies, you can control when the callback function is executed and optimize the performance of your app.

3.	useContext
useContext is a React Hook that allows you to consume context values created by the React.createContext() function. Context provides a way to share values like data or functions between components without having to pass them through each level of the component tree.
 
In this example, we have a AppContext object created using React.createContext() which has a default value for the username state and a function setUsername to update it. This context object is then passed to the AppContext.Provider component which wraps the Routes component in the App component. This makes the AppContext object available to all the child components of the Routes component.
 
The Profile component uses useContext(AppContext) to consume the username state value from the AppContext object. By using useContext, the Profile component can directly access the username state value without having to receive it through props or passing it down to child components.
 
The ChangeProfile component is also able to access the setUsername function from the AppContext object using useContext. When the ChangeProfile component is rendered, it displays an input field and a button. When the button is clicked, it calls the setUsername function with the newUsername state value which was entered in the input field.
In summary, useContext is a powerful React Hook that allows you to consume values from a context object, which can be passed down to any level of the component tree. This makes it easier to manage state and pass data or functions between components without having to rely on props or callbacks.

4.	useReducer
The useReducer hook is another state management solution in React that allows you to manage complex state logic in your application. It accepts a reducer function and an initial state as arguments, and returns a state object and a dispatch function to update that state.
 
In the given example, initialState is set to 0, and a reducer function is defined that takes in the current state and an action and returns a new state based on the action. The action is a string that determines the type of operation to perform on the state - increment, decrement, or reset.
Inside the UseReducerExample component, the useReducer hook is called with the reducer function and initialState. This returns an array with two elements - count and dispatch. count is the current state value, and dispatch is a function that is used to update the state. When dispatch is called with an action, it passes the action to the reducer function, which updates the state accordingly.
The return statement in the component renders a div that displays the current count value and three buttons that use the dispatch function to update the state when clicked. The first button increments the count, the second decrements it, and the third resets it back to the initial state value.
Overall, the useReducer hook allows you to manage state in a more organized and scalable way, especially when dealing with complex state logic.

5.	useCallback
The useCallback hook is used to memoize a function and optimize the performance of functional components. It returns a memoized version of the function that only changes when one of its dependencies has changed. This can be useful when passing callbacks to child components that rely on state or props of the parent component.
In the following example, the incrementAge and incrementSalary functions are memoized using useCallback to prevent unnecessary re-renders of the Button components.
 
The Button and Count components are also memoized using React.memo to prevent unnecessary re-renders of these components when their props have not changed.

6.	useMemo
The useMemo hook in React is used to optimize the performance of a component by memoizing the result of a function or computation, so that it only runs again when the dependencies change. In other words, it helps in avoiding unnecessary re-renders of a component when its props or state haven't changed.
 
In the given example, the useMemo hook is used to determine whether counterOne is even or odd. The function inside the useMemo hook will only run again if counterOne changes, otherwise it will return the memoized value of isEven. This can be useful when performing expensive calculations or data processing that doesn't need to be run every time the component re-renders.
In the example, the isEven variable is set to the memoized value of counterOne % 2 === 0, which is a boolean value indicating whether counterOne is even or odd. This value is then used to conditionally render "Even" or "Odd" next to the "Count One" button. By using useMemo, the isEven value is only computed when counterOne changes, which can help to optimize performance.
It's important to note that useMemo should be used judiciously, since it can add complexity to the code and may not always result in significant performance improvements. It's generally recommended to use it for expensive calculations or data processing, or when the result of a function or computation is used as a dependency in other parts of the component.
7.	useRef
The useRef hook in React provides a way to create a mutable reference that can persist between re-renders of a component. It allows us to keep a reference to a value or an element in the component without causing a re-render when the reference changes.
The useRef hook takes an initial value as an argument and returns a mutable ref object that has a .current property. This property can be assigned a value and read later, and the value will persist between re-renders of the component.
 
In the example, the useRef hook is used to store a reference to the interval ID returned by setInterval. The setInterval function is called in the useEffect hook to update the timer state every second. The interValRef variable holds a reference to the interval ID, which can be cleared later using clearInterval when the "Clear Timer" button is clicked.
By using the useRef hook in this way, we can maintain a reference to the interval ID across re-renders of the component, which allows us to clear the interval when the component is unmounted or the "Clear Timer" button is clicked.
In addition to storing references to DOM elements or interval IDs, the useRef hook can also be used to store any mutable value that needs to persist between re-renders of a component. It's important to note that changing the value of a useRef object won't cause a re-render of the component, so it's useful for storing values that don't need to trigger a re-render.

Conclusion
React Hooks are a powerful feature of React that simplify the process of creating reusable code. They provide a way to extract logic from components and reuse it across your application. With the knowledge of React Hooks, you can build more maintainable and scalable applications.
