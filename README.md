## Ecommerce with GitHub Actions 

Capstone project: Ecommerce application for an Ecommerce platform 

Project Task 
1. Create a New GitHub repository named `Ecommerce-platform-GHA`

![](./img/1.%20New%20repository.png)

Created 2 directories `api` for backend and `webapp` for frontend

![](./img/2.%20clone%20repository.png)
![](./img/3.%20api%20and%20webapp%20directory.png)

2. Initialize the gitHub repository 
![](./img/4.%20Github%20workflows%20file.png)

![](./img/5.%20creating%20workflow%20file%20new.png)

3. Backend API SETUP


`npm -y` 

creating a node js / Express that handles bacic ecommerce operations. 
![](./img/6.%20create%20a%20node%20js%20and%20express.png)

Implement Unit Test 
npm install  -save-dev jest supertest 

![](./img/7.%20Testing.png)

Index js with testing 


![](./img/8.%20index%20js%20with%20testing.png)

![](./img/9.%20test%20folder%20created.png)

![](./img/10.%20test%20details.png)

![](./img/11.%20test%20passed.png)


4. Frontend Application Setup 

`Npm create-react app .`

![](./img/12.%20Web%20app%20front%20end.png)


`npm start`

![](./img/13.%20npm%20start.png)


![](./img/14.%20react%20web%20app%20front.png)


`npm install axios`

![](./img/15.%20axios.png)

App JS Content 

![](./img/16.%20app%20js%20conent.png)


Api Index js 

![](./img/17.%20api%20index%20js.png)


Ecommerce Api 

![](./img/18.%20ecommerce%20api.png)


Ecommerce Api Login 

![](./img/18.%20ecommerce%20api%20login.png)

![](./img/19.%20node%20index%20js.png)

![](./img/19.%20npm%20start%20for%20frontend.png)



## Pushed to repository 

![](./img/20.%20push%20to%20github%20repository.png)

![](./img/20.%20push%20to%20github%20repository%202.png)


![](./img/20.%20push%20to%20github%20repository%203.png)


5. Continous Integration Workflow 

## Created backend and frontend yml file

![](./img/21.%20Created%20backend%20and%20frontend%20yml.png)

![](./img/21.%20Created%20backend%20and%20frontend%20yml%20pulled%20locally.png)

![](./img/21.%20local%20backend%20and%20frontend.png)


![](./img/21.%20edited%20backend%20workflow.png)

![](./img/21.%20edited%20frontend%20workflow.png)


Pushed to repository 

![](./img/22.%20git%20add%20back%20and%20frontend.png)

![](./img/22.%20git%20commit%20CI.png)

6. Docker Integration 

## Create Dockerfile for backend and frontend 

![](./img/23.%20Dockerfile%20created.png)


![](./img/)

Modify Github workflow to build Docker Image

![](./img/27.%20add%20docker%20build%20to%20backend%20CI.png)


![](./img/27.%20add%20docker%20build%20to%20frontend%20CI.png)


Adding and pushing Dockerfile to Github repository 




![](./img/31.%20deployment%20workflow%20added%20to%20backend.png)


![](./img/31.%20deployment%20workflow%20added%20to%20frontend.png)

7. Deploy to cloud 
AWS the cloud platform for deployment 

Instance created on AWS and running 

![](./img/32.%20Instance%20running.png)

Ports Allowed for Application 
![](./img/32.%20ports%20allowed.png)

SSH to instance 
![](./img/32.%20ssh%20to%20instance.png)

Configured GitHub Actions to Deploy to AWS 

![](./img/34.%20deployment%20workflow%20added%20to%20backend.png)

![](./img/34.%20deployment%20workflow%20added%20to%20frontend.png)

GitHub Secrets added to store and access cloud credentials 

![](./img/33.%20Github%20secrets.png)


8. Continous Deployment 

Configure workflow to deploy updates automatically to the cloud when chnages are pushed to the main branch.

![](./img/35.%20added%20on%20push.png)

![](./img/35.%20added%20on%20push%20frontend.png)

Changes made and push done 

![](./img/36.%20file%20changes%20pushed.png)


Success on GitHub for Backend 

![](./img/37.%20backend%20success%20gh.png)

![](./img/37.%20backend%20success.png)

Success on GitHub for Frontend 

![](./img/37.%20frontend%20success%20gh.png)

![](./img/37.%20frontend%20success.png)

Docker Container Test on AWS Instance 

`docker ps ` running on the AWS instance both backend and frontend 

![](./img/38.%20docker%20ps%20result.png)


![](./img/38.%20using%20IP%20address%20backend.png)

![](./img/38.%20using%20IP%20address%20frontend.png)

![](./img/)