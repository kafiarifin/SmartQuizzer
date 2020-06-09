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
}]
