export default [{
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a start-up company. They have a two-tier production website. Database servers are spread across multiple Availability Zones and are stateful.\n\nYou have configured Auto Scaling Group for these database servers with a minimum of 2 instances & maximum of 6 instances. During post-peak hours, you observe some data loss. Which feature needs to be configured additionally to avoid future data loss (and copy data before instance termination)?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Modify the cooldown period to complete custom actions before the Instance terminates."
    }, {"id": "B", "markdown": "Add lifecycle hooks to Auto Scaling group."}, {
        "id": "C",
        "markdown": "Customize Termination policy to complete data copy before termination."
    }, {"id": "D", "markdown": "Suspend Terminate process that will avoid data loss."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nExplanation: Adding Lifecycle Hooks to Auto Scaling group puts the instance into wait state before termination. During this wait state, you can perform custom activities to retrieve critical operational data from a stateful instance. Default Wait period is 1 hour.\n\n\n\tOption A is incorrect as the cooldown period will not help to copy data from the instance before termination.\n\tOption C is incorrect as Termination policy is used to specify which instances to terminate first during scale in, configuring termination policy for the Auto Scaling group will not copy data before instance termination.  \n\tOption D is incorrect as Suspending Terminate policy will not prevent data loss but will disrupt other process & prevent scale in.\n\n\nFor more information on lifecycle-hooks, refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html\n\thttps://aws.amazon.com/ec2/autoscaling/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an application running in us-west-2 that requires 6 EC2 Instances running at all times. With 3 Availability Zones in the region viz. us-west-2a, us-west-2b, and us-west-2c, which of the following deployments provides fault tolerance if an Availability Zone in us-west-2 becomes unavailable? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["D", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "2 EC2 Instances in us-west-2a, 2 EC2 Instances in us-west-2b, and 2 EC2 Instances in us-west-2c"
    }, {
        "id": "B",
        "markdown": "3 EC2 Instances in us-west-2a, 3 EC2 Instances in us-west-2b, and no EC2 Instances in us-west-2c"
    }, {
        "id": "C",
        "markdown": "4 EC2 Instances in us-west-2a, 2 EC2 Instances in us-west-2b, and 2 EC2 Instances in us-west-2c"
    }, {
        "id": "D",
        "markdown": "6 EC2 Instances in us-west-2a, 6 EC2 Instances in us-west-2b, and no EC2 Instances in us-west-2c"
    }, {
        "id": "E",
        "markdown": "3 EC2 Instances in us-west-2a, 3 EC2 Instances in us-west-2b, and 3 EC2 Instances in us-west-2c"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D and E\n\nOption D- US West 2a-6 , US West 2b - 6, US West 2c-0\n\n\n\tIf US West 2a goes down we will still have 6 instances running in US West 2b \n\tIf US West 2b goes down we will still have 6 instances running in US West 2a\n\tIf US West 2c goes down we will still have 6 instances running in US West 2a, 6 instances running in US West 2b \n\n\n\nOption E- US West 2a-3 , US West 2b - 3, US West 2c-3\n\n\n\tIf US West 2a goes down we will still have 3 instances running in US West 2b and 3 instances running in US West 2c \n\tIf US West 2b goes down we will still have 3 instances running in US West 2a and 3 instances running in US West 2c \n\tIf US West 2c goes down we will still have 3 instances running in US West 2a and 3 instances running in US West 2b \n\n\nOption A is incorrect because, even if one AZ becomes unavailable, we will only have 4 instances available. This does not meet the specified requirements.\n\nOption B is incorrect because, in the case of either us-west-2a or us-west-2b becoming unavailable, you would only have 3 instances available. This does not meet the specified requirements.\n\nOption C is incorrect because, if us-west-2a becomes unavailable, you would only have 4 instances available. This also does not meet the specified requirements.\n\nFor more information on AWS Regions and Availability Zones, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n\n\n\nNote: \nIn this scenario, we need to have 6 instances running all the time even when 1 AZ is down.\n\nHence options D & E are correct.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application allows a manufacturing site to upload files. Each uploaded 3 GB file is processed to extract metadata, and this process takes a few seconds per file. The frequency at which the uploading happens is unpredictable. For instance, there may be no upload for hours, followed by several files being uploaded concurrently.\n\nWhich architecture will address this workload in the most cost-efficient manner?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use a Kinesis Data Delivery Stream to store the file. Use Lambda for processing."
    }, {
        "id": "B",
        "markdown": "Use an SQS queue to store the file to be accessed by a fleet of EC2 Instances."
    }, {
        "id": "C",
        "markdown": "Store the file in an EBS volume, which can then be accessed by another EC2 Instance for processing."
    }, {
        "id": "D",
        "markdown": "Store the file in an S3 bucket. Use Amazon S3 event notification to invoke a Lambda function for file processing."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nYou can first create a Lambda function with the code to process the file.\n\nThen, you can use an Event Notification from the S3 bucket to invoke the Lambda function whenever a file is uploaded.\n\n \n\nOption A is incorrect as Kinesis is used to collect, process, and analyze real-time data.\n\nOption B is incorrect as the frequency of uploads in the given scenario is quite unpredictable. By default, SQS uses short polling. In this case, it will lead to the cost factor going up since we are getting messages in an unpredictable manner and many times it will be returning empty responses. \n\nFor more information on Amazon S3 event notification, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is migrating an on-premises 10TB MySQL database to AWS. There's a business requirement that the replica lag should be kept under 100 milliseconds. In addition to this requirement, the company expects this database to quadruple in size.\n\nWhich Amazon RDS engine meets the above requirements?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "MySQL"}, {"id": "B", "markdown": "Microsoft SQL Server"}, {
        "id": "C",
        "markdown": "Oracle"
    }, {"id": "D", "markdown": "Amazon Aurora"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nAWS Documentation clarifies that the above requirements are supported by AWS Aurora.\n\nAmazon Aurora (Aurora) is a fully managed, MySQL and PostgreSQL compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring any changes in most of your existing applications.\n\nAll Aurora Replicas return the same data for query results with minimal replica lag—usually, much less than 100 milliseconds after the primary instance has written an update.\n\nThe company expects the database to quadruple in size and the business requirement is that replica lag must be kept under 100 milliseconds.\n\nAurora Cluster can grow up to 64 TB in size and replica lag—is less than 100 milliseconds after the primary instance has written an update.\n\nFor more information on AWS Aurora, please visit the following URL:\n\n\n\thttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "For which of the following scenarios should a Solutions Architect consider using ElasticBeanStalk? (Choose Two)",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "A web application using Amazon RDS"}, {
        "id": "B",
        "markdown": "An Enterprise Data Warehouse"
    }, {"id": "C", "markdown": "A long-running worker process"}, {
        "id": "D",
        "markdown": "Capacity provisioning and load balancing of website"
    }, {"id": "E", "markdown": "A management task run once on nightly basis"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and D\n\nAWS Documentation clearly mentions that the Elastic Beanstalk component can be used to create Web Server environments and Worker environments.\n\nThis following diagram illustrates an example of Elastic Beanstalk architecture for a web server environment tier and shows how the components in that type of environment tier work together. \n\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html\n\n\n\n \n\n\n\tFor more information on AWS Elastic beanstalk Web server environments, please visit the following URLs:https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-webserver.html\n\n\n \n\n\n\tOption B is incorrect. Elastcibeanstalk is used to deploy and manage the applications on AWS. It's not used to store the data. https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html.\n\tFor more information on AWS Elastic beanstalk Worker environments, please visit the following URL:https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-worker.html\n\tOption C is incorrect. Beanstalk does not make sense to use for long-running processes. EC2 instances would be a better fit.\n\tOption D is correct. We can use Elastic Beanstalk to distribute incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones. https://aws.amazon.com/elasticloadbalancing/\n\t\n\t\t \n\t\n\t\n\tOption E is incorrect. When you launch an Elastic Beanstalk environment, you first choose an environment tier. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support an application that handles HTTP requests or an application that pulls tasks from a queue. An application that serves HTTP requests runs in a web server environment. An environment that pulls tasks from an Amazon Simple Queue Service queue runs in a worker environment.\n\t\n\tFurther, when you create an environment, Elastic Beanstalk provisions the resources required to run your application. AWS resources created for an environment include one elastic load balancer (ELB in the diagram), an Auto Scaling group, and one or more Amazon EC2 instances.\n\t\n\tSo, these resources are required to run the application 24/7, not for only at night or day.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application with a 150 GB relational database runs on an EC2 Instance. While the application is used infrequently with small peaks in the morning and evening, which storage type would be the most cost-effective option for the above requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EBS provisioned IOPS SSD"}, {
        "id": "B",
        "markdown": "Amazon EBS Throughput Optimized HDD"
    }, {"id": "C", "markdown": "Amazon EBS General Purpose SSD"}, {"id": "D", "markdown": "Amazon EFS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nSince the database is used infrequently, not throughout the day, and the question requires the MOST cost-effective storage type, the preferred choice would be EBS General Purpose SSD over EBS provisioned IOPS SSD.\n\nThe minimum volume of Throughput Optimized HDD is 500 GB. As per our scenario, we need 150 GB only. Hence, option C: Amazon EBS General Purpose SSD, would be the best choice for a cost-effective storage solution. \n\n\n\tFor more information on AWS EBS Volumes, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html\n\t\n\t\n\n\n\nNote:\n\nSSD-backed volumes are optimized for transactional workloads involving frequent read/write operations with small I/O size, where the dominant performance attribute is IOPS. The question is focusing on a relational DB where we will give importance to Input/output operations per second. Hence, EBS General Purpose SSD seems to be a good option in this case. Since the question does not mention any mission-critical low-latency requirement, IOPS is not required.\n\nHDD-backed volumes are optimized for large streaming workloads where throughput (measured in MiB/s) is a better performance measure than IOPS.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS consultant for a start-up company. They have developed a web application for their employees to share files with external vendors securely. They created an AutoScaling group for the web servers which requires two m4.large EC2 instances running at all times, scaling up to a maximum of twelve instances. Post-deployment of the application, a huge rise in cost was observed. Due to a limited budget, the CTO has requested your advice to optimize the usage of instances in the Auto Scaling groups. What would you suggest to reduce costs without any adverse impact on the performance?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create an Auto Scaling group with t2. micro On-Demand instances."}, {
        "id": "B",
        "markdown": "Create an Auto Scaling group with a mix of On-Demand & Spot Instance. Select the On-Demand base as zero. Above On-Demand base, select 100% of On-Demand instance & 0% of Spot Instance."
    }, {"id": "C", "markdown": "Create an Auto Scaling group with all Spot Instance."}, {
        "id": "D",
        "markdown": "Create an Auto Scaling group with a mix of On-Demand & Spot Instance. Select the On-Demand base as 2. Above On-Demand base, select 20% of On-Demand instance & 80% of Spot Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAuto Scaling group supports a mix of On-Demand & Spot instance which help to design a cost-optimized solution without any impact on the performance. You can choose the percentage of On-Demand & Spot instance based on the application requirements. With Option D, Auto Scaling group will have 2 instances initially as the On-Demand instances while remaining instances will be launched in a ratio of 20 % On-Demand instance & 80% Spot Instance.\n\n\n\tOption A is incorrect. With t2. micro, there would be a reduction in cost, but it will impact the performance of the application.\n\tOption B is incorrect as there would not be any cost reduction with all On-Demand instances.\n\tOption C is incorrect. Although this will reduce cost, all spot instance in an auto-scaling group may cause inconsistencies in the application & lead to poor performance.\n\n\nFor more information on Auto Scaling with multiple Instance types & purchase options, refer to the following URLs:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-ec2-auto-scaling-groups-with-multiple-instance-types-purchase-options/\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html#asg-purchase-options\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a start-up company. The company has a two-tier production website on AWS with web servers in front end & database servers in the back end. A third-party firm has been looking after the operations of these database servers. They need to access these database servers in private subnets on SSH port. As per the standard operating procedure provided by the Security team, all access to these servers should be over a secure layer. What will be the best solution to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deploy Bastion hosts in Private Subnet"}, {
        "id": "B",
        "markdown": "Deploy NAT Instance in Private Subnet"
    }, {"id": "C", "markdown": "Deploy NAT Instance in Public Subnet"}, {
        "id": "D",
        "markdown": "Deploy Bastion hosts in Public Subnet"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nExternal users will be unable to access the instance in private subnets directly. To provide such access, we need to deploy Bastion hosts in public subnets. In case of the above requirement, third-party users will initiate a connection to Bastion hosts in public subnets & from there, they will access SSH connection to database servers in private subnets.\n\n\n\tOption A is incorrect as Bastion hosts need to be in Public subnets, & not in Private subnets, as third-party users will be accessing these servers from the internet.\n\tOption B is incorrect as NAT instance is used to provide internet traffic to hosts in private subnets. Users from the internet will not be able to do SSH connections to hosts in private subnets using NAT instance. NAT instance is always present in Public subnets.\n\tOption C is incorrect as NAT instance is used to provide internet traffic to hosts in private subnets. Users from the internet will not be able to do SSH connections to hosts in private subnets using NAT instance.\n\n\nFor more information on bastion instance, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/quickstart/latest/linux-bastion/architecture.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An AWS Solutions Architect who is designing a solution to store and archive corporate documents has determined Amazon Glacier as the right choice. \n\nAn important requirement is that the data must be delivered within 10 minutes of a retrieval request.\n\nWhich feature in Amazon Glacier could help to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Vault Lock"}, {"id": "B", "markdown": "Expedited retrieval"}, {
        "id": "C",
        "markdown": "Bulk retrieval"
    }, {"id": "D", "markdown": "Standard retrieval"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nExpedited retrievals allow you to access data in 1–5 minutes for a flat rate of $0.03 per GB retrieved. Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required.\n\n\n\n\nThe Vault Lock and Standard Retrieval are standard with 3-5 hours retrieval time while Bulk retrievals which can be considered the cheapest option have 5-12 hours retrieval time. \n\nFor more information on AWS Glacier Retrieval, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive-two-steps.html\n\n\n \n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a start-up company that develops mobile gaming applications using AWS resources. For creating AWS resources, the project team is using CloudFormation Templates. The Project Team is concerned about the changes made in EC2 instance properties by the Operations Team, apart from parameters specified in CloudFormation Templates. To observe changes in AWS EC2 instance, you advise using CloudFormation Drift Detection. After Drift detection, when you check drift status for all AWS EC2 instance, drift for certain property values having default values for resource properties is not displayed. What would you do to include these resources properties to be captured in CloudFormation Drift Detection?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Run CloudFormation Drift Detection on individual stack resources instead of entire CloudFormation stack."
    }, {
        "id": "B",
        "markdown": "Explicitly set the property value, which can be the same as the default value."
    }, {
        "id": "C",
        "markdown": "Manually check these resources as this is not supported in CloudFormation Drift Detection."
    }, {"id": "D", "markdown": "Assign Read permission to CloudFormation Drift Detection to determine drift."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS CloudFormation Drift Detection can be used to detect changes made to AWS resources outside the CloudFormation Templates. AWS CloudFormation Drift Detection only checks property values that are explicitly set by stack templates or by specifying template parameters. It does not determine drift for property values that are set by default. To determine drift for these resources, you can explicitly set property values which can be the same as that of the default value.\n\n\n\t Option A is incorrect. If property values are assigned explicitly to these properties, running AWS CloudFormation Drift Detection would be detected in both individuals as well as the entire CloudFormation Stack.\n\tOption C is incorrect as AWS EC2 instance is supported by CloudFormation Drift Detection.\n\tOption D is incorrect. Since for all other resources, CloudFormation Drift Detection has already determined drift, there is no other read permission to be granted further.\n\n\nFor more information on CloudFormation Drift Detection, refer to the following URL:\n\nhttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "While reviewing the Auto Scaling events for your application, you notice that your application is scaling up and down multiple times in the same hour.\n\nWhat changes would you suggest in order to optimize costs while preserving elasticity? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["C", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Modify the Auto Scaling group termination policy to terminate the older instance first."
    }, {
        "id": "B",
        "markdown": "Modify the Auto Scaling group termination policy to terminate the newest instance first."
    }, {"id": "C", "markdown": "Modify the Auto Scaling group cool down timers."}, {
        "id": "D",
        "markdown": "Modify the Auto Scaling group to use Scheduled Scaling actions."
    }, {"id": "E", "markdown": "Modify the CloudWatch alarm period that triggers your Auto Scaling scale down policy"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C and E\n\nHere, not enough time is being given for the scaling activity to take effect and for the entire infrastructure to stabilize after the scaling activity. This can be maintained by increasing the Auto Scaling group CoolDown timers.\n\n\n\tFor more information on Auto Scaling CoolDown, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html\n\t\n\t\n\n\nYou will also have to define the right threshold for the CloudWatch alarm for triggering the scale down policy.\n\n\n\tFor more information on Auto Scaling Dynamic Scaling, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html\n\t\n\t\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company hosts a popular web application that connects to an Amazon RDS MySQL DB instance running in a default VPC private subnet created with default ACL settings. The web servers must be accessible only to customers on an SSL connection and the database must only be accessible to web servers in a public subnet. Which solution would meet these requirements without impacting other applications? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a network ACL on the Web Server's subnets, allow HTTPS port 443 inbound and specify the source as 0.0.0.0/0"
    }, {
        "id": "B",
        "markdown": "Create a Web Server security group that allows HTTPS port 443 inbound traffic from anywhere (0.0.0.0/0) and apply it to the Web Servers."
    }, {
        "id": "C",
        "markdown": "Create a DB Server security group that allows MySQL port 3306 inbound and specify the source as the Web Server security group."
    }, {
        "id": "D",
        "markdown": "Create a network ACL on the DB subnet, allow MySQL port 3306 inbound for Web Servers and deny all outbound traffic."
    }, {
        "id": "E",
        "markdown": "Create a DB Server security group that allows HTTPS port 443 inbound and specify the source as a Web Server security group."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nThis sort of setup is explained in the AWS documentation.\n\n1) To ensure that traffic can flow into your web server from anywhere on secure traffic, you need to allow inbound security at 443.\n\n2) And then, you need to ensure that traffic can flow from the database server to the web server via the database security group.\n\nThe below snapshots from the AWS Documentation show rule tables for security groups that relate to the same requirements as in the question.\n\n \n\n\n\n \n\n \n\n\n\n \n\n\n\tFor more information on this use case scenario, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n\t\n\t\n\n\n \n\n\n\tOptions A and D are invalid answers. \n\tNetwork ACLs are stateless. So we need to set rules for both inbound and outbound traffic for Network ACLs.  \n\tOption E is also invalid because, in order to communicate with the MySQL servers, we need to allow traffic to flow through port 3306.\n\tNote: The above correct options are the combination of steps required to secure your web and database servers. In addition, the company may implement additional security measures from their end\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You lead a team to develop a new online game application in AWS EC2. The application will have a large number of users globally. For a great user experience, this application requires very low network latency and jitter. If the network speed is not fast enough, you will lose customers. Which tool would you choose to improve the application performance? (Select TWO.)",
    "prompt": "",
    "correctAnswerId": ["B", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS VPN"}, {"id": "B", "markdown": "AWS Global Accelerator"}, {
        "id": "C",
        "markdown": "Direct Connect"
    }, {"id": "D", "markdown": "API Gateway"}, {"id": "E", "markdown": "CloudFront"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B, E\n\nThis online game application has global users and needs low latency. Both CloudFront and Global Accelerator can speed up the distribution of contents over the AWS global network.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ AWS VPN links on-premise network to AWS network. However, no on-premise services are mentioned in this question.\n\tOption​ ​B ​is​ CORRECT:​ AWS Global Accelerator works at the network layer and is able to direct traffic to optimal endpoints. Check https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html for reference.\n\tOption​ ​C ​is​ ​incorrect:​ Direct Connect links on-premise network to AWS network. However, no on-premise services are mentioned in this question.\n\tOption​ ​D ​is​ ​incorrect:​ API Gateway is a regional service and cannot improve the application performance. API Gateway is suitable for serverless applications such as Lambda.\n\tOption​ ​E ​is​ CORRECT:​ Because CloudFront delivers content through edge locations and users are routed to the edge location that has the lowest time delay.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are deploying an application on Amazon EC2 that must call AWS APIs. Which method would you use to securely pass the credentials to the application?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Pass API credentials to the instance using Instance userdata."}, {
        "id": "B",
        "markdown": "Store API credentials as an object in Amazon S3."
    }, {"id": "C", "markdown": "Embed the API credentials into your application."}, {
        "id": "D",
        "markdown": "Assign IAM roles to the EC2 Instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation mentions the following:\n\nYou can use roles to delegate access to users, applications, or services that don't normally have access to your AWS resources. It is not a good practice to use IAM credentials for a production-based application. However, it is a good practice to use IAM Roles.\n\nFor more information on IAM Roles, please visit the following URL:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A website runs on EC2 Instances behind an Application Load Balancer. The instances run in an Auto Scaling Group across multiple Availability Zones and deliver several static files that are stored on a shared Amazon EFS file system. The company needs to avoid serving the files from EC2 Instances every time a user requests these digital assets.\n\nWhat should the company do to improve the user experience of the website?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Move the digital assets to Amazon Glacier."}, {
        "id": "B",
        "markdown": "Cache static content using CloudFront."
    }, {"id": "C", "markdown": "Resize the images so that they are smaller."}, {
        "id": "D",
        "markdown": "Use reserved EC2 Instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nAWS Documentation mentions the following about the benefits of using CloudFront:\n\nAmazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that the content is delivered with the best possible performance. If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately. \n\nFor more information on AWS CloudFront, please visit the following URL on page 3 under the section \"Accelerate Static Website Content Delivery\" :\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html\n\n\nThe glacier is not used for frequent retrievals. So Option A is not a good solution. Options C & D will also not help in this situation.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Solutions Architect is designing a highly scalable system to track records. These records must remain available for immediate download for up to three months and then must be deleted. What is the most appropriate decision for this use case?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Store the files in Amazon EBS and create a Lifecycle Policy to remove files after 3 months."
    }, {
        "id": "B",
        "markdown": "Store the files in Amazon S3 and create a Lifecycle Policy to remove files after 3 months."
    }, {
        "id": "C",
        "markdown": "Store the files in Amazon Glacier and create a Lifecycle Policy to remove files after 3 months."
    }, {
        "id": "D",
        "markdown": "Store the files in Amazon EFS and create a Lifecycle Policy to remove files after 3 months."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\n\n\tOption A is incorrect since the records need to be stored in a highly scalable system.\n\tOption C is incorrect since the records must be available for immediate download.\n\tOption D is incorrect since EFS lifecycle management is used to migrate files that have not been accessed for a certain period of time to the Infrequent Access storage class. Files moved to this storage remain indefinitely, and not get deleted. And due to this reason, this option is not correct.\n\n\nAWS Documentation mentions the following about Lifecycle Policies:\n\nLifecycle configuration enables you to specify the Lifecycle Management of objects in a bucket. The configuration is a set of one or more rules, where each rule defines an action for Amazon S3 to apply to a group of objects. These actions can be classified as follows:\n\nTransition actions – In which you define when the transition of the object occurs to another storage class. For example, you may choose to transition objects to the STANDARD_IA (IA, for infrequent access) storage class 30 days after creation or archive objects to the GLACIER storage class one year after creation.\n\nExpiration actions – In which you specify when the objects will expire. Then Amazon S3 deletes the expired objects on your behalf.\n\nFor more information on AWS S3 Lifecycle Policies, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html \n\n\n To know further about EFS Lifecycle Management.\n\n https://docs.aws.amazon.com/efs/latest/ug//lifecycle-management-efs.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A consulting firm repeatedly builds large architectures for their customers using AWS resources from several AWS services including IAM, Amazon EC2, Amazon RDS, DynamoDB and Amazon VPC. The consultants have architecture diagrams for each of their architectures, and are frustrated that they cannot use them to automatically create their resources.\n\nWhich service should provide immediate benefits to the organization?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Beanstalk"}, {"id": "B", "markdown": "AWS CloudFormation"}, {
        "id": "C",
        "markdown": "AWS CodeBuild"
    }, {"id": "D", "markdown": "AWS CodeDeploy"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nAWS CloudFormation: This supplements the requirement in the question and enables consultants to use their architecture diagrams to construct CloudFormation templates.\n\nAWS Documentation mentions the following on AWS CloudFormation:\n\nAWS CloudFormation is a service that helps you model and set up your Amazon Web Service resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you.\n\nFor more information on AWS Cloudformation, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html\n\n \n\nAWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js etc. You can simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring.\n\nIn question mentioned that \"A consulting firm repeatedly builds large architectures for their customers using AWS resources from several AWS services including IAM, Amazon EC2, Amazon RDS, DynamoDB and Amazon VPC.\"\n\nWhen you are building large architectures repeatedly, you can use the cloud formation template so that create or modify an existing AWS CloudFormation template. A template describes all of your resources and their properties. When you use that template to create an AWS CloudFormation stack, AWS CloudFormation provisions the Auto Scaling group, load balancer, and database for you. After the stack has been successfully created, your AWS resources are up and running. You can delete the stack just as easily, which deletes all the resources in the stack. By using AWS CloudFormation, you easily manage a collection of resources as a single unit. whenever working with more number of AWS resources together, cloud formation is the best option.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "The security policy of an organization requires an application to encrypt data before writing to the disk. Which solution should the organization use to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS KMS API"}, {"id": "B", "markdown": "AWS Certificate Manager"}, {
        "id": "C",
        "markdown": "API Gateway with STS"
    }, {"id": "D", "markdown": "IAM Access Key"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nOption B is incorrect. The AWS Certificate Manager can be used to generate SSL certificates to encrypt traffic in transit, but not at rest.\n\nOption C is incorrect. It is used for issuing tokens while using the API gateway for traffic in transit.\n\nOption D is used for providing secure access to EC2 Instances.\n\nAWS Documentation mentions the following on AWS KMS:\n\nAWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. AWS KMS is integrated with other AWS services including Amazon Elastic Block Store (Amazon EBS), Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon Elastic Transcoder, Amazon WorkMail, Amazon Relational Database Service (Amazon RDS), and others to make it simple to encrypt your data with encryption keys that you manage.\n\nFor more information on AWS KMS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/kms/latest/developerguide/overview.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are an AWS Solutions Architect. Your company has a successful web application deployed in an AWS Auto Scaling group. The application attracts more and more global customers. However, the application’s performance is impacted. Your manager asks you how to improve the performance and availability of the application. Which of the following AWS services would you recommend?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DataSync"}, {
        "id": "B",
        "markdown": "Amazon DynamoDB Accelerator"
    }, {"id": "C", "markdown": "AWS Lake Formation"}, {"id": "D", "markdown": "AWS Global Accelerator"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nAWS Global accelerator provides static IP addresses that are anycast in the AWS edge network. Incoming traffic is distributed across endpoints in AWS regions. The performance and availability of the application are improved.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because DataSync is a tool to automate the data transfer and does not help improving the performance.\n\tOption​ ​B ​is​ ​incorrect:​ DynamoDB is not mentioned in this question.\n\tOption​ ​C ​is​ ​incorrect:​ Because AWS Lake Formation is used to manage a large amount of data in AWS which would not help in this situation.\n\tOption​ ​D ​is​ CORRECT:​ Check the AWS Global Accelerator use cases in\n\t\n\t\thttps://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-benefits-of-migrating.html. The Global Accelerator service can improve both the application performance and availability.\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A retailer exports data daily from its transactional databases into an S3 bucket in the Sydney region. The retailer's Data Warehousing team wants to import this data into an existing Amazon Redshift cluster in their VPC at Sydney. Corporate security policy mandates that data can only be transported within a VPC. \nWhich steps would satisfy the security policy? \n(SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Amazon Redshift Enhanced VPC Routing."}, {
        "id": "B",
        "markdown": "Create a Cluster Security Group to allow the Amazon Redshift cluster to access Amazon S3."
    }, {
        "id": "C",
        "markdown": "Create a NAT gateway in a public subnet to allow the Amazon Redshift cluster to access Amazon S3."
    }, {"id": "D", "markdown": "Create and configure an Amazon S3 VPC endpoint."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and D\n\nAmazon Redshift Enhanced VPC Routing provides VPC resources access to Redshift.\n\nRedshift will not be able to access the S3 VPC endpoints without enabling Enhanced VPC routing, so one option is not going to support the scenario if another is not selected.\n\nNAT instance (the proposed answer) cannot be reached by Redshift without enabling Enhanced VPC Routing.\n\n\n\thttps://aws.amazon.com/about-aws/whats-new/2016/09/amazon-redshift-now-supports-enhanced-vpc-routing/\n\n\nOption D:\n\n\n\tVPC Endpoints - It enables you to privately connect your VPC to the supported AWS Services and VPC Endpoint services powered by PrivateLink without requiring an IGW, NAT Device, VPN Connection or AWS Direct Connect connections. Instances in VPC do not require Public IP addresses to communicate with resources in the service, and traffic between your VPC and other service does not leave the Amazon network.\n\n\n \n\n\n\tS3 VPC Endpoint - it is a feature that will allow you to make even better use of VPC and S3.\n\n\nI recommend you to look into the following URLs to know the concept further.\n\n\n\thttps://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A team is building an application that must persist and index JSON data in a highly available data store. The latency of data access must remain consistent despite very high application traffic.\n\nWhich service would help the team to meet the above requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EFS"}, {"id": "B", "markdown": "Amazon Redshift"}, {
        "id": "C",
        "markdown": "DynamoDB"
    }, {"id": "D", "markdown": "AWS CloudFormation"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the following about DynamoDB:\n\nAmazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. \n\nThe data in DynamoDB is stored in JSON format, and hence it is the perfect data storage to meet the requirement mentioned in the question.\n\nFor more information on AWS DynamoDB, please visit the following URL:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization hosts a multi-language website on AWS, which is served using CloudFront. Language is specified in the HTTP request as shown below:\n\n\n\thttp://d11111f8.cloudfront.net/main.html?language=de\n\thttp://d11111f8.cloudfront.net/main.html?language=en\n\thttp://d11111f8.cloudfront.net/main.html?language=es\n\n\nHow should AWS CloudFront be configured to deliver cached data in the correct language?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Forward cookies to the origin"}, {
        "id": "B",
        "markdown": "Based on query string parameters"
    }, {"id": "C", "markdown": "Cache objects at the origin"}, {"id": "D", "markdown": "Serve dynamic content"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nSince language is specified in the query string parameters, CloudFront should be configured for the same.\n\nFor more information on configuring CloudFront via query string parameters, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have developed a new web application on AWS for a real estate firm. It has a web interface where real estate employees upload photos of newly constructed houses in S3 buckets. Prospective buyer’s login to the website and access photos. The marketing team has initiated an intensive marketing event to promote new housing schemes which will lead to customers who frequently access these images. As this is a new application, you have no projection of traffic. You have created Auto Scaling across multiple instance types for these web servers, but you also need to optimize the cost for storage. You don’t want to compromise on latency & all images should be downloaded instantaneously without any outage. Which of the following is a recommended storage solution to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use One Zone-IA storage class to store all images."}, {
        "id": "B",
        "markdown": "Use Standard-IA to store all images."
    }, {"id": "C", "markdown": "Use S3 Intelligent-Tiering storage class."}, {
        "id": "D",
        "markdown": "Use Standard storage class, use Storage class analytics to identify & move objects using lifecycle policies."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nWhen access pattern to web application using S3 storage buckets is unpredictable, you can use S3 intelligent-Tiering storage class. S3 Intelligent-Tiering storage class includes two access tiers: frequent access and infrequent access. Based upon access patterns, it moves data between these tiers which helps in cost saving. S3 Intelligent-Tiering storage class have the same performance as that of Standard storage class.\n\n\n\tOption A is incorrect. Although it will save cost, it will not provide any protection in case of AZ failure. Also, this class is suitable for infrequently accessed data & not for frequently access data.\n\tOption B is incorrect as Standard-IA storage class is for infrequently accessed data & there are retrieval charges associated. In the above requirement, you do not have any projections of data being accessed which may result in a higher cost.\n\tOption D is incorrect. It has operational overhead to setup Storage class analytics & moves objects between various classes. Also, since the access pattern is undetermined, this will run into a costlier option.\n\n\nFor more information on S3 Intelligent-Tiering, refer to the following URLs:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-automatic-cost-optimization-for-amazon-s3-via-intelligent-tiering/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Solutions Architect is designing a shared service for hosting containers from several customers on Amazon ECS. These containers will use several AWS services. A container from one customer should not be able to access data from another customer.\n\nWhich solution would help the architect to meet these requirements?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "IAM roles for tasks"}, {
        "id": "B",
        "markdown": "IAM roles for EC2 Instances"
    }, {"id": "C", "markdown": "IAM Instance profile for EC2 Instances"}, {
        "id": "D",
        "markdown": "Security Group rules"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nThe AWS Documentation mentions the following:\n\nWith IAM roles for Amazon ECS tasks, you can specify an IAM role to be used by the containers in a task. Applications are required to sign their AWS API requests with AWS credentials, and this feature provides a strategy to manage credentials for your application's use. This is similar to how Amazon EC2 instance profiles provide credentials to EC2 instances.\n\nFor more information on configuring IAM Roles for tasks in ECS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is generating large datasets with millions of rows to be summarized column-wise. To build daily reports from these data sets, Business Intelligence tools would be used.\n\nWhich storage service would meet these requirements?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Redshift"}, {"id": "B", "markdown": "Amazon RDS"}, {
        "id": "C",
        "markdown": "ElastiCache"
    }, {"id": "D", "markdown": "DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following:\n\nAmazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. This enables you to use your data to acquire new insights for your business and customers.\n\nFor more information on AWS Redshift, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html\n\n\nColumnar storage for database tables is an important factor in optimizing analytic query performance because it drastically reduces the overall disk I/O requirements and the amount of data you need to load from disk.\n\nAmazon Redshift uses a block size of 1 MB, which is more efficient and further reduces the number of I/O requests needed to perform any database loading or other operations that are part of query execution.\n\nFor more information on how redshift manages the columnar storage, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/redshift/latest/dg/c_columnar_storage_disk_mem_mgmnt.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is developing a web application to be hosted in AWS. This application needs a data store for session data. \n\nAs an AWS Solution Architect, what would you recommend as an ideal option to store session data? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "CloudWatch"}, {"id": "B", "markdown": "DynamoDB"}, {
        "id": "C",
        "markdown": "Elastic Load Balancing"
    }, {"id": "D", "markdown": "ElastiCache"}, {"id": "E", "markdown": "Storage Gateway"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B and D\n\nDynamoDB and ElastiCache are perfect options for storing session data.\n\nAWS Documentation mentions the following on Amazon DynamoDB:\n\nAmazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity make it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.\n\nFor more information on AWS DynamoDB, please visit the following URL:\n\n\n\thttps://aws.amazon.com/dynamodb/\n\n\n \n\nAWS Documentation mentions the following on AWS ElastiCache:\n\nAWS ElastiCache is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution while removing the complexity associated with deployment and management of a distributed cache environment.\n\nFor more information on AWS Elasticache, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/WhatIs.html\n\n\n\n \n\nOption A is incorrect. AWS CloudWatch offers cloud monitoring services for the customers of AWS resources. \n\nOption C is incorrect. AWS Elastic Load Balancing automatically distributes incoming application traffic across multiple targets.\n\nOption E is incorrect. AWS Storage Gateway is a hybrid storage service that enables your on-premises applications to seamlessly use AWS cloud storage. \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company needs to store images that are uploaded by users via a mobile application. There is also a need to ensure that security measures are in place to avoid data loss.\n\nWhat step should be taken for protection against unintended user actions?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Store data in an EBS volume and create snapshots once a week."}, {
        "id": "B",
        "markdown": "Store data in an S3 bucket and enable versioning."
    }, {"id": "C", "markdown": "Store data on Amazon EFS storage."}, {
        "id": "D",
        "markdown": "Store data on EC2 instance storage."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAmazon S3 has an option for versioning as shown below. Versioning is on the bucket level and can be used to recover prior versions of an object.\n\n \n\n \n\nFor more information on AWS S3 versioning, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html\n\n \n\nOption A is incorrect as it does not offer protection against accidental deletion of files. \n\nOption C is incorrect. It is not the ideal solution because multiple EC2 instances can access the file system.\n\nOption D is ephemeral.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application needs to have a Datastore hosted in AWS. The following requirements are in place for the Datastore:\n\na) The initial storage capacity of 8 TB\n\nb) The ability to accommodate a database growth of 8GB per day\n\nc) The ability to have 4 Read Replicas\n\nWhich of the following Datastore is the best for this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "DynamoDB"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "Amazon Aurora"
    }, {"id": "D", "markdown": "SQL Server"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAurora can have a storage limit of 64TB and can easily accommodate the initial 8TB plus a database growth of 8GB/day for nearly a period of 20+ years. It can have up to 15 Aurora Replicas that can be distributed across the Availability Zones that a DB cluster spans within an AWS Region.\n\nAurora Replicas work well for read scaling because they are fully dedicated to read operations on the cluster volume. Write operations are managed by the primary instance. Because the cluster volume is shared among all DB instances in your DB cluster, no additional work is required to replicate a copy of the data for each Aurora Replica.\n\n \n\nFor more information on AWS Aurora, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Replication.html\n\n\n\nNote: \nOur DB choice needs to fulfill the 3 criteria.\n\n\n\tInitial Storage capacity 8 TB\n\tDaily DB growth of 8GB/day\n\tNeed 4 Read replicas\n\n\n\nDynamoDB, alongside DynamoDB Accelerator (DAX), can support up to 9 read replicas in its primary cluster. However, we have to choose the best suitable one from the options listed in the question. We also have Aurora listed under the option which is fully dedicated for read operations in the cluster.\n\nNOTE:\n\nYes, the first line of the question has not mentioned anything about the database, but the requirements have a mention of it, and also you were asked about read replicas.  Also, in the real-time exam, Amazon asks these type of questions to check your understanding under stress, hence we do try replicating them for you to get prepared for the exam.\n\nDynamo DB also fulfills all 3 criteria mentioned above. But when we think about the \"Read replicas\", Aurora is fully dedicated for read operations in the cluster. For this question, we have to choose only one option. So Aurora is the best Option here. Please analyze the Explanation part of this question carefully.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to host a database on an EC2 Instance. It is also required that the EBS volume should support 18,000 IOPS.\n\nWhich Amazon EBS volume type would meet the performance requirements of this database?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS Provisioned IOPS SSD"}, {
        "id": "B",
        "markdown": "EBS Throughput Optimized HDD"
    }, {"id": "C", "markdown": "EBS General Purpose SSD"}, {"id": "D", "markdown": "EBS Cold HDD"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nFor high performance and high IOPS requirements, as in this case, the ideal choice would be to choose EBS Provisioned IOPS SSD.\n\nThe below snapshot from the AWS Documentation shows the usage of Provisioned IOPS for better IOPS performance in database-based applications.\n\n\n\n \n\nFor more information on AWS EBS Volume types, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Development teams in your organization use S3 buckets to store log files for various applications hosted in AWS development environments. The developers intend to keep the logs for a month for troubleshooting purposes, and subsequently purge the logs.\n\nWhich feature should be used to enable this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Adding a bucket policy on the S3 bucket."}, {
        "id": "B",
        "markdown": "Configuring lifecycle configuration rules on the S3 bucket."
    }, {"id": "C", "markdown": "Creating an IAM policy for the S3 bucket."}, {
        "id": "D",
        "markdown": "Enabling CORS on the S3 bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following on Lifecycle policies:\n\nLifecycle configuration enables you to specify the Lifecycle management of objects in a bucket. The configuration is a set of one or more rules, where each rule defines an action for Amazon S3 to apply to a group of objects. These actions can be classified as follows:\n\n\n\tTransition actions – In which you define when objects transition to another storage class. For example, you may choose to transition objects to the STANDARD_IA (IA, for infrequent access) storage class 30 days after creation or archive objects to the GLACIER storage class one year after creation.\n\tExpiration actions – In which you specify when the objects expire. Then, Amazon S3 deletes the expired objects on your behalf.\n\n\n\nFor more information on AWS S3 Lifecycle policies, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As an AWS solution architect, you are building a new image processing application with queuing service.  There is fleet of m4.large EC2 instances which would poll SQS as images are uploaded by users. The image processing takes around 55 seconds for completion, and users are notified via emails on completion.  During the trial period, you find duplicate messages being generated due to which users are getting multiple emails for the same image.  What would be the best option to eliminate duplicate messages before going to production?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create delay queue for 60 seconds."}, {
        "id": "B",
        "markdown": "Increase visibility timeout to 60 seconds."
    }, {"id": "C", "markdown": "Create delay queue to greater than 60 seconds."}, {
        "id": "D",
        "markdown": "Decrease visibility timeout below 60 seconds."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: B\n\nDefault visibility timeout is 30 seconds. Since the application needs 60 seconds to complete the processing, the visibility timeout should be increased to 60 seconds. This will hide the message from other consumers for 60 seconds, so they will not process the same file which is in the process by the original consumer.\n\n\n\tOptions A & C are incorrect as Delay queues let you postpone the delivery of new messages to a queue for a number of seconds. Creating a delay queue for 60 seconds or more will delay the delivery of the new message by specific seconds & not eliminate the duplicate message.\n\tOption D is incorrect as visibility timeout should be set to the maximum time it takes to process & delete the message from the queue. If visibility timeout is set to below 60 seconds, the message will be again visible to other consumers while the original consumer is already working on it.\n\n\nFor more information on SQS visibility timeout, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html#changing-message-visibility-timeout\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS services can be used to host and scale an application, in which a NGINX load balancer will be used? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EC2"}, {"id": "B", "markdown": "AWS Elastic Beanstalk"}, {
        "id": "C",
        "markdown": "AWS SQS"
    }, {"id": "D", "markdown": "AWS ELB"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, B\n\nNGINX is open-source software for web serving, reverse proxying, caching, content-based routing rules, auto-scaling support, and traffic management policies. \n\nNGINX can be hosted on an EC2 instance through a series of clear steps- Launch an EC2 instance through the console. Connect to the instance over SSH and use the command yum install -y Nginx to install Nginx. Also, make sure that it is configured to restart automatically after a reboot.\n\nIt can also be installed with an Elastic Beanstalk service. To enable the NGINX proxy server with your Tomcat application, you must add a configuration file to .ebextensions in the application source bundle that you upload to Elastic Beanstalk. \n\nMore information is available at:\n\n\n\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-tomcat-platform.html#java-tomcat-proxy\n\n\nThe below snippet from the AWS Documentation shows the server available for Web server environments that can be created via Elastic Beanstalk. The server shows that NGINX servers can be provisioned via the Elastic Beanstalk service.\n\n\n\nFor more information on the supported platforms for AWS Elastic Beanstalk, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html\n\n\nNGINX is available as AMI for EC2.\n\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a media processing application deployed in a local data center. Its file storage is built on a Microsoft Windows file server. The application and file server need to be migrated to AWS. You want to quickly set up the file server in AWS and the application code should continue working to access the file systems. Which method should you choose to create the file server?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a Windows File Server from Amazon WorkSpaces."}, {
        "id": "B",
        "markdown": "Configure a high performance Windows File System in Amazon EFS."
    }, {"id": "C", "markdown": "Create a Windows File Server in Amazon FSx."}, {
        "id": "D",
        "markdown": "Configure a secure enterprise storage through Amazon WorkDocs."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nIn this question, a Windows file server is required in AWS and the application should continue to work unchanged. Amazon FSx for Windows File Server is the correct answer as it is backed by a fully native Windows file system.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because Amazon WorkSpace configures a desktop server which is not required in this question. Only a Windows file server is needed.\n\tOption​ ​B ​is​ ​incorrect:​ Because EFS can not be used to configure a Windows file server.\n\tOption​ ​C ​is​ CORRECT:​ Because Amazon FSx provides fully managed Microsoft Windows file servers. Check https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html.\n\tOption​ ​D ​is​ ​incorrect:​ Because Amazon WorkDocs is a file sharing service in AWS. It cannot provide a native Windows file system.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to get the source IP addresses that access resources in a private subnet. Which of the following could be used to fulfill this purpose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Trusted Advisor"}, {"id": "B", "markdown": "VPC Flow Logs"}, {
        "id": "C",
        "markdown": "Use CloudWatch metrics"
    }, {"id": "D", "markdown": "Use CloudTrail"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe AWS Documentation mentions the following:\n\nVPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data is stored using Amazon CloudWatch Logs. After you've created a flow log, you can view and retrieve its data in Amazon CloudWatch Logs.\n\nFor more information on VPC Flow Logs, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html\n \n\nOption A is incorrect as AWS Trusted Advisor is your customized cloud expert! It helps you to observe best practices for the use of AWS by inspecting your AWS environment with an eye toward saving money, improving system performance and reliability, and closing security gaps.\n\nAWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.\n\nCloudWatch Metric is mainly used for performance metrics.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement for 500 messages to be sent and processed in order. Which service can be used in this regard?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS SQS FIFO"}, {"id": "B", "markdown": "AWS SNS"}, {
        "id": "C",
        "markdown": "AWS Config"
    }, {"id": "D", "markdown": "AWS ELB"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nOne can use SQS FIFO queues for this purpose. The AWS Documentation mentions the following on SQS FIFO Queues:\n\nAmazon SQS is a reliable and highly-scalable managed message queue service for storing messages in transit between application components. FIFO queues complement the existing Amazon SQS standard queues, which offer high throughput, best-effort ordering, and at-least-once delivery. FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting, ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers. Additionally, message groups allow multiple separate ordered message streams within the same queue.  \n\nFor more information on SQS FIFO Queues, please visit the following URL:\n\nhttps://aws.amazon.com/about-aws/whats-new/2016/11/amazon-sqs-introduces-fifo-queues-with-exactly-once-processing-and-lower-prices-for-standard-queues/\n\n\nNote: \n\nYes, SNS is used to send out the messages. \n\nSNS is a web service that coordinates and manages the delivery or sending of messages to subscribing endpoints or clients. In Amazon SNS, there are two types of clients—publishers and subscribers—also referred to as producers and consumers. Publishers communicate asynchronously with subscribers by producing and sending a message to a topic, which is a logical access point and communication channel. Subscribers (i.e., web servers, email addresses, Amazon SQS queues, AWS Lambda functions) consume or receive the message or notification over one of the supported protocols (i.e., Amazon SQS, HTTP/S, email, SMS, Lambda) when they are subscribed to the topic. There is no such thing like maintain the order of the messages in SNS.\n\nIn the question, it mentioned that \"There is a requirement for 500 messages to be sent and processed in order\". By SNS, all messages will be sent at the same time to all the subscribers.\n\nPlease visit the following link to get more information.\n\nhttps://docs.aws.amazon.com/sns/latest/dg/welcome.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team is developing a high performance computing (HPC) application. The application resolves complex, compute-intensive problems and needs a high-performance and low-latency Lustre file system. You need to configure this file system in AWS at low cost. Which method is the most suitable?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a Lustre file system through Amazon FSx."}, {
        "id": "B",
        "markdown": "Launch a high performance Lustre file system in Amazon EBS."
    }, {"id": "C", "markdown": "Create a high-speed volume cluster in EC2 placement group."}, {
        "id": "D",
        "markdown": "Launch the Lustre file system from AWS Marketplace."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nThe Lustre file system is an open-source, parallel file system that can be used for HPC applications. Refer to http://lustre.org/ for its introduction. In Amazon FSx, users can quickly launch a Lustre file system at low cost.\n\n\n\tOption​ ​A ​is​ CORRECT:​ Amazon FSx supports Lustre file systems and users pay for only the resources they use.\n\tOption​ ​B ​is​ ​incorrect:​ Although users may be able to configure a Lustre file system through EBS, it needs lots of extra configurations, Option A is more straightforward.\n\tOption​ ​C ​is​ ​incorrect:​ Because EC2 placement group does not support a Lustre file system.\n\tOption​ ​D ​is​ ​incorrect:​ Because products in AWS Marketplace are not cost-effective. For Amazon FSx, there are no minimum fees or set-up charges. Check its pricing in\n\t\n\t\thttps://aws.amazon.com/fsx/lustre/pricing/.\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Redshift cluster currently contains 60TB of data. There is a requirement that a disaster recovery site is put in place in a region located 600 km away. Which solution would help ensure that this requirement is fulfilled?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Take a copy of the underlying EBS volumes to S3, and then do Cross-Region Replication."
    }, {"id": "B", "markdown": "Enable Cross-Region snapshots for the Redshift Cluster."}, {
        "id": "C",
        "markdown": "Create a CloudFormation template to restore the Cluster in another region."
    }, {"id": "D", "markdown": "Enable Cross Availability Zone snapshots for the Redshift Cluster."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe below diagram shows that snapshots are available for Redshift clusters enabling them to be available in different regions.\n\n\n\n \n\nFor more information on managing Redshift snapshots, please visit the following URLs:\n\n\n\thttps://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html\n\thttps://aws.amazon.com/blogs/aws/automated-cross-region-snapshot-copy-for-amazon-redshift/\n\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is using a Redshift cluster to store their data warehouse. There is a requirement from the Internal IT Security team to encrypt data in the Redshift database. How could this be achieved? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Encrypt the EBS volumes of the underlying EC2 Instances."}, {
        "id": "B",
        "markdown": "Use AWS KMS Customer Default master key."
    }, {"id": "C", "markdown": "Use SSL/TLS for encrypting the data."}, {
        "id": "D",
        "markdown": "Use hardware security module (HSM) to manage the top-level encryption keys ."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B and D\n\nAWS documentation mentions the following:\n\nAmazon Redshift uses a hierarchy of encryption keys to encrypt the database. You can use either AWS Key Management Service (AWS KMS) or a hardware security module (HSM) to manage the top-level encryption keys in this hierarchy. The process that Amazon Redshift uses for encryption differs depending on how you manage keys.\n\n\n\tFor more information on Redshift encryption, please visit the following URL:\n\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html\n\n\n\tOption D is correct. AWS now supports an end to end encryption of Redshift data using the server-side encryption features of Amazon S3 coupled with AWS KMS.\n\n\nhttps://aws.amazon.com/blogs/big-data/encrypt-your-amazon-redshift-loads-with-amazon-s3-and-aws-kms/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An EC2 instance in the private subnet needs access to the S3 bucket placed in the same region as that of the EC2 instance. The EC2 instance needs to upload and download bigger files to the S3 bucket frequently.\n\nAs an AWS solutions architect what quick and cost-effective solution would you suggest to your customers. You need to consider the fact that the EC2 instances are present in the private subnet, and the customers do not want their data to be exposed over the internet.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Place the S3 bucket in another public subnet of the same region and create a VPC peering connection to this private subnet where the EC2 instance is placed. The traffic to upload and download files will go through secure Amazon's private network."
    }, {
        "id": "B",
        "markdown": "Create an IAM role having access over the S3 service and assign it to the EC2 instance."
    }, {
        "id": "C",
        "markdown": "Create a VPC endpoint for S3, use your route tables to control which instances can access resources in Amazon S3 via the endpoint. The traffic to upload and download files will go through the Amazon private network."
    }, {
        "id": "D",
        "markdown": "A private subnet can always access S3 bucket/ service through the NAT Gateways or NAT instances, so there is no need for additional setup."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\n\n\tOption A is incorrect because the S3 service is region-specific, not AZ’s specific, and the statement talks about placing the S3 bucket in Public Subnet.\n\tOption B is incorrect. This is indeed a quick solution but would be expensive as the EC2 instances from private or public subnet will communicate with the S3 services over its endpoint. And when the endpoint is used it uses the internet for download and upload, hence exposing the data over the internet. Besides, the number of requests will have a cost associated with it.\n\tOption C is correct to be able to access the S3 services placed in the same region as that of the VPC having EC2 instance present in the Private subnet. You can create a VPC endpoint and update the route entry of the route table associated with the private subnet. This is a quick solution as well as cost-effective as it will use Amazon's own private network. Hence, it won’t expose the data over the internet.\n\tOption D is incorrect as this is certainly not a default setup unless we create a NAT Gateway or Instance. Even if they are there, it’s an expensive solution and exposes the data over the internet.\n\n\nReferences:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-vpc-endpoint-for-amazon-s3/\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are developing an application using AWS SDK to get objects in AWS S3. The objects have big sizes and sometimes there are failures when getting objects especially when the network connectivity is poor. You want to get a specific range of bytes in a single GET request and retrieve the whole object in parts. Which method can achieve this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable multipart upload in the AWS SDK."}, {
        "id": "B",
        "markdown": "Use the “Range” HTTP header in a GET request to download the specified range bytes of an object."
    }, {
        "id": "C",
        "markdown": "Reduce the retry requests and enlarge the retry timeouts through AWS SDK when fetching S3 objects."
    }, {"id": "D", "markdown": "Retrieve the whole S3 object through a single GET operation."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nThrough the “Range” header in the HTTP GET request, a specified portion of the objects can be downloaded instead of the whole objects. Check the explanations in https://docs.aws.amazon.com/AmazonS3/latest/dev/GettingObjectsUsingAPIs.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because the question asks for multipart download rather than multipart upload.\n\tOption​ ​B ​is​ CORRECT:​ Because with byte-range fetches, users can establish concurrent connections to Amazon S3 to fetch different parts from within the same object.\n\tOption​ ​C ​is​ ​incorrect:​ Because adjusting retry requests and timeouts cannot download specific parts of an object.\n\tOption​ ​D ​is​ ​incorrect:​ Because the method to retrieve the entire object does not meet the requirement.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application needs to access data in another AWS account in another VPC in the same region. What would ensure that the data can be accessed as required?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Establish a NAT instance between both accounts."}, {
        "id": "B",
        "markdown": "Use a VPN between both accounts."
    }, {"id": "C", "markdown": "Use a NAT Gateway between both accounts."}, {
        "id": "D",
        "markdown": "Use VPC Peering between both accounts."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\n\n\tOptions A and C are incorrect because these are used when private resources are required to access the Internet.\n\tOption B is incorrect because it's used to create a connection between the On-premises and AWS resources.\n\n\nAWS Documentation mentions the following about VPC Peering:\n\nA VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC Peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.\n\nFor more information on VPC Peering, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-peering.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You host a static website in an S3 bucket and there are global clients from multiple regions. You want to use an AWS service to store cache for frequently accessed content so that the latency is reduced and the data transfer rate is increased. Which of the following options would you choose?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS SDKs to horizontally scale parallel requests to the Amazon S3 service endpoints."
    }, {
        "id": "B",
        "markdown": "Create multiple Amazon S3 buckets and put Amazon EC2 and S3 in the same AWS Region."
    }, {
        "id": "C",
        "markdown": "Enable Cross-Region Replication to several AWS Regions to serve customers from different locations."
    }, {"id": "D", "markdown": "Configure CloudFront to deliver the content in the S3 bucket."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nCloudFront is able to store the frequently accessed content as a cache and the performance is optimized. Other options may help on the performance however they do not store cache for the S3 objects.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ This option may increase the throughput however it does not store cache.\n\tOption​ ​B ​is​ ​incorrect:​ Because this option does not use cache.\n\tOption​ ​C ​is​ ​incorrect:​ This option creates multiple S3 buckets in different regions. It does not improve the performance using cache.\n\tOption​ ​D ​is​ CORRECT:​ Because CloudFront caches copies of the S3 files in its edge locations and users are routed to the edge location that has the lowest latency.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application consists of the following architecture:\n\na. EC2 Instances in multiple AZ’s behind an ELB\n\nb. EC2 Instances are launched via an Auto Scaling Group.\n\nc.  There is a NAT instance which is used so that instances can download updates from the Internet.\n\nWhat is a bottleneck in the architecture?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The EC2 Instances"}, {"id": "B", "markdown": "The ELB"}, {
        "id": "C",
        "markdown": "The NAT Instance"
    }, {"id": "D", "markdown": "The Auto Scaling Group"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nSince there is only one NAT instance, this is a bottleneck in the architecture. For high availability, launch NAT instances in multiple Available Zones and make it as part of an Auto Scaling Group.\n\nFor more information on NAT Instances, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company owns an API which sees a high influx of requests per second. The company wants to host this API with the least administrative maintenance and does not care about code changes. How can this be achieved?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use API Gateway with the backend services as it is"}, {
        "id": "B",
        "markdown": "Use the API Gateway along with AWS Lambda"
    }, {"id": "C", "markdown": "Use CloudFront along with the API backend service as it is"}, {
        "id": "D",
        "markdown": "Use ElastiCache along with the API backend service as it is"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nSince the company has full ownership of the API, the best solution would be to convert the code for the API and use it in a Lambda function. This can help save on cost since, in the case of Lambda, you only pay for the time the function runs, and not for the infrastructure.\n\nThen, you can use the API Gateway along with the AWS Lambda function to scale accordingly.\n\nFor more information on using API Gateway with AWS Lambda, please visit the following URL:\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html\n\nNote:  With Lambda you do not have to provision your own instances; Lambda performs all the administrative activities on your behalf, including capacity provisioning, monitoring fleet health, applying security patches to the underlying compute resources, deploying your code, running a web service front end, and monitoring and logging your code. AWS Lambda provides easy scaling and high availability to your code without additional effort on your part.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an application hosted in an Auto Scaling group and an application load balancer distributes traffic to the ASG. You want to add a scaling policy that keeps the average aggregate CPU utilization of the Auto Scaling group to be 60 percent. The capacity of the Auto Scaling group should increase or decrease based on this target value. Which scaling policy does it belong to?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Target tracking scaling policy."}, {
        "id": "B",
        "markdown": "Step scaling policy."
    }, {"id": "C", "markdown": "Simple scaling policy."}, {"id": "D", "markdown": "Scheduled scaling policy."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nIn ASG, you can add a target tracking scaling policy based on a target. Check https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html for different scaling policies.\n\n\n\tOption​ ​A ​is​ CORRECT:​ Because a target tracking scaling policy can be applied to check the ASGAverageCPUUtilization metric according to https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html.\n\tOption​ ​B ​is​ ​incorrect:​ Because Step scaling adjusts the capacity based on step adjustments instead of a target.\n\tOption​ ​C ​is​ ​incorrect:​ Because Simple scaling changes the capacity based on a single adjustment.\n\tOption​ ​D ​is​ ​incorrect:​ With Scheduled scaling, the capacity is adjusted based on a schedule rather than a target.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application sends images to S3. The metadata for these images needs to be saved in persistent storage and is required to be indexed. Which one of the following could be used for the underlying metadata storage?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Aurora"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "Amazon DynamoDB"
    }, {"id": "D", "markdown": "Amazon RDS"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe most efficient storage mechanism for just storing metadata is Amazon DynamoDB. Amazon DynamoDB is normally used in conjunction with the Simple Storage service. So, after storing the images in S3, you can store their metadata in DynamoDB. You can also create secondary indexes for DynamoDB Tables.\n\nFor more information on managing indexes in DynamoDB, please visit the following URL:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.Indexes.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application hosted on EC2 Instances has its promotional campaign due, to start in 2 weeks. There is a mandate from the management to ensure that no performance problems are encountered due to traffic growth during this time. What should be done to the Auto Scaling Group to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Configure Step scaling for the Auto Scaling Group."}, {
        "id": "B",
        "markdown": "Configure Dynamic Scaling and use Target tracking scaling Policy"
    }, {"id": "C", "markdown": "Configure Scheduled scaling for the Auto Scaling Group"}, {
        "id": "D",
        "markdown": "Configure Static scaling for the Auto Scaling Group"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nIf you are scaling based on a metric, which is a utilization metric that increases or decreases proportionally to the number of instances in the Auto Scaling group, we recommend that you use a target tracking scaling policy instead.\n\nIn Target tracking scaling policies, you select a predefined metric or configure a customized metric, and set a target value.  EC2 Auto Scaling creates and manages the CloudWatch alarms that trigger the scaling policy and calculates the scaling adjustment based on the metric and the target value. The scaling policy adds or removes capacity as required to keep the metric at, or close to, the specified target value.\n\nScheduled scaling works better when you can predict the load changes and also when you know how long you need to run. Here in our scenario we just know that there will be heavy traffic during the campaign period (the period is not specified) but not sure about the actual traffic. We don't have any history to predict it either. \n\nFor more information on Auto Scaling Scheduled Scaling, please visit the following URLs:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Currently, a company makes use of EBS snapshots to back up their EBS Volumes. As a part of the business continuity requirement, these snapshots need to be made available in another region. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Directly create the snapshot in the other region."}, {
        "id": "B",
        "markdown": "Create Snapshot and copy the snapshot to a new region."
    }, {
        "id": "C",
        "markdown": "Copy the snapshot to an S3 bucket and then enable Cross-Region Replication for the bucket."
    }, {"id": "D", "markdown": "Copy the EBS Snapshot to an EC2 instance in another region."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nA snapshot is constrained to the region where it was created. After you create a snapshot of an EBS volume, you can use it to create new volumes in the same region. For more information, follow the link on Restoring an Amazon EBS Volume from a Snapshot below. You can also copy snapshots across regions, making it possible to use multiple regions for geographical expansion, data center migration, and disaster recovery.\n\nFor more information on EBS Snapshots, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\nFor more information on Restoring an Amazon EBS Volume from a Snapshot, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-restoring-volume.html\n\nOption C is incorrect because the EBS snapshots are stored in S3, which is managed by AWS. We don't have the option to see the snapshots in S3. \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application hosted in AWS. This application consists of EC2 Instances which sit behind an ELB. The following are the requirements from an administrative perspective:\n\n a) Ensure notifications are sent when the read requests go beyond 1000 requests per minute\n\n b) Ensure notifications are sent when the latency goes beyond 10 seconds\n\n c)  Monitor all API activities on the AWS resources\n\nWhich of the followings can be used to satisfy these requirements? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use CloudTrail to monitor the API Activity."}, {
        "id": "B",
        "markdown": "Use CloudWatch logs to monitor the API Activity."
    }, {
        "id": "C",
        "markdown": "Use CloudWatch metrics for the metrics that need to be monitored as per the requirement and set up an alarm activity to send out notifications when the metric reaches the set threshold limit."
    }, {"id": "D", "markdown": "Use custom log software to monitor the latency and read requests to the ELB."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nAWS CloudTrail can be used to monitor the API calls.\n\nFor more information on CloudTrail, please visit the following URL:\n\n\n\thttps://aws.amazon.com/cloudtrail/\n\n\nWhen you use CloudWatch metrics for an ELB, you can get the number of read requests and latency out of the box.\n\nFor more information on using Cloudwatch with the ELB, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html\n\n\n \n\n\n\tOption A is correct. CloudTrail is a web service that records API calls for all the resources in your AWS account and delivers log files to an Amazon S3 bucket. The recorded information includes the identity of the user, the start time of the AWS API call, the source IP address, the request parameters, and the response elements returned by the service.\n\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/APIReference/Welcome.html \n\n \n\n\n\tOption C is correct. Use Cloudwatch metrics for the metrics that need to be monitored as per the requirement and set up an alarm activity to send out notifications when the metric reaches the set threshold limit.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has resources hosted in their AWS Account. There is a requirement to monitor API activity for all regions and the audit needs to be applied for future regions as well. What would fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure CloudTrail for each region, then enable trail for each future region."
    }, {"id": "B", "markdown": "Ensure one CloudTrail trail is enabled for all regions."}, {
        "id": "C",
        "markdown": "Create a CloudTrail for each region. Use CloudFormation to enable the trail for all future regions."
    }, {
        "id": "D",
        "markdown": "Create a CloudTrail for each region. Use AWS Config to enable the trail for all future regions."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nYou can now turn on a trail across all regions for your AWS account. CloudTrail will deliver log files from all regions to the Amazon S3 bucket and an optional CloudWatch Logs log group you specified. Additionally, when AWS launches a new region, CloudTrail will create the same trail in the new region. As a result, you will receive log files containing API activity for the new region without taking any action. \n\nFor more information on this feature, please visit the following URL:\n\nhttps://aws.amazon.com/about-aws/whats-new/2015/12/turn-on-cloudtrail-across-all-regions-and-support-for-multiple-trails/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement for an iSCSI device and the legacy application needs local storage with low-latency access to all the data. What would you do to meet the demands of the application?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Configure the Simple Storage Service."}, {
        "id": "B",
        "markdown": "Configure Storage Gateway Cached volume."
    }, {"id": "C", "markdown": "Configure Storage Gateway Stored volume."}, {
        "id": "D",
        "markdown": "Configure Amazon Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the following:\n\nIf you need low-latency access to your entire dataset, first configure your on-premises gateway to store all your data locally. Then, asynchronously back up point-in-time snapshots of this data to Amazon S3. This configuration provides durable and inexpensive offsite backups that you can recover to your local data center or Amazon EC2. For example, if you need replacement capacity for disaster recovery, you can recover the backups to Amazon EC2.\n\nFor more information on the Storage gateway, please visit the following URL:\n\nhttps://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\n\nS3 and Glacier are not used for this purpose.\nVolume gateway provides an iSCSI target, which enables you to create volumes and mount them as iSCSI devices from your on-premises or EC2 application servers. The volume gateway runs in either a cached or stored mode.\n\n\n\tIn the cached mode, your primary data is written to S3, while retaining your frequently accessed data locally in a cache for low-latency access.\n\tIn the stored mode, your primary data is stored locally and your entire dataset is available for low-latency access while asynchronously backed up to AWS.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has an online game application deployed in an Auto Scaling group. The traffic of the application is predictable. Every Friday, the traffic starts to increase, remains high on weekends and then drops on Monday. You need to plan the scaling actions for the Auto Scaling group. Which method is the most suitable for the scaling policy?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configure a scheduled CloudWatch event rule to launch/terminate instances at the specified time every week."
    }, {
        "id": "B",
        "markdown": "Create a predefined target tracking scaling policy based on the average CPU metric and the ASG will scale automatically."
    }, {
        "id": "C",
        "markdown": "Select the ASG and on the Automatic Scaling tab, add a step scaling policy to automatically scale out/in at fixed time every week."
    }, {
        "id": "D",
        "markdown": "Configure a scheduled action in the Auto Scaling group by specifying the recurrence, start/end time, capacities, etc."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nThe correct scaling policy should be scheduled scaling as it defines your own scaling schedule. Refer to https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html for details.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ This option may work. However you have to configure a target such as a Lambda function to perform the scaling actions.\n\tOption​ ​B ​is​ ​incorrect:​ The target tracking scaling policy defines a target for the ASG. The scaling actions do not happen based on a schedule.\n\tOption​ ​C ​is​ ​incorrect:​ The step scaling policy does not configure the ASG to scale at specified time.\n\tOption​ ​D ​is​ CORRECT:​ With scheduled scaling, users define a schedule for the ASG to scale. This option can meet the requirements.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is an application that consists of EC2 Instances behind classic ELBs. An EC2 proxy is used for content management of the backend instances. The application might not be able to scale properly. \n\nWhat should be used to scale the proxy and backend instances appropriately? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Auto Scaling for the proxy servers."}, {
        "id": "B",
        "markdown": "Use Auto Scaling for the backend instances."
    }, {"id": "C", "markdown": "Replace the Classic ELB with Application ELB."}, {
        "id": "D",
        "markdown": "Use Application ELB for both the front end and backend instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and B\n\nWhen you see a requirement for scaling, consider the Auto Scaling service provided by AWS. This can be used to scale both the backend instances and the EC2 proxy server.\n\nFor more information on Auto Scaling, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a website hosted in AWS that might get a lot of traffic over the next couple of weeks. If the application experiences a natural disaster at this time, what should be used to reduce potential disruption to users?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use an ELB to divert traffic to an Infrastructure hosted in another region."
    }, {"id": "B", "markdown": "Use an ELB to divert traffic to an Infrastructure hosted in another AZ."}, {
        "id": "C",
        "markdown": "Use CloudFormation to create backup resources in another AZ."
    }, {"id": "D", "markdown": "Use Route53 to route requests to another instance in a different region"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nIn a disaster recovery scenario, the best choice out of all given options is to divert the traffic to a static website.\n\n\n\tOption A is wrong because ELB can only balance traffic in one region, not across multiple regions.\n\tOptions B and C are incorrect because using backups across AZs is not enough for disaster recovery purposes.\n\n\n \n\nFor more information on disaster recovery in AWS, please visit the following URLs:\n\n\n\thttps://aws.amazon.com/premiumsupport/knowledge-center/fail-over-s3-r53/\n\thttps://aws.amazon.com/disaster-recovery/\n\n\n \n\n\n\tThe wording \"to reduce the potential disruption in case of issues\" is pointing to a disaster recovery situation. There is more than one way to manage this situation. However, we need to choose the best option from the list given here. Out of this, the most suitable one is Option D.\n\n\nMost organizations try to implement High Availability (HA) instead of DR to guard them against any downtime of services. In the case of HA, we ensure there exists a fallback mechanism for our services. The service that runs in HA is handled by hosts running in different availability zones but in the same geographical region. This approach, however, does not guarantee that our business will be up and running in case the entire region goes down.\n\nDR takes things to a completely new level, wherein you need to be able to recover from a different region that is separated by over 250 miles. Our DR implementation is an Active/Passive model, meaning that we always have minimum critical services running in different regions, but a major part of the infrastructure is launched and restored when required.\n\nFor more information on large scale disaster recovery using AWS regions, please visit the following URL:\n\n\n\thttps://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/\n\n\n\nNote:\nUsually, when we discuss a disaster recovery scenario we assume that the entire region is affected due to some disaster.  So we need the service to be provided from yet another region. So in that case setting up a solution in another AZ will not work as it is in the same region. Option A is incorrect though it mentions yet another region because ELBs cannot span across regions.\n\nSo out of the options provided, Option D is the most suitable solution.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a requirement to host a static website for a domain named mycompany.com in AWS. \n\nHow would you set up this? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Host the static site on an EC2 Instance."}, {
        "id": "B",
        "markdown": "Use Route53 with static web site in S3."
    }, {"id": "C", "markdown": "Enter the DNS records from Route53 in the domain registrar."}, {
        "id": "D",
        "markdown": "Place the EC2 instance behind the ELB."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nYou can host a static website in S3. You need to ensure that the nameserver records for the Route53 hosted zone, are entered in your domain registrar. \n\nFor more information on website hosting in S3, please visit the following URLs:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\n\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/RoutingToS3Bucket.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A database, hosted using the Amazon RDS service, is getting a lot of database queries and has now become a bottleneck for the associating application. Which action would ensure that the database is not a performance bottleneck?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Setup a CloudFront distribution in front of the database."}, {
        "id": "B",
        "markdown": "Setup an ELB in front of the database."
    }, {"id": "C", "markdown": "Setup ElastiCache in front of the database."}, {
        "id": "D",
        "markdown": "Setup SNS in front of the database."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nElastiCache is an in-memory solution which can be used in front of a database to cache the common queries issued against the database. This can reduce the overall load on the database.\n\n\n\tOption A is incorrect because this is normally used for content distribution.\n\tOption B is partially correct, but you need to have one more database as an internal load balancing solution.\n\tOption D is incorrect because SNS is a simple notification service.\n\n\nFor more information on ElastiCache, please visit the following URL:\n\nhttps://aws.amazon.com/elasticache/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A database is being hosted using the Amazon RDS service. This database is to be made into a production database and is required to have high availability. Which of the following could be used to achieve this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Multi-AZ for the RDS instance to ensure that a secondary database is created in another region."
    }, {
        "id": "B",
        "markdown": "Use the Read Replica feature to create another instance of the DB in another region."
    }, {
        "id": "C",
        "markdown": "Use Multi-AZ for the RDS instance to ensure that a secondary database is created in another Availability Zone."
    }, {
        "id": "D",
        "markdown": "Use the Read Replica feature to create another instance of the DB in another Availability Zone."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nOption A is incorrect because the Multi-AZ feature allows high availability across Availability Zones, not regions.\n\nOptions B and D are incorrect because Read Replicas can be used to offload database reads. But if you want high availability then opt for the Multi-AZ feature.\n\nAWS Documentation mentions the following:\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ).\n\nFor more information on AWS RDS Multi-AZ, please visit the following URL:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to host a web application and a database layer in AWS. This will be done with the use of subnets in a VPC. \n\nWhat would be a proper architectural design for supporting the required tiers of the application?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use a public subnet for the web tier and another public subnet for the database layer."
    }, {
        "id": "B",
        "markdown": "Use a public subnet for the web tier and a private subnet for the database layer."
    }, {
        "id": "C",
        "markdown": "Use a private subnet for the web tier and another private subnet for the database layer."
    }, {"id": "D", "markdown": "Use a private subnet for the web tier and a public subnet for the database layer."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe ideal setup is to ensure that the web server is hosted in the public subnet so that it can be accessed by users on the internet. The database server can be hosted in the private subnet.\n\nThe below diagram shows how this can be set up:\n\n\n\n \n\nFor more information on public and private subnets in AWS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to launch a number of EC2 instances to run Cassandra. There are large distributed and replicated workloads in Cassandra and you plan to launch instances using EC2 placement groups. The traffic should be distributed evenly across several partitions and each partition should contain multiple instances. Which strategy would you use when launching the placement groups?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Cluster placement strategy."}, {
        "id": "B",
        "markdown": "Spread placement strategy."
    }, {"id": "C", "markdown": "Partition placement strategy."}, {
        "id": "D",
        "markdown": "Network placement strategy."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nPlacement groups have the placement strategies of Cluster, Partition and Spread. With the Partition placement strategy, instances in one partition do not share the underlying hardware with other partitions. This strategy is suitable for distributed and replicated workloads such as Cassandra. Details please refer to https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-limitations-partition.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Cluster placement strategy puts instances together in an availability zone. This does not resolve the problem mentioned in the question.\n\tOption​ ​B ​is​ ​incorrect:​ Because Spread placement strategy puts instances across different racks. It does not group instances in a partition.\n\tOption​ ​C ​is​ CORRECT:​ With Partition placement strategy, instances in a partition have their own set of racks.\n\tOption​ ​D ​is​ ​incorrect:​ Because there is no Network placement strategy.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an infrastructure that consists of machines which send log information every 5 minutes. The number of these machines can run into thousands and it is required to ensure that the analysis of every log item is completed within 24 hours. What could be helpful in fulfilling this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Kinesis Data Streams with S3 to take the logs and store them in S3 for processing"
    }, {
        "id": "B",
        "markdown": "Launch an Elastic Beanstalk application to take the processing job of the logs."
    }, {
        "id": "C",
        "markdown": "Launch an EC2 instance with enough EBS volumes to consume the logs which can be used for further processing."
    }, {"id": "D", "markdown": "Use CloudTrail to store all the logs which can be analyzed at a later stage."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following:\n\nAmazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service. KDS can continuously capture gigabytes of data per second from thousands of sources such as website clickstreams, database event streams, financial transactions, social media feeds, IT logs, and location-tracking events.\n\nMake your streaming data available to multiple real-time analytics applications, to Amazon S3 or to AWS Lambda within 70 milliseconds of the data being collected.\n\nFor more information on Amazon Kinesis firehose, please visit the following URL:\n\n\n\thttps://aws.amazon.com/kinesis/data-streams/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application hosted in AWS allows users to upload videos to an S3 bucket. A user is required to be given access to upload some videos for a week based on the profile. How could this be accomplished in the best way possible?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create an IAM bucket policy to provide access for one week."}, {
        "id": "B",
        "markdown": "Create a pre-signed URL for each profile which will last for one week."
    }, {"id": "C", "markdown": "Create an S3 bucket policy to provide access for one week."}, {
        "id": "D",
        "markdown": "Create an IAM role to provide access for one week."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nPre-signed URLs are the perfect solution when you want to give temporary access to users for S3 buckets. So, whenever a new profile is created, you can create a pre-signed URL to ensure that the URL lasts for a week and allows users to upload the required objects.\n\nFor more information on pre-signed URLs, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are creating several EC2 instances for a new application. For a better performance of the application, both low network latency and high network throughput are required for the EC2 instances. All instances should be launched in a single availability zone. How would you configure this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Launch all EC2 instances in a placement group using a Cluster placement strategy."
    }, {"id": "B", "markdown": "Auto assign a public IP when launching the EC2 instances."}, {
        "id": "C",
        "markdown": "Launch EC2 instances in an EC2 placement group and select the Spread placement strategy."
    }, {
        "id": "D",
        "markdown": "When launching the EC2 instances, select an instance type that supports enhanced networking."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nThe Cluster placement strategy helps to achieve a low-latency and high throughput network. The reference is in https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-limitations-partition.\n\n\n\tOption​ ​A ​is​ CORRECT:​ The Cluster placement strategy can improve the network performance among EC2 instances. The strategy can be selected when creating a placement group:\n\n\n \n\n\n\tOption​ ​B ​is​ ​incorrect:​ Because the public IP cannot improve the network performance.\n\tOption​ ​C ​is​ ​incorrect:​ The Spread placement strategy is recommended when a number of critical instances should be kept separate between each other. This strategy should not be used in this scenario.\n\tOption​ ​D ​is​ ​incorrect:​ The description in the option is inaccurate. The correct method is creating a placement group with a suitable placement strategy.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "To improve the network performance, you launch a C5 EC2 Amazon Linux instance and enable enhanced networking by modifying the instance attribute with “aws ec2 modify-instance-attribute --instance-id instance_id --ena-support”. Which mechanism does the EC2 instance use to enhance the networking capabilities?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Intel 82599 Virtual Function (VF) interface."}, {
        "id": "B",
        "markdown": "Elastic Fabric Adapter (EFA)."
    }, {"id": "C", "markdown": "Elastic Network Adapter (ENA)."}, {
        "id": "D",
        "markdown": "Elastic Network Interface (ENI)."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nEnhanced networking has two mechanisms: Elastic Network Adapter (ENA) and Intel 82599 Virtual Function (VF) interface. For ENA, users can enable it with --ena-support. References can be found in\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking-ena.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because the option of “--ena-support” is not used by Intel 82599 Virtual Function (VF) interface.\n\tOption​ ​B ​is​ ​incorrect:​ Because Elastic Fabric Adapter (EFA) is not used for enhanced networking.\n\tOption​ ​C ​is​ CORRECT:​ In Amazon Linux, users can enable the enhanced networking attribute with the AWS CLI command mentioned in the question.\n\tOption​ ​D ​is​ ​incorrect:​ In this scenario, the mechanism used for enhanced networking should be Elastic Network Adapter (ENA) instead of Elastic Network Interface (ENI).\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company hosts 5 web servers in AWS. They want to ensure that Route53 can be used to route user traffic to random healthy web servers when they request for the underlying web application. Which routing policy should be used to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Simple"}, {"id": "B", "markdown": "Weighted"}, {
        "id": "C",
        "markdown": "Multivalue Answer"
    }, {"id": "D", "markdown": "Latency"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nThe AWS Documentation mentions the following to support this:\n\nIf you want to route traffic randomly to multiple resources such as web servers, you can create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record.\n\nFor example, suppose you manage an HTTP web service with a dozen web servers where each has its own IP address. No web server could handle all the traffic, but if you create a dozen multivalue answer records, Amazon Route 53 responds to DNS queries with up to eight healthy records in response to each DNS query. Amazon Route53 gives different answers to different DNS resolvers. If a web server becomes unavailable after a resolver caches a response, client software can try another IP address in the response.\n\nFor more information, please visit the following URL:\n\nhttps://aws.amazon.com/about-aws/whats-new/2017/06/amazon-route-53-announces-support-for-multivalue-answers-in-response-to-dns-queries/\n\n \n\n\n\tSimple routing policy – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website.\n\tLatency routing policy – Use when you have resources in multiple locations and you want to route traffic to the resource that provides the best latency.\n\tWeighted routing policy – Use to route traffic to multiple resources in proportions that you specify.\n\tMultivalue answer routing policy – Use when you want Route53 to respond to DNS queries with up to eight healthy records selected at random.\n\n\nFor more information on different routing policies, please visit the following URL\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/multivalue-versus-simple-policies\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as AWS Solutions Architect for a large banking organization. The requirement is that under normal business hours, there would always be 24 web servers up and running in a region (example: US - West (Oregon)). It will be a three-tier architecture connecting to the databases. The solution offered should be highly available, secure, cost-effective, and should be able to respond to the heavy requests during peak hours and tolerate up to one AZ failure.\n\nWhat would be the best solution to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "In a given region, use ELB behind two different AZs, each AZ with minimum or desired 24 web servers hosted in a public subnet and Multi-AZ database architecture in a private subnet."
    }, {
        "id": "B",
        "markdown": "In a given region, use ELB behind three different AZs, each AZ having ASG, with minimum or desired 12 web servers hosted in a public subnet and Multi-AZ database architecture in a private subnet."
    }, {
        "id": "C",
        "markdown": "In a given region, use ELB behind two different AZs, each AZ having ASG, with minimum or desired 12 web servers hosted in a public subnet and Multi-AZ database architecture in a private subnet."
    }, {
        "id": "D",
        "markdown": "In a given region, use ELB behind three different AZs, each AZ having ASG, with minimum or desired 8 web servers hosted in the public subnet and Multi-AZ database architecture in a different public subnet."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: B\n\n\n\tOption A is incorrect. Everything looks good, but the designed architecture does not look to be cost-effective as all the time 48 servers will be running and it does not have ASG to cater to additional load on servers. However, it is fault-tolerant to one AZ failure.\n\n\nBesides, it is always a good practice to use multiple AZs to make the application highly available.\n\n\n\tOption B is correct, as the solution needs to be tolerant up to one AZ failure. It means there are always 36 web servers to cater to the service requests. If one AZ fails then there will be 24 servers running all the time, and in case two AZ fails there will be 12 servers running. Also, ASG can be utilized to scale out the required number of servers.\n\n\n\n\tOption C is incorrect as it will not be a suitable solution. If there will be one AZ failure the other AZ will have only 12 web servers running. One might think ASG is always there to take care when the second AZ fails. But think of a scenario when other AZ fails and at the same time traffic is at its peak, then the application will not be further scalable and users might face slow responses.\n\tOption D is incorrect. Remember the design principle of keeping the databases in the private subnet. As this solution mentions to place databases in another public subnet, the data can be exposed over the internet, and hence it’s an insecure application.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to deploy a machine learning application in AWS EC2. The performance of inter-instance communication is very critical for the application and you want to attach a network device to the instance so that the performance can be greatly improved. Which option is the most appropriate to improve the performance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable enhanced networking feature in the EC2 instance."}, {
        "id": "B",
        "markdown": "Configure Elastic Fabric Adapter (EFA) in the instance."
    }, {"id": "C", "markdown": "Attach high speed Elastic Network Interface (ENI) in the instance."}, {
        "id": "D",
        "markdown": "Create Elastic File System (EFS) and mount the file system in the instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nWith Elastic Fabric Adapter (EFA), users can get a better performance if compared with enhanced networking (Elastic Network Adapter) or Elastic Network Interface. Check the differences between EFAs and ENAs in https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because with Elastic Fabric Adapter (EFA), users can achieve a better network performance than enhanced networking.\n\tOption​ ​B ​is​ CORRECT:​ Because EFA is the most suitable method for accelerating High Performance Computing (HPC) and machine learning application.\n\tOption​ ​C ​is​ ​incorrect:​ Because Elastic Network Interface (ENI) cannot improve the performance as required.\n\tOption​ ​D ​is​ ​incorrect:​ The Elastic File System (EFS) cannot accelerate the inter-instance communication.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an application that has been dockerized. You plan to deploy the application in an AWS ECS cluster. As the application gets configuration files from an S3 bucket, the ECS containers should have the AmazonS3ReadOnlyAccess permission. What is the correct method to configure the IAM permission?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add an environment variable to the ECS cluster configuration to allow the S3 read only access."
    }, {
        "id": "B",
        "markdown": "Add the AmazonS3ReadOnlyAccess permission to the IAM entity that creates the ECS cluster."
    }, {
        "id": "C",
        "markdown": "Modify the user data of ECS instances to assume an IAM role that has the AmazonS3ReadOnlyAccess permission."
    }, {
        "id": "D",
        "markdown": "Attach the AmazonS3ReadOnlyAccess policy to the ECS container instance IAM role. Use this role when creating the ECS cluster."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nECS containers have access to permissions that are supplied to the container instance role. Details please check the ECS documentation in https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance_IAM_role.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because ECS cluster uses the container instance IAM role instead of environment variables to control its permissions.\n\tOption​ ​B ​is​ ​incorrect:​ Because the IAM entity that creates the ECS cluster does not pass its permissions to the ECS cluster. You need to configure an IAM role and attach it to the ECS cluster.\n\tOption​ ​C ​is​ ​incorrect:​ This is not the correct method to configure IAM permissions for an ECS cluster.\n\tOption​ ​D ​is​ CORRECT:​ After the AmazonS3ReadOnlyAccess policy is attached to the IAM role, the ECS instances can use the role to get objects from S3. When launching an ECS cluster, you can associate the container instance role as follows:\n\n\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning on testing a large set of IoT enabled devices. These devices will be streaming data every second. A proper service needs to be chosen in AWS which could be used to collect and analyze these streams in real-time. Which AWS service would be the most appropriate for this purpose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use AWS EMR to store and process the streams."}, {
        "id": "B",
        "markdown": "Use AWS Kinesis to process and analyze the data."
    }, {"id": "C", "markdown": "Use AWS SQS to store the data."}, {
        "id": "D",
        "markdown": "Use SNS to store the data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following on Amazon Kinesis:\n\nAmazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost-effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. \n\nFor more information on Amazon Kinesis, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/kinesis/\n\n\n \n\n\n\tOption A is incorrect. Amazon EMR can be used to process applications with data-intensive workloads.\n\tOption B is correct. Amazon Kinesis can be used to store, process, and analyze real-time streaming data.\n\tOption C is incorrect. SQS is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications.\n\tOption D is incorrect. SNS is a flexible, fully managed pub/sub messaging and mobile notifications service for coordinating the delivery of messages to subscribing to endpoints and clients.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a set of EC2 Instances hosted in AWS. The states of these instances need to be monitored and each state needs to be changed when a metric breaches a threshold value. Which step could be helpful to fulfill this requirement? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use CloudWatch logs to store the state change of the instances."}, {
        "id": "B",
        "markdown": "Create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance"
    }, {"id": "C", "markdown": "Use SQS to trigger a record to be added to a DynamoDB table."}, {
        "id": "D",
        "markdown": "Use AWS Lambda to store a change record in a DynamoDB table."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A and B\n\nCreate Alarms That Stop, Terminate, Reboot, or Recover an Instance \n\nUsing Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot or recover your instances. You can use the stop or terminate actions to save money when you no longer need an instance. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.\n\nThe AWSServiceRoleForCloudWatchEvents service-linked role enables AWS to perform alarm actions on your behalf. The first time you create an alarm in the AWS Management Console, the IAM CLI, or the IAM API, CloudWatch creates the service-linked role for you.\n\nThere are a number of scenarios in which you might want to automatically stop or terminate your instance. For example, you might have instances dedicated to batch payroll processing jobs or scientific computing tasks that run for a period of time and then complete their work. Rather than letting those instances sit idle (and accrue charges), you can stop or terminate them, which could help you to save money. The main difference between using the stop and the terminate alarm actions is that you can easily restart a stopped instance if you need to run it again later, and you can keep the same instance ID and root volume. However, you cannot restart a terminated instance instead, you must launch a new instance.\n\nYou can add the stop, terminate, reboot or recover actions to any alarm that is set on an Amazon EC2 per-instance metric, including basic and detailed monitoring metrics provided by Amazon CloudWatch (in the AWS/EC2 namespace), as well as any custom metrics that include the InstanceId dimension, as long as its value refers to a valid running Amazon EC2 instance.\n\nFor more information on Amazon EC2, please visit the following URL: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-ug.pdf\n\n \n\nBreakdown\n\n\n\tOption A is correct. Using Cloudwatch logs collect, store, view, and search logs from AWS and non-AWS resources.\n\tOption B is correct. CloudWatch alarms are used to trigger notifications for any metric. Alarms can go to auto-scaling, EC2 actions(stop, terminate, recover, or reboot) and SNS notifications.\n\tOption C is incorrect as SQS cannot be used for monitoring.\n\tOption D is incorrect as AWS Lambda cannot be used for monitoring.\n\n\nPlease refer the below link for more information on Cloudwatch:\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatch-Events-Monitoring-CloudWatch-Metrics.html\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/acw-ug.pdf\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have instances hosted in a private subnet in a VPC. There is a need for instances to download updates from the Internet. As an architect, what change would you suggest to the IT Operations team that would also be the most efficient and secure?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a new public subnet and move the instance to that subnet."}, {
        "id": "B",
        "markdown": "Create a new EC2 Instance to download the updates separately and then push them to the required instance."
    }, {
        "id": "C",
        "markdown": "Use a NAT Gateway to allow the instances in the private subnet to download the updates."
    }, {
        "id": "D",
        "markdown": "Create a VPC link to the Internet to allow the instances in the private subnet to download the updates."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe NAT Gateway is an ideal option to ensure that instances in the private subnet have the ability to download updates from the Internet.\n\nFor more information on the NAT Gateway, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html\n\n\n \n\n\n\tOption A is incorrect because there may be a security reason for keeping these instances in the private subnet. (for example DB instances)\n\tOption B is incorrect. The instances in the private subnet may be running various applications and DB instances. Hence, it is not advisable or practical for an EC2 Instance to download the updates separately and then push them to the required instance.\n\tOption D is incorrect because a VPC link is not used to connect to the Internet.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an S3 bucket that receives photos uploaded by customers. When an object is uploaded, an event notification is sent to an SQS queue with the object details. You also have an ECS cluster that gets messages from the queue to do the batch processing. The queue size may change greatly depending on the number of incoming messages and backend processing speed. Which metric would you use to scale up/down the ECS cluster capacity?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The number of messages in the SQS queue."}, {
        "id": "B",
        "markdown": "Memory usage of the ECS cluster."
    }, {"id": "C", "markdown": "Number of objects in the S3 bucket."}, {
        "id": "D",
        "markdown": "Number of containers in the ECS cluster."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nIn this scenario, SQS queue is used to store the object details which is a highly scalable and reliable service. ECS is ideal to perform batch processing and it should scale up or down based on the number of messages in the queue. Details please check https://github.com/aws-samples/ecs-refarch-batch-processing.\n\n\n\tOption​ ​A ​is​ CORRECT:​ Users can configure a CloudWatch alarm based on the number of messages in the SQS queue and notify the ECS cluster to scale up or down using the alarm.\n\tOption​ ​B ​is​ ​incorrect:​ Because the memory usage may not be able to reflect the workload.\n\tOption​ ​C ​is​ ​incorrect:​ Because the number of objects in S3 cannot determine if the ECS cluster should change its capacity.\n\tOption​ ​D ​is​ ​incorrect:​ Because the number of containers cannot be used as a metric to trigger an auto-scaling event.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an EC2 instance in the AWS us-east-1 region. The application in the instance needs to access a DynamoDB table that is located in the AWS us-east-2 region. The connection must be private without leaving the Amazon network and the instance should not use any public IP for communication. How would you configure this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Configure an inter-region VPC endpoint for the DynamoDB service."}, {
        "id": "B",
        "markdown": "Configure inter-region VPC peering and create a VPC endpoint for DynamoDB in us-east-2."
    }, {
        "id": "C",
        "markdown": "Create an inter-region VPC peering connection between us-east-1 and us-east-2."
    }, {"id": "D", "markdown": "There is no way to setup the private inter-region connections."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nFor the private connections between regions, VPC peering should be used. Then VPC endpoint allows users to privately access the DynamoDB service. Please check the reference in https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because you cannot configure an inter-region VPC endpoint directly.\n\tOption​ ​B ​is​ CORRECT:​ With inter-region VPC peering and VPC endpoint (PrivateLink), the EC2 instance can communicate with the DynamoDB table privately even if they belong to different regions.\n\tOption​ ​C ​is​ ​incorrect:​ This option does not mention the usage of VPC endpoint.\n\tOption​ ​D ​is​ ​incorrect:​ Because VPC peering supports the inter-region connections.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have planned to host a web application on AWS. You create an EC2 Instance in a public subnet which needs to connect to an EC2 Instance that will host an Oracle database. Which steps would ensure a secure setup? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Place the EC2 Instance with the Oracle database in the same public subnet as the Webserver for faster communication."
    }, {
        "id": "B",
        "markdown": "Place the ec2 instance in a public subnet and the oracle database in a private subnet"
    }, {
        "id": "C",
        "markdown": "Create a database Security group which allows incoming traffic only from the Web server's security group."
    }, {"id": "D", "markdown": "Ensure that the database security group allows incoming traffic from 0.0.0.0/0"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nThe best and most secure option is to place the database in a private subnet. The below diagram from AWS Documentation shows this setup. Also, you ensure that access is not allowed from all sources but only from the web servers.\n\n\n\n \n\nFor more information on this type of setup, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n\n \n\n\n\tOption A is incorrect because as per the best practice guidelines, DB instances are placed in Private subnets and allowed to communicate with web servers in the public subnet. \n\tOption D is incorrect because allowing all incoming traffic from the Internet to the DB instance is a security risk.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An EC2 Instance hosts a Java-based application that accesses a DynamoDB table. This EC2 Instance is currently serving production users. What would be a secure way for the EC2 Instance to access the DynamoDB table?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use IAM Roles with permissions to interact with DynamoDB and assign it to the EC2 Instance."
    }, {
        "id": "B",
        "markdown": "Use KMS Keys with the right permissions to interact with DynamoDB and assign it to the EC2 Instance."
    }, {
        "id": "C",
        "markdown": "Use IAM Access Keys with the right permissions to interact with DynamoDB and assign it to the EC2 Instance."
    }, {
        "id": "D",
        "markdown": "Use IAM Access Groups with the right permissions to interact with DynamoDB and assign it to the EC2 Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAlways assign a role to the EC2 Instance to ensure secure access to AWS resources from EC2 Instances.\n\nFor more information on IAM Roles, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\n\n\n \n\nAn IAM role is similar to a user; it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, an IAM role does not have standard long-term credentials (password or access keys) associated with it. Instead, if a user assumes a role, temporary security credentials are created dynamically and provided to the user.\n\nYou can use roles to delegate access to users, applications, or services that normally don't have access to your AWS resources.\n\nNote: \n\nYou can attach IAM role to the existing EC2 instance. To know more, please visit the following URL:\n\n\n\thttps://aws.amazon.com/about-aws/whats-new/2017/02/new-attach-an-iam-role-to-your-existing-amazon-ec2-instance/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an RDS instance in a VPC. In the same AWS account, there is an EC2-Classic instance that does not belong to any VPC. The EC2 instance needs to communicate with the RDS instance using its private IPv4 address. Which method would you use?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Modify the security group of the RDS instance to allow the incoming traffic from the EC2-Classic instance."
    }, {
        "id": "B",
        "markdown": "Attach a security group to the EC2 instance to allow all outgoing traffic."
    }, {"id": "C", "markdown": "Enable PrivateLink for the VPC and link the EC2-Classic instance."}, {
        "id": "D",
        "markdown": "Enable ClassicLink for the VPC and link the EC2 instance to the VPC."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nFor the communication between EC2-Classic instance and resources in VPC, ClassicLink should be used. Please check https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html#classiclink-basics.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Even if the security group is modified, the EC2-Classic instance still cannot talk with the RDS instance in the VPC.\n\tOption​ ​B ​is​ ​incorrect:​ Same as option A.\n\tOption​ ​C ​is​ ​incorrect:​ Because PrivateLink is used for resources within the VPC. It is not suitable for EC2-Classic instances.\n\tOption​ ​D ​is​ CORRECT:​ Because ClassicLink is the correct method to link EC2-Classic instances to VPC resources. Check the above link for how to work with ClassicLink.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has set up an application in AWS that interacts with DynamoDB. It is required that when an item is modified in a DynamoDB table, immediate entry is made to the associating application. How can this be accomplished? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Setup CloudWatch to monitor the DynamoDB table for changes. Then trigger a Lambda function to send the changes to the application."
    }, {
        "id": "B",
        "markdown": "Setup CloudWatch logs to monitor the DynamoDB table for changes. Then trigger AWS SQS to send the changes to the application."
    }, {"id": "C", "markdown": "Use DynamoDB streams to monitor the changes to the DynamoDB table."}, {
        "id": "D",
        "markdown": "Trigger a lambda function to make an associated entry in the application as soon as the DynamoDB streams are modified."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C and D\n\nWhen you enable DynamoDB Streams on a table, you can associate the stream ARN with a Lambda function that you write. Immediately after an item in the table is modified, a new record appears in the table's stream. AWS Lambda polls the stream and invokes your Lambda function synchronously when it detects new stream records. Since our requirement is to have an immediate entry made to an application in case an item in the DynamoDB table is modified, a lambda function is also required. \n\nLet us try to analyze this with an example:\n\nConsider a mobile gaming app that writes to a GamesScores table. Whenever the top score of the Game Scores table is updated, a corresponding stream record is written to the table's stream. This event could then trigger a Lambda function that posts a Congratulatory message on a Social media network handle.\n\nDynamoDB streams can be used to monitor the changes to a DynamoDB table.\n\nAWS Documentation mentions the following:\n\nA DynamoDB stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.\n\nFor more information on DynamoDB streams, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html\n\n\n\nNote: \nDynamoDB is integrated with Lambda so that you can create triggers to events in DynamoDB Streams. \n\nIf you enable DynamoDB Streams on a table, you can associate the stream ARN with a Lambda function that you write. Immediately after an item in the table is modified, a new record appears in the table's stream. \n\n \n\nAWS Lambda polls the stream and invokes your Lambda function synchronously when it detects new stream records. Since our requirement states that an item modified in a DynamoDB table causes an immediate entry to an associating application, a lambda function is also required.\n\nFor more information on DynamoDB streams Lambda, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html \n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Consultant for an E-Commerce organization. The organization is planning to migrate to a managed database service using Amazon RDS. To avoid any business loss due to any deletion in the database, the management team is looking for a backup process which will restore Database at any specific time during the last month. Which action should be performed as a part of Amazon RDS Automated backup process?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS performs storage volume snapshot of database instance during the backup window once a day, captures transactions logs every 5 minutes, and store in S3 buckets."
    }, {
        "id": "B",
        "markdown": "AWS performs a full snapshot of the database every 12 hours during the backup window, captures transactions logs throughout the day, and store in S3 buckets."
    }, {
        "id": "C",
        "markdown": "AWS performs full daily snapshot during the backup window. Given this doesnt provide point in time restoration it does not meet the requirements."
    }, {
        "id": "D",
        "markdown": "AWS performs storage volume snapshot of the database instance every 12 hours during the backup window, captures transactions logs throughout the day, store in S3 buckets."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nDuring automated backup, Amazon RDS performs a storage volume snapshot of the entire Database Instance. Also, it captures transaction logs every 5 minutes. To restore a DB instance at a specific point of time, a new DB instance is created using this DB snapshot.\n\n\n\tOption B is incorrect as Database Snapshots are the manual backups initiated by users, not by AWS. These Backups can be performed at any time.\n\tOption C is incorrect as Database Snapshots are the manual backups initiated by users, not by AWS.\n\tOption D is incorrect as AWS performs storage volume snapshot on a daily basis, not every 12 hours.\n\n\nFor more information on Amazon RDS Automated backup process  and Restoring a DB instance to a specified time, refer to the following URL:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You configure an Amazon S3 bucket as the origin for a new CloudFront distribution. You need to restrict access so that users cannot view the files by directly using the S3 URLs. The files should be only fetched through the CloudFront URL. Which method is the most appropriate?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configure Signed URLs to serve private content by using CloudFront."
    }, {"id": "B", "markdown": "Configure Signed Cookies to restrict access to S3 files."}, {
        "id": "C",
        "markdown": "Create the origin access identity (OAI) and associate it with the distribution."
    }, {
        "id": "D",
        "markdown": "Configure the CloudFront web distribution to ask viewers to use HTTPS to request S3 objects."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nIn this scenario, users should only access S3 files through CloudFront instead of S3 URLs. Option C is the correct option. About how to work with origin access identities, please check https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because Signed URLs are used to restrict access to files in CloudFront edge caches. It cannot prevent users from fetching files directly through S3 URLs. Check https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html.\n\tOption​ ​B ​is​ ​incorrect:​ Same reason as option A.\n\tOption​ ​C ​is​ CORRECT:​ Because you can configure the CloudFront origin to restrict bucket access through OAI:\n\n\n\n\n\n\tOption​ ​D ​is​ ​incorrect:​ With HTTPS, connections are encrypted between CloudFront and viewers. However, it does not restrict access to the S3 content.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As a Solutions Architect for a multinational organization having more than 150000 employees, management has decided to implement a real-time analysis for their employees' time spent in offices across the globe. You are tasked to design an architecture that will receive the inputs from 10000+ sensors with swipe machine sending in and out data across the globe, each sending 20KB data every 5 Seconds in JSON format. The application will process and analyze the data and upload the results to dashboards in real-time.\n\nOther application requirements will include the ability to apply real-time analytics on the captured data, processing of captured data will be parallel and durable, the application must be scalable as per the requirement as the load varies and new sensors are added or removed at various facilities. The analytic processing results are stored in a persistent data storage for data mining. \n\nWhat combination of AWS services would be used for the above scenario?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use EMR to copy the data coming from Swipe machines into DynamoDB and make it available for analytics"
    }, {
        "id": "B",
        "markdown": "Use Amazon Kinesis Streams to ingest the Swipe data coming from sensors, Custom Kinesis Streams Applications to analyze the data and then move analytics outcomes to RedShift using AWS EMR"
    }, {
        "id": "C",
        "markdown": "Use SQS to receive the data coming from sensors, Kinesis Firehose to analyze the data from SQS, then save the results to a Multi-AZ RDS instance"
    }, {
        "id": "D",
        "markdown": "Use Amazon Kinesis Streams to ingest the sensors’ data, custom Kinesis Streams applications to analyze the data, and move analytics outcomes to RDS using AWS EMR"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\n\n\t\n\tOption A is incorrect. EMR is not for receiving the real-time data from thousands of sources, EMR is mainly used for Hadoop ecosystem-based data used for Big data analysis.\n\t\n\n\n \n\n\n\t\n\tOption B is correct as the Amazon Kinesis streams are used to read the data from thousands of sources like social media, survey-based data, etc. The Kinesis streams can be used to analyze the data and can feed it using AWS EMR to the analytics-based database like RedShift which works on OLAP.\n\t\n\n\n \n\n\n\tOption C is incorrect, SQS cannot be used to read the real-time data from thousands of sources. Besides, the Kinesis Firehose is used to ship the data to other AWS service, not for the analysis. And finally, RDS is again an OLTP based database.\n\n\n \n\n\n\tOption D is incorrect as the AWS EMR can read large amounts of data, however, RDS is a transactional database that works based on the OLTP. Thus, it cannot store the analytical data.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a local data center on premise which stores archived files. The total amount of the files is about 70TB. The data needs to be transferred to Amazon Simple Storage Service (S3). After the data transfer is finished, the local data center will not be used. Which solution is the most appropriate?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Direct Connect."}, {"id": "B", "markdown": "AWS Snowball."}, {
        "id": "C",
        "markdown": "Amazon S3 Transfer Acceleration."
    }, {"id": "D", "markdown": "AWS Global Accelerator."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nAWS Snowball has 80TB and 50TB models. The 80TB model is suitable to transfer 70TB of data to AWS. Please refer to https://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because Direct Connect establishes a network connection from on premises to an AWS Region. It is not suitable to move 70TB of data.\n\tOption​ ​B ​is​ CORRECT:​ Because AWS Snowball is a data transport solution that accelerates moving terabytes to petabytes of data to AWS.\n\tOption​ ​C ​is​ ​incorrect:​ S3 Transfer Acceleration uses Amazon CloudFront’s globally distributed edge locations. It does not help in this scenario.\n\tOption​ ​D ​is​ ​incorrect:​ Because AWS Global Accelerator improves availability and performance for applications, which does not help on the data transfer.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have designed an application that uses AWS resources, such as S3 to operate and store users’ documents. You currently use Cognito identity pools and user pools. To increase usage and ease of signing up, you decide that adding social identity federation is the best path forward.\n\nHow would you differentiate the Cognito identity pool and the federated identity providers (e.g. Google)?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "They are the same and just called different things"}, {
        "id": "B",
        "markdown": "First, you sign-in via Cognito then through a federated site, like Google"
    }, {
        "id": "C",
        "markdown": "Federated identity providers and identity pools are used to authenticate services"
    }, {
        "id": "D",
        "markdown": "Sign-in via AWS Cognito User Pool and sign-in via AWS Cognito Identity Pool are independent of one another"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\n\n\tOption D is correct. Sign-in through a third party (federation) is available in Amazon Cognito user pools. This feature is independent of the federation through Amazon Cognito identity pools (federated identities).\n\tOption A is incorrect. Cognito identity pool and the federated identity providers are separate, independent authentication methods.\n\tOption B is incorrect. Only one log-in event is needed, not two.\n\tOption C is incorrect. Identity providers authenticate users, not authenticate services.\n\n\nFor more information, refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html\n\thttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\n\thttps://aws.amazon.com/articles/web-identity-federation-with-mobile-applications/\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-getting-started.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a web application hosted on an EC2 Instance in AWS which is being accessed by users across the globe. The Operations team has been receiving support requests about extreme slowness from users in some regions. What can be done to the architecture to improve the response time for these users?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add more EC2 Instances to support the load."}, {
        "id": "B",
        "markdown": "Change the Instance type to a higher instance type."
    }, {"id": "C", "markdown": "Add Route 53 health checks to improve the performance."}, {
        "id": "D",
        "markdown": "Place the EC2 Instance behind CloudFront."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Documentation mentions the following:\n\nAmazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay) so that content is delivered with the best possible performance.\n\nFor more information on Amazon CloudFront, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html\n\n \n\n\n\tOption A is incorrect. The latency issue is experienced by people from certain parts of the world only. So, increasing the number of EC2 Instances or increasing the instance size will not make much difference. \n\tOption B is incorrect.  The latency issue is experienced by people from certain parts of the world only. So, changing the Instance type to a higher instance type will not make much difference.\n\tOption C is incorrect. Route 53 health checks are meant to see whether the instance status is healthy or not. \n\n\nSince this case deals with responding to requests from users, we do not have to worry about this. However, for improving latency issues, CloudFront is a good solution.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You currently have your EC2 instances running in multiple availability zones. You have a NAT gateway defined for your private instances and you want to make this highly available. How could this be accomplished?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create another NAT Gateway and place it behind an ELB."}, {
        "id": "B",
        "markdown": "Create a NAT Gateway in another Availability Zone."
    }, {"id": "C", "markdown": "Create a NAT Gateway in another region."}, {
        "id": "D",
        "markdown": "Use Auto Scaling groups to scale the NAT Gateway."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nIf you have resources in multiple Availability Zones and they share one NAT Gateway, in the event that the NAT Gateway’s Availability Zone is down, resources in the other Availability Zones lose internet access. To create an Availability Zone-independent architecture, create a NAT Gateway in each Availability Zone and configure your routing to ensure that resources use the NAT Gateway in the same Availability Zone.\n\n \n\nFor more information on the NAT Gateway, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to have a fully managed data store in AWS. It should be a compatible MySQL database, which is an application requirement. Which AWS database engine could be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS RDS"}, {"id": "B", "markdown": "AWS Aurora"}, {
        "id": "C",
        "markdown": "AWS DynamoDB"
    }, {"id": "D", "markdown": "AWS Redshift"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nAmazon Aurora (Aurora) is a fully managed, MySQL and PostgreSQL compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.\n\nFor more information on AWS Aurora, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.html\n\n\n \n\nNote:\n\nRDS is a generic service to provide Relational Database service which supports 6 database engines. They are Aurora, MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server. Our question is to select MySQL compatible database from the options provided. Out of the given options, Amazon Aurora is a MySQL and PostgreSQL compatible enterprise-class database.\n\nHence Option B is the correct answer.\n\n**If you see the question \"A company wants to have a fully managed data store in AWS. It should be a compatible MySQL database, which is an application requirement. Which database engine could be used for this purpose?\", We have to select the database engine. RDS is not the correct answer because RDS is not a database engine. MySQL is one of the offerings of the RDS service. This question is about understanding the terminology.**\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Solutions Architect is designing an online shopping application running in a VPC on EC2 Instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application tier must read and write data to a customer-managed database cluster. There should be no access to the database from the Internet but the cluster must be able to obtain software patches from the Internet. Which VPC design meets these requirements?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Public subnets for both the application tier and the database cluster."
    }, {
        "id": "B",
        "markdown": "Public subnets for the application tier and private subnets for the database cluster."
    }, {
        "id": "C",
        "markdown": "Public subnets for both application tier and NAT Gateway and private subnets for the database cluster."
    }, {
        "id": "D",
        "markdown": "Private subnets for the application tier and private subnets for both the database cluster and NAT Gateway"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe following diagram from AWS Documentation shows the right setup for this scenario: \n\n \n\nWe always need to keep NAT gateway on public Subnet only, because it needs to communicate the Internet. \n\nAWS says that \"To create a NAT gateway, you must specify the public subnet in which the NAT gateway should reside. You must also specify an Elastic IP address to associate with the NAT gateway when you create it. After you've created a NAT gateway, you must update the route table associated with one or more of your private subnets to point Internet-bound traffic to the NAT gateway. This enables instances in your private subnets to communicate with the internet.\"\n\n \n\nFor more information on this setup, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html\n\n\n \n\nNOTE:\n\nHere the requirement is that  \"There should be no access to the database from the Internet, but the cluster must be able to obtain software patches from the Internet.\"\n\n1) There should be no access to the database from the Internet.\nTo achieve this step, we have to launch the database inside the private subnet.  \n\n2) But the cluster must be able to obtain software patches from the Internet.\nFor this, we have to create NAT Gateway inside the Public Subnet. Because the subnet with internet gateway attached is known as Public Subnet. Through the NAT Gateway, a database inside the Private subnet can access the internet. Option D is saying that \"Use private subnet for NAT gateway\".\n\nOption C includes these discussed Points and thus, it's a perfect answer.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "It is expected that only certain specified customers can upload images to the S3 bucket for a certain period of time. What would you suggest as an architect to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a secondary S3 bucket. Then, use an AWS Lambda to sync the contents to the primary bucket."
    }, {"id": "B", "markdown": "Use pre-signed URLs for uploading the images."}, {
        "id": "C",
        "markdown": "Use ECS Containers to upload the images."
    }, {"id": "D", "markdown": "Upload the images to SQS and then push them to the S3 bucket."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe S3 bucket owner can create Pre-Signed URLs to upload the images to S3.\n\nFor more information on Pre-Signed URLs, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\n\n\n \n\n\n\tOption A is incorrect. Since Amazon has provided us with an inbuilt function for this requirement, using this option is expensive and time-consuming.  As a Solution Architect, you are supposed to pick the best and cost-effective solution.\n\tOption C is incorrect. ECS is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster.\n\tOption D is incorrect. SQS is a message queue service used by distributed applications to exchange messages through a polling model and not through a push mechanism.\n\n\n \n\nNote: \n\nThis question is based on the scenario where we can use the pre-signed URL. \n\nYou need to understand about pre-signed URL - which contains the user login credentials particular resources, such as S3 in this scenario. And user must have the permission enabled that other application can use the credential to upload the data (images) in S3 buckets. \n\nAWS Definition:\n\n\"A pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permissions to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.\n\nAll objects and buckets by default are private. The pre-signed URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a pre-signed URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and expiration date and time. The pre-signed URLs are valid only for the specified duration.\"\n\n \n\nFor more information, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company requires to use the AWS RDS service to host a MySQL database. This database is going to be used for production purposes and is expected to experience a high number of read/write activities. Which EBS volume type would be ideal for this database?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "General Purpose SSD"}, {
        "id": "B",
        "markdown": "Provisioned IOPS SSD"
    }, {"id": "C", "markdown": "Throughput Optimized HDD"}, {"id": "D", "markdown": "Cold HDD"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nThe below snapshot from AWS Documentation shows that the ideal storage option in this scenario is the Provisioned IOPS SSD since it provides a high number of IOPS for the underlying database.\n\n\n\n \n\nFor more information on EBS volume types, please refer to the URL below.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You own a MySQL RDS instance in AWS Region us-east-1. The instance has a Multi-AZ instance in another availability zone for high availability. As business grows, there are more and more clients coming from Europe (eu-west-2) and most of the database workload is read-only. What is the proper way to reduce the load on the source RDS instance?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a snapshot of the instance and launch a new instance in eu-west-2."
    }, {
        "id": "B",
        "markdown": "Promote the Multi-AZ instance to be a Read Replica and move the instance to eu-west-2 region."
    }, {
        "id": "C",
        "markdown": "Configure a read-only Multi-AZ instance in eu-west-2 as Read Replicas cannot span across regions."
    }, {"id": "D", "markdown": "Create a Read Replica in the AWS Region eu-west-2."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nRead Replica should be used to share the read workload of the source DB instance. Read Replica can also be configured in a different AWS region. Refer to https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because Read Replica should be configured to share the read traffic. You should not launch a totally new instance.\n\tOption​ ​B ​is​ ​incorrect:​ Because a Multi-AZ instance cannot be promoted to be a Read Replica.\n\tOption​ ​C ​is​ ​incorrect:​ Because a Read Replica can be launched in another region for RDS MySQL.\n\tOption​ ​D ​is​ CORRECT:​ Users can quickly configure a Read Replica in another region:\n\n\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a set of web servers. It is required to ensure that all the logs from these web servers can be analyzed in real-time for any sort of threat detection. What could be the right choice in this regard?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Upload all the logs to the SQS Service and then use EC2 Instances to scan the logs."
    }, {"id": "B", "markdown": "Upload the logs to Amazon Kinesis and then analyze the logs accordingly."}, {
        "id": "C",
        "markdown": "Upload the logs to CloudTrail and then analyze the logs accordingly."
    }, {"id": "D", "markdown": "Upload the logs to Glacier and then analyze the logs accordingly."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation provides the following information to support this requirement:\n\nAmazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to process streaming data cost-effectively at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. \n\nFor more information on Amazon Kinesis, please refer to the below URL:\n\nhttps://aws.amazon.com/kinesis/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You currently have the following architecture in AWS:\n\na. A couple of EC2 Instances located in us-west-2a\n\nb. The EC2 Instances are launched via an Auto Scaling group.\n\nc.  The EC2 Instances sit behind a Classic ELB. \n\nWhich additional step would ensure that the above architecture conforms to a well-architected framework?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Convert the Classic ELB to an Application ELB."}, {
        "id": "B",
        "markdown": "Add an additional Auto Scaling Group."
    }, {"id": "C", "markdown": "Add additional EC2 Instances to us-west-2a."}, {
        "id": "D",
        "markdown": "Add or spread existing instances across multiple Availability Zones."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation provides the following information to support this concept:\n\nBalancing resources across Availability Zones is a best practice for well-architected applications, as this greatly increases aggregate system availability. Auto Scaling automatically balances EC2 instances across zones when you configure multiple zones in your Auto Scaling group settings. Auto Scaling always launches new instances such that they are balanced between zones as evenly as possible across the entire fleet. \n\nFor more information on managing resources with Auto Scaling, please refer to the URL below.\n\nhttps://aws.amazon.com/blogs/compute/fleet-management-made-easy-with-auto-scaling/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company manages an application that currently allows users to upload images to an S3 bucket. These images are picked up by EC2 Instances for processing and then placed in another S3 bucket. You need an area where the metadata for these images can be stored. What would be an ideal data store for this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Redshift"}, {"id": "B", "markdown": "AWS Glacier"}, {
        "id": "C",
        "markdown": "AWS DynamoDB"
    }, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\n\n\tOption A is incorrect because this is normally used for petabyte based storage.\n\tOption B is incorrect because this is used for archive storage.\n\tOption C is correct. AWS DynamoDB is the best, light-weight and durable storage option for metadata.\n\tOption D is incorrect because this used for messaging purposes.\n\n\nFor more information on DynamoDB, please refer to the URL below.\n\nhttps://aws.amazon.com/dynamodb/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application team needs to quickly provision a development environment consisting of a web and database layer. What would be the quickest and most ideal way to get this set up in place?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create Spot Instances and install the web and database components."
    }, {"id": "B", "markdown": "Create Reserved Instances and install the web and database components."}, {
        "id": "C",
        "markdown": "Use AWS Lambda to create the web components and AWS RDS for the database layer."
    }, {"id": "D", "markdown": "Use Elastic Beanstalk to quickly provision the environment."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Documentation mentions the following:\n\nWith Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications. AWS Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.\n\n \n\nFor more information on AWS Elastic Beanstalk, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html\n\n\n \n\n\n\tOption A is incorrect. Amazon EC2 Spot instances are spare compute capacity in the AWS cloud available to you at steep discounts compared to On-Demand prices. \n\tOption B is incorrect. A Reserved Instance is a reservation of resources and capacity, for either one or three years for a particular Availability Zone within a region. \n\tOption C is incorrect. AWS Lambda is a compute service that makes it easy for you to build applications that respond quickly to new information and not for provisioning a new environment.\n\n\n \n\nCurrently, the Elastic Beanstalk environment supports the following configurations:\n\n\n\n \n\nIt supports RDS. \n \n\nDatabase Configuration Setting\n\n\nAWS Elastic Beanstalk provides connection information to your instances by setting environment properties for the database hostname, username, password, table name, and port. When you add a database to your environment, its lifecycle is tied to your environments.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Third-party sign-in (Federation) has been implemented in your web application to allow users who need access to AWS resources. Users have been successfully logging in using Google, Facebook, and other third-party credentials. Suddenly, their access to some AWS resources has been restricted. What is the most likely cause of the restricted use of AWS resources?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "IAM policies for resources were changed, thereby restricting access to AWS resources"
    }, {
        "id": "B",
        "markdown": "Federation protocols are used to authorize services and need to be updated"
    }, {"id": "C", "markdown": "AWS changed the services allowed to be accessed via federated login"}, {
        "id": "D",
        "markdown": "The identity providers no longer allow access to AWS services"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\n\n\tOption A is correct. When IAM policies are changed, they can impact the user experience and services they can connect to.\n\tOption B is incorrect. Federation is used to authenticate users, not to authorize services.\n\tOption C is incorrect. Federation is used to authenticate users, not to authorize services.\n\tOption D is incorrect. The identity providers don’t have the capability to authorize services; they authenticate users.\n\n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html\n\n\n\n\thttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\n\thttps://aws.amazon.com/articles/web-identity-federation-with-mobile-applications/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application that stores images and thumbnails on S3. The thumbnail needs to be available for download immediately. Additionally, both the images and thumbnails are not accessed frequently. What would be the cost-efficient storage option that meets the above-mentioned requirements?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Glacier with Expedited Retrievals."}, {
        "id": "B",
        "markdown": "Amazon S3 Standard Infrequent Access"
    }, {"id": "C", "markdown": "Amazon EFS"}, {"id": "D", "markdown": "Amazon S3 Standard"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon S3 Infrequent access is perfect if you want to store data that is not frequently accessed. It is more cost-effective than Option D (Amazon S3 Standard). If you choose Amazon Glacier with Expedited Retrievals, you defeat the whole purpose of the requirement, because of its increased cost.\n\n \n\nFor more information on AWS Storage Classes, please visit the following URL:\n\n\n\thttps://aws.amazon.com/s3/storage-classes/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A security audit discovers that one of your RDS MySQL instances is not encrypted. The instance has a Read Replica in the same AWS region which is also not encrypted. You need to fix this issue as soon as possible. What is the proper way to add encryption to the instance and its replica?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Copy a DB snapshot and encrypt the snapshot. Restore a new DB instance from the encrypted snapshot and add a Read Replica."
    }, {
        "id": "B",
        "markdown": "Encrypt the DB instance. Launch a new Read Replica and the replica is encrypted automatically."
    }, {
        "id": "C",
        "markdown": "Create a DB snapshot and encrypt the snapshot. Launch a new instance and its Read Replica from the snapshot."
    }, {
        "id": "D",
        "markdown": "Promote the Read Replica to be a standalone instance and encrypt it. Add a new Read Replica to the standalone instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nExisting unencrypted RDS instances and their snapshots cannot be encrypted. Users can only enable encryption for an RDS DB instance when they create it. The limitations can be found in\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html.\n\n\n\tOption​ ​A ​is​ CORRECT:​ Because you can encrypt a copy of an unencrypted DB snapshot. Then the new RDS instance launched from the snapshot and its Read Replica are encrypted.\n\tOption​ ​B ​is​ ​incorrect:​ Because you cannot encrypt an unencrypted RDS instance directly.\n\tOption​ ​C ​is​ ​incorrect:​ Because you cannot encrypt an unencrypted DB snapshot according to the above reference.\n\tOption​ ​D ​is​ ​incorrect:​ Because an unencrypted DB Read Replica cannot be encrypted. The correct method is to launch a new instance from an encrypted DB snapshot.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an application hosted on AWS consisting of EC2 Instances launched via an Auto Scaling Group. You notice that the EC2 Instances are not scaling on demand. Which checks should be done to ensure that the scaling occurs as expected? (Select 2)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that the right metrics are being used to trigger the scale-out."
    }, {
        "id": "B",
        "markdown": "Check your scaling policies to see whether more than one policy is triggered by an event."
    }, {"id": "C", "markdown": "Ensure that AutoScaling health checks are being used."}, {
        "id": "D",
        "markdown": "Ensure that you are using Load Balancers."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and B\n\nThere could be a number of reasons as mentioned in AWS Documentation but only options A and B are applicable from the given choices.\n\nOption A is correct because if your scaling events are not based on the right metrics and do not have the right threshold defined, then the scaling will not occur as you want it to happen.\n\nOption B is correct because f two policies are executed at the same time, Amazon EC2 Auto Scaling follows the policy with the greater impact. For example, if you have one policy to add two instances and another policy to add four instances, Amazon EC2 Auto Scaling adds four instances when both policies are triggered at the same time.\n\nOption C is incorrect because health checks will help us know the health status of an Auto Scaling instance. It is not a Check if AutoScaling is not working as expected. It is a health check for Instance.\n\nOption D is incorrect because AutoScaling can be used without Load Balancer also.\n\nFor more information on Auto Scaling Dynamic Scaling and troubleshooting, please visit the following URsL:\n\n\n\thttps://aws.amazon.com/premiumsupport/knowledge-center/auto-scaling-troubleshooting/\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/ts-as-instancelaunchfailure.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Media firm has a global presence for its Sports programming & broadcasting network which uses AWS Infrastructure.  They have multiple AWS accounts created based upon verticals & to manage these accounts they have created AWS organizations. Recently this firm is acquired by another media firm which is also using AWS Infrastructure for media streaming services. Both these firms need to merge AWS Organisations to have new policies created & enforce in all the member AWS accounts of merged entities.\n\nAs an AWS Consultant which of the following steps you will suggest to the client to move the master account of original media firm to AWS Organisation used by the merged entity? (Select Three.)",
    "prompt": "",
    "correctAnswerId": ["A", "C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Remove all member accounts from the organization."}, {
        "id": "B",
        "markdown": "Make another member account as a Master account."
    }, {"id": "C", "markdown": "Delete old organization"}, {
        "id": "D",
        "markdown": "Invite an old master account to join a new organization as a member account."
    }, {"id": "E", "markdown": "Invite an old master account to join a new organization as a master account."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, C, D\n\nTo move the master account from one AWS Organisations to other AWS Organisations, following steps needs to be implemented,\n\n·         Removal of all member accounts from AWS Organisations.\n\n·         Delete the old organization.\n\n·         Invite master account of old AWS Organisation as a member account to join the new AWS Organisation.\n\n\n\tOption B is incorrect as the Master account of an AWS Organisation cannot be replaced with another member account.\n\tOption E is incorrect as a master account will be joining as a member account of a new organization instead of a Master account.\n\n\nFor more information on migrating accounts between AWS organizations, refer to the following URL,\n\n\n\thttps://aws.amazon.com/premiumsupport/knowledge-center/organizations-move-accounts/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has designed an app and requires it to store data in DynamoDB. The company has registered the app with identity providers so users can sign-in using third-parties like Google and Facebook. What must be in place such that the app can obtain temporary credentials to access DynamoDB?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Multi-factor authentication must be used to access DynamoDB"}, {
        "id": "B",
        "markdown": "AWS CloudTrail needs to be enabled to audit usage"
    }, {"id": "C", "markdown": "An IAM role allowing the app to have access to DynamoDB"}, {
        "id": "D",
        "markdown": "The user must additionally log into the AWS console to gain database access"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\nOption C is correct. The user will have to assume a role that has the permissions to interact with DynamoDB. \n\nOption A is incorrect. Multi-factor authentication is available, but not required\n\nOption B is incorrect. CloudTrail is recommended for auditing but is not required\n\nOption D is incorrect. A second log-in event to the management console is not required\n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation.html\n\tttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html\n\thttps://aws.amazon.com/articles/web-identity-federation-with-mobile-applications/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an entire infrastructure hosted on AWS. It requires to create code templates used to provision the same set of resources in another region in case of a disaster in the primary region. Which AWS service can be helpful in this regard?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Beanstalk"}, {"id": "B", "markdown": "AWS CloudFormation"}, {
        "id": "C",
        "markdown": "AWS CodeBuild"
    }, {"id": "D", "markdown": "AWS CodeDeploy"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation provides the following information to support this requirement:\n\nAWS CloudFormation provisions your resources in a safe and repeatable manner, allowing you to build and rebuild your infrastructure and applications, without having to perform manual actions or write custom scripts. CloudFormation takes care of determining the right operations to perform while managing your stack and rolls back changes automatically if errors are detected.\n\nFor more information on AWS CloudFormation, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html\n\nAWS Beanstalk - is an orchestration service for deploying applications which orchestrates various AWS Services, including EC2, S3, SNS, CloudWatch, AutoScaling, and ELB.\n\nhttps://aws.amazon.com/elasticbeanstalk/\n\nAWS CodeBuild - is a fully managed continuous integration(CI) service that compiles source code, run tests, and produces software packages that are ready to deploy. Using it, you don't need to provision, manage, and scale your own build servers.\n\nhttps://aws.amazon.com/codebuild/\n\nAWS CodeDeploy - is a service that automates application deployments to a variety of compute services including EC2, Fargate, Lambda, and on-premises instances. It protects your application from downtime during deployments through rolling updates and deployment health tracking.\n\nhttps://aws.amazon.com/codedeploy/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a start-up company. The company has web-servers deployed in all AZ’s in the eu-central-1 (Frankfurt) region. These web servers have German news & local web content for people accessing these websites within Germany. These web servers have multiple records created for a single domain. The company is looking for a random selection of web-servers that will increase its availability. What would be the most appropriate routing policy for this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Latency routing policy"}, {
        "id": "B",
        "markdown": "Weighted routing policy"
    }, {"id": "C", "markdown": "Multivalue answer routing policy"}, {
        "id": "D",
        "markdown": "Geolocation routing policy"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nWhen Route 53 is configured with Multi-value answer routing, it returns multiple values for web-servers. Route 53 responds to DNS queries with up to eight healthy records and traffic is approximately load-balanced between these multiple web-servers.\n\nOption A is incorrect. Latency routing policy is used when multiple resources are mapped with single domain & resource with the best latency to the resource is provided. Since most of the times these servers will be accessing locally from the German region, latency to the web servers will be approximately the same. \n\nOption B is incorrect. Weighted routing policy is used when multiple resources are mapped with a single domain & you need to route traffic in a weighted proportionate to each resource. As in this case, the requirement is to use all web servers randomly, the weighted routing policy will not be an ideal option.\n\nOption D is incorrect as Geolocation routing policy is used to choose resources based upon the user's location. In this case, all users will be Germany-based & so there would not be random selection on the resource.\n\nFor more information on using Multi-value Answer Routing for Route 53, refer to the following URL:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your recent security review revealed a large spike in attempted logins to your AWS account. With respect to sensitive data stored in encryption enabled S3, the data has not been encrypted and is susceptible to fraud if it was to be stolen. You’ve recommended AWS Key Management Service as a solution. Which of the following is true regarding the operation of KMS?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Only KMS generated keys can be used to encrypt or decrypt data"}, {
        "id": "B",
        "markdown": "Data is encrypted at rest"
    }, {"id": "C", "markdown": "KMS allows all users and roles to use the keys by default"}, {
        "id": "D",
        "markdown": "Data is decrypted in transit"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: B\n\n\n\tOption B is correct. Data is encrypted at rest; data is encrypted once uploaded to S3. Encryption while in transit is handled by SSL or by using client-side encryption.\n\tOption A is incorrect. Data can be encrypted/decrypted using AWS keys or keys provided by your company\n\tOption C is incorrect. Users are granted permissions explicitly, not by default by KMS\n\tOption D is incorrect. Data is not decrypted in transit (while moving to and from S3). Data is encrypted or decrypted while in S3 and then while in transit can be encrypted using SSL.\n\n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html\n\tttps://d1.awsstatic.com/whitepapers/AWS_Securing_Data_at_Rest_with_Encryption.pdf\n\thttps://aws.amazon.com/kms/faqs/\n\thttps://docs.aws.amazon.com/general/latest/gr/rande.html#kms_region\n\thttps://www.slideshare.net/AmazonWebServices/encryption-and-key-management-in-aws\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of EC2 Instances hosted in AWS. It is mandatory to prepare for disasters and come up with the necessary disaster recovery procedures. What would be helpful in mitigating the effects of a disaster for the EC2 Instances?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Place an ELB in front of the EC2 Instances."}, {
        "id": "B",
        "markdown": "Use Auto Scaling to ensure that the minimum number of instances are always running."
    }, {"id": "C", "markdown": "Use CloudFront in front of the EC2 Instances."}, {
        "id": "D",
        "markdown": "Use AMIs to recreate the EC2 Instances in another region."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nYou can create an AMI from the EC2 Instances and then copy them to another region. In case of a disaster, an EC2 Instance can be created from the AMI.\n\n\n\tOptions A and B are good for fault tolerance, but cannot help completely in disaster recovery for the EC2 Instances.\n\tOption C is incorrect because we cannot determine if CloudFront would be helpful in this scenario or not without knowing what is hosted on the EC2 Instance.\n\n\nFor disaster recovery, we have to make sure that we can launch instances in another region when required. Hence, options A, B and C are not the feasible solutions.\n\n \n\nFor more information on AWS AMIs, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company currently hosts a Redshift cluster in AWS. For security reasons, it should ensure that all traffic from and to the Redshift cluster does not go through the Internet. Which features can be used to fulfill this requirement in an efficient manner?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Amazon Redshift Enhanced VPC Routing."}, {
        "id": "B",
        "markdown": "Create a NAT Gateway to route the traffic."
    }, {"id": "C", "markdown": "Create a NAT Instance to route the traffic."}, {
        "id": "D",
        "markdown": "Create a VPN Connection to ensure traffic does not flow through the Internet."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following: \n\nWhen you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC.\n\nIf Enhanced VPC Routing is not enabled, Amazon Redshift routes traffic through the Internet, including traffic to other services within the AWS network.\n\nFor more information on Redshift Enhanced Routing, please visit the following URL:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a set of Hyper-V machines and VMware virtual machines. They are now planning to migrate these resources to the AWS Cloud. What should they use to move these resources to the AWS Cloud?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "DB Migration utility"}, {
        "id": "B",
        "markdown": "AWS Server Migration Service"
    }, {"id": "C", "markdown": "Use AWS Migration Tools."}, {"id": "D", "markdown": "Use AWS Config Tools."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.\n\n \n\nFor more information on AWS Server Migration Service, please visit the following URL:\n\n\n\thttps://aws.amazon.com/server-migration-service/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You’ve implemented AWS Key Management Service to protect your data in your applications and other AWS services. Your global headquarters is in Northern Virginia (US East (N. Virginia)) where you created your keys and have provided the appropriate permissions to designated users and specific roles within your organization. While the N. American users are not having issues, German and Japanese users are unable to get KMS to function. What is the most likely cause of it?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "KMS is only offered in North America"}, {
        "id": "B",
        "markdown": "AWS CloudTrail has not been enabled to log events"
    }, {
        "id": "C",
        "markdown": "KMS master keys are region-specific and the applications are hitting the wrong API endpoints"
    }, {"id": "D", "markdown": "The master keys have been disabled"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\n\n\tOption C is correct. This is the most likely cause as the application should be sure to hit correct region endpoint.\n\tOption A is incorrect. KMS is offered in several regions but keys are not transferrable out of the region they were created in.\n\tOption B is incorrect. CloudTrail is recommended for auditing but is not required\n\tOption D is incorrect. The keys are working as expected where they were created; keys are region-specific\n\n\nReferences:\n\n\n\thttps://aws.amazon.com/kms/faqs/\n\tttps://docs.aws.amazon.com/general/latest/gr/rande.html#kms_region\n\thttps://www.slideshare.net/AmazonWebServices/encryption-and-key-management-in-aws\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company with a set of Admin jobs (.NET core) currently set up in the C# programming language, is moving its infrastructure to AWS. What would be an efficient mean of hosting the Admin related jobs in AWS?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use AWS DynamoDB to store the jobs and then run them on demand."}, {
        "id": "B",
        "markdown": "Use AWS Lambda functions with C# for the Admin jobs."
    }, {"id": "C", "markdown": "Use AWS S3 to store the jobs and then run them on demand."}, {
        "id": "D",
        "markdown": "Use AWS Config functions with C# for the Admin jobs."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nThe best and most efficient option is to host the jobs using AWS Lambda. This service has the facility to have the code run in the C# programming language.\n\nAWS Documentation mentions the following on AWS Lambda:\n\nAWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running. With AWS Lambda, you can run code virtually for any type of application or backend service - all with zero administration.\n\n \n\nFor more information on AWS Lambda, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/lambda/latest/dg/welcome.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Singapore based large Architect firm is using Amazon S3 bucket to save all architecture drawings. This firm works globally & multiple accounts are created within the Singapore region as well in other regions to access AWS resources. Users in all these accounts access the Amazon S3 bucket for architectural drawings. AWS Organisation is created for accounts in the Singapore region. Central IT Teams are managing access to S3 buckets using Service Control Policies with AWS Organisations.\n\nWhile applying SCP to an AWS Organisation which of the following needs to be considered to avoid blocking of legitimate user access?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "SCP will block access to Amazon S3 bucket to all accounts within the Singapore region including root users of each account within AWS Organisation as well as access to users outside this region who have access to S3 bucket."
    }, {
        "id": "B",
        "markdown": "SCP will block access to Amazon S3 bucket to all accounts within the Singapore region including root users of each account within AWS Organisation & not to users outside this region who have access to S3 bucket."
    }, {
        "id": "C",
        "markdown": "SCP will block access to Amazon S3 bucket to all accounts within the Singapore region excluding root users of each account within AWS Organisation as well as access to users outside this region who have access to S3 bucket."
    }, {
        "id": "D",
        "markdown": "SCP will block access to Amazon S3 bucket to all accounts within the Singapore region excluding root users of each account within AWS Organisation & not to users outside this region who have access to S3 bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nService Control Policies will be applied to all users within member accounts including root accounts within each of accounts. These policies are not applied to users who are part of these accounts under Aws Organisations & have permission to access Aws resources.\n\n\n\tOption A is incorrect as SCP doesn't impact users outside the accounts with AWS Organisations having access to AWS resources.\n\tOption C is incorrect as SCP will apply to all accounts within AWS organizations including root accounts of individual accounts in an AWS Organisation.\n\tOption D is incorrect as SCP will apply to all accounts within AWS organizations including root accounts of individual accounts in an AWS Organisation.\n\n\nFor more information on using Service Control Policies with AWS Organisations, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning to use Docker containers on a cluster of EC2 instances. These EC2 instances will be launched in a VPC and will require access to ECR and S3 to download Docker images and other images respectively. Additionally, the EC2 instances require secure connectivity to the ECS control plane.\n\nYou have created public and private subnets to launch the EC2 instances. What would be helpful to enable secure connectivity and ensure all container orchestration traffic stays within the VPC? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS PrivateLink to connect to the Amazon S3 buckets for downloading images."
    }, {
        "id": "B",
        "markdown": "For the instances in the public subnets, use Internet Gateway to access Amazon ECS, ECR, and S3 buckets."
    }, {"id": "C", "markdown": "Use a Gateway VPC Endpoint to download images from the S3 bucket."}, {
        "id": "D",
        "markdown": "Use AWS PrivateLink to connect to Amazon ECS for control plane connectivity and ECR for downloading Docker images."
    }, {
        "id": "E",
        "markdown": "For the instances in the private subnets, use NAT to access Amazon ECS, ECR, and S3."
    }, {
        "id": "F",
        "markdown": "Use a Gateway VPC Endpoint to connect to Amazon ECS for control plane connectivity and ECR for downloading Docker images."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer –  C and D\n\nGateway VPC Endpoint provides secure private access to Amazon S3 and DynamoDB without traffic routing via the Internet. When Gateway Endpoints are created, VPC Endpoint is created along with the addition of S3 prefixes in the routing table, pointing to VPCE.\n\nAWS PrivateLink provides secure private access to various AWS services by adding an Elastic Network Interface within a VPC. AWS creates a local/ regional DNS entry that resolves to the local IP address assigned to ENI.\n\n\n\tOption A is incorrect as AWS PrivateLink does not support access to Amazon S3. Amazon S3 can be accessed privately from a VPC via Gateway VPC Endpoint.\n\tOptions B and E are incorrect as with this, the Traffic from EC2 instance to ECS, ECR, and Amazon S3  will be flowing over the Internet.\n\tOption F is incorrect as Gateway VPC Endpoint does not support access to Amazon ECR; it supports private access only to Amazon S3 & Amazon DynamoDB.\n\t \n\n\nFor more information on VPC, Gateway VPC Endpoints, and AWS PrivateLink, refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpce-gateway.html\n\thttps://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A start-up firm is using AWS Organizations for managing policies across its Development and Production accounts. The development account is looking for an EC2 dedicated host that would provide visibility on the number of sockets used. The Production account has subscribed to an EC2 dedicated host for its application but is currently not in use. Which of the following can be done to share the Amazon EC2 dedicated host from the Production account to the Development account?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Remove both Development & Production Accounts from Organisation & then share resources between them."
    }, {"id": "B", "markdown": "You can share resources without enabling sharing within an Organisation."}, {
        "id": "C",
        "markdown": "Share Resources as an individual account in an Organisation."
    }, {
        "id": "D",
        "markdown": "Remove the destination Development account from an Organisation & then share resources with it."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\n For accounts that are part of the AWS Organization, Resource sharing can be done on an individual account basis in case resource sharing is not enabled at the AWS Organisation level.  With this, resources are shared within accounts as external accounts & an invitation needs to be shared between these accounts to start resource sharing.\n\n\n\tOption A is incorrect as removing both accounts from AWS Organisation for Resource sharing is not a valid option.\n\tOption B is incorrect because if sharing needs to be done within accounts in an AWS Organisation, then \"sharing\" needs to be enabled for the resources. Resource sharing can be done within accounts of AWS Organisation as an individual account.\n\tOption D is incorrect as removing a destination account from AWS Organisation is not required for resource sharing.\n\n\nFor more information on using AWS Resource Access Manager, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global content management company is using Amazon Aurora as a database for scaling millions of documents with high throughput. The Development Team has created a new version of the database which needs to be shared with TEST and PRODUCTION accounts within the company which will run their own OLAP queries. The company is using AWS Organisations to manage policies & have consolidated billing across all AWS accounts. Which of the following can be done to share DB clusters with the TEST account?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Enable sharing for Master account of AWS organizations & grant access to TEST account sharing DB cluster from its own account as well as DB shared by Production account."
    }, {
        "id": "B",
        "markdown": "Enable sharing for member accounts of AWS organizations & grant access to the TEST account sharing DB cluster from its own account."
    }, {
        "id": "C",
        "markdown": "Enable sharing for Master & member account of AWS organizations & grant access TEST account sharing DB cluster from its own account as well as DB shared by Production account."
    }, {
        "id": "D",
        "markdown": "Enable sharing for Master account of AWS organizations & grant access to TEST account sharing DB cluster from its own account."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\n For sharing AWS Resources with AWS Resource Access Manager, sharing needs to be enabled with the master account of AWS Organisation. Only resources that are owned by the account are shared with other accounts & resources are not re-shared from other accounts.\n\n\n\tOption A is incorrect as Resources shared by other accounts cannot be reshared to other accounts. Only Own resources can be shared.\n\tOption B is incorrect as Resource sharing needs to be enabled for the master account & not member account.\n\tOption C is incorrect as Sharing needs to be enabled only for Master Account & not member account within an Organisation.\n\n\nFor more information on using AWS Resource Access Manager, refer to the following URL,\n\n\n\thttps://aws.amazon.com/blogs/aws/new-aws-resource-access-manager-cross-account-resource-sharing/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application consists of the following architecture:\n\na. EC2 Instances in a single AZ behind an ELB\n\nb. A NAT Instance which is used to ensure that instances can download updates from the Internet\n\nWhat could be done to ensure better fault tolerance in this set up? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add more instances in the existing Availability Zone."}, {
        "id": "B",
        "markdown": "Add an Auto Scaling Group to the setup."
    }, {"id": "C", "markdown": "Add more instances in another Availability Zone."}, {
        "id": "D",
        "markdown": "Add another ELB for more fault tolerance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nAWS Documentation mentions the following:\n\nAdding Auto Scaling to your application architecture is one way to maximize the benefits of the AWS Cloud. When you use Auto Scaling, your applications gain the following benefits:\n\n\n\tBetter fault tolerance. Auto Scaling can detect when an instance is unhealthy. Then it terminates that instance, and launches an instance to replace it. You can also configure Auto Scaling to use multiple Availability Zones. If one Availability Zone becomes unavailable, Auto Scaling can launch instances in another one to compensate.\n\tBetter availability. Auto Scaling can help you ensure that your application always has the right amount of capacity to handle the current traffic demands.\n\n\n \n\nFor more information on the benefits of Auto Scaling, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a lot of data hosted on their On-premises infrastructure. Running out of storage space, the company wants a quick win solution using AWS. Which of the following would allow easy extension of their data infrastructure to AWS?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The company could start using Gateway Cached Volumes."}, {
        "id": "B",
        "markdown": "The company could start using Gateway Stored Volumes."
    }, {"id": "C", "markdown": "The company could start using the DEEP_ARCHIVE storage class."}, {
        "id": "D",
        "markdown": "The company could start using Amazon Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nVolume Gateways and Cached Volumes can be used to start storing data in S3.\n\nAWS Documentation mentions the following:\n\nYou store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Cached volumes offer substantial cost savings on primary storage and minimize the need to scale your storage on-premises. You also retain low-latency access to your frequently accessed data.\n\nFor more information on Storage Gateways, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\n\n\nNote: \n\nThe question states that they are running out of storage space and they need a solution to store data with AWS rather than a backup. So for this purpose, gateway-cached volumes are appropriate which will help them to avoid scaling their on-premises data center and allows them to store on AWS storage service while having the most recent files available for them at low latency.\n\nThis is the difference between Cached and stored volumes:\n\n\n\t\n\tCached volumes – You store your data in S3 and retain a copy of frequently accessed data subsets locally. Cached volumes offer substantial cost savings on primary storage and \"minimize the need to scale your storage on-premises. You also retain low-latency access to your frequently accessed data.\"\n\t\n\t\n\tStored volumes – If you need low-latency access to your entire data set, first configure your on-premises gateway to store all your data locally. Then asynchronously back up point-in-time snapshots of this data to Amazon S3. \"This configuration provides durable and inexpensive off-site backups that you can recover to your local data center or Amazon EC2.\" For example, if you need replacement capacity for disaster recovery, you can recover the backups to Amazon EC2.\n\t\n\n\nAs described in the answer: The company wants a quick win solution to store data with AWS, avoiding scaling the on-premise setup rather than backing up the data. \n\nIn the question, they mentioned that \"A company has a lot of data hosted on their On-premises infrastructure.\" From On-premises to cloud infrastructure, you can use AWS storage gateways. Option C is talking about the storage class. But here the requirement is (How) to transfer or migrate your data from On-premises to Cloud infrastructure. So there is no clear process mentioned in Option C. \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Large Medical Institute is using a legacy database for saving all its patient details. Due to compatibility issues with the latest software they are planning to migrate this database to AWS cloud infrastructure. This large size database will be using a NoSQL database Amazon DynamoDB in AWS.As an AWS Consultant you need to ensure that all tables of the current legacy database are migrated without a glitch to Amazon DynamoDB.  Which of the following is the most cost-effective way of transferring legacy databases to Amazon DynamoDB?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS DMS with AWS Schema Conversion Tool to save data to Amazon S3 bucket & then upload all data to Amazon DynamoDB."
    }, {
        "id": "B",
        "markdown": "Use AWS DMS with engine conversion tool to save data to Amazon S3 bucket & then upload all data to Amazon DynamoDB."
    }, {
        "id": "C",
        "markdown": "Use AWS DMS with engine conversion tool to save data to Amazon EC2 & then upload all data to Amazon DynamoDB."
    }, {
        "id": "D",
        "markdown": "Use AWS DMS with AWS Schema Conversion Tool to save data to Amazon EC2 instance & then upload all data to Amazon DynamoDB."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nIn this case Legacy Database will be converted to Amazon DynamoDB which will be a heterogenous conversion. Using AWS Schema Conversion Tool is best suited for such conversion along with AWS DMS to transfer data from on-premise to AWS. Using Amazon S3 bucket will help to save any amount of data in a most cost-effective way before its uploaded to Amazon DynamoDB.\n\n\n\tOption B is incorrect as engine conversion tool is best suited for homogeneous database migration, in this case it's heterogeneous database, so using AWS SCT along with AWS DMS is a best option.\n\tOption C & D are incorrect as using Amazon S3 bucket is a more cost-effective option than using Amazon EC2 instance.\n\n\nFor more information on using AWS Database Migration Service with AWS SCT, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html#CHAP_BestPractices.SchemaConversion\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Financial firm is planning to build a highly resilient application with primary database servers at on-premise data centres while DB snapshots at Amazon S3 bucket. IT Team is looking for a cost-effective secure way of initial transfer of large customer financial databases between on-premise servers to Amazon S3 bucket with no impact to client usage of these applications. Also post this data transfer, on-premise application will be fetching data from database in Amazon S3 in case of primary database fails.\n\nSo, your solution should ensure Amazon S3 database is fully sync with on-premise database. Which of the following can be used to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Amazon S3 Transfer Acceleration for transferring data between on-premise & Amazon S3 bucket while using AWS Data Sync for accessing these S3 bucket data from on-premise application."
    }, {
        "id": "B",
        "markdown": "Use AWS Data Sync for transferring data between on-premise & Amazon S3 bucket while using AWS Storage Gateway for accessing these S3 bucket data from on-premise application."
    }, {
        "id": "C",
        "markdown": "Use AWS Snowball Edge for transferring data between on-premise & Amazon S3 bucket while using AWS Storage Gateway for accessing these S3 bucket data from on-premise application."
    }, {
        "id": "D",
        "markdown": "Use AWS Transfer for transferring data between on-premise & Amazon S3 bucket while using AWS Data Sync for accessing these S3 bucket data from on-premise application."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\n AWS Data Sync can be used for huge amounts of data transfer between on-premise & AWS. AWS Data Sync is a secure way of online data transfer. Once Data is transferred to AWS S3 bucket, AWS Storage Gateway can be used to have data synced between on-premise servers & AWS S3 bucket.\n\n\n\tOption A is incorrect as Amazon S3 Transfer Acceleration can be used for applications which have already integrated with Amazon S3 API.\n\tOption C is incorrect as AWS Snowball Edge can be used for offline data transfer between on-premise & AWS S3 bucket.\n\tOption D is incorrect as AWS Transfer is a better choice for transferring SFTP data between on-premise & Amazon S3.\n\n\nFor more information on using AWS DataSync, refer to the following URLs,\n\n\n\thttps://aws.amazon.com/datasync/faqs/\n\t\n\thttps://aws.amazon.com/blogs/storage/migrating-hundreds-of-tb-of-data-to-amazon-s3-with-aws-datasync/\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application that delivers objects from S3 to users. Of late, some users spread across the globe, have been complaining of slow response times. Which additional step would help in building a cost-effective solution and ensure that the users get an optimal response to objects from S3?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use S3 Replication to replicate the objects to regions closest to the users."
    }, {
        "id": "B",
        "markdown": "Ensure S3 Transfer Acceleration is enabled to ensure that all users get the desired response times."
    }, {"id": "C", "markdown": "Place an ELB in front of S3 to distribute the load across S3."}, {
        "id": "D",
        "markdown": "Place the S3 bucket behind a CloudFront distribution."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation mentions the following:\n\nIf your workload is mainly sending GET requests, in addition to the preceding guidelines, you should consider using Amazon CloudFront for performance optimization.\n\nIntegrating Amazon CloudFront with Amazon S3, you can distribute content to your users with low latency and a high data transfer rate. You will also send fewer direct requests to Amazon S3, which will reduce your costs.\n\nFor example, suppose that you have a few objects that are very popular. Amazon CloudFront fetches those objects from Amazon S3 and caches them. Amazon CloudFront can then serve future requests for the objects from its cache, reducing the number of GET requests it sends to Amazon S3.\n\n \n\nFor more information on performance considerations in S3, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/request-rate-perf-considerations.html\n\n\n \n\n\n\tOption A is incorrect. S3 Cross-Region Replication is not the correct answer for this business scenario.  You are asked on how to provide easier & faster access to data in S3 bucket, and this option is used to replicate S3 bucket data across regions.\n\tOption B is incorrect. S3 TA is used for fast, easy, and secure file transfer over long distances between your client and your Amazon S3 bucket. S3 Transfer Acceleration does leverage Amazon CloudFront’s globally distributed AWS Edge Locations, but would be too costly for this situation.\n\tOption C is incorrect. ELB is used to distribute traffic on to EC2 Instances.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A popular blogging site is planning to save all its data to EFS as a redundancy plan. This database is constantly fetch & updated by client information. You need to ensure that all files saved at EFS using AWS DataSync are validated for data-integrity for each packet. Which of the following will ensure fast transfer for data between on-premise & EFS with data integrity done as per security guidelines?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Verification & perform all data transfer."}, {
        "id": "B",
        "markdown": "Enable verification during initial file transfers & disable it post last data transfer."
    }, {
        "id": "C",
        "markdown": "Disable verification during initial file transfers & enable it post last data transfer."
    }, {"id": "D", "markdown": "Disable Verification & perform all data transfer."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nWhile transferring a constantly changing database between on-premise servers & EFS using AWS DataSync, data verification can be disabled during data transfer & can be enabled post data transfer for data integrity checks & ensure that all data is properly copied between on-premise servers & EFS.\n\n\n\tOption A is incorrect as enabling data verification for a constantly changing database will lead to slow transfer of data.\n\tOption B is incorrect as Verification needs to be performed post data transfer to ensure all data is properly copied to EFS.\n\tOption D is incorrect as Disabling verification will not perform data integrity check on data transfer between on-premise servers & EFS.\n\n\nFor more information on using AWS DataSync, refer to the following URL,\n\n\n\thttps://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to build an application using the services available on AWS. This application will be stateless in nature, and the service must have the ability to scale according to the demand. Which compute service should be used in this scenario?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DynamoDB"}, {"id": "B", "markdown": "AWS Lambda"}, {
        "id": "C",
        "markdown": "AWS S3"
    }, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nThe following content from an AWS Whitepaper supports the usage of AWS Lambda for this requirement:\n\nA stateless application is an application that needs no knowledge of previous interactions and stores no session information. Such an example could be an application that, given the same input, provides the same response to any end-user. A stateless application can scale horizontally since any request can be serviced by any of the available compute resources (e.g., EC2 instances, AWS Lambda functions).\n\nFor more information on AWS Cloud best practices, please visit the following URL:\n\nhttps://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A large IT company is using Amazon CloudFront for its web application. Static Content for this application is saved in Amazon S3 bucket. Amazon CloudFront is configured for this application to provide faster access to these files for global users.\n\nIT Team is concerned for some critical files which needs to be accessed only by users from certain white-list IP pools which you have defined in Amazon CloudFront & no users should be able to access these files directly using Amazon S3 URL. Which of the following is the most secure way controlling access to these files?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an OAI user to associate with distribution & modify permission on Amazon S3 bucket using bucket policy."
    }, {
        "id": "B",
        "markdown": "Create Amazon CloudFront Signed URLs to limit access to these files & modify permission on Amazon S3 bucket using bucket policy."
    }, {
        "id": "C",
        "markdown": "Create an OAI user to associate with distribution & modify permission on Amazon S3 bucket using object ACL’s."
    }, {
        "id": "D",
        "markdown": "Create Amazon CloudFront Signed URLs to limit access to these files & modify permission on Amazon S3 bucket using object ACL’s."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon CloudFront Origin Access Identity is a special user which can be used to control access to content in Amazon S3 bucket. Using Object ACL’s provides a granular control on each file in Amazon S3 bucket. Associating Amazon CloudFront OAI to a distribution & modifying permission on S3 bucket to allow access only to OAI, ensures that no users can directly access content in S3 bucket & all access is pass through Amazon CloudFront using OAI.\n\n\n\tOption A is incorrect as modifying permission in Amazon S3 bucket using bucket policy will not provide granular control on access to each file in a bucket.\n\tOption B & D are incorrect as Amazon CloudFront Signed URLs will provide access only to authorised users for a specified time period, but it will not ensure that this access is through Amazon CloudFront.\n\n\nFor more information on using restricting access using Amazon CloudFront OAI, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Developer Team is working on a new RTMP based flash application. They want to test this application with a few users spread across multiple in-house locations before making this application live. For this they have created a RTMP distribution in Amazon CloudFront. IT Head has asked you to control access to application so that only specific users from these locations can access this application during a specific time. Which of the following can meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create Signed cookies specifying start date, time & IP address range from which users can access this content."
    }, {
        "id": "B",
        "markdown": "Create Signed cookies specifying end date, time & IP address range from which users can access this content."
    }, {
        "id": "C",
        "markdown": "Create Signed URLs specifying only start date, time & IP address range from which users can access this content."
    }, {
        "id": "D",
        "markdown": "Create Signed URLs specifying only end date, time & IP address range from which users can access this content."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nFor RTMP distribution, Signed URLs can be used to control access to private content. While specifying periods with Signed URLs, start time & date is optional while end time date / time is required. Also, we can specify the IP address range of users who need to have access to this RTMP application.\n\n\n\tOption A & B are incorrect as Signed Cookies do not support RTMP distribution.\n\tOption C is incorrect as Specifying start date is an optional feature, specifying end date time is required for each Signed URLs.\n\n\nFor more information on using restricting access using Amazon CloudFront, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-overview.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company stores its log data in an S3 bucket. There is a current need to have search capabilities available for the data in S3. What could be helpful to achieve this in an efficient manner? (SELECT TWO )",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Amazon Athena to query the S3 bucket."}, {
        "id": "B",
        "markdown": "Create a Lifecycle Policy for the S3 bucket."
    }, {"id": "C", "markdown": "Load the data into Amazon Elasticsearch."}, {
        "id": "D",
        "markdown": "Load the data into Amazon S3 Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nAmazon Athena is a service that enables a data analyst to perform interactive queries in the AWS public cloud on data stored in Amazon S3.  Since it's a serverless query service, an analyst doesn't need to manage any underlying compute infrastructure to use it.\n\nFor more information on Amazon Athena, please refer to the following URLs:\n\n\n\thttps://aws.amazon.com/athena/\n\thttps://aws.amazon.com/blogs/aws/amazon-athena-interactive-sql-queries-for-data-in-amazon-s3/\n\n\nElasticsearch is a highly scalable open-source full-text search and analytics engine. It allows you to store, search, and analyze big volumes of data quickly and in near real-time. It is generally used as the underlying engine/technology that powers applications that have complex search features and requirements.\n\nhttps://aws.amazon.com/blogs/database/use-amazon-s3-to-store-a-single-amazon-elasticsearch-service-index/\n\nhttps://aws.amazon.com/blogs/database/analyze-url-paths-to-search-individual-elements-in-amazon-elasticsearch-service/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company plans to deploy a batch processing application in AWS. Which of the followings would ideally help to host this application? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Copy the batch processing application to an ECS Container."}, {
        "id": "B",
        "markdown": "Create a docker image of your batch processing application."
    }, {"id": "C", "markdown": "Deploy the image as an Amazon ECS task."}, {
        "id": "D",
        "markdown": "Deploy the container behind the ELB."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nAWS Documentation mentions the following:\n\nDocker containers are particularly suited for batch job workloads. Batch jobs are often short-lived and embarrassingly parallel. You can package your batch processing application into a Docker image so that you can deploy it anywhere, such as in an Amazon ECS task.\n\nFor more information on the use cases for AWS ECS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/common_use_cases.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A start-up firm has a corporate office at New York & regional office in Washington & Chicago. These offices are interconnected over Internet links. Recently they have migrated a few application servers to EC2 instance launched in AWS US-east-1 region. The Developer Team located at the corporate office requires secure access to these servers for initial testing & performance checks before go-live of new application. Since the go-live date is approaching soon, the IT team is looking for quick connectivity to be established. As an AWS consultant which link option will you suggest for a cost effective & quick way to establish secure connectivity from on-premise to servers launched in AWS?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS Direct Connect to establish IPSEC connectivity from On-premise to VGW."
    }, {"id": "B", "markdown": "Use Hardware VPN to establish IPSEC connectivity from On-premise to VGW."}, {
        "id": "C",
        "markdown": "Use Hardware VPN over AWS Direct Connect to establish IPSEC connectivity from On-premise to VGW."
    }, {"id": "D", "markdown": "Use Software VPN to establish IPSEC connectivity from On-premise to EC2 instance."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\n Using AWS VPN is the fastest & cost-effective way of establishing IPSEC connectivity from on-premise to AWS. Since Internet links are already available, IT teams can quickly setup a VPN connection with VGW in the US-east-1 region.\n\n\n\tOption A is incorrect as AWS Direct Connect does not provide IPSEC connectivity & it is not a quick way to establish connectivity.\n\tOption C is incorrect as Although this will provide a high performance secure IPSEC connectivity from On-premise to AWS, it is not a quick way to establish connectivity.\n\tOption D is incorrect as this will incur additional management & cost for maintaining Amazon EC2 instance with required VPN software.\n\n\nFor more information on using AWS Direct Connect & VPN, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/network-to-amazon-vpc-connectivity-options.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company uses KMS to fully manage the master keys and performing encryption and decryption operations on your data and in your applications.  As an additional level of security, you now recommend AWS rotate your keys. What would happen after enabling this additional feature?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Nothing needs to be done. KMS will manage all encrypt/decrypt actions using the appropriate keys"
    }, {
        "id": "B",
        "markdown": "Your company must instruct KMS to re-encrypt all data in all services each time a new key is created"
    }, {"id": "C", "markdown": "You have 30 days to delete old keys after a new one is rotated in"}, {
        "id": "D",
        "markdown": "Your company must create its own keys and import them to KMS to enable key rotation"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\n\n\tOption A is correct. KMS will rotate keys annually and use the appropriate keys to perform cryptographic operations.\n\tOption B is incorrect. This is not necessary. KMS, as a managed service, will keep old keys and perform operations based on the appropriate key\n\tOption C is incorrect. This is not a requirement of KMS.\n\tOption D is incorrect. This is not a requirement of KMS\n\n\n \n\nReferences:\n\n\n\thttps://aws.amazon.com/kms/faqs/\n\tttps://docs.aws.amazon.com/general/latest/gr/rande.html#kms_region\n\thttps://www.slideshare.net/AmazonWebServices/encryption-and-key-management-in-aws\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are a Solutions Architect in a startup company that is releasing the first iteration of its app. Your company doesn’t have a directory service for its intended users but wants the users to be able to sign in and use the app. What would you advice to implement a solution quickly?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS Cognito although it only supports social identity providers like Facebook"
    }, {"id": "B", "markdown": "Let each user create an AWS user account to be managed via IAM"}, {
        "id": "C",
        "markdown": "Invest heavily in Microsoft Active Directory as it’s the industry standard"
    }, {
        "id": "D",
        "markdown": "Use Cognito Identity along with a User Pool to securely save users’ profile attributes"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: D\n\n\n\tOption D is correct. Cognito is a managed service that can be used for this app and scale quickly as usage grows.\n\tOption A is incorrect. Cognitio supports more than just social identity providers, including OIDC, SAML, and its own identity pools\n\tOption B is incorrect. This isn’t an efficient means of managing user authentication.\n\tOption C is incorrect. This isn’t the most efficient means to authenticate and save user information.\n\n\n \n\nReferences:\n\n\n\thttps://aws.amazon.com/cognito/\n\thttp://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html\n\thttps://aws.amazon.com/cognito/getting-started/\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/concepts.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is migrating an on-premises 5TB MySQL database to AWS and expects its database size to increase steadily. Which Amazon RDS engine would meet these requirements?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "MySQL"}, {"id": "B", "markdown": "Microsoft SQL Server"}, {
        "id": "C",
        "markdown": "Oracle"
    }, {"id": "D", "markdown": "Amazon Aurora"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Documentation supports the above requirements with regard to AWS Aurora.\n\nAmazon Aurora (Aurora) is a fully managed, MySQL and PostgreSQL compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.\n\nAll Aurora Replicas return the same data for query results with minimal replica lag—usually, much lesser than 100 milliseconds after the primary instance has written an update.\n\nFor more information on AWS Aurora, please visit the following URL:\n\nhttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.html\n\nNOTE:\n\nOn a MySQL DB instance, avoid tables in your database growing too large. Provisioned storage limits restrict the maximum size of a MySQL table file to 16 TB\n\nHowever, based on database usage, your Amazon Aurora storage will automatically grow, from the minimum of 10 GB up to 64 TB, in 10 GB increments, with no impact on database performance.\n\nHence, the best answer would be option D.  \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have implemented AWS Cognito services to require users to sign in and sign up to your app through social identity providers like Facebook, Google, etc. Your marketing department wants users to try out the app anonymously as they think that the current log-in requirement is excessive and will reduce demand for products and services offered through the app. What would you suggest to the marketing department in this regard?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "It’s too much of a security risk to allow unauthenticated users access to the app"
    }, {
        "id": "B",
        "markdown": "Cognito Identity supports guest users for the ability to enter the app and have limited access"
    }, {
        "id": "C",
        "markdown": "A second version of the app will need to be offered for unauthenticated users"
    }, {"id": "D", "markdown": "This is possible only if we remove the authentication from everywhere"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\n\n\tOption B is correct. Amazon Cognito Identity Pools can support unauthenticated identities by providing a unique identifier and AWS credentials for users who do not authenticate with an identity provider. Unauthenticated users can be associated with a role that has limited access to resources as compared to a role for authenticated users.\n\tOption A is incorrect. Cognito will allow unauthenticated users without being a security risk.\n\tOption C is incorrect. Cognito supports both authenticated and unauthenticated users.\n\n\n \n\nReferences:\n\n\n\thttps://aws.amazon.com/cognito/\n\thttp://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html\n\thttps://aws.amazon.com/cognito/getting-started/\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/concepts.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your app uses AWS Cognito Identity for authentication and stores user profiles in a User Pool. To expand the availability and ease of signing in to the app, your team is requesting advice on allowing the use of OpenID Connect (OIDC) identity providers as additional means of authenticating users and saving the user profile information. What is your recommendation on OIDC identity providers?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "This is supported, along with social and SAML based identity providers."
    }, {
        "id": "B",
        "markdown": "This is not supported, only social identity providers can be integrated into User Pools"
    }, {
        "id": "C",
        "markdown": "If you want OIDC identity providers, then you must include SAML and social-based support as well"
    }, {
        "id": "D",
        "markdown": "It’s too much effort to add non-Cognito authenticated user information to a User Pool"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\n\n\tOption A is correct. OpenID Connect (OIDC) identity providers (IdPs) (like Salesforce or Ping Identity) are supported in Cognito, along with social and SAML based identity providers. You can add an OIDC IdP to your user pool in the AWS Management Console, with the AWS CLI, or by using the user pool API method CreateIdentityProvider.\n\tOption B is incorrect. Cognito supports more than just social identity providers, including OIDC, SAML, and its own identity pools.\n\tOption C is incorrect. You can add any combination of federated types, you don’t have to add them all.\n\tOption D is incorrect. While there is additional coding to develop this, the effort is most likely not too great to add the feature.\n\n\n \n\nReferences:\n\n\n\thttps://aws.amazon.com/cognito/\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-oidc-idp.html\n\thttp://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html\n\thttps://aws.amazon.com/cognito/getting-started/\n\thttps://docs.aws.amazon.com/cognito/latest/developerguide/concepts.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is building a two-tier web application to serve dynamic transaction-based content. Which services would you leverage to enable an elastic and scalable Web Tier?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Elastic Load Balancing, Amazon EC2, and Auto Scaling"}, {
        "id": "B",
        "markdown": "Elastic Load Balancing, Amazon RDS with Multi-AZ, and Amazon S3"
    }, {"id": "C", "markdown": "Amazon RDS with Multi-AZ and Auto Scaling"}, {
        "id": "D",
        "markdown": "Amazon EC2, Amazon Dynamo DB, and Amazon S3"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nThe question mentions a scalable Web Tier. So Option B, C, and D can be eliminated since they are database related options.\n\nThe below example ( this is a general depiction giving the deployment design of standby architecture having a two tier in them ) shows an Elastic Load Balancer connected to 2 EC2 instances via Auto Scaling. This is an example of an elastic and scalable Web Tier. By scalable, we mean that the Auto Scaling process is able to increase or decrease the number of EC2 Instances as required.\n\n\n\nFor more information on the Elastic Load Balancer, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An instance is launched into a VPC subnet with the network ACL configured to allow all outbound traffic and deny all inbound traffic. The security group of the instance is configured to allow SSH from any IP address. What changes are required to allow SSH access to the instance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "The Outbound Security Group needs to be modified to allow outbound traffic."
    }, {"id": "B", "markdown": "The Inbound Network ACL needs to be modified to allow inbound traffic"}, {
        "id": "C",
        "markdown": "Nothing, it can be accessed from any IP address using SSH"
    }, {
        "id": "D",
        "markdown": "Both the Outbound Security Group and Outbound Network ACL need to be modified to allow outbound traffic"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nFor an EC2 Instance to allow SSH, you can have the below configurations for the Security and Network ACL for Inbound and Outbound Traffic.\n\n\n\n \n\nThe reason why Network ACL has to have both an Allow for Inbound and Outbound is that network ACLs are stateless. Responses to allowed inbound traffic are subject to the rules for outbound traffic (and vice versa). Whereas for Security groups, responses are stateful. So if an incoming request is granted, by default an outgoing request will also be granted.\n\n \n\n\n\tOptions A and D are invalid because Security Groups are stateful. Here, any traffic allowed in the Inbound rule is allowed in the Outbound rule too. Option C is also incorrect. \n\n\n \n\nFor more information on Network ACLs, please refer to the URL below.\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a web distribution hosted using the AWS CloudFront service. The IT Security department has confirmed that the application using this web distribution now falls under the scope of PCI compliance. What are the possible ways to meet the requirements? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable CloudFront access logs."}, {
        "id": "B",
        "markdown": "Enable Cache in CloudFront."
    }, {"id": "C", "markdown": "Capture requests that are sent to the CloudFront API."}, {
        "id": "D",
        "markdown": "Enable VPC Flow Logs"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nAWS Documentation mentions the following:\n\nIf you run PCI or HIPAA-compliant workloads based on the AWS Shared Responsibility Model, we recommend that you log your CloudFront usage data for the last 365 days for future auditing purposes. To log usage data, you can do the following:\n\n \n\n\n\tEnable CloudFront access logs.\n\tCapture requests that are sent to the CloudFront API.\n\n\n \n\nFor more information on compliance with CloudFront, please visit the following URLs:\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html\n\thttps://aws.amazon.com/blogs/aws/pci-compliance-for-amazon-cloudfront/\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SERVICENAME-compliance.html\n\n\n \n\n\n\tOption B is incorrect. It helps to reduce latency.\n\tOption D is incorrect. VPC flow logs capture information about the IP traffic going to and from network interfaces in a VPC but not for CloudFront.\n\n                        ",
    "referenceImage": ""
}]
