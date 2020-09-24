# TwentyThree-Assignment
## 1.	INTRODUCTION

      Trello is an online tool for managing projects and personal tasks.
      The purpose of this test case is to test and validate the functionality of the Trello’s Administration features.

## 2.	SCOPE
      
      To validate all known functions of the Trello’s administration features.

## 3.	REQUIREMENTS

      System requirement:
      
      •	MacOS 10.9 and above (64-bit only)
      
      •	Windows 7 and above
      
      •	Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
      
      Software requirement:
        
        VScode 

        Node JS
        Node.js 10 or 12 and above

        Browser - Google Chrome and FireFox


## 4.	INSTALLATION

       // Go to project folder 
       $cd /your/project/path
       
       Run npm init   // check package.json file in the root of your project 
       
       $npm install cypress –save-dev
       
       // Open the Cypress tool - 3 ways to open 
       
        $ ./node_modules/.bin/cypress open   or
        
        $( npm bin)/cypress open             or
        
        $npx cypress open
        
        
## 5.   ENVIRONMENT SETUP VERIFICATION

        VScode - You can see all new folders under cypress folder

![Screen Shot 2020-09-21 at 11 17 49 AM](https://user-images.githubusercontent.com/47104798/93755437-94d04500-fc03-11ea-8cc8-5a461c88f0f7.png)
         
    
        Cypress Tool - you can only see the intergration folder where we create all test cases
       
 ![Screen Shot 2020-09-21 at 11 19 52 AM](https://user-images.githubusercontent.com/47104798/93755455-9ef24380-fc03-11ea-94c8-4e0b01a6fe8f.png)  
 

        Browser - click on any test spec.js file to run in chrome / firefox / Edge
        
 ![Screen Shot 2020-09-21 at 11 20 11 AM](https://user-images.githubusercontent.com/47104798/93755471-a4e82480-fc03-11ea-8d5d-1e6fe24db7c5.png)
 

## 6.    PROJECT SETUP 

      1. Clone the project using git clone https://github.com/Swapna-Sahu/TwentyThree-Assignment.git
      
      2. Open the folder from the VScode
      
      3. Open cypress tool using npx cypress open or any of the above command
      
      4. Project Structure will be : 

![Screen Shot 2020-09-23 at 11 06 03 AM](https://user-images.githubusercontent.com/47104798/93991792-f66feb00-fd8c-11ea-8b95-8fc44b391f67.png)

      5. Click on any of the spec.js file under intergration folder. Automatically your prefered browser will open and run the test case. And left side of the            
         cypress tool will show the test case success/fail.
      

## 7.    NOTES FOR THE PROJECT


####   1. Login and Register request is having input validation test cases and result can be seen in the cypress tool. 
      
         Even though a successful register can not see the home screen because Cypress detected a cross origin error.
         
         A cross origin error happens when your application navigates to a new URL which does not match the origin policy above.
         
         Cypress does not allow you to navigate to a different origin URL within a single test.
         
         
####    2. Card,Comment and Attachment test cases are done using REST API testing. I have given my api key and token to it to create, edit or delete calls.
      
         You can see the success result in left side of cypress tool. 
         
         There you can pin the API call to console and success response will be in console of the browser. 
         
         Below is the example for create card :
         
        
![Screen Shot 2020-09-23 at 11 53 27 AM](https://user-images.githubusercontent.com/47104798/93997307-8c0e7900-fd93-11ea-90ee-392a264ee7f1.png)     


####   3. If you want run all the REST API test cases in your trello then below things to do .

            - Get your API key  :   https://trello.com/app-key
            - Generate token    :   There will be a link for generate token in above link
            - Get idList        :   It is column id of the board
            - Get id            :   card id (delete or edit)
            - Get idAction      :   id for the comment
            - Replace idList, id and idAction value in the test cases.
            - Run the cypress and spec.js 
            - Check the result in your trello board
            
######      How to get these id from your board?
            
            - Open any of your trello card
            - Copy the card link 
            - Paste it in another window with extension of .json
            - Find idList,id and idAction in that json format.
            
####   4. Responsive screen shot is added for Ipad and iPhone.

            Using - 
            viewport() - We can see the responsive in different platform
            screenshot() - It is only done for the login
            
            
            
            
            

