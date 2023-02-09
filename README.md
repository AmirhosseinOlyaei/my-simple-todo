- ## Project 4: My Simple Todo  

- **Goal**  
- **Using the UI below as an inspiration, build your own todo app.**  
    1. The app allows your user to add a list of things they want to do
	2. The app allows them to delete the items (Note: when the delete an item, it removes it from the todo list)


![](https://i.imgur.com/aqmMEjA.png)  
**How to Submit Your Work**  
    
**1. Write and approve your Github issues (a project plan)**  
2. Commit your code and project to GitHub  
3. Deploy your project to Vercel (this should happen with commits you do to GitHub)  
4. Submit the following to the appropriate section on Moodle  
- Your public GitHub link (test that you can visit this link in an incognito window)  
- Your public Vercel link (test that you can visit this link in an incognito window)  

**Bootstrapping `Project 4 - My Simple Todo`**
- [x] Bootstrapping TailwindCSS 
``` zsh
*Create a repository `my-github-login`

cd msimbo-projects
git clone git@github.com:AmirhosseinOlyaei/my-github-login.git

cat >> .gitignore
node_modules
^C

brew install node // https://nodejs.org/en/download/

sudo npm i -g yarn

yarn add -D tailwindcss

npx tailwindcss init
*Replace: `content: ["./src/**/*.{html,js}", "./*.{html,js}"],` in tailwind.config.js

cat >> tailwind.css
/* tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
^C

npx tailwindcss -i ./tailwind.css -o ./styles.css --watch

*Add `<link href="styles.css" rel="stylesheet">` in index.html

git add .
git commit -m "fixes # - bootstrapping tailwindcss"
git push -u origin
```

- Project 4: My Simple Todo  
	- **Front-end work for Project 4: My Simple ToDo**  
		- **Description**  
			- Completing tasks utilizing HTML, CSS and JavaScript to make sure ToDo app works smoothly and as designed.  
		- **Goals**  
			- [x] The app allows your user to add a list of things they want to do  
			- [x] The app allows them to delete the items from the todo list  
		- **Tasks** [Project 4: My Simple ToDo]  
			- [x] Bootstrapping TailwindCSS and GitHub  
			- [ ] Design ToDo app user interface in HTML and TailwindCSS  
				- *HTML*  
					- create a form to get info from users  
						- [ ] an input:textnew-list  
			- [ ] Implement functionality in JS with DOM, Array, callbacks, Object literals, and Loops  
				- [ ] when user adds a new list, they see the list in the app:  
					- List 1  
					- List 2  
				- [ ] user can remove a list from the lists  
				- [x] when user adds an item to each list, item shows on that list  
					- List 2  
						- Item 1 
						- Item 2  
				- [x] when user removes an item from each list, that list shows the rest of the items.  
					- List 2  
						- Item 2  
				- [ ] user can assign a person to each item in the list  
				- [ ] if user checks an item, cross a line on the item name.  
					- List 2  
						- ~~Item 1~~  
						- Item 2  
			- [x] Integrate with back-end  
				- Deploy to Vercel  