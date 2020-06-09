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
}, {
    "questionComplexityIndex": 0,
    "explanation": "A start-up firm has created a cloud storage application which gives users the ability to store any amount of personal data & share with their contacts. For this they are using Amazon S3 buckets to store user data. During the last quarter, the costing team has observed a surge in storage cost for S3 bucket. Further checking observed that there are many 100 GB files which are uploaded by users & are in partially completed state. As an AWS consultant, the IT Team is requesting you for deleting all such files which are uploaded before current quarter. Which of the following actions can be taken to meet this requirement in a cost effective way with least effort?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create S3 lifecycle Configuration to abort incomplete multipart uploads."
    }, {"id": "B", "markdown": "Manually delete incomplete multipart uploads from S3 bucket."}, {
        "id": "C",
        "markdown": "Use Cron tool to identify incomplete uploads & delete those files."
    }, {"id": "D", "markdown": "All Incomplete uploads are automatically deleted every three months by Amazon S3."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon S3 Lifecycle rules can be configured to abort all multipart uploads which are failing to complete in a specific time period. For all files from size 5 MB to 5GB, multipart upload can be used. \n\n\n\tOption B is incorrect as this will need additional manual efforts\n\tOption C is incorrect as this incur additional cost & admin work to use Cron tools.\n\tOption D is incorrect as this is incorrect incomplete uploads are not automatically deleted.\n\n\nFor more information on using S3 Lifecycle policies, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-configuration-examples.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are developing a new mobile application which is expected to be used by thousands of customers. You are considering to store user preferences in AWS, and need a data store to save the same. Each data item is expected to be 20KB in size. The solution needs to be cost-effective, highly available, scalable, and secure. How would you design the data layer?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a new Amazon RDS instance and store the user data there."}, {
        "id": "B",
        "markdown": "Create a Amazon DynamoDB table with the required Read and Write capacity and use it as the data layer."
    }, {"id": "C", "markdown": "Use Amazon Glacier to store the user data."}, {
        "id": "D",
        "markdown": "Use an Amazon Redshift Cluster for managing the user preferences."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nIn this case, since each data item is 20KB and given the fact that DynamoDB is an ideal data layer for storing user preferences, this would be the ideal choice. Also, DynamoDB is a highly scalable and available service.   \n\n\n\tFor more information on AWS DynamoDB, please refer to the URL given below:\n\n\n            https://aws.amazon.com/dynamodb/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your Operations department is using an incident-based application hosted on a set of EC2 Instances. These instances are placed behind an Auto Scaling Group to ensure that the right number of instances are in place to support the application. The Operations department has expressed dissatisfaction with regard to poor application performance every day at 9:00 AM. However, it is also noted that the system performance returns to optimal at 9:45 AM.\n\nWhat could be done to fix this issue?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create another Dynamic Scaling Policy to ensure that the scaling happens at 9:00 AM."
    }, {"id": "B", "markdown": "Add another Auto Scaling group to support the current one."}, {
        "id": "C",
        "markdown": "Change the Cool Down Timers for the existing Auto Scaling Group."
    }, {"id": "D", "markdown": "Add a Scheduled Scaling Policy at 8:30 AM."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nScheduled Scaling can be used to ensure that the capacity is peaked before 9:00 AM every day.\n\nAWS Documentation further mentions the following on Scheduled Scaling:\n\nScaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application.\n\n \n\n\n\tOption A is incorrect because a scheduled scaling should be used as per the requirements of the question instead of dynamic scaling\n\tOption B is incorrect because adding another autoscaling group will not solve the problem. \n\tOption C is incorrect because changing the cooldown timers of the existing autoscaling group will not meet the requirements of the question.\n\n\n \n\nFor more information on Scheduled Scaling, please refer to the URL below:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A database hosted in AWS is currently encountering an extended number of write operations and is not able to handle the load. What should be done to the architecture to ensure that the write operations are not lost under any circumstances?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add more IOPS to the existing EBS Volume used by the database."}, {
        "id": "B",
        "markdown": "Consider using DynamoDB instead of AWS RDS."
    }, {"id": "C", "markdown": "Use SQS FIFO to queue the database writes."}, {
        "id": "D",
        "markdown": "Use SNS to send notification on missed database writes and then add them manually at a later stage."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C \n\nSQS Queues can be used to store the pending database writes, and these writes can then be added to the database. It is the perfect queuing system for such architecture.\n\nNote that adding more IOPS may help the situation but will not totally eliminate the chances of losing database writes.\n\n\n\tFor more information on AWS SQS, please refer to the URL below:\n\t\n\t\thttps://aws.amazon.com/sqs/faqs/\n\t\n\t\n\n\n\n\nNote: \n\nThe scenario in the question is that the database is unable to handle the write operations and the requirement is that without losing any data, we need to perform data writes to the database.\n\nFIFO queues support up to 3,000 messages per second with batching and a single Amazon SQS message queue can contain an unlimited number of messages. However, there is a limit of 120,000 counts for the number of inflight messages for a standard queue and 20,000 counts for a FIFO queue.\n\nMessages are inflight after they have been received from the queue by a consuming component, but have not yet been deleted from the queue.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have created an AWS Lambda function that will write data to a DynamoDB table. Which of the following must be in place to ensure that the Lambda function can interact with the DynamoDB table?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure an IAM Role is attached to the Lambda function which has the required DynamoDB privileges."
    }, {
        "id": "B",
        "markdown": "Ensure an IAM User is attached to the Lambda function which has the required DynamoDB privileges."
    }, {"id": "C", "markdown": "Ensure the Access keys are embedded in the AWS Lambda function."}, {
        "id": "D",
        "markdown": "Ensure the IAM user password is embedded in the AWS Lambda function."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following to support this requirement:\n\nEach Lambda function has an IAM role (execution role) associated with it. You specify the IAM role when you create your Lambda function. Permissions you grant to this role determine what AWS Lambda can do when it assumes the role. There are two types of permissions that you grant to the IAM role:\n\n \n\n\n\tIf your Lambda function code accesses other AWS resources, such as to read an object from an S3 bucket or write logs to CloudWatch Logs, you need to grant permissions for relevant Amazon S3 and CloudWatch actions to the role.\n\n\n \n\n\n\tIf the event source is stream-based (Amazon Kinesis Data Streams and DynamoDB streams), AWS Lambda polls these streams on your behalf. AWS Lambda needs permissions to poll the stream and read new records on the stream so you need to grant the relevant permissions to this role. \n\n\n \n\nFor more information on the Permission Role model for AWS Lambda, please refer to the URL below.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Media firm is saving all its old videos in S3 Glacier Deep Archive. Due to shortage of new video footage, the channel has decided to reuse all these old videos. Since these are old videos, the channel is not sure of its popularity & response from users. Channel Head wants to make sure that these huge size files do not shoot up their budget & for this as an AWS consultant you advise them to use S3 intelligent storage class. The Operations Team is concerned for moving these files to S3 Intelligent-Tiering storage class. Which of the following actions can be taken to move objects in Amazon S3 Glacier Deep Archive to S3 Intelligent-Tiering storage class?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Amazon S3 Console to copy these objects from S3 Glacier Deep Archive to required S3 Intelligent-Tiering storage class."
    }, {
        "id": "B",
        "markdown": "Use Amazon S3 Glacier Console to restore objects from S3 Glacier Deep Archive & then copy these objects to required S3 Intelligent-Tiering storage class."
    }, {
        "id": "C",
        "markdown": "Use Amazon S3 console to restore objects from S3 Glacier Deep Archive & then copy these objects to required S3 Intelligent-Tiering storage class."
    }, {
        "id": "D",
        "markdown": "Use Amazon S3 Glacier console to copy these objects to the required S3 Intelligent-Tiering storage class."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nTo move objects from Glacier Deep Archive to different storage classes, first need to restore to original locations using Amazon S3 Glacier console & then use lifecycle policy to move objects to required S3 Intelligent-Tiering storage class.\n\n\n\tOption A & D are incorrect as Objects in Glacier Deep Archive cannot be directly moved to another storage class. These need to be restored first & then copied to desired storage class.\n\tOption C is incorrect as Amazon S3 console cannot be used to access these objects as these are Glacier objects.\n\n\nFor more information on moving objects between S3 storage classes refer to following URLs,\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A large retail firm is saving its global sales reports in S3 bucket & are using S3 Lifecycle rules to move this data from Standard_IA storage class to AWS S3 Glacier post 180 days. Due to the financial year end, the Finance team is looking for a sales report for only Europe region where there is mismatch reported in sales figure. Which of the following is a recommended way to fetch this data with least efforts?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Retrieve this data from Amazon Glacier to S3 bucket & use Amazon S3 select to query specific continent data using simple SQL."
    }, {
        "id": "B",
        "markdown": "Retrieve this data from Amazon Glacier to S3 bucket & use Amazon Athena to query specific continent data using SQL."
    }, {
        "id": "C",
        "markdown": "Use Amazon S3 Glacier Select to query specific continent data which is restored to S3 bucket from AWS S3 Glacier."
    }, {
        "id": "D",
        "markdown": "Use Amazon S3 Glacier Select to query specific continent data directly from Amazon S3 Glacier using simple SQL."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAmazon S3 Glacier Select can be used to query specific data from Amazon S3 Glacier instead of querying whole data. Amazon S3 Glacier Select can directly query data from Amazon S3 Glacier & restoration of data to S3 bucket is not required for querying this data.\n\n\n\tOption A is incorrect as for data stored in Amazon S3 Glacier, it’s not necessary to restore data to S3 bucket.\n\tOption B is incorrect as for data stored in Amazon S3 Glacier, it’s not necessary to restore data to S3 bucket. Also, Amazon Athena is an interactive query tool to analyse data with S3 bucket.\n\tOption C is incorrect as for using Amazon S3 Glacier Select, there is no restore data in S3 bucket.\n\n\nFor more information on using Amazon S3 Glacier Select, refer to the following URL,\n\n\n\thttps://aws.amazon.com/glacier/features/#amazon-glacier-select\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A large educational institute is using Amazon S3 buckets to save data for its all graduation streams. During annual external audits from local government bodies, institutes need to fetch data of specific streams to get it audited from auditors. Large amount of data is saved in these S3 buckets which makes its cumbersome to download whole data & retrieve only a small amount of information from it. The IT Team is looking for your consultation for this issue without incurring additional cost or compromising on security. Which of the following actions is recommended for resolution?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Store objects in CSV format compressing it with Snappy using server-side encryption. Use Amazon S3 Select to retrieve a subset of data."
    }, {
        "id": "B",
        "markdown": "Store objects in JSON format compressing it with GZIP using server-side encryption. Use Amazon S3 Select to retrieve a subset of data."
    }, {
        "id": "C",
        "markdown": "Store objects in Apache Parquet format compressing the whole object with GZIP using server-side encryption. Use Amazon S3 Select to retrieve a subset of data."
    }, {
        "id": "D",
        "markdown": "Store objects in CSV format compressing it with BZIP2 without any encryption. Use Amazon S3 Select to retrieve a subset of data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon S3 Select can be used to query a subset of data from the objects stored in S3 bucket using simple SQL. For using this, objects need to be stored in S3 bucket with CSV, JSON or Apache Parquet format. GZIP & BZIP2 compression is supported with CSV or JSON format with server-side encryption.\n\n\n\tOption A is incorrect as with Amazon S3 Select, only GZIP & BZIP2 compression is supported with CSV format.\n\tOption C is incorrect as Apache Parquet format with GZIP compression is not supported with S3 Select.\n\tOption D is incorrect as although this will work, saving objects in S3 without encryption will risk security of objects.\n\n\nFor more information on using S3 Select, refer to following URL,\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/selecting-content-from-objects.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A legal consultant firm is using version enabled S3 buckets to save all its legal documents. To avoid any deletion/ modification of these documents, they have locked these files with a retention period of 6 months. In some of the cases, these legal documents are getting updated with new information that the firm requires to set a different retention period than the original object. Which of the following actions will meet this requirement with the least efforts?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create another version with the same name as that of the object & have a separate retention period than the current object."
    }, {
        "id": "B",
        "markdown": "Create another bucket & place new objects with different retention periods."
    }, {
        "id": "C",
        "markdown": "Delete existing objects first & then place an object in the same bucket with different retention periods."
    }, {
        "id": "D",
        "markdown": "Modify name & version of object & have separate retention period than the current object."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nWith version enabled S3 buckets, each version of an object can have a different retention period.\n\n\n\tOption B is incorrect as the creation of different buckets & placing an object in that bucket will work but this is not required as the same can be done using the existing S3 bucket.\n\tOption C is incorrect as the deletion of existing objects is not required.\n\tOption D is incorrect as a different name of the same object is not required which will increase additional complexity.\n\n\nFor more information on using Amazon S3 object lock, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You manage the IT users for a large organization that is moving many services to AWS. You want a seamless way for your employees to log in and use cloud services. You also want to use AWS Managed Microsoft AD and have been asked if users will be able to access services in the on-premises environment. What would you respond?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Managed Microsoft AD requires data synchronization and replication to work properly"
    }, {
        "id": "B",
        "markdown": "AWS Managed Microsoft AD can only be used for cloud or on-premises environments, not both"
    }, {
        "id": "C",
        "markdown": "AWS Managed Microsoft AD can be used as the Active Directory over VPN or Direct Connect"
    }, {
        "id": "D",
        "markdown": "AWS Managed Microsoft AD is 100% the same as Active Directory running on separate EC2 instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\n\n\tOption C is correct. Because you want to use AWS Managed Microsoft AD, you want to be certain that your users can use the AWS cloud resources as well as services in your on-premise environment. In order to make your company have connectivity for AWS services, once you implement VPN or Direct Connect, your AWS Managed Microsoft AD can be used for both cloud services and on-premises services.\n\tOption A is incorrect. When data can be synchronized from on-premises to the cloud, it is not required.\n\tOption B is incorrect. AWS Managed Microsoft AD can be used for both, it’s not one or the other.\n\tOption D is incorrect. AWS Managed Microsoft AD. being a managed service limits some capabilities versus running Active Directory by itself on EC2 instances\n\n\n \n\n \n\nFor more information, please visit the URLs below:\n\n\n\thttps://aws.amazon.com/directoryservice/\n\thttps://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to use Route 53 as the DNS provider. There is a need to ensure that the company's domain name points to an existing CloudFront distribution. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an Alias record which points to the CloudFront distribution."
    }, {"id": "B", "markdown": "Create a host record which points to the CloudFront distribution."}, {
        "id": "C",
        "markdown": "Create a CNAME record which points to the CloudFront distribution."
    }, {"id": "D", "markdown": "Create a Non-Alias Record which points to the CloudFront distribution."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nWhile ordinary Amazon Route 53 records are standard DNS records, alias records provide a Route 53–specific extension to the DNS functionality. Instead of an IP address or a domain name, an alias record contains a pointer to a CloudFront distribution, an Elastic Beanstalk environment, an ELB Classic, Application, or Network Load Balancer, an Amazon S3 bucket that is configured as a static website, or another Route 53 record in the same hosted zone. When Route 53 receives a DNS query that matches the name and type in an alias record, Route 53 follows the pointer and responds with the applicable value.\n\nFor more information on Route 53 Alias records, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html\n\n\nNote: \n\nRoute 53 uses \"Alias Name\" to connect to the CloudFront as Alias Record is a Route 53 extension to DNS.  Also, Alias record is similar to a CNAME record, but the main difference is - you can create Alias record for both root domain & subdomain, whereas CNAME record can be created only to subdomain. Check the below link to get more information:\n\n\n\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company needs to extend its storage infrastructure to the AWS Cloud. The storage needs to be available as iSCSI devices for on-premises application servers. What should be done to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a Glacier vault. Use a Glacier Connector and mount it as an iSCSI device."
    }, {"id": "B", "markdown": "Create an S3 bucket. Use an S3 Connector and mount it as an iSCSI device."}, {
        "id": "C",
        "markdown": "Use the EFS file service and mount the different file systems to the on-premises servers."
    }, {"id": "D", "markdown": "Use the AWS Storage Gateway-cached volumes service."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation mentions the following:\n\nBy using cached volumes, you can use Amazon S3 as your primary data storage, while retaining frequently accessed data locally in your storage gateway. Cached volumes minimize the need to scale your on-premises storage infrastructure while still providing your applications with low-latency access to their frequently accessed data. You can create storage volumes up to 32 TB in size and attach iSCSI devices to them from your on-premises application servers. Your gateway stores data that you write to these volumes in Amazon S3, retains recently read data in your on-premises storage gateway's cache, and upload buffer storage.\n\n \n\nFor more information on AWS Storage Gateways, please visit the following URL:\n\nhttps://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global infrastructure firm is saving all its architectural drawing & project files in a S3 Glacier. These files will be randomly accessed by third-party vendors while performing Structural Audits. You need to ensure that only legitimate users will be able to read the contents of these files & no users should be able to delete these files for 3 years under any circumstances. Access to third-party vendors should be reviewed often as per security SOP. Which of the following can be done to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Vault Access Policy to deny delete permission for 3 years updating this policy every 6 months & use Vault Lock Policy to permit read access to third -party vendors updating this policy every 6 months."
    }, {
        "id": "B",
        "markdown": "Use Vault Lock Policy to deny delete permission for 3 years updating policy once initially & use Vault Access Policy to permit read access to third -party vendors updating this policy monthly."
    }, {
        "id": "C",
        "markdown": "Use Vault Lock Policy to deny delete permission for 3 years updating this policy every 6 months & use Vault Access Policy to permit read access to third -party vendors updating this policy monthly."
    }, {
        "id": "D",
        "markdown": "Use Vault Access Policy to deny delete permission for 3 years updating this policy once initially & use Vault Lock Policy to permit read access to third -party vendors updating this policy only once initially."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nVault Lock Policy can be used to lock users from performing specific action on archives stored in S3 Glaciers. Vault Access policy is used to grant permission to access these files in S3 Glacier. To meet the requirement, Vault Lock Policy can be used which can be updated only initially & post that no modifications can be done to this policy. Vault Access Policy can be used to grant standard permission & this policy can be modified as per user requirement.\n\n\n\tOption A & D are incorrect as Vault Access policy need to be used to grant permission for access control while Vault Lock Policy need to be used to lock the policy to deny deletion of objects for compliance purpose.\n\tOption C is incorrect as Vault Lock Policy can be modified only once & not every 6 months.\n\n\nFor more information on using Vault Access Policy & Vault Lock Policy, refer to following URL,\n\n\n\thttps://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your current setup in AWS consists of the following architecture: 2 public subnets, one subnet which has web servers accessed by users across the Internet and another subnet for the database server. Which of the following changes to the architecture would add a better security boundary to the resources hosted in this setup?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Consider moving the web server to a private subnet."}, {
        "id": "B",
        "markdown": "Create a private subnet and move the database server to a private subnet."
    }, {"id": "C", "markdown": "Consider moving both the web and database servers to a private subnet."}, {
        "id": "D",
        "markdown": "Consider creating a private subnet and adding a NAT Instance to that subnet."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe ideal setup is to host the web server in the public subnet so that it can be accessed by users on the Internet. The database server can be hosted in the private subnet.\n\nThe below diagram from AWS Documentation shows the set up:\n\n\n\n\n\n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of applications that make use of Docker containers. There is a need to move these containers to AWS. Which option below is the BEST way to set up these Docker containers in a separate AWS environment?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create EC2 Instances, install Docker, and then upload the containers."
    }, {
        "id": "B",
        "markdown": "Create EC2 Container registries, install Docker, and then upload the containers."
    }, {
        "id": "C",
        "markdown": "Create an Elastic Beanstalk environment with the necessary Docker containers."
    }, {"id": "D", "markdown": "Create EBS Optimized EC2 Instances, install Docker, and then upload the containers."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nThe Elastic Beanstalk service can be used to host Docker containers.\n\nAWS Documentation mentions the following:\n\nElastic Beanstalk supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run.\n\n\n\tFor more information on using Elastic Beanstalk for Docker containers, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html\n\t\n\t\n\tOption B is incorrect because just creating the EC2 Container registries would not be sufficient. We need to incorporate some automated mechanism to take care of the function of the docker container if it fails in-between. An ElasticBeanStalk would be used for this purpose.\n\n\nNote:\n\nOption A could be partially correct as we need to install docker on EC2 instance. In addition to this, you need to create an ECS Task definition which details the docker image that we need to use for containers and how many containers to be used as well as the resource allocation for each container.\n\nBut with Option C, we have this added advantage:\n\nIf a Docker container running in an Elastic Beanstalk environment is crashed or killed for any reason, Elastic Beanstalk restarts it automatically.\n\nIn the given question, we have been asked about the best method to set up docker containers, hence Option C seems to be the most appropriate.\n\nFor more information, please check the URLs below:\n\n\n\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html\n\thttps://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Instances in your private subnet hosted in AWS, need access to important documents in S3. Due to the confidential nature of these documents, you have to ensure that the traffic does not traverse through the internet. As an architect, how would you implement this solution?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Consider using a VPC Endpoint."}, {
        "id": "B",
        "markdown": "Consider using an EC2 Endpoint."
    }, {"id": "C", "markdown": "Move the instances to a public subnet."}, {
        "id": "D",
        "markdown": "Create a VPN connection and access the S3 resources from the EC2 Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS documentation mentions the following:\n\nA VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other services does not leave the Amazon network.\n\nFor more information on VPC Endpoints, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-endpoints.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "The Developers Team is working on a new application for which they will be launching a large number of EC2 Instance. To decrease time in launching all these EC2 instances they want you to pre-warm these instances & keep ready for launching with all required patches & software. Which of the following can be done to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Launch an Amazon EC2 instance with Auto-Scaling group & enable Hibernate on each instance with Auto-Scaling group."
    }, {
        "id": "B",
        "markdown": "Launch an Amazon EC2 instance with instance root volume & enable Hibernate."
    }, {
        "id": "C",
        "markdown": "Launch an Amazon EC2 instance with Amazon EBS root volume & enable Hibernate."
    }, {
        "id": "D",
        "markdown": "Launch an Amazon EC2 instance with Auto-Scaling group & enable Hibernate only on EC2 instance which will be hibernate."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nTo pre-warm EC2 instance, EC2 Hibernate can be used. For this Amazon EC2 needs to be launched with Amazon EBS root volumes & also Auto-Scaling group is not supported with these EC2 instance.\n\n\n\tOption A & D are incorrect as EC2 hibernate is not supported with EC2 instance in the Auto-Scaling group.\n\tOption B is incorrect as EC2 hibernate is not supported on Instance store volume, it requires root volumes as Amazon EBS.\n\n\nFor more information on using Amazon EC2 instance, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances to pull transcoding jobs from SQS. Why is SQS an appropriate service for this scenario?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "SQS guarantees the order of the messages."}, {
        "id": "B",
        "markdown": "SQS synchronously provides transcoding output."
    }, {"id": "C", "markdown": "SQS checks the health of the worker instances."}, {
        "id": "D",
        "markdown": "SQS helps to facilitate horizontal scaling of encoding tasks."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nEven though SQS guarantees the order of messages for FIFO queues, the main reason for using it is because it helps in horizontal scaling of AWS resources and is used for decoupling systems. \n\nSQS can neither be used for transcoding output nor for checking the health of worker instances. The health of worker instances can be checked via ELB or CloudWatch.\n\n \n\nFor more information on SQS, please visit the following URL: \n\nhttps://aws.amazon.com/sqs/faqs/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point, you find out that other sites have been linking to the photos on your site, causing loss to your business. What would be an effective method to mitigate this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Remove public read access and use signed URLs with expiry dates."}, {
        "id": "B",
        "markdown": "Use CloudFront distributions for static content."
    }, {"id": "C", "markdown": "Block the IPs of the offending websites in Security Groups."}, {
        "id": "D",
        "markdown": "Store photos on an EBS Volume of the web server."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nOption B is incorrect because CloudFront is only used for the distribution of content across edge or region locations, and not for restricting access to content.\n\nOption C is not feasible. Because of their dynamic nature, blocking IPs is challenging and you will not know which sites are accessing your main site.\n\n\nOption D is incorrect since storing photos on an EBS Volume is neither good practice nor an ideal architectural approach for an AWS Solutions Architect.\n\n \n\nFor more information on Pre-Signed URLs, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An IT firm has deployed a new application on a fleet of EC2 instances in an AWS Cloud Infrastructure. These EC2 instances are monitored by a legacy monitoring tool from on-premise. Some of these EC2 instances are hibernated based upon the response from users. Operations Team is concerned about the IP address retention for EC2 instance post hibernation so that they will modify on-premise monitoring tools accordingly. Which of the following is TRUE with respect to EC2 hibernation?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "EC2 instance retains public IPv4 address & Elastic IP address assigned to this instance but releases a private IPv4 address associated with it."
    }, {
        "id": "B",
        "markdown": "EC2 instance retains private & public IP address along with Elastic IP address assigned to this instance."
    }, {
        "id": "C",
        "markdown": "EC2 instance retains private IPv4 address & Elastic IP address assigned to this instance but releases public IPv4 address associated with it."
    }, {
        "id": "D",
        "markdown": "EC2 instance releases private & public IP address along with the Elastic IP address assigned to this instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nPost EC2 hibernation, public IP address are released while Private IP address, as well as Elastic IP address associated with this EC2 instance, are retained.\n\n\n\tOption A is incorrect as EC2 retains private & Elastic IP addresses and releases public IP addresses.\n\tOption B is incorrect as the Public IP address allocated to EC2 instance is released post hibernation.\n\tOption D is incorrect as Private IP address & Elastic IP address are retained post EC2 hibernation. \n\n\nFor more information on EC2 hibernation, refer to the following link,\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company currently hosts its architecture in the US region. They now need to duplicate this architecture to the Europe region and extend the application hosted on this architecture to the new region. In order to ensure that users across the globe get the same seamless experience, what should be done?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a Classic Elastic Load Balancer setup to route traffic to both locations."
    }, {
        "id": "B",
        "markdown": "Create a weighted Route 53 policy to route the policy based on the weightage for each location."
    }, {
        "id": "C",
        "markdown": "Create an Application Elastic Load Balancer setup to route traffic to both locations."
    }, {"id": "D", "markdown": "Create a Geolocation Route 53 Policy to route the traffic based on the location."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation mentions the following with respect to this requirement:\n\nGeolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, which means the location that DNS queries originate from.\n\n\n\tFor more information on AWS Route 53 Routing Policies, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a set of EC2 Instances that support an application. They are currently hosted in the US Region. In the event of a disaster, you need a way to ensure that you can quickly provision the resources in another region. How could this be accomplished? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Copy the underlying EBS Volumes to the destination region."}, {
        "id": "B",
        "markdown": "Create EBS Snapshots and then copy them to the destination region."
    }, {
        "id": "C",
        "markdown": "Create AMIs for the underlying instances and copy them to the destination region."
    }, {"id": "D", "markdown": "Copy the metadata for the EC2 Instances to S3."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B and C\n\nSnapshots can be used to create a AMI or template of the underlying instance. You can then copy the AMI to another region. You can also make snapshots of the volumes and then copy them to the destination region.\n\nFor more information on AMIs and EBS Snapshots, please visit the following URLs:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A start-up firm has deployed project files in the Amazon S3 bucket. This is accessed globally by intranet users for which they are using Amazon CloudFront. Last few days it was observed that these objects are being altered by unauthorized users directly from the S3 bucket. The Security Team wants to control access to these objects & make sure only authorized users are able to access these files only in a particular time period. You are working to find a resolution for the same. Which of the following actions can remediate this issue in a timely manner?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an HTTP cookie for multiple objects in an S3 bucket using a Canned policy specifying start & end time for users to access video files."
    }, {
        "id": "B",
        "markdown": "Create an HTTP cookie for each object in an S3 bucket using a Canned policy specifying start & end time for users to access video files."
    }, {
        "id": "C",
        "markdown": "Create an HTTP cookie for each object in an S3 bucket using Custom policy specifying start & end time for users to access video files."
    }, {
        "id": "D",
        "markdown": "Create an HTTP cookie for multiple objects in an S3 bucket using Custom policy specifying start & end time for users to access video files"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nCustom policy statements wildcard characters can be used with Custom policy to allow multiple files.\n\n\n\tOptions A & B are incorrect as with Canned Policy start time & multiple files cannot be specified\n\tOption C is incorrect as for each file there is no need to create a separate Custom policy.\n\n\n For more information on using restricting access using Amazon CloudFront, refer to the following URLs,\n\n\n\thttps://aws.amazon.com/blogs/aws/new-amazon-cloudfront-signed-cookies-for-private-content/\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-cookies.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know about the storage capacity requirements. Which storage option would be both cost-efficient and scalable in this situation?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Multiple Amazon EBS Volume with snapshots"}, {
        "id": "B",
        "markdown": "A single Amazon Glacier Vault"
    }, {"id": "C", "markdown": "A single Amazon S3 bucket"}, {"id": "D", "markdown": "Multiple instance stores"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon S3 is the perfect storage solution for audio and text files. It is a highly available and durable storage device.\n\nFor more information on Amazon S3, please visit the following URL:\n\nhttps://aws.amazon.com/s3/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A customer has an instance hosted in the AWS Public Cloud. The VPC and subnet used to host the instance have been created with the default settings for the Network Access Control Lists. An IT Administrator needs to be provided secure access to the underlying instance. How could this be accomplished?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure the Network Access Control Lists allow Inbound SSH traffic from the IT Administrator’s Workstation."
    }, {
        "id": "B",
        "markdown": "Ensure the Network Access Control Lists allow Outbound SSH traffic from the IT Administrator’s Workstation."
    }, {
        "id": "C",
        "markdown": "Ensure that the security group allows Inbound SSH traffic from the IT Administrator’s Workstation."
    }, {
        "id": "D",
        "markdown": "Ensure that the security group allows Outbound SSH traffic from the IT Administrator’s Workstation."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nEnsure that the security group allows Inbound SSH traffic from the IT Administrator’s Workstation. Since Security groups are stateful, we do not have to configure outbound traffic. What enters the inbound traffic is allowed in the outbound traffic too.\n\nNote: The default network ACL is configured to allow all traffic to flow in and out of the subnets to which it is associated. Since the question does not mention that it is a custom VPC we would assume it to be the default one. \n\nBased on this, Option C is the correct answer.\n\nSince the IT administrator needs to be provided ssh access to the instance. The traffic would be inbound to the instance. Security group being stateful means that return response to the allowed inbound request will be allowed and vice-versa.\n\nAllowing the outbound traffic would mean that instance would ssh into the IT admin's server and this server will send the response to the instance but it does not mean that IT admin would also be able to ssh into instance. SSh does not work like that.\n\nTo allow ssh, you need to allow inbound ssh access over port 22. For more information, please refer to the URL below:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html\n\n\nPrerequisites for ssh\n\nBefore you connect to your Linux instance, complete the following prerequisites:\n\n\n\t\n\tInstall an SSH client\n\n\tYour Linux computer most likely includes an SSH client by default. You can check for an SSH client by typing ssh at the command line. If your computer doesn't recognize the command, the OpenSSH project provides a free implementation of the full suite of SSH tools.\n\t\n\n\nFor more information, please refer to the URL below:\n\n http://www.openssh.com.\n\n\n\t\n\tInstall the AWS CLI Tools (Optional)\n\n\tIf you're using a public AMI from a third party, you can use the command line tools to verify the fingerprint.\n\t\n\n\nFor more information about installing the AWS CLI, see Getting Set Up in the AWS Command Line Interface User Guide.\n\n\n\t\n\tGet the ID of the instance\n\n\tYou can get the ID of your instance using the Amazon EC2 console (from the Instance ID column). If you prefer, you can use the describe-instances (AWS CLI) or Get-EC2Instance (AWS Tools for Windows PowerShell) command.\n\t\n\t\n\tGet the public DNS name of the instance\n\n\tYou can get the public DNS for your instance using the Amazon EC2 console. Check the Public DNS (IPv4) column. If this column is hidden, choose the Show/Hide icon and select Public DNS (IPv4). If you prefer, you can use the describe-instances (AWS CLI) or Get-EC2Instance (AWS Tools for Windows PowerShell) command.\n\t\n\t\n\tGet the IPv6 address of the instance (IPv6 only) \n\n\tIf you've assigned an IPv6 address to your instance, you can optionally connect to the instance using its IPv6 address instead of a public IPv4 address or public IPv4 DNS hostname. Your local computer must have an IPv6 address and must be configured to use IPv6. You can get the IPv6 address of your instance using the Amazon EC2 console. Check the IPv6 IPs field. If you prefer, you can use the describe-instances (AWS CLI) or Get-EC2Instance (AWS Tools for Windows PowerShell) command.\n\t\n\n\nFor more information on IPv6, you can check IPv6 Addresses.\n\n\n\t\n\tLocate the private key and verify permissions\n\n\tGet the fully-qualified path to the location of the .pem file on your computer for the key pair that you specified when you launched the instance. Verify that the .pem file has permissions of 0400, not 0777.\n\t\n\n\nFor more information, please check Error: Unprotected Private Key File.\n\n\n\t\n\tGet the default user name for the AMI that you used to launch your instance\n\n\t\n\t\t\n\t\tFor Amazon Linux 2 or the Amazon Linux AMI, the user name is ec2-user.\n\t\t\n\t\t\n\t\tFor a Centos AMI, the user name is centos.\n\t\t\n\t\t\n\t\tFor a Debian AMI, the user name is admin or root.\n\t\t\n\t\t\n\t\tFor a Fedora AMI, the user name is ec2-user or fedora.\n\t\t\n\t\t\n\t\tFor an RHEL AMI, the user name is ec2-user or root.\n\t\t\n\t\t\n\t\tFor a SUSE AMI, the user name is ec2-user or root.\n\t\t\n\t\t\n\t\tFor an Ubuntu AMI, the user name is ubuntu.\n\t\t\n\t\t\n\t\tIf ec2-user and root don't work, check with the AMI provider.\n\t\t\n\t\n\t\n\t\n\tEnable inbound SSH traffic from your IP address to your instance\n\n\tEnsure that the security group associated with your instance allows incoming SSH traffic from your IP address. The default security group for the VPC does not allow incoming SSH traffic by default. The security group created by the launch wizard enables SSH traffic by default.\n\t\n\n\nFor more information, please check Authorizing Inbound Traffic for Your Linux Instances.\n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an on-premises infrastructure which they want to extend to the AWS Cloud. There is a need to ensure that communication across both environments is possible over the Internet when initiated from on-premises. What should be set up on the on-premise side?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a VPC peering connection between the on-premises and the AWS Environment."
    }, {
        "id": "B",
        "markdown": "Create an AWS Direct connection between the on-premises and the AWS Environment."
    }, {"id": "C", "markdown": "Create a VPN connection between the on-premises and the AWS Environment."}, {
        "id": "D",
        "markdown": "Create a Virtual private gateway connection between the on-premises and the AWS Environment."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nAWS Documentation mentions the following:\n\nOne can create a Virtual private connection to establish communication across both environments over the Internet.\n\nFor more information on Virtual private connection, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_VPN.html\n\n\nOption A is invalid because a VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. It is not used for connection between on-premises environment and AWS.\n\nOption D is invalid because a virtual private gateway is the Amazon VPC side of a VPN connection. For the communication to take place between the on-premise servers to AWS EC2 instances within the VPC, we need to set up the customer gateway at the on-premise location.\n\n \n\nNote: The question says that \"There is a need to ensure that communication across both environments is possible over the Internet.\" AWS Direct Connect does not involve the Internet.\n\nA VPC VPN Connection utilizes IPSec to establish encrypted network connectivity between your intranet and Amazon VPC over the Internet. VPN Connections can be configured in minutes and are a good solution if you have an immediate need, have low to modest bandwidth requirements, and can tolerate the inherent variability in Internet-based connectivity. AWS Direct Connect does not involve the Internet; instead, it uses dedicated, private network connections between your intranet and Amazon VPC.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to build a brand new application on the AWS Cloud. They want to ensure that this application follows the Microservices architecture. Which of the following services can be used to build this type of architecture? (SELECT THREE)",
    "prompt": "",
    "correctAnswerId": ["A", "B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Lambda"}, {"id": "B", "markdown": "AWS ECS"}, {
        "id": "C",
        "markdown": "AWS API Gateway"
    }, {"id": "D", "markdown": "AWS Config"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A, B, and C\n\nAWS Lambda is a serverless compute service that allows you to build independent services.\n\nThe Elastic Container Service (ECS) can be used to manage containers.\n\nThe API Gateway is a serverless component for managing access to APIs.\n\nFor more information about Microservices on AWS, please visit the following URL:\n\nhttps://aws.amazon.com/microservices/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are deploying an application to track the GPS coordinates of delivery trucks in the United States. Coordinates are transmitted from each delivery truck once every three seconds. You need to design an architecture that will enable real-time processing of these coordinates from multiple consumers. Which service should you use to implement data ingestion?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Kinesis"}, {"id": "B", "markdown": "AWS Data Pipeline"}, {
        "id": "C",
        "markdown": "Amazon AppStream"
    }, {"id": "D", "markdown": "Amazon Simple Queue Service"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS documentation mentions the following:\n\nAmazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to process streaming data cost-effectively at any scale, along with the flexibility to choose the tools that best suit the requirements of your application.\n\n \n\nWith Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and responds instantly instead of waiting until all your data is collected before the processing can begin.\n\n\n\tFor more information on Amazon Kinesis, please visit the following URL:\n\t\n\t\thttps://aws.amazon.com/kinesis/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company authenticates users in a very disconnected network requiring each user to have several username/password combinations for different applications. You have been assigned a task of consolidating and migrating services to the cloud and reducing the number of usernames and passwords, employees need to use. What would you recommend?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Directory Service allows users to sign in with their existing corporate credentials – reducing the need for additional credentials."
    }, {
        "id": "B",
        "markdown": "Create two Active Directories – one for the cloud and one for on-premises – reducing username/password combinations to two"
    }, {
        "id": "C",
        "markdown": "Require users to use third-party identity providers to log-in for all services"
    }, {"id": "D", "markdown": "Build out Active Directory on EC2 instances to gain more control over user profiles"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\n\n\tOption A is correct. AWS Directory Service enables your end-users to use their existing corporate credentials while accessing AWS applications. Once you’ve been able to consolidate services to AWS, you won’t have to create new credentials. Instead, you’ll be able to allow the users to use their existing username/password.\n\tOption B is incorrect. One Active Directory can be used for both on-premises and the cloud; this isn’t the best option provided.\n\tC. This won’t always reduce the number of username/passwords combinations.\n\tD. This requires more effort and additional management than using a managed service\n\n\nFor more information, please refer to the URLs below:\n\n\n\thttps://aws.amazon.com/directoryservice/faqs\n\thttps://aws.amazon.com/directoryservice/\n\thttps://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to use the AWS Redshift service. The Redshift service and data on it would be used continuously for the next 3 years as per the current business plan. What would be the most cost-effective solution in this scenario?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Consider using On-demand instances for the Redshift Cluster."}, {
        "id": "B",
        "markdown": "Enable Automated backup."
    }, {"id": "C", "markdown": "Consider using Reserved Instances for the Redshift Cluster."}, {
        "id": "D",
        "markdown": "Consider not using a cluster for the Redshift nodes."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nAWS documentation mentions the following:\n\nIf you intend to keep your Amazon Redshift cluster running continuously for a prolonged period, you should consider purchasing reserved node offerings. These offerings provide significant savings over on-demand pricing, but they require you to reserve compute nodes and commit to paying for those nodes for either a one-year or three-year duration.\n\n \n\nFor more information on Reserved Nodes in Redshift, please visit the following URL:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to run a number of admin-related scripts using the AWS Lambda service. There is a need to detect errors that occur while these scripts run. How could this be accomplished in the most effective manner?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use CloudWatch Metrics and Logs to detect the errors."}, {
        "id": "B",
        "markdown": "Use CloudTrail to monitor the errors"
    }, {"id": "C", "markdown": "Use the AWS Config service to monitor the errors"}, {
        "id": "D",
        "markdown": "Use the AWS Inspector service to monitor the errors"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following:\n\nAWS Lambda automatically monitors Lambda functions on your behalf, reporting metrics through Amazon CloudWatch. To help you troubleshoot failures in a function, Lambda logs all the requests handled by your function and also automatically stores logs generated by your code through Amazon CloudWatch Logs.\n\nFor more information on Monitoring Lambda functions, please visit the following URL:\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your organization is using a CloudFront distribution to distribute content from an S3 bucket. It is required that only a particular set of users get access to certain content. How could this be accomplished?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create IAM Users for each user and then provide access to the S3 bucket content."
    }, {
        "id": "B",
        "markdown": "Create IAM Group for each set of users and then provide each Group access of the S3 bucket"
    }, {
        "id": "C",
        "markdown": "Create CloudFront signed URLs and then distribute these URLs to the users."
    }, {"id": "D", "markdown": "Use IAM Polices for the underlying S3 buckets to restrict content."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nAWS Documentation mentions the following: \n\nMany companies that distribute content via the internet, want to restrict access to documents, business data, media streams, or content that is intended for the selected users, for example, users who have paid a fee. To securely serve this private content using CloudFront, you can do the following:\n\n\n\tRequire that your users access your private content by using special CloudFront signed URLs or signed cookies.\n\tRequire that your users access your Amazon S3 content using CloudFront URLs, not Amazon S3 URLs. Requiring CloudFront URLs isn't required, but we recommend it to prevent users from bypassing the restrictions that you specify in signed URLs or signed cookies.\n\n\n\n \n\nFor more information on serving private content via CloudFront, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html#\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A financial institute is using a web-based application for its customers. They are planning to migrate to a serverless application for reducing cost & providing better user experience with less latency. Since this is a critical application, any downtime will incur losses to this institute. For this Programme Director wants to have proper testing of application & post-deployment during initial period traffic should be shared with existing & new serverless applications. As an AWS consultant which of the following is recommended to meet this requirement with the least cost & efforts?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Test the application locally invoking Lambda function locally using AWS SAM. Post testing deploys application gradually using a separate CodeDeploy resource."
    }, {
        "id": "B",
        "markdown": "Test the application locally invoking Lambda function locally using AWS SAM. Post testing deploys application gradually using built-in CodeDeploy resources."
    }, {
        "id": "C",
        "markdown": "Test the application by creating a new VPC & test lambda function using AWS SAM. Post testing deploys application gradually using built-in CodeDeploy resources."
    }, {
        "id": "D",
        "markdown": "Test the application by creating a new VPC & test lambda function using AWS SAM. Post testing deploys application gradually using a separate CodeDeploy resource."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nWith AWS SAM, the application can be tested locally by invoking Lambda function & event sources locally. Using these SAM templates, the application can be tested thoroughly before deploying in the AWS cloud. Also, CodeDeploy is built with AWS SAM which can help to deploy gradually within Cloud along with the existing applications which can minimize risks.\n\n\n\tOption A is incorrect as a separate CodeDeploy resource does not need to be created with AWS SAM, it's inbuilt with AWS SAM.\n\tOptions C & D are incorrect as creating a new VPC & a test Lambda function will incur additional admin work & cost, instead of that AWS SAM can be used to invoke Lambda function locally.\n\n\nFor more information on testing & gradual deployment with AWS SAM, refer to the following URLs,\n\n\n\thttps://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-test-and-debug.html\n\thttps://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a small company, running on Windows OS, that is only leveraging cloud resources like AWS Workspaces and AWS Workmail. You want a fully managed solution to set policies and provide user management. Which of the minimum required AWS Directory Service would you recommend?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Managed Microsoft AD for its full-blown AD features and capabilities"
    }, {"id": "B", "markdown": "AD Connector to be used with on-premises applications"}, {
        "id": "C",
        "markdown": "AWS Cognito for its scalability and customization"
    }, {"id": "D", "markdown": "Simple AD for limited functionality and compatibility with desired applications"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: D\n\n\n\tOption D - Simple AD for limited functionality and compatibility with desired applications is the correct answer. Simple AD is a Microsoft Active Directory–compatible directory from AWS Directory Service. You can use Simple AD as a standalone directory in the cloud to support Windows workloads that need basic AD features or compatible AWS applications.  It can also be used to support Linux workloads that need LDAP service.\n\n\n \n\n\n\tOption A is incorrect. This is more functionality and feature-rich than you need, given the desired applications\n\tOption B is incorrect. You don’t have on-premises applications, so AD Connector is not needed.\n\tOption C is incorrect. This is more functionality and feature-rich than you need, given the desired applications\n\n\nFor more information, please check the URLs below:\n\n\n\thttps://aws.amazon.com/directoryservice/\n\thttps://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You manage multiple AWS accounts in an AWS Organization. The AWS accounts of the development department are located in an Organizational Unit (OU). To reduce cost, the instance type of all EC2 instances created in these AWS accounts should be t2.micro. You attach a Service Control Policy (SCP) in the OU in order to restrict the instance type. Which of the following SCP is correct?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "{   \"Version\": \"2012-10-17\",   \"Statement\": [     {       \"Sid\": \"RestrictInstanceType\",       \"Effect\": \"Allow\",       \"Action\": \"ec2:RunInstances\",       \"Resource\": \"arn:aws:ec2:*:*:instance/*\",       \"Condition\": {         \"StringEquals\":{               \t           \"ec2:InstanceType\":\"t2.micro\"         }       }     }   ] }"
    }, {
        "id": "B",
        "markdown": "{    \"Version\": \"2012-10-17\",    \"Statement\": [      {        \"Sid\": \"RestrictInstanceType\",        \"Effect\": \"Deny\",        \"Action\": \"ec2:RunInstances\",        \"Resource\": \"arn:aws:ec2:*:*:instance/*\",        \"Condition\": {          \"StringNotEquals\":{                            \"ec2:InstanceType\":\"t2.micro\"          }        }      }    ]  }"
    }, {
        "id": "C",
        "markdown": "{   \"Version\": \"2012-10-17\",   \"Statement\": [     {       \"Sid\": \"RestrictInstanceType\",       \"Effect\": \"Deny\",       \"Action\": \"ec2:LaunchInstances\",       \"Resource\": \"*\",       \"Condition\": {         \"StringEquals\":{               \t           \"ec2:InstanceType\":\"t2.micro\"         }       }     }   ] }"
    }, {"id": "D", "markdown": "SCP cannot meet the requirement."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nAbout how SCP works, please refer to the reference in https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scp.html. In this scenario, the EC2 instance is not allowed to be launched if the instance type is not t2.micro. Option B is the correct answer.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because other instance types may be allowed as well since by default an AWS Organization has an SCP that allows full AWS access.\n\tOption​ ​B ​is​ CORRECT:​ Because the policy has the correct condition to check the instance type and denies the action if it is not t2.micro.\n\tOption​ ​C ​is​ ​incorrect:​ Because the StringEquals condition in the policy is incorrect. With the policy, a t2.micro instance cannot be launched.\n\tOption​ ​D ​is​ ​incorrect:​ Check the above explanations.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company requires a Stack-based model for its resources in AWS. There is a need to have different stacks for the Development and Production environments. Which of the following can be used for this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use EC2 tags to define different stack layers for your resources."
    }, {"id": "B", "markdown": "Define the metadata for the different layers in DynamoDB."}, {
        "id": "C",
        "markdown": "Use AWS OpsWorks to define the different layers for your application."
    }, {"id": "D", "markdown": "Use AWS Config to define the different layers for your application."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nThe requirement can be fulfilled via the OpsWorks service. The AWS Documentation given below supports this requirement:\n\nAWS OpsWorks Stacks lets you manage applications and servers on AWS and on-premises. With OpsWorks Stacks, you can model your application as a stack containing different layers, such as load balancing, database, and application server. You can deploy and configure Amazon EC2 instances in each layer or connect other resources such as Amazon RDS databases. \n\nFor more information on OpsWorks stacks, please visit the following URL:\n\n\n\thttps://aws.amazon.com/opsworks/stacks/\n\n\nA stack is basically a collection of instances that are managed together for serving a common task.\n\nConsider a sample stack whose purpose is to serve web applications. It will be comprised of the following instances.\n\n\n\t\n\tA set of application server instances, each of which handles a portion of the incoming traffic.\n\t\n\t\n\tA load balancer instance, which takes incoming traffic and distributes it across the application servers.\n\t\n\t\n\tA database instance, which serves as a back-end data store for the application servers.\n\t\n\n\nA common practice is to have multiple stacks that represent different environments. A typical set of stacks consists of:\n\n\n\t\n\tA development stack to be used by developers to add features, fix bugs, and perform other development and maintenance tasks.\n\t\n\t\n\tA staging stack to verify updates or fixes before exposing them publicly.\n\t\n\t\n\tA production stack, which is the public-facing version that handles incoming requests from users.\n\t\n\n\nFor more information, please see the link given below:\n\n\n\thttps://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has been hosting a static website in an S3 bucket for several months and gets a fair amount of traffic. Now you want your registered .com domain to serve content from the bucket. Your domain is reached via https://www.myfavoritedomain.com. However, any traffic requested through https://www.myfavoritedomain.com is not getting through. What could be the most likely cause of this disruption?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The new domain name is not registered in CloudWatch monitoring"}, {
        "id": "B",
        "markdown": "The S3 bucket has not been configured to allow Cross-Origin Resource Sharing (CORS)"
    }, {"id": "C", "markdown": "The S3 bucket was not created in the correct region"}, {
        "id": "D",
        "markdown": "https://www.myfavoritedomain.com wasn’t registered with AWS Route 53 and therefore won’t work"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: B\n\n\n\tOption B is correct. The S3 bucket has not been configured to allow Cross-Origin Resource Sharing (CORS). In order to keep your content safe, your web browser implements something called the same-origin policy.\n\n\nThe default policy ensures that scripts and other active content loaded from one site or domain cannot interfere or interact with content from another location without an explicit indication that this is the desired behavior.\n\n\n\tOption A is incorrect. Enabling Cloudwatch doesn’t affect Cross-Origin Resource Sharing (CORS)\n\tOption C is incorrect. S3 buckets are not region-specific.\n\tOption D is incorrect. The domain can be registered with any online registrar, not just AWS Route53.\n\n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html\n\thttps://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html\n\thttps://aws.amazon.com/blogs/aws/amazon-S3-cross-origin-resource-sharing/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An AWS Organization has below hierarchy of Organizational Units (OUs):\n\nRoot -> Project_OU -> Dev_OU\n\nThe Root is attached with the default Service Control Policy (SCP).\n\nProject_OU is attached with an SCP that prevents users from deleting VPC Flow Logs.\n\nDev_OU has an SCP that allows the action of \"ec2:DeleteFlowLogs\".\n\nAre the IAM users/roles in Dev_OU AWS accounts allowed to delete VPC Flow Logs?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "It is permitted because the SCP in Dev_OU allows it."}, {
        "id": "B",
        "markdown": "It is allowed because the Root has the default SCP that allows all actions."
    }, {"id": "C", "markdown": "It is not allowed as the SCP in Project_OU restricts the action."}, {
        "id": "D",
        "markdown": "It is not allowed as the default SCP in Root denies the action."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nCheck https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_about-scps.html for how SCPs work in an AWS Organization.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because if any parent OU has an SCP to deny the action, the final result is Deny.\n\tOption​ ​B ​is​ ​incorrect:​ Although the default SCP allows the action, the parent OU (Project_OU) denies it.\n\tOption​ ​C ​is​ CORRECT:​ Because an explicit Deny statement in Project_OU overrides any Allow.\n\tOption​ ​D ​is​ ​incorrect:​ Because the default SCP is FullAWSAccess which allows all actions and all services.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "One AWS Organization owns several AWS accounts. Recently, due to a change of company organizations, one member account needs to be moved from this AWS Organization to another one.  How can you achieve this?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "In the AWS console, drag and drop this account from one Organization to another."
    }, {
        "id": "B",
        "markdown": "In the AWS console, select the member account and migrate it to the destination AWS Organization."
    }, {
        "id": "C",
        "markdown": "Delete the old AWS Organization. Send an invite from the new Organization and accept the invite for the member account."
    }, {
        "id": "D",
        "markdown": "Remove the account in the old Organization. Send an invite from the new Organization and accept the invite from the member account."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nAbout how to move accounts between AWS Organizations, please refer to https://aws.amazon.com/premiumsupport/knowledge-center/organizations-move-accounts/.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ This operation cannot be performed.\n\tOption​ ​B ​is​ ​incorrect:​ Because a member account cannot be migrated to another AWS Organization directly.\n\tOption​ ​C ​is​ ​incorrect:​ Because there is no need to delete the old Organization.\n\tOption​ ​D ​is​ CORRECT:​ The account needs to be removed from the old Organization and then accept the invitation from the new Organization. The option describes the correct method.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "While managing permissions for the API Gateway, what could be used to ensure that the right level of permissions is given to Developers, IT Admins, and users? Also, the permissions should be easily managed.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use the secure token service to manage the permissions for different users."
    }, {
        "id": "B",
        "markdown": "Use IAM Policies to create different policies for different types of users."
    }, {"id": "C", "markdown": "Use the AWS Config tool to manage the permissions for different users."}, {
        "id": "D",
        "markdown": "Use IAM Access Keys to create sets of keys for different types of users."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nYou control access to Amazon API Gateway with IAM permissions by controlling access to the following two API Gateway component processes:\n\n \n\n\n\tTo create, deploy, and manage an API in API Gateway, you must grant the API developer permissions to perform the required actions supported by the API management component of API Gateway.\n\tTo call a deployed API or to refresh the API caching, you must grant the API caller permissions to perform required IAM actions supported by the API execution component of API Gateway. \n\n\n \n\nFor more information on permissions with the API Gateway, please visit the following URL:\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your Development team wants to use EC2 Instances to host their Application and Web servers. In the automation space, they want the Instances to always download the latest version of the Web and Application servers when they are launched. As an architect, what would you recommend for this scenario?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ask the Development team to create scripts which can be added to the User Data section when the instance is launched."
    }, {
        "id": "B",
        "markdown": "Ask the Development team to create scripts which can be added to the Meta Data section when the instance is launched."
    }, {
        "id": "C",
        "markdown": "Use Auto Scaling Groups to install the Web and Application servers when the instances are launched."
    }, {
        "id": "D",
        "markdown": "Use EC2 Config to install the Web and Application servers when the instances are launched."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nWhen you launch an instance in Amazon EC2, you have the option of passing user data to the instance that can be used to perform common automated configuration tasks and even run scripts after the instance starts.\n\nYou can pass two types of user data to Amazon EC2: shell scripts and cloud-init directives. You can also pass this data into the launch wizard as plain text, as a file (this is useful for launching instances using the command line tools) or as base64-encoded text (for API calls).\n\n \n\nFor more information on User Data, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has an application that takes care of uploading, processing, and publishing videos, posted by users. The current architecture for this application includes the following:\n\na) A set of EC2 Instances to transfer user-uploaded videos to S3 buckets\n\nb) A set of EC2 worker processes to process and publish the videos\n\nc) An Auto Scaling Group for the EC2 worker processes\n\nWhich of the following can be added to the architecture to make it more reliable?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon SQS"}, {"id": "B", "markdown": "Amazon SNS"}, {
        "id": "C",
        "markdown": "Amazon CloudFront"
    }, {"id": "D", "markdown": "Amazon SES"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAmazon SQS is used to decouple systems. It can store requests to process videos, to be picked up by the worker processes.\n\nAWS Documentation mentions the following:\n\nAmazon Simple Queue Service (Amazon SQS) offers a reliable, highly scalable, hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components.\n\nFor more information on AWS SQS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is an urgent requirement to monitor some database metrics for a database hosted on AWS and send notifications. Which AWS services can accomplish this? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["B", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Simple Email Service"}, {
        "id": "B",
        "markdown": "Amazon CloudWatch"
    }, {"id": "C", "markdown": "Amazon Simple Queue Service"}, {"id": "D", "markdown": "Amazon Route 53"}, {
        "id": "E",
        "markdown": "Amazon Simple Notification Service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and E\n\nAmazon CloudWatch will be used to monitor the IOPS metrics from the RDS Instance and Amazon Simple Notification Service will be used to send the notification if an alarm is triggered.\n\nFor more information on CloudWatch and SNS, please visit the URLs below.\n\n\n\thttps://aws.amazon.com/cloudwatch/\n\thttps://aws.amazon.com/sns/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a business-critical two-tier web application, currently deployed in 2 Availability Zones in a single region, using Elastic Load Balancing and Auto Scaling. The app depends on synchronous replication at the database layer. The application needs to remain fully available even if one application AZ goes offline or Auto Scaling cannot launch new instances in the remaining AZ. How could the current Elastic Load Balancing be enhanced to ensure this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Deploy in 2 regions using Weighted Round Robin with Auto Scaling set at a minimum 50% peak load per region."
    }, {
        "id": "B",
        "markdown": "Deploy in 3 AZ with Auto Scaling, set to handle a minimum of 33 percent peak load per zone."
    }, {
        "id": "C",
        "markdown": "Deploy in 3 AZ with Auto Scaling, set to handle a minimum 50 percent peak load per zone."
    }, {
        "id": "D",
        "markdown": "Deploy in 2 regions using Weighted Round Robin with Auto Scaling, set at minimum 100% peak load per region."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nSince the requirement states that the application should never go down even if an AZ is not available, we need to maintain 100% availability.\n\nOptions A and D are incorrect because region deployment is not possible for ELB. ELBs can manage traffic within a region, not between regions.\n\nOption B is incorrect because even if one AZ goes down, we would be operating at only 66% and not the required 100%.\n\nFor more information on Auto Scaling, please visit the URL below:\n\nhttps://aws.amazon.com/autoscaling/\n\nNOTE:\n\nIn the question, it is clearly mentioned that \"The application needs to remain fully available even if one application AZ goes offline and if Auto Scaling cannot launch new instances in the remaining AZ\".\n\nHere you need to maintain 100% availability. \n\nIn option B, when you create 3 AZs with minimum 33% load on each, If any failure occurs in one AZ then \n\n                       33% + 33% = 66% .\n\nHere you can handle only 66% and the remaining 34% of load, not handling.\n\nBut when you select option C, when you create 3 AZs with minimum 50% load on each, If any failure occurs in one AZ then \n\n                       50% + 50% =100% .\n\nHere you can handle full load i.e 100%.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been asked to create a VPC network topology for your company. The VPC network must support both internet-facing applications and internal-facing applications accessed only over VPN. Both Internet-facing and internal-facing applications must be able to leverage at least 3 AZs for high availability. How many subnets must you create within your VPC to accommodate these requirements?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "2"}, {"id": "B", "markdown": "3"}, {"id": "C", "markdown": "4"}, {
        "id": "D",
        "markdown": "6"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nSince each subnet corresponds to one Availability Zone and you need 3 AZs for both the internet and intranet applications, you will need 6 subnets.\n\n\n\tFor more information on VPC and subnets, please visit the below URL:\n\t\n\t\thttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html\n\t\n\t\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have the following architecture deployed in AWS:\n\na) A set of EC2 Instances which sit behind an ELB\n\nb) A database hosted in Amazon RDS\n\nOf late, the performance on the database has been slacking due to a high number of read requests. Which of the following can be added to the architecture to alleviate the performance issue? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add read replica to the primary database to offload read traffic."
    }, {"id": "B", "markdown": "Use ElastiCache in front of the database."}, {
        "id": "C",
        "markdown": "Use AWS CloudFront in front of the database."
    }, {
        "id": "D",
        "markdown": "Use Amazon DynamoDB to offload all the reads. Populate the common read items in a separate table."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A and B\n\nOption A is correct.\n\nAWS says \"Amazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput.\"\n\nAmazon ElastiCache is an in-memory cache which can be used to cache common read requests.\n\nThe below diagram shows how caching can be added to an existing architecture: \n\n\n\nFor more information on database caching, please visit the URL below:\n\nhttps://aws.amazon.com/caching/database-caching/\n\nNote:\n\nOption C is incorrect because CloudFront is a valuable component of scaling a website, especially for geo-location workloads and queries; more advanced for the given architecture. \n\nOption D is incorrect because it will have latency and additional changes as well. \n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have two AWS Organizations. All the AWS accounts in Organization A need to be moved to Organization B. You have already moved all the member accounts and now you need to migrate the master account. Which of the following options should you choose?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Delete Organization A and invite the master account to join Organization B."
    }, {
        "id": "B",
        "markdown": "Remove the master account from Organization A and send an invitation to the account to join Organization B."
    }, {
        "id": "C",
        "markdown": "Send an invitation to the master account. Accept the invitation to move the account from Organization A to Organization B."
    }, {"id": "D", "markdown": "The master account in one Organization cannot join another one."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nThe reference can be found in https://aws.amazon.com/premiumsupport/knowledge-center/organizations-move-accounts/.\n\n\n\tOption​ ​A ​is​ CORRECT:​ For the master account, the Organization needs to be deleted before the account accepts an invitation to join another one.\n\tOption​ ​B ​is​ ​incorrect:​ Because the master account cannot be removed from an AWS Organization.\n\tOption​ ​C ​is​ ​incorrect:​ Because the master account in one AWS Organization cannot accept an invitation to join another one.\n\tOption​ ​D ​is​ ​incorrect:​ Check the above explanations in option A.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A customer wants to import the existing virtual machines to the cloud. Which service should they use for this purpose?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "VM Import/Export"}, {"id": "B", "markdown": "AWS Import/Export"}, {
        "id": "C",
        "markdown": "AWS Storage Gateway"
    }, {"id": "D", "markdown": "DB Migration Service"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nVM Import/Export enables customers to import Virtual Machine (VM) images in order to create Amazon EC2 instances. Customers can also export previously imported EC2 instances to create VMs. Customers can use VM Import/Export to leverage their previous investments in building VMs by migrating their VMs to Amazon EC2.\n\nFor more information on AWS VM Import, please visit the URL below:\n\nhttps://aws.amazon.com/ec2/vm-import/\n\n \n\n Few strategies used for migration are:\n 1. Forklift migration strategy\n 2. Hybrid migration strategy\n 3. Creating AMIs\n\n \n\n\n\t AWS Import/Export -  It is a data transport service used to move large amounts of data in and out of the Amazon Web Services public cloud using portable storage devices for transport.\n\n\t\n\t\t https://aws.amazon.com/about-aws/whats-new/2009/05/20/AWS-Import-Export/\n\t\n\t\n\n\n\n \n\n\n\tAWS Storage Gateway -  It connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure. The gateway provides access to objects in S3 as files or file share mount points.\n\n\t\n\t\t https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\n\t\n\t\n\n\n\n \n\n\n\tDB Migration Service - It can migrate your data to and from most of the widely used commercial and open-source databases. It supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora.\n\n\n \n\nFor more information, please check the URL below:\n\n\n\t https://aws.amazon.com/dms/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company website is set to launch in the upcoming weeks. There is a probability that the traffic will be quite high during the initial weeks. In the event of a load failure, how is it possible to set up DNS failover to a static website?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Duplicate the exact application architecture in another region and configure DNS Weight-based routing."
    }, {
        "id": "B",
        "markdown": "Enable failover to an on-premises data center to the application hosted there."
    }, {
        "id": "C",
        "markdown": "Use Route 53 with the failover option, to failover to a static S3 website bucket or CloudFront distribution."
    }, {"id": "D", "markdown": "Add more servers in case the application fails."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon Route 53 health checks monitor the health and performance of your web applications, web servers, and other resources.\n\nIf you have multiple resources that perform the same function, you can configure DNS failover so that Amazon Route 53 will route your traffic from an unhealthy resource to a healthy resource. For example, if you have two web servers and one web server becomes unhealthy, Amazon Route 53 can route traffic to the other web server. So you can route traffic to a website hosted on S3 or to a CloudFront distribution.\n\n \n\n\n\tFor more information on DNS failover using Route 53, please refer to the link below.\n\t\n\t\thttp://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is running three production web server reserved EC2 Instances with EBS-backed root volumes. These instances have a consistent CPU load of 80%. Traffic is being distributed to these instances by an Elastic Load Balancer. They also have production and development Multi-AZ RDS MySQL databases. What recommendation would you make to reduce cost in this environment without affecting the availability of mission-critical systems? Choose the correct answer from the options given below.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Consider using On-demand instances instead of Reserved EC2 instances."
    }, {
        "id": "B",
        "markdown": "Consider not using a Multi-AZ RDS deployment for the development database."
    }, {"id": "C", "markdown": "Consider using Spot instances instead of Reserved EC2 instances."}, {
        "id": "D",
        "markdown": "Consider removing the Elastic Load Balancer."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B \n\nMulti-AZ databases are better for production environments rather than for development environments, so you can reduce costs by not using these for development environments.\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.\n\nFor more information on Multi-AZ RDS, please refer to the link below.\n\n\n\thttps://aws.amazon.com/rds/details/multi-az/\n\n\n \n\nNote:\n\nMission Critical system refers to production Instances and Databases. However, if you notice, they have Multi-AZ RDS also on the Development environment which is not necessary. Because management is always concerned about production, the environment should be perfect. \n\nIn order to reduce the cost, we can disable the Multi-AZ RDS for Development environment and keep it only for the Production environment.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In order to manage a large number of AWS accounts in a better way, you create a new AWS Organization and invite these accounts. You only enable the “Consolidated billing” feature set in the organization. Which of the below features does the AWS Organization have?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Apply SCPs to restrict the services that IAM users can access."}, {
        "id": "B",
        "markdown": "Configure tag policies to maintain consistent tags for resources in the organization's accounts."
    }, {
        "id": "C",
        "markdown": "Configure a policy to prevent IAM users in the organization from disabling AWS CloudTrail."
    }, {"id": "D", "markdown": "Combine the usage across all accounts to share the volume pricing discounts."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nRefer to https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#feature-set-cb-only for the differences between “Consolidated billing” and “All features”.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because SCP is part of the advanced features which belong to “All features”.\n\tOption​ ​B ​is​ ​incorrect:​ Because tag policies can be applied under the feature set of “All features”.\n\tOption​ ​C ​is​ ​incorrect:​ This is implemented using SCP which is not supported in “Consolidated billing”.\n\tOption​ ​D ​is​ CORRECT:​ This is supported in “Consolidated billing” according to\n\t\n\t\thttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html.\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are designing an architecture on AWS with disaster recovery in mind. Currently, the architecture consists of an ELB and underlying EC2 Instances lie in a primary and secondary region. How could you establish a switchover in case of failure in the primary region?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Route 53 Health Checks and then do a failover."}, {
        "id": "B",
        "markdown": "Use CloudWatch metrics to detect the failure and then do a failover."
    }, {
        "id": "C",
        "markdown": "Use scripts to scan CloudWatch logs to detect the failure and then do a failover."
    }, {"id": "D", "markdown": "Use CloudTrail to detect the failure and then do a failover."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nIf you have multiple resources that perform the same function, you can configure DNS failover so that Route 53 will route your traffic from an unhealthy resource to a healthy resource. For example, if you have two web servers and one web server becomes unhealthy, Route 53 can route traffic to the other web server.\n\nFor more information on configuring DNS failover using Route 53, please refer to the below link:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for an IT Company. Your Company is using EC2 Server in multiple Availability Zones in (US-EAST-1) Region. The Development Team has deployed a new Intranet application that needs to be accessed via VPC. Each of the Availability Zones has its own VPC. You have been asked to establish connectivity between all the VPCs and to make sure the solution is highly scalable and secure.  Which of the following solution would you recommend?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Attach an Internet Gateway to all the VPCs at the \"US-EAST-1\" region and allow all users to access this application over the internet."
    }, {
        "id": "B",
        "markdown": "Deploy Network Load Balancers along with AWS PrivateLink to establish connectivity between the VPC's in the \"US-EAST-1\" region."
    }, {
        "id": "C",
        "markdown": "Use VPC Peering between all the VPCs at the \"US-EAST-1\" region to provide connectivity between users & servers."
    }, {
        "id": "D",
        "markdown": "Create a VPN between instances at the various VPCs in \"US-EAST-1\" region to establish connectivity"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS PrivateLink provides secure private connectivity for services between separate VPC’s. For this, Network Load Balancers can be used in service provider while Elastic Network Interface is created in service, consuming VPC. Using DNS, service provider service is resolved to the local IP address assigned to Elastic Network Interface which will forward all traffic to the Network Load Balancer in the provider network. Network Load Balancer will perform a source NAT for all traffic & forward it to the provider instance.\n\n\n\n \n\n\n\tOption A is incorrect. Using the Internet to establish connectivity between users & servers will not be a highly secure solution.\n\tOption C is incorrect. With VPC peering, all resources in each VPC will have access to resources in other VPC. Also, since only one client will be initiating a request to servers, VPC peering will not be an ideal solution.\n\tOption D is incorrect as VPN connectivity between the instance of various VPCs will not be a scalable solution.\n\n\nFor more information on AWS PrivateLink, refer to the following URL:\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html\n\n \n\nAccessing Services Through AWS Private Links:\n\nAWS PrivateLink is a highly available, scalable technology that enables you to privately connect your VPC to supported AWS services, services hosted by other AWS accounts (VPC endpoint services), and supported AWS Marketplace partner services. You do not require an internet gateway, NAT device, public IP address, AWS Direct Connect connection, or AWS Site-to-Site VPN connection to communicate with the service. The traffic between your VPC and the service does not leave the Amazon network.\n\nTo use AWS PrivateLink, create an interface VPC endpoint for a service in your VPC. This creates an elastic network interface in your subnet with a private IP address that serves as an entry point for the traffic, destined to the service. For more information, see VPC Endpoints.\n\n\n\nYou can create your own AWS PrivateLink-powered service (endpoint service) and enable other AWS customers to access your service. For more information, see VPC Endpoint Services (AWS PrivateLink).\n\n \n\nFor more information, refer to the following URLs:\n\n\n\thttps://aws.amazon.com/privatelink/\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html#what-is-privatelink\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You want to host a static website on AWS. As a Solutions architect, you have been given a task to establish a serverless architecture for the website. Which of the following could be included in the proposed architecture? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use DynamoDB to store data in tables."}, {
        "id": "B",
        "markdown": "Use EC2 to host data on EBS Volumes."
    }, {"id": "C", "markdown": "Use the Simple Storage Service to store data."}, {
        "id": "D",
        "markdown": "Use AWS RDS to store data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nBoth the Simple Storage Service and DynamoDB are complete serverless offerings from AWS for which you don't need to maintain servers, and your applications have the automated high availability.\n\n\n\tFor more information on S3 and DynamoDB, please refer to the links below.\n\t\n\t\thttps://aws.amazon.com/s3/\n\t\thttps://aws.amazon.com/dynamodb/\n\t\thttps://aws.amazon.com/serverless/\n\t\thttps://aws.amazon.com/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Currently, you're responsible for the design and architect of a highly available application. After building the initial environment, you discover that a part of your application does not work correctly until port 443 is added to the security group. After adding port 443 to the appropriate security group, how much time will it take for the application to work correctly?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Generally, it takes 2-5 minutes for the rules to propagate."}, {
        "id": "B",
        "markdown": "Immediately after a reboot of the EC2 Instances, belonging to that security group."
    }, {
        "id": "C",
        "markdown": "Changes apply instantly to the security group, and the application should be able to respond to 443 requests."
    }, {
        "id": "D",
        "markdown": "It will take 60 seconds for the rules to apply to all Availability Zones within the region."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThis is given in the AWS Documentation:\n\n\"Some systems for setting up firewalls let you filter on source ports. Security groups let you filter only on destination ports.\n\nWhen you add or remove rules, they are automatically applied to all instances associated with the security group\".\n\n \n\n\n\tFor more information on Security Groups, please refer to the below link:\n\t\n\t\thttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work in a large organization. Your team creates AWS resources such as Amazon EC2 dedicated hosts and reserved capacities that need to be shared by other AWS accounts. You need an AWS service to centrally manage these resources so that you can easily specify which accounts or Organizations can access the resources. Which AWS service would you choose to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "IAM"}, {"id": "B", "markdown": "Resource Access Manager"}, {
        "id": "C",
        "markdown": "Service Catalog"
    }, {"id": "D", "markdown": "AWS Single Sign-On"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nAWS Resource Access Manager (AWS RAM) helps users to share resources with other AWS accounts or Organizations. Refer to https://docs.aws.amazon.com/ram/latest/userguide/what-is.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because IAM cannot be used to manage and share these resources.\n\tOption​ ​B ​is​ CORRECT:​ EC2 dedicated hosts and reserved capacities are shareable resources that are supported by Resource Access Manager. Check https://docs.aws.amazon.com/ram/latest/userguide/shareable.html.\n\tOption​ ​C ​is​ ​incorrect:​ Because Service Catalog is used to manage catalogs and cannot share resources with others.\n\tOption​ ​D ​is​ ​incorrect:​ Because AWS Single Sign-On is used for SSO access and does not share the mentioned resources.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company wants to use an S3 bucket for web hosting but have several different domains to perform operations on the S3 content. In the CORS configuration, you have added CORSRule AllowedOrigin for the following Domains: http://www.domainnamea.com, https://www.secure.domainnamea.com, and http://www.domainnameb.com. Following Domains, https://www.domainnameb.com and http://www.domainnameb.com:80, are not allowed to access the S3 bucket.\n\nWhat could be the most likely cause behind it?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Both request https:// domainnameb.com and http://www.domainnameb.com:80 don't match the allowed in configuration."
    }, {
        "id": "B",
        "markdown": "HTTPS must contain a specific port in the request, e.g.  https:// domainnameb.com:443"
    }, {"id": "C", "markdown": "There’s a limit of two origin sites per S3 bucket allowed"}, {
        "id": "D",
        "markdown": "Adding CORS automatically removes the S3 ACL and bucket policies"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\n\n\tOption A is correct. The origin was configured as http://www.domainnameb.com and request was sent for https://www.domainnameb.com and http://www.domainnameb.com:80 instead of http://www.domainnameb.com. The exact syntax must be matched. In some cases, wildcards can be used to help the origin URLs.\n\tOption B is incorrect. This is not required to allow an origin domain to be included; although it can be.\n\tOption C is incorrect. The limit is 100.\n\tOption D is incorrect. The ACLs and policies continue to apply when you enable CORS on the bucket.\n\n\nVerify that the Origin header in your request matches at least one of the AllowedOrigin elements in the specified CORSRule.\n\nThe scheme, the host, and the port values in the Origin request header must match the AllowedOrigin elements in the CORSRule. For example, if you set the CORSRule to allow the origin http://www.example.com, then both https://www.example.com and http://www.example.com:80 origins in your request don't match the allowed origin in your configuration.\n \n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html\n\thttps://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html\n\thttps://aws.amazon.com/blogs/aws/amazon-S3-cross-origin-resource-sharing/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of Spot EC2 Instances. Files submitted by your premium customers must be transformed at the highest priority. How would you implement such a system?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level."
    }, {
        "id": "B",
        "markdown": "Use Route 53 latency-based routing to send high priority tasks to the closest transformation instances."
    }, {
        "id": "C",
        "markdown": "Use two SQS queues, one for high priority messages and the other for default priority. Transformation instances will first poll the high priority queue; if there is no message, they will poll the default priority queue."
    }, {
        "id": "D",
        "markdown": "Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe best way is to use two SQS queues. Each queue can be polled separately. The high priority queue can be polled first.\n\nFor more information on AWS SQS, please refer to the link below:\n\nhttps://aws.amazon.com/sqs/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A VPC has been set up with a subnet and an internet gateway. The EC2 instance is set up with a public IP but you are still not able to connect to it via the Internet. The security groups are also in place. What should you do to connect to the EC2 Instance from the Internet?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Set an Elastic IP Address to the EC2 Instance."}, {
        "id": "B",
        "markdown": "Set a Secondary Private IP Address to the EC2 Instance."
    }, {"id": "C", "markdown": "Ensure that the right route entry is there in the Route table."}, {
        "id": "D",
        "markdown": "There must be some issue in the EC2 Instance. Check the system logs."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nYou have to ensure that the Route table has an entry to the Internet Gateway because this is required for instances to communicate over the Internet. The diagram shows the configuration of the public subnet in a VPC:\n\n\n\n \n\nOption A is incorrect. Since you already have a public IP assigned to the instance, this should have been enough to connect to the Internet.\nOption B is incorrect. Private IPs cannot be accessed from the Internet.\nOption D is incorrect. The Route table is causing the issue and not the system.\n\nFor more information on AWS public subnet, please visit the link below.\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario1.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A customer has a single 3 TB volume on-premises that is used to hold a large repository of images and print layout files. This repository is growing at 500 GB a year and must be presented as a single logical volume. The customer is becoming increasingly constrained with their local storage and wants to utilize the cloud to store the data, but the customer is concerned about latency while trying to access data stored in the cloud. Which AWS Storage Gateway configuration would meet the customer requirements?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Gateway-Cached Volumes with snapshots scheduled to Amazon S3"}, {
        "id": "B",
        "markdown": "Gateway-Stored Volumes with snapshots scheduled to Amazon S3"
    }, {"id": "C", "markdown": "Gateway-Virtual Tape Library with snapshots to Amazon S3"}, {
        "id": "D",
        "markdown": "Gateway-Virtual Tape Library with snapshots to Amazon Glacier"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nGateway-cached volumes let you use Amazon Simple Storage Service (Amazon S3) as your primary data storage while retaining frequently accessed data locally in your storage gateway. Gateway-cached volumes minimize the need to scale your on-premises storage infrastructure, while still providing your applications with low-latency access to their frequently accessed data. You can create storage volumes up to 32 TB in size and attach them as iSCSI devices from your on-premises application servers. Your gateway stores data that you write to these volumes in Amazon S3 and retains recently read data in your on-premises storage gateway's cache and upload buffer storage.\n\nFor more information on Storage Gateways, please visit the link below:\n\n\n\thttp://docs.aws.amazon.com/storagegateway/latest/userguide/storage-gateway-cached-concepts.html\n\n\n \n\nNote: \n\nThe two requirements of the question are low latency access to frequently accessed data and an offsite back up of the data.\n\n\n\tOption A is correct because your primary data is written to S3 while retaining your frequently accessed data locally in a cache for low-latency access.\n\tOption B is incorrect because it is storing the primary data locally (but we have a storage constraint hence this is not a viable solution) and your entire dataset is available for low-latency access while asynchronously backed up to AWS.\n\tOptions C & D are incorrect as they cannot provide low latency access to frequently accessed data.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to use the AWS ECS service to work with containers in \"us-east-1\" region. There is a need for the least amount of administrative overhead while launching containers. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use the Fargate launch type in AWS ECS."}, {
        "id": "B",
        "markdown": "Use the EC2 launch type in AWS ECS."
    }, {"id": "C", "markdown": "Use the Auto Scaling launch type in AWS ECS."}, {
        "id": "D",
        "markdown": "Use the ELB launch type in AWS ECS."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nThe Fargate launch type allows you to run your containerized applications without the need to provision and manage the backend infrastructure. Just register your task definition and Fargate launches the container for you.\n\n\n\tFor more information on the different launch types, please visit the links below:\n\t\n\t\thttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html\n\t\thttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You currently manage a set of web servers hosted on EC2 Servers with public IP addresses. These IP addresses are mapped to domain names. There was an urgent maintenance activity that had to be carried out on the servers and the servers had to be stopped and restarted. Now the web application hosted on these EC2 Instances is not accessible via the domain names configured earlier. Which of the following could be a reason for this?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The Route 53 hosted zone needs to be restarted."}, {
        "id": "B",
        "markdown": "The network interfaces need to initialized again."
    }, {"id": "C", "markdown": "The public IP addresses need to be associated with the ENI again."}, {
        "id": "D",
        "markdown": "The public IP addresses have changed after the instance was stopped and started again."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nBy default, the public IP address of an EC2 Instance is released after the instance is stopped and started. Hence, the earlier IP address which was mapped to the domain names would have become invalid now.\n\n\n\tFor more information on public IP address, please visit the URL below:\n\t\n\t\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses\n\t\n\t\n\n\nNote:\n\nThis only applies to IPv4 public addresses, IPv6 public address isn't disassociated after an instance is stopped.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are responsible for deploying a critical application to AWS. It is required to ensure that the controls set for this application meet PCI compliance. Also, there is a need to monitor web application logs to identify any malicious activity. Which of the following services could be used to fulfill this requirement? (Select Three)",
    "prompt": "",
    "correctAnswerId": ["A", "B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon CloudWatch Logs"}, {
        "id": "B",
        "markdown": "Amazon VPC Flow Logs"
    }, {"id": "C", "markdown": "Amazon Trusted Advisor"}, {"id": "D", "markdown": "Amazon CloudTrail"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A, B, and D\n\nAWS Documentation mentions the following about these services:\n\nAWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.\n\nFor more information on CloudTrail, please refer to following URL:\n\nhttps://aws.amazon.com/cloudtrail/\n\nYou can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Amazon Route 53, and other sources. You can then retrieve the associated log data from CloudWatch Logs.\n\nFor more information on CloudWatch logs, please refer to the URL below:\n\nPlease refer to the \"PCI\" tab on the following link to check for services that are \"PCI Compliant\"\n\nhttps://aws.amazon.com/compliance/services-in-scope/\n\nPlease check for the column \"PCI\" with a tick mark for the services that are \"PCI Compliant\"\n\nFlow logs enable you to track and analyze the IP address traffic going to and from network interfaces in your VPC. For example, if you have a content delivery platform, flow logs can profile, analyze, and predict customer patterns of the content access, and track down top talkers and malicious calls. Taking the above definition into consideration, VPC Flow Logs is a correct option.\n\nOption C is incorrect because AWS Trusted Advisor is an online tool that provides you real-time guidance to help you provision your resources following AWS best practices. It is not required as per the requirement.\n\nTo know more, please check the URL below:\n\nhttps://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/\n\nhttps://aws.amazon.com/blogs/aws/vpc-flow-logs-log-and-view-network-traffic-flows/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to host a database server. The server should be able to connect to the Internet while downloading the required database patches, but the ingress traffic to the instances are not allowed. Which of the following solutions would satisfy all the above requirements at best?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Setup the database in a private subnet with a security group that only allows outbound traffic."
    }, {
        "id": "B",
        "markdown": "Setup the database in a public subnet with a security group that only allows inbound traffic."
    }, {
        "id": "C",
        "markdown": "Setup the database in a local data center and use a private gateway to connect the application to the database."
    }, {
        "id": "D",
        "markdown": "Setup the database in a private subnet which connects to the Internet via a NAT Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThis setup coincides with Scenario 2 of setting up a VPC as per AWS documentation:\n\nScenario 2: VPC with Public and Private Subnets (NAT)\n\nThe configuration for this scenario includes a virtual private cloud (VPC) with a public subnet and a private subnet. We recommend this scenario if you want to run a public-facing web application while maintaining backend servers that aren't publicly accessible. A common example is a multi-tier website, with the web servers in a public subnet and the database servers in a private subnet. You can set up security and routing so that the web servers can communicate with the database servers.\n\n \n\n\n\tFor more information on the VPC Scenario for public and private subnets, please see the below link:\n\t\n\t\thttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n\t\n\t\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have both production and development based instances running on your VPC. It is required to ensure that people responsible for the development instances do not have access to work on production instances for better security. Which of the following would be the best way to accomplish this using policies?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Launch the development and production instances in separate VPCs and use VPC Peering."
    }, {
        "id": "B",
        "markdown": "Create an IAM group with a condition that allows access to only those instances which are used for production or development."
    }, {
        "id": "C",
        "markdown": "Launch the development and production instances in different Availability Zones and use Multi-Factor Authentication."
    }, {
        "id": "D",
        "markdown": "Define the tags on the Development and production servers and add a condition to the IAM Policy which allows access to specific tags."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nYou can easily add tags to define which instances are the production instances and which ones are development instances. These tags can then be used while controlling access via an IAM Policy.\n\nFor more information on tagging your resources, please refer to the link below.\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n\nNote:\n\nIt can be done with the help of option B as well. However, the question is looking for the \"best way to fulfill the requirement using policies\".\n\nBy using the option D, you can reduce the usage of different IAM Policies on each instance. \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to build a 2-tier architecture with a web server and a databse server with separate environments for development and testing.  The architecture will be hosted on EC2 Instances accordingly, and database server would require less than 16,000 IOPS per volume.  Which of the following EBS volumes are optimum for the underlying EC2 Instances? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "General Purpose SSD for the web server"}, {
        "id": "B",
        "markdown": "Provisioned IOPS for the web server"
    }, {"id": "C", "markdown": "General Purpose SSD for the database server"}, {
        "id": "D",
        "markdown": "Provisioned IOPS for the database server"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A and C\n\nThe General Purpose SSD would be suitable for development and test environments and the IOPS SSD for business critical applications\n\nThe below excerpt from AWS documentation shows the different types of EBS Volumes for different workloads:\n\n\n\n\n\nFor more information on EBS Volume types, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are hosting a web server on an EC2 Instance. With the number of requests consuming a large part of the CPU, the response performance for the application is getting degraded. Which of the following would help to alleviate the problem and provide a better response time?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Place the EC2 Instance behind a Classic Load Balancer."}, {
        "id": "B",
        "markdown": "Place the EC2 Instance behind an Application Load Balancer."
    }, {"id": "C", "markdown": "Place the EC2 Instance in an Auto Scaling Group with the max size as 1."}, {
        "id": "D",
        "markdown": "Place a CloudFront distribution in front of the EC2 Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nSince there is a mention of only one EC2 instance, placing it behind the ELB would not make much sense, hence Options A and B are invalid.\n\nHaving it in an Auto Scaling Group with just one instance would not make much sense.\n\nCloudFront distribution would help to alleviate the load on the EC2 Instance because of its edge location and cache feature.\n\nFor more information on CloudFront, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is hosting a MySQL database in AWS using the AWS RDS service. To offload the reads, a Read Replica has been created and reports are run off the Read Replica database. But at certain times, the reports show stale data. What could be the possible reason behind this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The Read Replica has not been created properly."}, {
        "id": "B",
        "markdown": "The backup of the original database has not been set properly."
    }, {"id": "C", "markdown": "This is due to the replication lag."}, {
        "id": "D",
        "markdown": "The Multi-AZ feature is not enabled."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAn AWS Whitepaper on the caveat for reading Replicas is given below which must be taken into consideration by architects:\n\nRead Replicas are separate database instances that are replicated asynchronously. As a result, they are subject to replication lag and might be missing some of the latest transactions. Application architects need to consider which queries have the tolerance to slightly stale data. Those queries can be executed on a Read Replica, while the rest should run on the primary node. Read Replicas may also not accept any write queries.\n\nFor more information on AWS Cloud best practices, please visit the following URL:\n\nhttps://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company plan to use SQS queues and AWS Lambda to leverage the serverless aspects of the AWS Cloud. Each invocation to AWS Lambda will send a message to an SQS queue. What should be done to achieve this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The queue must be a FIFO queue."}, {
        "id": "B",
        "markdown": "An IAM Role must have the required permissions."
    }, {"id": "C", "markdown": "The code for Lambda must be written in C#."}, {
        "id": "D",
        "markdown": "An IAM Group must have the required permissions."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nWhile working with AWS Lambda functions, if there is a need to access other resources, ensure that an IAM role is in place. The IAM role will have the required permissions to access the SQS queue.\n\n\n\tFor more information on AWS IAM Roles, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have enabled CloudTrail logs for your company’s AWS account. In addition, the IT Security department has mentioned that the logs need to be encrypted. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable SSL certificates for the CloudTrail logs."}, {
        "id": "B",
        "markdown": "There is no need to do anything since the logs will already be encrypted."
    }, {"id": "C", "markdown": "Enable Server-Side Encryption for the trail."}, {
        "id": "D",
        "markdown": "Enable Server-Side Encryption for the destination S3 bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nBy default, CloudTrail event log files are encrypted using Amazon S3 server-side encryption (SSE). You can also choose to encrypt your log files with an AWS Key Management Service (AWS KMS) key. You can store your log files in your bucket for as long as you want. You can also define Amazon S3 lifecycle rules to archive or delete log files automatically. If you want notifications about log file delivery and validation, you can set up Amazon SNS notifications.\n\nFor more information on how CloudTrail works, please visit the following URL:\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has set up its data layer in the Simple Storage Service. There are a number of requests which include read/write and updates to objects in an S3 bucket. Users sometimes complain that updates to an object are not being reflected. What could be the most likely reason for this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Versioning is not enabled for the bucket, so the newer version does not reflect the right data."
    }, {"id": "B", "markdown": "Updates made to the objects usually take sometime to reflect ."}, {
        "id": "C",
        "markdown": "Encryption is enabled for the bucket, hence it is taking time for the update to occur."
    }, {"id": "D", "markdown": "The metadata for the S3 bucket is incorrectly configured."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nUpdates made to the objects in S3 follow an eventual consistency model. Hence, for object updates, there can be a slight delay when an updated object is provided back to the user on the next read request.\n\n \n\n\n\tFor more information on various aspects of the Simple Storage Service, please visit the following URL:\n\t\n\t\thttps://aws.amazon.com/s3/faqs/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has enabled CORS on your S3 bucket to allow cross-origin resource sharing. In the CORS configuration, you need to specify the values for the \"AllowedMethod\" element. What would be your suggestion to the developer?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Those two methods require special permission from AWS"}, {
        "id": "B",
        "markdown": "The developer’s user profile was limited to and required to be updated"
    }, {"id": "C", "markdown": "Only these methods are supported: GET, PUT, POST, DELETE, and HEAD"}, {
        "id": "D",
        "markdown": "OPTIONS and CONNECT are controlled by other bucket policies"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\nOnly these methods are supported: GET, PUT, POST, DELETE, and HEAD\n\n \n\nRefer page 163 on the below link under the topic \"AllowedMethod Element\"\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/s3-dg.pdf\n\n\n \n\nReference for CORS:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html\n\thttps://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html\n\thttps://aws.amazon.com/blogs/aws/amazon-S3-cross-origin-resource-sharing/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a MySQL database deployed in an on-premise datacenter. You start using AWS Database Migration Service (AWS DMS) to migrate the database to AWS RDS. You have a replication instance in DMS to run the migration task. Which of the following options assigns permissions that determine who is allowed to manage AWS DMS resources?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Transport Layer Security (TLS) connections between AWS DMS and local datacenter."
    }, {
        "id": "B",
        "markdown": "AWS Key Management Service (AWS KMS) encryption used by the replication instance."
    }, {"id": "C", "markdown": "AWS Identity and Access Management (IAM) policies."}, {
        "id": "D",
        "markdown": "Network Control Lists (NCLs) in VPC subnets."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nThere are multiple approaches to secure the AWS DMS resources. Details can be found in\n\nhttps://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ TLS protects the network layer however it does not assign permissions.\n\tOption​ ​B ​is​ ​incorrect:​ KMS encrypts data but it cannot manage the permissions.\n\tOption​ ​C ​is​ CORRECT:​ Because IAM policies can be assigned to IAM users who need to manage DMS resources.\n\tOption​ ​D ​is​ ​incorrect:​ NCL acts as a firewall to protect the VPC subnets but it does not determine who can access DMS resources.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company stores a big amount of archive data in expensive on-premises storage systems. You need to move the data to low cost storage such as Amazon S3 Glacier.  Which of the following tools is the most suitable to simplify and automate the data transfer from on-premises to S3 Glacier?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DataSync"}, {
        "id": "B",
        "markdown": "Server Migration Service"
    }, {"id": "C", "markdown": "Database Migration Service"}, {"id": "D", "markdown": "Direct Connect"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nAWS DataSync should be selected as it can simplify moving data between on-premises storage and AWS services such as S3 Glacier. Check https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html.\n\n\n\tOption​ ​A ​is​ CORRECT:​ With AWS DataSync, users can create a task to specify the data source and destination and then configure the data transfer.\n\tOption​ ​B ​is​ ​incorrect:​ Because Server Migration Service is used to migrate on-premise servers such as VMware.\n\tOption​ ​C ​is​ ​incorrect:​ Database Migration Service is used to migrate a database instead of local storage.\n\tOption​ ​D ​is​ ​incorrect:​ Direct Connect sets up a dedicated network connection to AWS. However it does not automate the data transfer to AWS.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You use an Amazon S3 bucket as the origin for a CloudFront distribution. In order to restrict access to S3 content, you create an Origin Access Identity (XXXX1234567890) in CloudFront and associate it with the distribution. You need to modify the S3 bucket policy so that users cannot bypass CloudFront to access the S3 files. Which of the following options contains the correct S3 bucket policy statement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "{     \"Effect\": \"Deny\",     \"Principal\": {         \"AWS\": \"arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity XXXX1234567890\"     },     \"Action\": \"s3:GetObject\",     \"Resource\": \"arn:aws:s3:::aws-example-bucket/*\" }"
    }, {
        "id": "B",
        "markdown": "{     \"Effect\": \"Allow\",     \"Principal\": {         \"AWS\": \"arn:aws:iam::cloudfront:user/XXXX1234567890\"     },     \"Action\": \"s3:GetObject\",     \"Resource\": \"arn:aws:s3:::aws-example-bucket\" }"
    }, {
        "id": "C",
        "markdown": "{     \"Effect\": \"Allow\",     \"Principal\": {         \"AWS\": \"arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity XXXX1234567890\"     },     \"Action\": \"s3:GetObject\",     \"Resource\": \"arn:aws:s3:::aws-example-bucket/*\" }"
    }, {
        "id": "D",
        "markdown": "{     \"Effect\": \"Deny\",     \"NotPrincipal\": {         \"AWS\": \"arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity XXXX1234567890\"     },     \"Action\": \"s3:GetObject\",     \"Resource\": \"arn:aws:s3:::aws-example-bucket\" }"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nThe S3 bucket policy should allow the \"s3:GetObject\" action if the Principal comes from the CloudFront Origin Access Identity. Details can be found in https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because the \"Effect\" should be \"Allow\" instead of \"Deny\".\n\tOption​ ​B ​is​ ​incorrect:​ Both \"Principal\" and \"Resource\" are incorrect according to the above reference.\n\tOption​ ​C ​is​ CORRECT:​ Because with this bucket policy, \"s3:GetObject\" action is only allowed for the CloudFront OAI.\n\tOption​ ​D ​is​ ​incorrect:​ The bucket policy denies the action if the Principal is NOT the Origin Access Identity. However, it still does not allow the action if the Principal comes from the CloudFront OAI. An explicit Allow is required.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working in a financial company and you need to establish the network connections between on-premises data centers and AWS VPCs. The connectivity needs to be secure with IPsec connections. A predictable and high-performance network is also required over private lines. Which of the following methods would you select?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Direct Connect + VPN"}, {
        "id": "B",
        "markdown": "AWS Managed VPN"
    }, {"id": "C", "markdown": "AWS Direct Connect"}, {"id": "D", "markdown": "Software VPN"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nAWS has provided several connectivity options according to https://d1.awsstatic.com/whitepapers/aws-amazon-vpc-connectivity-options.pdf. VPN is needed as it creates an IPsec connection. AWS Direct Connect is also required because it establishes a private connection with high bandwidth throughput.\n\n\n\tOption​ ​A ​is​ CORRECT:​ Because with AWS Direct Connect + VPN, you can create IPsec-encrypted private connections.\n\tOption​ ​B ​is​ ​incorrect:​ Because only with VPN, the network performance cannot be guaranteed.\n\tOption​ ​C ​is​ ​incorrect:​ Because AWS Direct Connect does not use IPsec protocol.\n\tOption​ ​D ​is​ ​incorrect:​ Because Software VPN is still based on the internet instead of a dedicated network.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your IT Supervisor is worried about users, accidentally deleting objects from an S3 bucket. Which of the following can help prevent accidental deletion of objects in an S3 bucket? (Select Three)",
    "prompt": "",
    "correctAnswerId": ["B", "C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable encryption for the S3 bucket."}, {
        "id": "B",
        "markdown": "Enable MFA Delete on the S3 bucket."
    }, {"id": "C", "markdown": "Enable Versioning on the S3 bucket."}, {
        "id": "D",
        "markdown": "Enable IAM Roles on the S3 bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B, C, and D\n\nAWS Documentation mentions the following:\n\nWhen a user performs a DELETE operation on an object, subsequent simple (un-versioned) requests will no longer retrieve the object. However, all versions of that object will continue to be preserved in your Amazon S3 bucket and can be retrieved or restored.\n\nVersioning’s MFA Delete capability, which uses multi-factor authentication, can be used to provide an additional layer of security. By default, all requests to your Amazon S3 bucket require your AWS account credentials. If you enable Versioning with MFA Delete on your Amazon S3 bucket, two forms of authentication are required to permanently delete a version of an object: your AWS account credentials and valid six-digit code and serial number from an authentication device in your physical possession.\n\nFor more information on the features of S3, please visit the following URL:\n\n\n\thttps://aws.amazon.com/s3/faqs/\n\n\nTo know more about Option D, Please refer to the below AWS Document.\n\n\n\thttps://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has been using AWS cloud services for six months and have just finished a security review.\n\nWhich of the following is considered a best practice in the security pillar of the well-architected framework?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using the root user to create all-new user accounts, at any time"}, {
        "id": "B",
        "markdown": "Monitoring and using alerts using CloudTrail and CloudWatch"
    }, {"id": "C", "markdown": "Assigning Private IP address ranges to VPCs that do not overlap"}, {
        "id": "D",
        "markdown": "Designing the system using elasticity to meet changes in demand"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: B\n\n\n\tOption B is correct. Monitoring and alerting for key metrics and events is the best practice of the Security pillar\n\tOption A is incorrect. For the root user, you should follow the best practice of using this login only to  create another, an initial set of IAM users and groups for longer-term identity management operations\n\tOption C is incorrect. Non-overlapping Private IP addresses are in the Reliability pillar.\n\tD. Design using elasticity to meet demand is in the Performance Efficiency pillar (Design for Cloud Operations).\n\n\n \n\nReferences:\n\n\n\thttps://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf\n\thttps://d1.awsstatic.com/whitepapers/architecture/AWS-Security-Pillar.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a Redshift Cluster defined in AWS. The IT Operations team have ensured that both automated and manual snapshots are in place. Since the cluster is going to be run for a couple of years, Reserved Instances have been purchased. There has been a recent concern on the cost, being incurred by the cluster. Which step should be carried out to minimize the costs being incurred by the cluster?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Delete the manual snapshots."}, {
        "id": "B",
        "markdown": "Set the retention period of the automated snapshots to 35 days."
    }, {"id": "C", "markdown": "Choose to use Spot Instances instead of Reserved Instances."}, {
        "id": "D",
        "markdown": "Choose to use Instance store volumes to store the cluster data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nRegardless of whether you enable automated snapshots, you can take a manual snapshot whenever you want at any time. By default, manual snapshots are retained indefinitely, even after you delete your cluster. You can specify the retention period when you create a manual snapshot or you can change the retention period by modifying the snapshot. If you create a snapshot using the Amazon Redshift console, it defaults the snapshot retention period to 365 days.\n\nAutomated snapshots are automatically deleted within the period of 1(Least) to 35(Max) days (Based on the retention period settings). So we have to take care of the Manual snapshots instead of Automated snapshots. Amazon Redshift never deletes Manual snaphots automatically, like how it does for Automatic Snapshots.\n\n\n\tFor more information on working with Snapshots, please visit the following URL:\n\t\n\t\thttps://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A website is hosted on two EC2 instances that sit behind an Elastic Load Balancer. The response time of the website has been slowed down dramatically, and customers are placing fewer orders due to the wait time. Troubleshooting showed that one of the EC2 instances has been failed and only one instance is running now. What is the best course of action to prevent this from happening in the future?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Change the instance size to the maximum available to compensate for the failure"
    }, {
        "id": "B",
        "markdown": "Use CloudWatch to monitor the VPC Flow Logs for the VPC, the instances are deployed in"
    }, {
        "id": "C",
        "markdown": "Configure the ELB to perform health checks on the EC2 instances and implement auto-scaling"
    }, {"id": "D", "markdown": "Replicate the existing configuration in several regions for failover"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\n\n\tOption C is correct. Using the elastic load balancer to perform health checks will determine whether or not to remove a non-performing or underperforming instance, and have the auto-scaling group launch a new instance.\n\tOption A is incorrect. Increasing the instance size doesn’t prevent failure of one or both the instances, therefore the website can still become slow or unavailable.\n\tB. Monitoring the VPC flow logs for the VPC will capture the VPC traffic, not the traffic for the EC2 instance. You would need to create a flow log for a network interface.\n\tD. Replicating the same two instance deployment may not prevent failure of instances and could still result in the website becoming slow or unavailable.\n\n\nReferences:\n\n\n\thttps://media.amazonwebservices.com/AWS_Building_Fault_Tolerant_Applications.pdf\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html#working-with-flow-logs\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company currently hosts a lot of data on its On-premises location. It wants to start storing backups of this data with low latency access to data on AWS. How could this be achieved in the most efficient way?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create EBS Volumes and store the data."}, {
        "id": "B",
        "markdown": "Create EBS Snapshots and store the data."
    }, {"id": "C", "markdown": "Make use of Storage Gateway Stored volumes."}, {
        "id": "D",
        "markdown": "Make use of Amazon Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure. You can use the service to store data in the AWS Cloud for scalable and cost-effective storage that helps to maintain data security.\n\nIt has two types of configuration, cached volumes, and stored volumes. \n\nOur requirement is to start storing backups of the on-premises data to AWS.\n\nIn cached volumes, you store your data in S3 and retain a copy of frequently accessed data subsets locally. It means that we are not storing the backups on S3 but the actual primary data itself.\n\nBut in the stored mode, your primary data is stored locally and your entire dataset is available for low-latency access while asynchronously backed up to AWS S3.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As a solutions architect, you need to design a multi-tier architecture for a project in AWS. The application contains three tiers: the frontend layer, business logic layer and storage layer. The frontend and business logic layers are implemented by Auto Scaling groups and Amazon DynamoDB is selected as the data storage option in the storage layer. Which of the following options is NOT a feature of this architecture?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Each layer is modularized and managed independently."}, {
        "id": "B",
        "markdown": "The backend and data storage are not exposed to the internet and protected in private subnets."
    }, {
        "id": "C",
        "markdown": "The architecture is completely serverless so that users do not need to configure the desired number of servers or capabilities."
    }, {
        "id": "D",
        "markdown": "Frontend and backend servers can be configured in different availability zones for high availability."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nThe multi-tier architecture in AWS has a number of features such as high availability and scalability, fault tolerant and security. The question asks for the option that is NOT a feature.\n\n\n\tOption C should be selected as you still need to configure the min/max/desired number of servers in ASGs and the read/write capabilities in DynamoDB tables.\n\tOption​ ​A ​is​ ​incorrect:​ Because the application is divided into three components and each component works independently.\n\tOption​ ​B ​is​ ​incorrect:​ Because the backend and data storage are located in private subnets. Users can only reach the frontend layer.\n\tOption​ ​C ​is​ CORRECT:​ Refer to the above explanations. This architecture is not completely serverless.\n\tOption​ ​D ​is​ ​incorrect:​ Because the servers in ASG can be put into several availability zones so that even if one AZ has an outage, the servers in other AZs can still work as normal.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Currently, you have a set of Lambda functions which have business logic embedded in them. You want customers to have the ability to call these functions via HTTPS. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use the API Gateway and provide integration with the AWS Lambda functions."
    }, {"id": "B", "markdown": "Enable HTTP access on the AWS Lambda functions."}, {
        "id": "C",
        "markdown": "Add EC2 Instances with an API server installed. Integrate the server with AWS Lambda functions."
    }, {"id": "D", "markdown": "Use S3 websites to make calls to the Lambda functions"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAn API Gateway provides the ideal access to your back end services via APIs.\n\n\n\n \n\nFor more information on the API Gateway service, please visit the following URL:\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "For a new application, you need to build up the logic tier and data storage tier in AWS. The whole architecture needs to be serverless so that designers can quickly deploy the application without the need to manage servers. Which of the following AWS services would you choose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Logic tier: “Amazon Cognito + Lambda”. Data Storage tier: “Amazon RDS”"
    }, {"id": "B", "markdown": "Logic tier: “API Gateway + Lambda”. Data Storage tier: “Amazon DynamoDB”"}, {
        "id": "C",
        "markdown": "Logic tier: “API Gateway + Lambda”. Data Storage tier: “Amazon Redshift”"
    }, {"id": "D", "markdown": "Logic tier: “Elastic Beanstalk”. Data Storage tier: “Amazon Aurora”"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nThe key to the question is that the architecture should be severless. For AWS serverless multi-tier architectures, please refer to https://d1.awsstatic.com/whitepapers/AWS_Serverless_Multi-Tier_Architectures.pdf.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because Amazon Cognito is not suitable for the logic tier and Amazon RDS is not a serverless service.\n\tOption​ ​B ​is​ CORRECT:​ Because both API Gateway/Lambda and Amazon DynamoDB are severless so that the process of deploying servers is simplified.\n\tOption​ ​C ​is​ ​incorrect:​ Amazon Redshift is a data warehouse service and is not serverless.\n\tOption​ ​D ​is​ ​incorrect:​ Because Elastic Beanstalk utilizes EC2 instances as its computing resources and is not a serverless service.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Solutions Architect is designing a solution to store and archive corporate documents. He has determined that Amazon Glacier is the right solution. Data has to be retrieved within 3-5 hrs as directed by the management.\n\nWhich feature in Amazon Glacier could be helpful to meet this requirement and ensure cost-effectiveness?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Vault Lock"}, {"id": "B", "markdown": "Expedited retrieval"}, {
        "id": "C",
        "markdown": "Bulk retrieval"
    }, {"id": "D", "markdown": "Standard retrieval"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\n\n\tOption A - Vault Lock\n\n\n- This feature of Amazon Glacier allows you to lock your vault with a variety of compliance controls that are designed to support such long-term records retention.  Due to this reason, this is not the correct answer.\n\n\n\t Option B - Expedited retrieval\n\n\n- It allows you to quickly access your data when occasional urgent requests are required for a subset of archives.  The data is available within 1 - 5 minutes.  Since our requirement is 3 - 5 hours, we do not need to use this option.\n\n\n\t Option C - Bulk retrieval\n\n\n- They are the lowest-cost retrieval option, enabling you to retrieve large amounts of data within 5 - 12  hours. Due to this reason, it is not the correct answer.\n\nAWS Documentation mentions the following on Standard retrievals:\n\nStandard retrievals are a low-cost way to access your data within just a few hours. For example, you can use Standard retrievals to restore backup data, retrieve archived media content for same-day editing or distribution, or pull and analyze logs to drive business decisions within hours.\n\n\n\tFor more information on Amazon Glacier retrievals, please visit the following URL:\n\t\n\t\thttps://aws.amazon.com/glacier/faqs/#dataretrievals\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an application running in AWS. The application has the frontend EC2 servers deployed in a public subnet. And the backend EC2 servers are hosted in a private subnet. The frontend servers can communicate with the backend servers properly. One day there is an issue in production and you need to login to one backend EC2 instance to troubleshoot. The connection to the backend servers should be done in the most secure way. Which of the following options is the most secure one to access the instance?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Generate a new SSH key and use the key to SSH to the backend instance."
    }, {"id": "B", "markdown": "SSH to one of the frontend instances and then SSH to the backend."}, {
        "id": "C",
        "markdown": "Modify the security group of the instance to allow the SSH inbound traffic from your IP address. Revert the change after you do not need the access."
    }, {"id": "D", "markdown": "SSH to a bastion host first and then SSH to the backend instance from the bastion."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nBastion host is the most suitable one in this scenario. It is a dedicated server for users to securely SSH to the backend servers in the private subnet.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Since the backend instance is in the private subnet, users cannot directly SSH to it.\n\tOption​ ​B ​is​ ​incorrect:​ Because normally frontend servers should not have the SSH access to the backend. In this scenario, we should use a dedicated jump host rather than the frontend instances.\n\tOption​ ​C ​is​ ​incorrect:​ Same as option A. The backend instance does not have a public IP and you cannot directly SSH to it from your server.\n\tOption​ ​D ​is​ CORRECT:​ Through the bastion host, the SSH connection can be safely established and monitored.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your application has two tiers in AWS: the frontend layer and the backend layer. The frontend includes an Auto Scaling group deployed in a public subnet. The backend Auto Scaling group is located in another private subnet. The backend instances should only allow the incoming traffic from the frontend ASG through a custom port. For the backend security group, how would you configure the source in its inbound rule?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Configure the frontend security group ID as the source."}, {
        "id": "B",
        "markdown": "Configure the public subnet IP range as the source."
    }, {"id": "C", "markdown": "Configure the frontend Auto Scaling group ARN as the source."}, {
        "id": "D",
        "markdown": "Configure the frontend Auto Scaling launch configuration as the source."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nRefer to https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html#security-group-rules for how to configure security group rules.\n\n\n\tOption​ ​A ​is​ CORRECT:​ By configuring the frontend security group as the source, any frontend instances that have the specified security group are allowed to access the backend.\n\tOption​ ​B ​is​ ​incorrect:​ Other instances in this subnet can also access the backend. This option is not as good as option A.\n\tOption​ ​C ​is​ ​incorrect:​ Because Auto Scaling group ARN cannot be configured in the source of a security group inbound rule.\n\tOption​ ​D ​is​ ​incorrect:​ Because launch configuration cannot be configured in the source.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company requires an open-source system for automating the deployment, scaling, and management of containerized applications. Which of the following would be ideal for such a requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use the Amazon Elastic Container Service for Kubernetes."}, {
        "id": "B",
        "markdown": "Install a custom orchestration tool on EC2 Instances."
    }, {"id": "C", "markdown": "Use SQS to orchestrate the messages between docker containers."}, {
        "id": "D",
        "markdown": "Use AWS Lambda functions to embed the logic for container orchestration."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following;\n\nAmazon Elastic Container Service for Kubernetes (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without the requirement of installing and operating your own Kubernetes clusters. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. Operating Kubernetes for production applications presents a number of challenges. You need to manage the scaling and availability of your Kubernetes masters and persistence layer by ensuring that you have chosen appropriate instance types, running them across multiple Availability Zones, monitoring their health, and replacing unhealthy nodes. You need to patch and upgrade your masters and worker nodes to ensure that you are running the latest version of Kubernetes. All this requires expertise and a lot of manual work. With Amazon EKS, upgrades and high availability are managed for you by AWS. Amazon EKS runs three Kubernetes masters across three Availability Zones in order to ensure high availability. Amazon EKS automatically detects and replaces unhealthy masters, and provides automated version upgrades and patching for the masters.\n\n \n\n\n\tFor more information on the Elastic Container Service, please visit the below URL:\n\t\n\t\thttps://aws.amazon.com/eks/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A small company started using EBS backed EC2 instances for the cost improvements over their own running servers. The company’s policy is to stop the development servers over weekend and restart them next week. First time when the servers were brought back, none of the developers were able to SSH into them. What did the server most likely overlook?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "The associated Elastic IP address has changed and the SSH configurations were not updated"
    }, {
        "id": "B",
        "markdown": "The security group for a stopped instance needs to be reassigned after the start"
    }, {
        "id": "C",
        "markdown": "The public IPv4 address has changed on the server start and the SSH configurations were not updated"
    }, {"id": "D", "markdown": "EBS backed EC2 instances could not be stopped and were automatically terminated"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: C\n\n\n\tOption C is correct. The instance retains its private IPv4 addresses and any IPv6 addresses when stopped and started. AWS releases public IPv4 address and assigns a new one when it is stopped & started.\n\tOption A is incorrect. An EC2 instance retains its associated Elastic IP addresses.\n\tOption B is incorrect. Security groups do not need to be reassigned to instances that are restarted.\n\tOption D is incorrect. EBS backed instances are the only instance type that can be started and stopped.\n\n\nReference:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You created your own VPC and subnet in AWS and launched an instance in that subnet. On attaching an Internet Gateway to the VPC, you see that the instance has a public IP. The route table is shown below:\n\n\n\nStill, the instance cannot be reached from the Internet. What changes are required to be made to the route table to ensure that the issue is resolved?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add the following entry to the route table – Destination as 0.0.0.0/0 and Target as Internet Gateway"
    }, {
        "id": "B",
        "markdown": "Modify the above route table – Destination as 10.0.0.0/16 and Target as Internet Gateway"
    }, {
        "id": "C",
        "markdown": "Add the following entry to the route table –  Destination as 10.0.0.0/16 and Target as Internet Gateway"
    }, {
        "id": "D",
        "markdown": "Add the following entry to the route table - Destination as 0.0.0.0/16 and Target as Internet Gateway"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nThe route table needs to be modified as shown below to ensure that routes from the Internet reach the instance:\n\n\n\nHence by default, all other options become invalid.\n\n\n\tFor more information on Route Tables, please visit the URL below:\n\t\n\t\thttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are building a microservice architecture in AWS for a web application. A Lambda function collects clients’ requests and forwards them to a standard SQS queue. Another Lambda function gets messages from the queue and processes them. Your manager is worried about the availability of the SQS queue which may become a single point of failure. How would you address this concern?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create another SQS queue to provide a redundancy."}, {
        "id": "B",
        "markdown": "Select multiple availability zones when creating the SQS queue."
    }, {"id": "C", "markdown": "Configure the SQS queue to be the FIFO queue."}, {
        "id": "D",
        "markdown": "No actions are required as Amazon SQS uses redundant infrastructure to provide high availability."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nPlease check https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html for the benefits of Amazon SQS.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because there is no need of doing that as SQS service is highly available.\n\tOption​ ​B ​is​ ​incorrect:​ Because users cannot select availability zones when configuring the SQS queue.\n\tOption​ ​C ​is​ ​incorrect:​ Because both standard and FIFO queues provide high availability.\n\tOption​ ​D ​is​ CORRECT:​ SQS is a highly available system so no actions are required.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You create an Auto Scaling Group which is used to spin up instances on demand. As an architect, you need to ensure that the instances are pre-installed with software when they are launched. What are the different ways to achieve this? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add the software installation to the configuration for the Auto Scaling Group."
    }, {"id": "B", "markdown": "Add the scripts for the installation in the User data section."}, {
        "id": "C",
        "markdown": "Create an AMI and then create a launch configuration."
    }, {
        "id": "D",
        "markdown": "Ask the IT operations team to install the software as soon as the instance is launched."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B and C\n\nThe User data section of an instance launch can be used to pre-configure software after the instance is initially booted.\n\nFor more information on User data, please visit the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html\n\n\nAlso, you can create an AMI or a golden image with the already installed software. Then create a launch configuration which can be used by that Auto Scaling Group.\n\nFor more information on AMIs, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You maintain a DynamoDB table that stores customers’ subscription data. High availability is very important for the table and even if there is an outage in an AWS region, the application should still be able to access the data from other regions. Which method would you take to achieve this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a read replica in another region as a backup."}, {
        "id": "B",
        "markdown": "Configure a Multi-AZ backup for the DynamoDB table."
    }, {"id": "C", "markdown": "Configure a global table to use DynamoDB as a multi-region database."}, {
        "id": "D",
        "markdown": "No actions required as DynamoDB is a global service."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nAmazon DynamoDB global tables provide a solution for deploying a multi-region, multi-master database. The reference can be found in https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because DynamoDB does not have such a feature.\n\tOption​ ​B ​is​ ​incorrect:​ Because there is no need to configure Multi-AZ for a DynamoDB table and it is highly available by default\n\tOption​ ​C ​is​ CORRECT:​ With the DynamoDB global table, when one AWS region becomes unavailable, users can still access the same data in other regions.\n\tOption​ ​D ​is​ ​incorrect:​ Refer to option C.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a set of IIS Servers running on EC2 Instances. You want to collect and process the log files generated from these IIS Servers. Which service would be ideal to run in this scenario?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Amazon S3 for storing the log files and Amazon EMR for processing the log files."
    }, {
        "id": "B",
        "markdown": "Amazon S3 for storing the log files and EC2 Instances for processing the log files."
    }, {"id": "C", "markdown": "Amazon EC2 for storing and processing the log files."}, {
        "id": "D",
        "markdown": "Amazon DynamoDB to store the logs and EC2 for running custom log analysis scripts."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon EMR is a managed cluster platform that simplifies running big data frameworks, such as Apache Hadoop and Apache Spark, on AWS to process and analyze vast amounts of data. By using these frameworks and related open-source projects, such as Apache Hive and Apache Pig, you can process data for analytics purposes and business intelligence workloads. Additionally, you can use Amazon EMR to transform and move a large amount of data into and out of other AWS data stores and databases, such as Amazon Simple Storage Service (Amazon S3) and Amazon DynamoDB.\n\nOptions B and C are partially correct as it would be an overhead for EC2 Instances to process log files when you already have a ready-made service to help in this regard.\n\nOption D is in invalid because DynamoDB is not an ideal option to store log files.\n\nFor more information on EMR, please visit the URL below:\n\nhttp://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to ensure that new objects being uploaded to an S3 bucket are available in another region, due to the criticality of the data hosted in the S3 bucket. How could you achieve this in the easiest way possible?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Cross-Region Replication for the bucket."}, {
        "id": "B",
        "markdown": "Write a script to copy the objects to another bucket in the destination region."
    }, {"id": "C", "markdown": "Create an S3 snapshot in the destination region."}, {
        "id": "D",
        "markdown": "Enable versioning that will copy the objects to the destination region."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following:\n\nCross-Region Replication is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions. \n\nFor more information on Cross-Region Replication in the Simple Storage Service, please visit the URL below:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You want to use AWS to host your own website with a unique domain name that uses the format www.example.com. How would you achieve this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Register a domain with Route53 and use it to route requests to your website"
    }, {
        "id": "B",
        "markdown": "Create an auto-scaling group of EC2 instances and manage the web hosting on these instances"
    }, {
        "id": "C",
        "markdown": "Create one large EC2 instance to host the website and replicate it in every region"
    }, {"id": "D", "markdown": "Create a Content Delivery Network (CDN) to deliver your images and files"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\n\n\tOption A is correct. Route53 is used to register a domain and route requests to a website.\n\tOption B is incorrect. Hosting on EC2 is not necessary here as server-side scripting is not needed and S3 will scale automatically.\n\tOption C is incorrect. Hosting on EC2 is not necessary and this particular implementation can lead to different configurations on each server.\n\tOption D is incorrect. A CDN will improve the delivery time of your files and pages to the customer but is not a hosting solution itself.\n\n\n \n\nReferences:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html\n\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-cloudfront-walkthrough.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A storage solution is required in AWS to store videos uploaded by the user. After accessing these videos frequently for a period of a month, these videos can be deleted. How could this be implemented in the most cost-effective manner?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use EBS Volumes to store the videos. Create a script to delete the videos after a month."
    }, {
        "id": "B",
        "markdown": "Configure object expiration on the S3 bucket and the policy will take care of deleting the videos on the completion of 30 days."
    }, {"id": "C", "markdown": "Store the videos in Amazon Glacier and then use Lifecycle Policies."}, {
        "id": "D",
        "markdown": "Store the videos using Stored Volumes. Create a script to delete the videos after a month."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following on Lifecycle Policies:\n\nLifecycle configuration enables you to specify the lifecycle management of objects in a bucket. The configuration is a set of one or more rules, where each rule defines an action for Amazon S3 to apply to a group of objects. These actions can be classified as follows:\n\n \n\n\n\tTransition actions – In which you define when objects transition occurs to another storage class. For example, you may choose transition objects to the STANDARD_IA (IA, for infrequent access) storage class 30 days after creation or archive objects to the GLACIER storage class one year after creation.\n\n\n \n\n\n\tExpiration actions – In which you specify when the objects expire. Then Amazon S3 deletes the expired objects on your behalf.\n\n\n \n\n For more information on AWS S3 Lifecycle policies, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a global media firm. They have web servers deployed on EC2 instances across multiple regions. For audit purposes, you have created a CloudTrail trail to store all CloudTrail event log files to the S3 bucket.\n\nThis trail applies to all regions & is stored in S3 buckets at the EU-Central region. During last year’s audit, auditors have raised a query on the integrity of log files that are stored in the S3 buckets and tendered as Non-Compliance. Which feature could help you to gain compliance from Auditors for this query?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Amazon SSE-S3 encryption for the CloudTrail log file while storing it to S3 buckets."
    }, {
        "id": "B",
        "markdown": "Use Amazon SSE-KMS encryption for CloudTrail log file while storing it to S3 buckets."
    }, {
        "id": "C",
        "markdown": "Use an S3 bucket policy to grant access to only Security head for S3 buckets having CloudTrail log files."
    }, {"id": "D", "markdown": "Enable the CloudTrail log file integrity validation feature."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: D\n\nAfter you enable CloudTrail log file integrity, it will create a hash file called digest file which refers to logs that are generated. This digest file is saved in a different folder in the S3 bucket where log files are saved. Each of these digest files has the private key of public & private key pair. The DIgest file can be validated using the public key. This feature ensures that all the modifications made to CloudTrail log files are recorded. \n\n\n\tOption A is incorrect as by default all CloudTrail log files are delivered to S3 buckets using SSE-S3 encryption, this will not ensure the integrity of log files.\n\tOption B is incorrect as with Amazon SSE-KMS encryption for CloudTrail log file, there would be an additional layer of security for log files, but it won’t ensure the integrity of log files.\n\tOption C is incorrect as although this will restrict access to the bucket but won’t ensure that no modification has been done to log files post delivering in S3 buckets.\n\n\n \n\nFor more information on CloudTrail Log files Integrity, please refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html\n\thttps://aws.amazon.com/blogs/aws/aws-cloudtrail-update-sse-kms-encryption-log-file-integrity-verification/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an EC2 Instance in a particular region. This EC2 Instance has a preconfigured software running on it. You have been requested to create a disaster recovery solution in case the instance in the region fails. Which of the following is the best solution?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a duplicate EC2 Instance in another AZ. Keep it in the shutdown state. When required, bring it back up."
    }, {
        "id": "B",
        "markdown": "Backup the EBS data volume. If the instance fails, bring up a new EC2 instance and attach the volume."
    }, {
        "id": "C",
        "markdown": "Store the EC2 data on S3. If the instance fails, bring up a new EC2 instance and restore the data from S3."
    }, {"id": "D", "markdown": "Create an AMI of the EC2 Instance and copy it to another region."}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - D\n\nYou can copy an Amazon Machine Image (AMI) within or across an AWS region using the AWS Management Console, the AWS command line tools or SDKs, or the Amazon EC2 API, all of which support the CopyImage action. You can copy both Amazon EBS-backed AMIs and instance store-backed AMIs. You can copy AMIs with encrypted snapshots and encrypted AMIs.\n\nCopying a source AMI results in an identical but distinct target AMI with its own unique identifier. In the case of an Amazon EBS-backed AMI, each of its backing snapshots is, by default, copied to an identical but distinct target snapshot.\n\nOption A is invalid, because it is a maintenance overhead to maintain another non-running instance.\n\nOption B is invalid, because the preconfigured software could have settings on the root volume.\n\nOption C is invalid, because this is a long and inefficient way to restore a failed instance.\n\nFor more information on Copying AMIs, please visit the below URL:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work in the media industry and have created a web application where users will be able to upload photos they create, to your website. This web application must be able to call the S3 API in order to function properly. Where would you store your API credentials while maintaining the maximum level of security?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Save the API credentials to your PHP files."}, {
        "id": "B",
        "markdown": "Don’t save your API credentials. Instead, create a role in IAM and assign this role to an EC2 instance when you first create it."
    }, {"id": "C", "markdown": "Save your API credentials in a public Github repository."}, {
        "id": "D",
        "markdown": "Pass API credentials to the instance using instance user data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nApplications must sign their API requests with AWS credentials. Therefore, if you are an application developer, you need a strategy for managing credentials for your applications that run on EC2 instances.\n\nFor example, you can securely distribute your AWS credentials to the instances, enabling the applications on those instances to use your credentials to sign requests, while protecting your credentials from other users. However, it's challenging to securely distribute credentials to each instance, especially those that the AWS creates on your behalfs, such as Spot Instances or instances in Auto Scaling groups. You must also be able to update the credentials on each instance when you rotate your AWS credentials.\n\nIAM roles are designed so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use.\n\n \n\nFor more information on IAM Roles, please visit the below URL:\n\n\n\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a new web application that needs to be deployed in AWS as soon as possible. The application is backed in an AMI and you plan to use an Application Load Balancer to distribute the traffic to an Auto Scaling group. Which of the following methods helps you to achieve a highly available system?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Assign an Elastic IP to each instance under the Auto Scaling group."
    }, {
        "id": "B",
        "markdown": "Use the Application Load Balancer to send traffic across instances in multiple availability zones."
    }, {
        "id": "C",
        "markdown": "Configure the Application Load Balancer to distribute traffic to instances in multiple AWS regions."
    }, {"id": "D", "markdown": "Assign a dedicated IP address to the Application Load Balancer."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nRefer to https://d1.awsstatic.com/whitepapers/aws-building-fault-tolerant-applications.pdf for how to build highly available and fault-tolerant software systems in AWS.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ It is not necessary to assign Elastic IPs to ASG instances. The instances may be terminated when the ASG scales in and new instances will be created.\n\tOption​ ​B ​is​ CORRECT:​ Because this ensures that when one availability zone has an outage, instances in other availability zones can still serve traffic from the Application Load Balancer.\n\tOption​ ​C ​is​ ​incorrect:​ Because Application Load Balancer is a regional service and cannot distribute traffic to instances in multiple regions.\n\tOption​ ​D ​is​ ​incorrect:​ Because users cannot assign IP addresses to an Application Load Balancer.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization is managing a Redshift Cluster in AWS. They need to monitor the performance of this Redshift cluster to ensure that it is performing as efficiently as possible. Which of the following services should be used for achieving this requirement? (Select Two)",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "CloudTrail"}, {"id": "B", "markdown": "VPC Flow Logs"}, {
        "id": "C",
        "markdown": "CloudWatch"
    }, {"id": "D", "markdown": "AWS Trusted Advisor"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers - C and D\n\nAWS Documentation mentions the following on monitoring Redshift Clusters:\n\nAmazon CloudWatch metrics help you monitor the physical aspects of your cluster, such as CPU utilization, latency, and throughput. Metric data is displayed directly in the Amazon Redshift console. You can also view it in the Amazon CloudWatch console, or you can consume it in any other way you work with metrics such as with the Amazon CloudWatch Command Line Interface (CLI) or one of the AWS Software Development Kits (SDKs).\n\nFor more information on monitoring Redshift, please visit the URL below:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/metrics.html\n\nFor Option D, please go through the link below: \n\nhttps://aws.amazon.com/about-aws/whats-new/2016/03/aws-trusted-advisor-adds-checks-for-amazon-s3-amazon-redshift-reserved-instances-security-and-service-limits/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a global insurance firm. For the web application, you are using S3 buckets and have configured CloudFront to cache image files. For audit purposes, you have created a CloudTrail trail in each region and the events logs files are logged in S3 bucket in the us-west-1 region.\n\nThere have been changes in CloudFront which have caused all traffic being routed to the origin, resulting in increased latency for users in other continents. After scrutinizing CloudTrail logs, you found that there are duplicate CloudFront events being logged. What configuration changes would you perform to eliminate duplicate CloudFront logs?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Using AWS CLI, update CloudTrail trail to disable global service events that are delivered in all regions except US-West-1."
    }, {
        "id": "B",
        "markdown": "Using AWS CLI, change the configuration of a trail to logging a single region instead of logging all regions."
    }, {
        "id": "C",
        "markdown": "Using AWS console, update CloudTrail trail to disable global service events to be delivered in all regions except US-West-1."
    }, {
        "id": "D",
        "markdown": "Using the AWS console, change the configuration of a trail to logging a single region instead of logging all regions."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon CloudFront is a global service for which events are delivered to CloudTrail trails which include global services. To avoid duplicate Amazon CloudFront events, you can disable these events from delivering to CloudTrail trails in all regions & enable in only one region.\n\n\n\tOptions B & D is incorrect as if CloudTrail trail is changed to logging a single region, global service event logging is off automatically, this will disable CloudFront events being logged instead of avoiding duplicate logs.\n\tOption C is incorrect as Changes to Global service event logs can be done only via AWS CLI & not via AWS console.\n\n\nFor more information on Global Service Events with CloudTrail, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-regional-and-global-services\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a start-up firm that developed a new multilingual website for sharing images and video files. You are using EC2 instance to host this web application. To deliver these web content with the lowest latency to end-users, you have configured Amazon CloudFront which forward query strings to origin servers based on selected parameter values and also cache web content based upon these parameter values.\n\nDuring the trial, it was observed that caching is not happening based upon query strings resulting in these requests hitting origin servers. Which of the following need to be checked if CloudFront is caching properly based upon query strings? (Select Three)",
    "prompt": "",
    "correctAnswerId": ["B", "C", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Make sure that the distribution is an RTMP distribution."}, {
        "id": "B",
        "markdown": "Make sure that the delimiter character between query string parameters is a '&' character."
    }, {"id": "C", "markdown": "Check if Parameters' names and values are in the same case."}, {
        "id": "D",
        "markdown": "Make sure that the delimiter character between query string parameters is a “/” character."
    }, {"id": "E", "markdown": "Make sure that the distribution is a Web distribution."}, {
        "id": "F",
        "markdown": "Check only that the query parameter names are in the same case"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B, C, E\n\nCloudFront Query String Forwarding only supports Web distribution. For query string forwarding, the delimiter character must be always a '&' character. Parameters' names and values used in the query string are case sensitive.\n\n\n\tOption A is incorrect as CloudFront Query String Forwarding does not support RTMP distribution.\n\tOption D is incorrect as Delimiter Character should be always '&', not '\\' character.\n\tOption F is incorrect as in the case of Parameters in the query string, both the parameters' names and values are case sensitive.\n\n\n \n\nFor more information on Query String forwarding, refer to the following URL:\n\n\n\t https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "IoT sensors monitor the number of bags that are handled at an airport. The data is sent back to a Kinesis stream with default settings. Every alternate day, the data from the stream is sent to S3 for processing. But it is noticed that S3 is not receiving all of the data that is being sent to the Kinesis stream. What could be the reason for this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "The sensors probably stopped working on somedays, hence data is not sent to the stream."
    }, {"id": "B", "markdown": "S3 can only store data for a day."}, {
        "id": "C",
        "markdown": "The default retention period of the data stream is set to 24 hours only, and hence the failure."
    }, {"id": "D", "markdown": "Kinesis streams are not meant to handle IoT related data."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nKinesis Streams support changes to the data record retention period of your stream. A Kinesis stream is an ordered sequence of data records, meant to be written to and read from in real-time. Data records are therefore stored in shards in your stream temporarily. The time period from when a record is added to when it is no longer accessible is called the retention period. A Kinesis stream stores the records from 24 hours (by default), up to 168 hours.\n\n\n\tOption A is incorrect, even though a possibility, cannot be considered as the right option.\n\tOption B is incorrect since S3 can store data indefinitely unless you have a lifecycle policy defined.\n\tOption D is incorrect because the Kinesis service is perfect for this sort of data ingestion.\n\n\nFor more information on Kinesis data retention, please refer to the URL below:\n\n\n\thttp://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company uses an S3 bucket to store data for an application. Sometimes the team also downloads the S3 files for further analysis. As the data is very important, you need to protect against accidental deletions initiated by someone or an application. Which of the following options is appropriate?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable the versioning feature in the S3 bucket."}, {
        "id": "B",
        "markdown": "Modify the S3 bucket to be read-only."
    }, {"id": "C", "markdown": "Use an S3 Lifecycle policy to transfer objects to a lower cost storage."}, {
        "id": "D",
        "markdown": "Enable the Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\n\n\tOption​ ​A ​is​ CORRECT:​ The versioning feature in Amazon S3 helps to retain prior versions of objects stored in S3. Even if the current version is deleted accidently, the data can still be recovered from the previous version. Check the reference in https://d1.awsstatic.com/whitepapers/aws-building-fault-tolerant-applications.pdf.\n\tOption​ ​B ​is​ ​incorrect:​ The application may still need to write data in the S3 bucket so the option is not appropriate.\n\tOption​ ​C ​is​ ​incorrect:​ This method helps to save cost but not protect the data.\n\tOption​ ​D ​is​ ​incorrect:​ Because the Server-Side Encryption cannot protect against accidental deletions.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You create an Amazon SQS queue to decouple software components. The messages are processed by a Lambda function. Sometimes, the Lambda function fails to process messages in the queue. You need a mechanism to isolate the message failures to determine why the processing was unsuccessful. Which of the following options would you choose?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "FIFO (First-In-First-Out) queue"}, {
        "id": "B",
        "markdown": "Visibility timeout"
    }, {"id": "C", "markdown": "SQS dead-letter queue"}, {"id": "D", "markdown": "SQS long polling"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nSQS dead-letter queue should be selected as it is designed to isolate problematic messages in the queue. Details please check https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because FIFO queue itself does not isolate the messages that have failures.\n\tOption​ ​B ​is​ ​incorrect:​ Visibility timeout prevents other consumers from processing the message again. It does not resolve the mentioned problem.\n\tOption​ ​C ​is​ CORRECT:​ Because users can configure the dead letter queue to isolate the message failures as follows:\n\n\n\n\n\n\tOption​ ​D ​is​ ​incorrect:​ SQS long polling reduces the number of empty responses. It cannot handle the problematic messages.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company requires to deploy an existing Java-based application to AWS. Which of the following should be used to fulfill this requirement in the quickest way possible?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deploy to an S3 bucket and enable website hosting."}, {
        "id": "B",
        "markdown": "Use the Elastic Beanstalk service to provision the environment."
    }, {"id": "C", "markdown": "Use EC2 with Auto Scaling for the environment."}, {
        "id": "D",
        "markdown": "Use AMIs to build EC2 instances for deployment."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nAWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.\n\nYou can simply upload your code and Elastic Beanstalk will automatically handle the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.\n\nFor more information on the Elastic Beanstalk service, please visit the following URL:\n\nhttps://aws.amazon.com/elasticbeanstalk/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Administrator for a software firm that has a popular Web application hosted on EC2 instance in various regions. You are using AWS CloudHSM for offloading SSL/TLS processing from Web servers. Since this is a critical application for the firm, you need to ensure that proper backups are performed for data in AWS CloudHSM on a daily basis. What does the AWS CloudHSM use to perform a secure & durable backup?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ephemeral backup key (EBK) is used to encrypt data & Persistent backup key (PBK) is used to encrypt EBK before saving data to the Amazon S3 bucket in the same region as that of AWS CloudHSM cluster."
    }, {
        "id": "B",
        "markdown": "Data Key is used to encrypt data & Customer Managed Key (CMK) is used to encrypt Data Key before saving data to the Amazon S3 bucket in the same region as that of AWS CloudHSM cluster."
    }, {
        "id": "C",
        "markdown": "Ephemeral Backup Key (EBK) is used to encrypt data & Persistent backup Key (PBK) is used to encrypt EBK before saving data to the Amazon S3 bucket in a different region than the AWS CloudHSM cluster."
    }, {
        "id": "D",
        "markdown": "Data Key is used to encrypt data & Customer Managed Key (CMK) is used to encrypt Data Key before saving data to Amazon S3 bucket in a different region than the AWS CloudHSM cluster."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nTo backup the AWS CloudHSM data to Amazon S3 buckets in the same region, AWS CloudHSM generates a unique Ephemeral Backup Key (EBK) to encrypt all data using AES 256-bit encryption key. This Ephemeral Backup Key (EBK) is further encrypted using Persistent Backup Key (PBK) which is also AES 256-bit encryption key.\n\n\n\tOption B is incorrect as Data Key & Customer Managed Key are not used by AWS CloudHSM for the encryption of data, instead of that EBK & PBK are used.\n\tOption C is incorrect. While taking the backup of data from different AWS CloudHSM clusters to the Amazon S3 bucket, the Amazon S3 bucket should be in the same region as that of the AWS CloudHSM cluster.\n\tOption D is incorrect as Data Key & Customer Managed Key are not used by AWS CloudHSM for the encryption of data, instead of that EBK & PBK are used for encrypting and saving data to the Amazon S3 bucket in the same region.\n\n\nFor more information on backing data from AWS CloudHSM, refer to the following URL:\n\nhttps://docs.aws.amazon.com/cloudhsm/latest/userguide/backups.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You want to build a decoupled, highly available and fault tolerant architecture, including buffered request for your application in AWS. You decide to use EC2, the Classic Load Balancer, Auto Scaling and Route 53. Which one of the following additional services should you involve in this architecture?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS SNS"}, {"id": "B", "markdown": "AWS SQS"}, {
        "id": "C",
        "markdown": "AWS API Gateway"
    }, {"id": "D", "markdown": "AWS Config"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe Simple Queue Service can be used to build a decoupled architecture.\n\nAWS Documentation further mentions the following:\n\nAmazon Simple Queue Service (SQS) is a fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications. Building applications from individual components that each perform a discrete function improves scalability and reliability, and is best practice design for modern applications.\n\n• Scalability – Amazon SQS can process each buffered request (p. 202) independently, scaling transparently to handle any load increases or spikes without any provisioning instructions.\n\nFor more information on the Simple Queue Service, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dg.pdf\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been assigned the task of architecting an application in AWS. The architecture would consist of EC2, the Classic Load Balancer, Auto Scaling, and Route 53. You need to ensure that Blue-Green deployments are possible in this architecture. Which routing policy should you ideally use in Route 53 in order to achieve Blue-Green deployments?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Simple"}, {"id": "B", "markdown": "Multivalue Answer"}, {
        "id": "C",
        "markdown": "Latency"
    }, {"id": "D", "markdown": "Weighted"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Documentation mentions that the Weighted routing policy is good for testing new versions of the software. Also, It is the ideal approach for Blue-Green deployments.\n\nWeighted routing lets you associate multiple resources with a single domain name (example.com) or subdomain name (acme.example.com) and choose how much traffic is routed to each resource. This can be useful for a variety of purposes, including load balancing and testing new versions of the software.\n\nFor more information on Route 53 routing policies, please visit the following URL:\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\n\nNote: Multivalue-answer is recommended to use only when you want to route traffic randomly to multiple resources, such as web servers, you can create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record.\n\nHowever, in this case, we need to choose how much traffic is routed to each resource (blue and green). For example, Blue is currently live and we need to send less portion of traffic to Green to check everything works fine. If yes, then we can decide to go with Green resources. If no, we can change the weight for that record to 0. Blue will be completely live again. \n\nNOTE:\n\nWhen you implement the Blue-Green Deployment, It's not always fixed that the Blue environment is in an Alive state and Green environment in Idle state vice versa. During the testing phase, you can route your traffic to both the Blue and Green environments with a specified traffic load.\n\nFor more information, please visit the link below:\n\n\n\thttps://d1.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf (11 of 35). AWS explained with the proper diagram.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to deploy an application in AWS. This application requires an EC2 Instance to continuously perform log processing activities requiring Max 500MiB/s of data throughput. Which of the following is the best storage option for this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS IOPS"}, {"id": "B", "markdown": "EBS SSD"}, {
        "id": "C",
        "markdown": "EBS Throughput Optimized"
    }, {"id": "D", "markdown": "EBS Cold Storage"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nWhile considering storage volume types for batch processing activities with large throughput, consider using the EBS Throughput Optimized volume type. \n\nAWS Documentation mentions this, as shown below:\n\n\n\n \n\nFor more information on EBS Volume Types, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a start-up company. You have developed an application that will read out AWS Blogs to AWS professionals using \"Amazon Polly\". You need to perform a trial with the \"Amazon S3\" blog, in which the first \"S3\" should be read as \"Amazon Simple Storage Service\" while all subsequent \"S3\" should be read as \"S3\".\n\nThis test needs to be done in 2 different regions, us-west-1 & us-east-1. What could be done to perform the test successfully?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Using multiple Lexicons, create different alias for the word “S3” & apply in different orders. Upload Lexicons in us-west-1 region & use for both regions."
    }, {
        "id": "B",
        "markdown": "Using multiple Lexicons, create different alias for the word “S3” & apply in different orders. Upload Lexicons in us-west-1 region & us-east-1 region."
    }, {
        "id": "C",
        "markdown": "Using a single Lexicon, create different alias for the word “S3” & apply in different orders. Upload Lexicons in us-west-1 region & us-east-1 region."
    }, {
        "id": "D",
        "markdown": "Using a single Lexicon, create different alias for the word “S3” & apply in different orders. Upload Lexicons in us-east-1 region & use for both regions."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nLexicons are specific to a region. You will need to upload Lexicon in each region where you need to use it. For a single text which appears multiple times in the content, you can create an alias using multiple Lexicons to have different speech.\n\n\n\tOption A is incorrect as Lexicons needs to upload in all regions where content will be using Amazon Polly.\n\tOption C is incorrect as if a single word is repeating multiple times in content & needs to have different speech, we need to have multiple Lexicons created.\n\tOption D is incorrect as Lexicons needs to upload in all regions where content will be using Amazon Polly & to have a different speech for the single word being repeated multiple times, multiple Lexicons needs to be created.\n\n\n For more information on managing Lexicons, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to ensure that instances in a private subnet can access the Internet. The solution should be highly available and ensure less maintenance overhead. Which of the following would ideally fit this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Host the NAT Instance in the private subnet."}, {
        "id": "B",
        "markdown": "Host the NAT Instance in the public subnet."
    }, {"id": "C", "markdown": "Host the NAT Gateway in the private subnet."}, {
        "id": "D",
        "markdown": "Host the NAT Gateway in the public subnet."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nNAT gateway is used to enable instances in a private subnet to connect to the internet. However, the NAT gateway is implemented or placed in the public subnet of a VPC.\n\n\n\nFor more information, please check out the following URLs:\n\n\n\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\n\thttps://docs.aws.amazon.com/appstream2/latest/developerguide/managing-network-internet-manual.html\n\n\nShown below is a comparison of the NAT Gateway and NAT Instances as per the AWS Documentation. The documentation states that the NAT Gateway is highly available and requires less management.\n\n\n\n \n\nFor more information on the above comparison, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-comparison.html\n\n\n \n\n \n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to have a Data storage layer in AWS. Following are the key requirements:\n\na) Storage of JSON documents\n\nb) Availability of Indexes\n\nc) Automatic scaling\n\nWhat would be an ideal storage layer for the above requirements?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DynamoDB"}, {"id": "B", "markdown": "AWS EBS Volumes"}, {
        "id": "C",
        "markdown": "AWS S3"
    }, {"id": "D", "markdown": "AWS Glacier"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Documentation mentions the following:\n\nAmazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB enables customers to offload the administrative burdens of operating and scaling distributed databases to AWS so that they don’t have to worry about hardware provisioning, setup, and configuration, throughput capacity planning, replication, software patching or cluster scaling.\n\n \n\nFor more information on DynamoDB, please visit the following URL:\n\n\n\thttps://aws.amazon.com/dynamodb/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a set of Docker images that you use for building containers. You want to start using the Elastic Container Service and utilize the Docker images. You need a place to store these Docker images. What would you use for this purpose?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use AWS DynamoDB to store the Docker images."}, {
        "id": "B",
        "markdown": "Use AWS RDS to store the Docker images."
    }, {"id": "C", "markdown": "Use EC2 Instances with EBS Volumes to store the Docker images."}, {
        "id": "D",
        "markdown": "Use the ECR Service to store the Docker images."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - D\n\nAWS Documentation mentions the following:\n\nAmazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. Amazon ECR is integrated with Amazon Elastic Container Service (ECS), simplifying your development to production workflow.\n\nFor more information on the Elastic Container Service, please visit the following URL:\n\nhttps://aws.amazon.com/ecr/?nc2=h_m1\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working with an educational website that provides online content for professional exams using WordPress. You have recently added Amazon Polly plugins to the website to provide students audio recordings for exam contents.\n\nYou are getting customer feedback on the speech rate being too fast & continuous. What changes would you make in your content to resolve this? (Select Three)",
    "prompt": "",
    "correctAnswerId": ["A", "B", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add a pause using SSML tag between appropriate words & paragraphs."
    }, {"id": "B", "markdown": "Convert commas in content into the period."}, {
        "id": "C",
        "markdown": "Convert period in content into commas."
    }, {"id": "D", "markdown": "Add a tag as “Reduced” for appropriate words & paragraphs."}, {
        "id": "E",
        "markdown": "Add a tag as “Strong” for appropriate words & paragraphs."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A, B, E\n\nUsing SSML tags, we can control the speech generated by Amazon Polly. In the above example, using SSML tags, convert commas to period & tag words and paragraphs as “Strong”, will help to control the speech speed, adds appropriate pause & emphasis on appropriate words slowing speaking rate.\n\n\n\tOption C is incorrect as commas will not insert a pause in the speech during the reading text.\n\tOption D is incorrect as adding the tag as “Reduced” will speed up speech rate, along with a decrease in volume.\n\n\n \n\nFor more information on SSML Tags supported by Amazon Polly, refer to the following URL:\n\n\n\t https://docs.aws.amazon.com/polly/latest/dg/supported-ssml.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are developing a mobile application for your company with DynamoDB as the back end and JavaScript as the front end. During application usage, you notice that there are spikes in the application especially in the DynamoDB write throughput. What would be the most cost-effective and scalable architecture for this application?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Autoscale DynamoDB to meet the requirements."}, {
        "id": "B",
        "markdown": "Increase write capacity of DynamoDB tables to meet the peak loads."
    }, {
        "id": "C",
        "markdown": "Create a service that pulls SQS messages and writes them to DynamoDB to handle sudden spikes in DynamoDB."
    }, {"id": "D", "markdown": "Launch DynamoDB in Multi-AZ configuration with a global index to balance writes."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nFor more information on DynamoDB auto-scaling, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-auto-scaling-for-amazon-dynamodb/\n\thttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are building a large-scale confidential documentation web server on AWS such that all of its documentation will be stored on S3. One of the requirements is that it should not be publicly accessible from S3 directly, and CloudFront would be needed to accomplish this. Which method would satisfy the outlined requirements?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an Identity and Access Management (IAM) User for CloudFront and grant access to the objects in your S3 bucket to that IAM User."
    }, {
        "id": "B",
        "markdown": "Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OAI."
    }, {
        "id": "C",
        "markdown": "Create individual policies for each bucket the documents are stored in, and grant access only to CloudFront in these policies."
    }, {
        "id": "D",
        "markdown": "Create an S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN)."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nIf you want to use CloudFront signed URLs or signed cookies to provide access to objects in your Amazon S3 bucket, you probably want to prevent users from accessing your Amazon S3 objects using Amazon S3 URLs. If users access your objects directly in Amazon S3, they bypass the controls provided by CloudFront signed URLs or signed cookies. For example, control over the date and time that a user can no longer access your content and control over which IP addresses can be used to access the content. In addition, if users access objects both through CloudFront and directly by using Amazon S3 URLs, CloudFront access logs are less useful because they're incomplete.\n\nFor more information on Origin Access Identity, please visit the link below:\n\nhttp://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on hosting its development, test and production applications on EC2 Instances in AWS. The team is worried about how access control would be given to relevant IT Admins for each of the above environments. As an architect, what would you suggest to manage the relevant accesses?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add tags to the instances marking each environment and then segregate access using IAM Policies."
    }, {"id": "B", "markdown": "Add Userdata to the underlying instances to mark each environment."}, {
        "id": "C",
        "markdown": "Add Metadata to the underlying instances to mark each environment."
    }, {"id": "D", "markdown": "Add each environment to a separate Auto Scaling Group."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following to support this requirement:\n\nTags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. This is useful when you have many resources of the same type — you can quickly identify a specific resource based on the tags you've assigned to it.\n\nEach tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's Amazon EC2 instances that help you track each instance's owner and stack level.\n\nWe recommend you to devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add.\n\nFor more information on using tags, please visit the link below:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You want to set up a public website on AWS. Your requirements are as follows:\n\n\n\t You want the database and the application server running on AWS VPC.\n\t You want the database to be able to connect to the Internet, specifically for patch upgrades.\n\tYou do not want to receive any incoming requests from the Internet to the database.\n\n\nWhich of the following solutions would best satisfy all these requirements?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Setup the database in a private subnet with a security group that only allows outbound traffic."
    }, {
        "id": "B",
        "markdown": "Setup the database in a public subnet with a security group that only allows inbound traffic."
    }, {
        "id": "C",
        "markdown": "Setup the database in a local data center and use a private gateway to connect the application to the database."
    }, {
        "id": "D",
        "markdown": "Setup the public website on a public subnet and setup the database in a private subnet that connects to the Internet via a NAT Gateway."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe below diagram from AWS Documentation showcases this architecture:\n\n\n\n \n\nFor more information on the VPC Scenario for public and private subnets, please visit the link below:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a legacy application that uses the monolithic architecture. You need to design a new microservices architecture for the application and host it in AWS. The application should be dockerized so that it can be easily deployed.\n\nWhich of the following AWS services would you choose to host the application?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Elastic Kubernetes Engine"}, {
        "id": "B",
        "markdown": "Amazon Lambda"
    }, {"id": "C", "markdown": "Elastic Container Registry"}, {"id": "D", "markdown": "Elastic Container Service"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ D\n\nRefer to https://aws.amazon.com/microservices/ for how to build highly available microservices in AWS.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because the service name should be Elastic Kubernetes Service (EKS).\n\tOption​ ​B ​is​ ​incorrect:​ Because Amazon Lambda cannot run a Docker container.\n\tOption​ ​C ​is​ ​incorrect:​ Because Elastic Container Registry is the service to store Docker images and it cannot run Docker containers.\n\tOption​ ​D ​is​ CORRECT:​ Because Elastic Container service (ECS) allows users to easily run applications in Docker containers. ECS is a suitable AWS compute service for microservices.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a web application that processes customer orders. The frontend application forwards the order messages to an SQS queue. The backend contains an Elastic Load Balancer and an Auto Scaling group. You want the ASG to auto scale depending on the queue size. Which of the following CloudWatch metrics would you choose to discover the SQS queue length?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "ApproximateNumberOfMessagesVisible"}, {
        "id": "B",
        "markdown": "NumberOfMessagesReceived"
    }, {"id": "C", "markdown": "NumberOfMessagesDeleted"}, {
        "id": "D",
        "markdown": "ApproximateNumberOfMessagesNotVisible"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nThe backend nodes can scale based on the queue length. Check the reference in https://aws.amazon.com/blogs/compute/building-loosely-coupled-scalable-c-applications-with-amazon-sqs-and-amazon-sns/.\n\n\n\tOption​ ​A ​is​ CORRECT:​ ApproximateNumberOfMessagesVisible describes the number of messages available for retrieval. It can be used to decide the queue length.\n\tOption​ ​B ​is​ ​incorrect:​ Because NumberOfMessagesReceived is the number of messages returned by calls to the ReceiveMessage action. It does not measure the queue length.\n\tOption​ ​C ​is​ ​incorrect:​ Because NumberOfMessagesDeleted is the number of messages deleted from the queue. It is not suitable to be used in this scenario.\n\tOption​ ​D ​is​ ​incorrect:​ Because ApproximateNumberOfMessagesNotVisible measures the number of messages in flight. It should not be used here.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are performing a Load Testing exercise on your application that is hosted on AWS. While testing your Amazon RDS MySQL DB Instance, you notice that your application becomes non-responsive when you reach 100% CPU utilization. Your application is read-heavy. Which methods would help scale your data-tier to meet the application’s needs? (Select Three)",
    "prompt": "",
    "correctAnswerId": ["A", "D", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Add Amazon RDS DB Read Replicas, and have your application direct read queries to them."
    }, {
        "id": "B",
        "markdown": "Add your Amazon RDS DB instance to Storage Auto Scaling, and set your desired maximum storage limit."
    }, {
        "id": "C",
        "markdown": "Use an Amazon SQS queue to throttle data going to the Amazon RDS DB Instance."
    }, {"id": "D", "markdown": "Use ElastiCache to cache common queries of your Amazon RDS DB."}, {
        "id": "E",
        "markdown": "Shard your data set among multiple Amazon RDS DB Instances."
    }, {"id": "F", "markdown": "Enable Multi-AZ for your Amazon RDS DB Instance."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers - A, D, and E\n\nAmazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This replication feature makes it easy to elastically scale out beyond the capacity constraints of a single DB Instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput.\n\n\n\tFor more information on Read Replicas, please refer to the link below.\n\t\n\t\thttps://aws.amazon.com/rds/details/read-replicas/\n\t\n\t\n\n\n \n\nSharding is a common concept to split data across multiple tables in a database. Let's consider the following example.\n\nApplication Shards\n\nIn this example, we assume that our application currently doesn't have enough load to need an application shard for each category, but we want to plan ahead with growth in mind. To make future growth easier we make use of application shards. So our application code will act as if it has seven shards, but Hibernate will map those seven shards onto a smaller number of application shards. Each application shard will map to a MySQL database instance. By using this mapping we can distribute the load to best suit our needs. For our application, assume that sports and entertainment generate as much load as the other five categories combined. These two categories will map to one application shard and the other five categories will map to the other application shard. The two application shards will be mapped as follows.\n\n\n\n\n\tFor more information on sharding, please refer to the link below.\n\t\n\t\thttps://forums.aws.amazon.com/thread.jspa?messageID=203052\n\t\n\t\n\n\n \n\nAmazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.\n\n\n\tFor more information on ElastiCache, please refer to the link below.\n\t\n\t\thttps://aws.amazon.com/elasticache/\n\t\n\t\n\n\n \n\n\n\tOption B is incorrect because it is not an ideal way to scale a database. Amazon RDS Auto Scaling is to scale the storage capacity. If the storage capacity threshold is reached, then capacity will be scaled through Auto Scaling. RDS Auto Scaling does not look for the CPU utilization threshold so it cannot be a solution for bottlenecks to read heavy databases.\n\n\n\n\tOption C is not an ideal choice. Because our application is read-heavy and this is the cause of the problem that we are facing with the RDS. So for this issue, Creating Read replicas, Elastic cache implementation, and Sharding the dataset are the ways through which we can tackle this issue. But if we have too may PUT requests for the DB, that is causing the issue then we can create an SQS queue and store these PUT requests in the message queue and then process it accordingly.\n\n\n \n\n\n\tOption F is invalid because the Multi-AZ feature is only a failover option.\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work for a big company having multiple applications that are very different from each other. These applications are built using different programming languages. How could you deploy these applications as quickly as possible?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Develop all the apps in a single Docker container and deploy using Elastic Beanstalk"
    }, {
        "id": "B",
        "markdown": "Create a Lambda function deployment package consisting of code and any dependencies."
    }, {
        "id": "C",
        "markdown": "Develop each app in a separate Docker container and deploy using Elastic Beanstalk."
    }, {"id": "D", "markdown": "Develop each app in separate Docker containers and deploy using CloudFormation."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nElastic Beanstalk supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run.\n\n\n\tOption A is incorrect because the requirement is to deploy multiple apps that are very different from each other and developed with different programming languages.\n\tOption B is ideally used for running code and not packaging the applications and dependencies.\n\tOption D is incorrect as Deploying Docker containers using CloudFormation is also not an ideal choice.\n\n\nFor more information on Docker and Elastic Beanstalk, please visit the URL below:\n\n\n\thttp://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are designing a system which needs at minimum, 8 m4.large instances operating to service traffic. While designing a system for high availability in the us-east-1 region having 6 Availability Zones, your company needs to be able to handle the death of a full availability zone. How should you distribute the servers to save as much cost as possible, assuming all of the EC2 nodes are properly linked to an ELB? Your VPC account can utilize us-east-1’s AZs a through f, inclusive.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "3 servers in each of AZs a through d, inclusive."}, {
        "id": "B",
        "markdown": "8 servers in each of AZs a and b."
    }, {"id": "C", "markdown": "2 servers in each of AZs a through e, inclusive."}, {
        "id": "D",
        "markdown": "4 servers in each of AZs a through c, inclusive."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe best way is to distribute the instances across multiple AZs to get the best performance and to avoid a disaster scenario.\n\nWith this solution, you will always have a minimum of more than 8 servers even if one AZ went down.\n\nEven though options A and D are also valid, the best solution for distribution is Option C.\n\nFor more information on High Availability and Fault tolerance, please refer to the link below:\n\nhttps://media.amazonwebservices.com/architecturecenter/AWS_ac_ra_ftha_04.pdf\n\nNote: \nIn option A, we need to distribute 3 servers in each AZ.\nso,  A=3, B=3, C=3, D=3. Total servers used=12.\n\nIn option B, we will not get high availability.\n\nIn option C, we need to distribute 2 servers in each AZ.\nso, A=2, B=2, C=2, D=2, E=2. Total servers used=10.\n\nIn option D, we need to distribute 4 servers in each AZ.\nso, A=4, B=4, C=4. Total servers used=12.\n\nIn the question, it's clearly mentioned that \"the company needs to be handle death of full AZ and save as much cost as possible\". In option C, we are using fewer servers i.e 10 servers distributed in more AZ's. \n\nThe question says\" You are designing a system which needs at minimum, 8 m4.large instances operating to service traffic\". Now it is clear that the number of minimum instances required should be 8. The next part of the question is that \"How should you distribute the servers to save as much cost as possible, assuming all the EC2 nodes are properly linked to an ELB?\"\n\nWe have to select the solution that should be cost-effective and more available. Based on this, Option B is not that much available. Because here you are using only 2 availability zones with 8 instances in each i.e. 16 instances.\n\nSo, Option C is the correct and more suitable here.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You create several SQS queues to store different types of customer requests. Each SQS queue has a backend node that pulls messages for processing. Now you need a service to collect messages from the frontend and push them to the related queues using the publish/subscribe model. Which service would you choose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon MQ"}, {
        "id": "B",
        "markdown": "Amazon Simple Notification Service (SNS)"
    }, {"id": "C", "markdown": "Amazon Simple Queue Service (SQS)"}, {"id": "D", "markdown": "AWS Step Functions"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nAWS SNS is able to push notifications to the related SQS endpoints. SNS uses a publish/subscribe model that provides instant event notifications for applications.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Amazon MQ is a managed message broker service which is not suitable for this scenario.\n\tOption​ ​B ​is​ CORRECT:​ Because SNS uses Pub/Sub messaging to provide asynchronous event notifications. Please check https://aws.amazon.com/pub-sub-messaging/.\n\tOption​ ​C ​is​ ​incorrect:​ Because SQS does not use the publish/subscribe model.\n\tOption​ ​D ​is​ ​incorrect:​ AWS Step Functions coordinates application components using visual workflows. The service should not be used in this scenario.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need a new S3 bucket to store objects using the write-once-read-many (WORM) model. After objects are saved in the bucket, they are not allowed to be deleted or overwritten for a fixed amount of time. Which option would you select to achieve this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable the Amazon S3 object lock when creating the S3 bucket."}, {
        "id": "B",
        "markdown": "Enable versioning for the S3 bucket."
    }, {"id": "C", "markdown": "Modify the S3 bucket policy to only allow the read operation."}, {
        "id": "D",
        "markdown": "Enable the WORM model in the S3 Access Control List (ACL) configuration."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ A\n\nAmazon S3 object lock should be enabled in order to store objects using the write once, read many (WORM) model. The reference can be found in https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html.\n\n\n\tOption​ ​A ​is​ CORRECT:​ After the S3 object lock is enabled, you can prevent the S3 objects from being deleted or overwritten for a fixed amount of time or indefinitely.\n\tOption​ ​B ​is​ ​incorrect:​ Because versioning does not prevent objects from being deleted or modified.\n\tOption​ ​C ​is​ ​incorrect:​ Because the S3 bucket should still allow the write operation otherwise new objects cannot be saved in the bucket.\n\tOption​ ​D ​is​ ​incorrect:​ Because there is no such configuration in Access Control List (ACL).\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There are two folders A and B in an S3 bucket. Folder A stores objects that are frequently accessed. Folder B saves objects that are long-lived, infrequently accessed and non-critical. The retrieval time for files in folder B should be within milliseconds. You want to use different storage classes for objects in these two folders to save cost. Which storage classes are proper?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Standard for folder A and S3 Glacier for folder B."}, {
        "id": "B",
        "markdown": "Intelligent-Tiering for folder A and Reduced Redundancy for folder B."
    }, {"id": "C", "markdown": "Standard for folder A and One Zone-IA for folder B."}, {
        "id": "D",
        "markdown": "Two S3 buckets are required as an S3 bucket cannot have two storage classes at the same time."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ C\n\nAbout different storage classes of S3 objects, please check https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html.\n\nFolder A should use Standard as objects are frequently accessed. Folder B should use infrequently accessed storage classes such as Standard-IA or One Zone-IA.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because S3 Glacier is improper as files cannot be retrieved within milliseconds.\n\tOption​ ​B ​is​ ​incorrect:​ Because Reduced Redundancy is not cost-efficient for infrequently accessed objects.\n\tOption​ ​C ​is​ CORRECT:​ Check the above explanations.\n\tOption​ ​D ​is​ ​incorrect:​ Each object in an S3 bucket can have a user-defined storage class. There is no need to maintain two S3 buckets in this scenario.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As a part of your application architecture requirements, the company has requested the ability to run analytics against all the combined log files from the Elastic Load Balancer. Which services would you use together to collect logs and process log file analysis in an AWS environment?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Amazon DynamoDB to store the logs and EC2 to run custom log analysis scripts"
    }, {"id": "B", "markdown": "Amazon EC2 for storing and processing the log files"}, {
        "id": "C",
        "markdown": "Amazon S3 for storing the ELB log files and EC2 for processing the log files analysis"
    }, {
        "id": "D",
        "markdown": "Amazon S3 for storing ELB log files and Amazon EMR for processing the log files analysis"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThis question is not that complicated, even if you don't understand the options. If you see “collection of logs and processing of logs”, directly think of AWS EMR.\n\nAmazon EMR provides a managed Hadoop framework that makes it easy, fast, and cost-effective to process a vast amount of data across dynamically scalable Amazon EC2 instances. You can also run other popular distributed frameworks such as Apache Spark, HBase, Presto, and Flink in Amazon EMR, and interact with data in other AWS data stores such as Amazon S3 and Amazon DynamoDB.\n\nAmazon EMR securely and reliably handles a broad set of big data use cases, including log analysis, web indexing, data transformations (ETL), machine learning, financial analysis, scientific simulation, and bioinformatics.\n\nFor more information on EMR, please visit the link below.\n\nhttps://aws.amazon.com/emr/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working in a Global Pharma firm, having its Head Office in Washington & Branch offices in Chicago & Paris. The Firm has a two-tier Intranet website deployed in US-East-1 Region & database servers deployed on-premise at Head office. It has a Direct Connect link to VPC and it is connected to Chicago & Paris via WAN links while each of these offices has separate internet links from the local ISP. Recently they faced link outage issues with WAN links that resulted in the isolation of Branch office from the head office. They are looking for a cost-effective backup solution that could be set-up quickly without any additional devices and links. What would be the most suitable connectivity option in this scenario?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Using existing Internet connection at Washington, Chicago, and Paris, set up a VPN connection with us-east-1 VGW advertising prefixes via BGP. BGP ASN should be unique at these locations. VGW at us-east-1 will re-advertise these prefixes to the Washington office."
    }, {
        "id": "B",
        "markdown": "Using existing Internet connection at Chicago and Paris, set up a VPN connection with us-east-1 VGW advertising prefixes via BGP. BGP ASN should be unique at these locations. VGW at us-east-1 will re-advertise these prefixes to the Washington office."
    }, {
        "id": "C",
        "markdown": "Using existing Internet connection at Chicago and Paris, set up a VPN connection with VGW at us-west-1 & eu-west-3 advertising prefixes via BGP. BGP ASN should be unique at these locations. VGW at us-west-1 & eu-west-3 will advertise these prefixes to VGW at us-east-1 having connectivity to the Washington corporate head office."
    }, {
        "id": "D",
        "markdown": "Using existing Internet connection at Chicago, set up a VPN connection with VGW at us-east-1 while for Paris, set up a VPN connection with VGW at eu-west-3, advertising prefixes via BGP. BGP ASN should be unique at these locations. VGW at eu-west-3 will advertise these prefixes to VGW at us-east-1 having connectivity to the Washington corporate head office."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nUsing AWS VPN CloudHub, VGW can be used to connect multiple locations. Each location using existing Internet link & customer routers will set up a VPN connection to VGW. BGP Peering will be configured between customer gateway router & VGW using unique BGP ASN at each location. VGW will receive prefixes from each location & re-advertise to other peers. Direct Connect links terminating on this VGW will also have connectivity with these locations via VGW.\n\n\n\tOption A is incorrect as Washington Corporate office is already having a Direct Connect link to VGW in us-east-1, so no additional VPN needs to be set up from the Washington office.\n\tOption C is incorrect as the Washington Head office already has Direct Connect connectivity with VGW in us-east-1, so the office in Chicago and Paris should set up VPN to VGW in the us-east-1 region so that connectivity can be established between these 3 offices.  \n\tOption D is incorrect as with this connectivity solution, connectivity will be established between Chicago and Washington offices but not with Paris as it is connected to different VGW.\n\n\nFor more information on using VPC Cloudhub, please refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/vpn/latest/s2svpn/VPN_CloudHub.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a lifecycle rule for an S3 bucket that archives objects to the S3 Glacier storage class 60 days after creation. The archived objects are no longer needed one year after being created. How would you configure the S3 bucket to save more cost?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configure a rule in S3 Glacier to place delete markers for objects that are one year old."
    }, {
        "id": "B",
        "markdown": "Configure the S3 lifecycle rule to expire the objects after 365 days from object creation."
    }, {
        "id": "C",
        "markdown": "Modify the S3 lifecycle rule to clean up expired object delete markers for one year old objects."
    }, {
        "id": "D",
        "markdown": "Modify the S3 lifecycle rule to use S3 Glacier Deep Archive which automatically deletes objects one year after creation."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct​ ​Answer​ ​–​ B\n\nUsers can configure the expiration actions in S3 lifecycle management. Details can be found in https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html.\n\n\n\tOption​ ​A ​is​ ​incorrect:​ Because users cannot configure a rule to place delete markers in S3 Glacier.\n\tOption​ ​B ​is​ CORRECT:​ Because users can configure the object expiration in the S3 lifecycle rule and Amazon S3 will remove the expired objects.\n\tOption​ ​C ​is​ ​incorrect:​ Because cleaning up expired object delete markers does not expire the objects. This action does not save cost.\n\tOption​ ​D ​is​ ​incorrect:​ Because S3 Glacier Deep Archive does not automatically delete objects.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application currently allows users to upload files to an S3 bucket. You want to ensure that the file name for each uploaded file is stored in a DynamoDB table. How could this be achieved? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an AWS Lambda function to insert the required entry for each uploaded file."
    }, {"id": "B", "markdown": "Use AWS CloudWatch to probe for any S3 event."}, {
        "id": "C",
        "markdown": "Add an event in S3 with notification send to Lambda."
    }, {"id": "D", "markdown": "Add the CloudWatch event to the DynamoDB table streams section."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A and C\n\nYou can create a Lambda function containing the code to process the file, and add the name of the file to the DynamoDB table.\n\nYou can then use an Event Notification from the S3 bucket to invoke the Lambda function whenever the file is uploaded.\n\n\n\n \n\nFor more information on Amazon S3 Event Notifications, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A famous mobile brand is launching its much-awaited mobile phone on Christmas weekend. The IT Team managing their website is expecting a huge surge in traffic. Web applications are deployed in multiple regions.They want to prioritize their Platinum customers in us-east-1 over new global customers to give them preferential treatment for selection of various models of new mobile. The IT Team wants infrastructure to handle huge amounts of traffic without any impact on latency to global users. Which of the following cost-effective design solutions will meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a Lambda@Edge function in all regions to segregate Platinum users along with Amazon CloudFront to cache content nearer to users in all regions."
    }, {
        "id": "B",
        "markdown": "Create a Lambda@Edge function in the US-East-1 region to segregate Platinum users & execute at all regions along with Amazon CloudFront to cache content nearer to users in all regions."
    }, {
        "id": "C",
        "markdown": "Use Auto-scaling for origin servers to scale dynamically along with creating separate distribution for Platinum users with Amazon CloudFront to cache content nearer to users in all regions."
    }, {
        "id": "D",
        "markdown": "Use Auto-scaling for origin servers to scale on a predefined schedule along with creating separate distribution for Platinum Users with Amazon CloudFront to cache content nearer to users in all regions."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nLambda@Edge can be a scalable solution to segregate different types of users accessing web applications. Amazon CloudFront can be used to cache web content from the origin server to provide low latency access to users.\n\n\n\tOption A is incorrect as Lambda@Edge need not be created in all regions, it needs to be created in the US-East-1 region & replicated to all regions.\n\tOption C is incorrect as using On-Demand Auto-scaling with separate distributions will incur additional cost & is not a scalable option.\n\tOption D is incorrect as using Schedule Auto-scaling with separate distributions will incur additional cost & is not a scalable option.\n\n\nFor more information using Lambda@Edge with Amazon CloudFront, refer to the following URL,\n\n\n\thttps://aws.amazon.com/blogs/networking-and-content-delivery/visitor-prioritization-on-e-commerce-websites-with-cloudfront-and-lambdaedge/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a global software firm having offices in various continents. The pre-sales team needs to provide a new application demo to a prospective customer. For this, they are looking urgently for a separate temporary connection between 3 regional offices at Sydney, London, and Tokyo & Demo VPC at the us-west-1 region. Also, there should be connectivity between these offices for data synchronization of the new applications.\n\nYou are planning to set up a VPN connection from these offices to VGW at us-west-1. You have arranged Internet links along with routers at each regional offices and VPN parameter list. What are the other factors required to meet this connectivity solution? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "VGW at us-west-1 should be enabled to advertise  IP prefixes of each regional office to other regional offices."
    }, {
        "id": "B",
        "markdown": "Non-overlapping IP address pool should be configured at each of the regional offices."
    }, {
        "id": "C",
        "markdown": "Each router should have a BGP peering with other routers at each regional office over VPN connection."
    }, {"id": "D", "markdown": "BGP ASN should be unique at these regional offices."}, {
        "id": "E",
        "markdown": "Each of these offices should set up VPN connection to VGW only in that specific region instead of to VGW at us-west-1."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B, D\n\nAWS VPN CloudHub provides connectivity between spoke location over VPN connection. In this case, VGW acts as a Hub & re-advertise prefixes received from one regional office to another regional office. For this connectivity to establish, each regional site should have non-overlapping IP prefixes & BGP ASN should be unique at each site. If BGP ASN is not unique, additional ALLOWS-IN will be required.\n\n\n\tOption A is incorrect as VGW by default acts as a Hub and spoke & no additional configuration needs to be done at VGW end.\n\tOption C is incorrect as the router needs to have BGP peering only with VGW & not with routers in other locations.\n\tOption E is incorrect as regional office can set up VPN connection to VGW of the different regions as well.\n\n\nFor more information on using AWS VPN CloudHub, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/aws-technical-content/latest/aws-vpc-connectivity-options/aws-vpn-cloudhub-network-to-amazon.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A hybrid Architecture is used for a popular blogging website. Application servers are spread between On-premise Data Centre & EC2 Instance deployed in a custom VPC. An Application Load Balancer is used to offload traffic to the cloud due to capacity constraints at Data Centre. From Traffic trends it observed that the first week of every month when new blogs are uploaded, a spike in traffic is observed. For this period, they are looking for an automated faster option to mitigate additional load on EC2 servers launched behind ALB. Which of the following options can be implemented to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Auto-Scaling OnDemand Scaling to add additional EC2 instances within different VPC as in ALB."
    }, {
        "id": "B",
        "markdown": "Use Auto-Scaling Predictive Scaling to add additional EC2 instances within different VPC as in ALB."
    }, {
        "id": "C",
        "markdown": "Use Auto-Scaling Predictive Scaling to add additional EC2 instances within the same VPC as in ALB."
    }, {
        "id": "D",
        "markdown": "Use Auto-Scaling OnDemand Scaling to add additional EC2 instances within the same VPC as in ALB."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAuto scaling provides an automated way to scale EC2 instances as per capacity requirements. For using ELB with Auto scaling group, both should be in the same region & launched in the same VPC. EC2 Auto-Scaling Predictive Scaling combines with AWS Auto scaling to use historical data & load forecast to quick launching of EC2 instances. \n\n\n\tOption A & B are incorrect as ELB & EC2 instances launched should be in the same VPC.\n\tOption D is incorrect as for the above case Predictive Scaling is a better option than OnDemand scaling.\n\n\nFor more information on using Auto-Scaling with ELB, refer to the following URLs,\n\n\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/scaling_plan.html\n\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for an electrical appliance company that has web-application hosted in AWS. This is a two-tier web application with web-servers hosted in VPC’s & on-premise data-center.  You are using a Network Load balancer in the front end to distribute traffic between these servers. You are using instance Id for configuring targets for Network Load Balancer. Some clients are complaining about the delay in accessing this website.\n\nTo troubleshoot this issue, you are looking for a list of Client IP address having longer TLS handshake time. You have enabled access logging on Network Load balancing with logs saved in Amazon S3 buckets. Which tool could be used to quickly analyze a large amount of log files without any visualization in a cost-effective way?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Amazon Athena to query logs saved in Amazon S3 buckets."}, {
        "id": "B",
        "markdown": "Use Amazon S3 console to process logs."
    }, {"id": "C", "markdown": "Export Network Load Balancer access logs to third-party application."}, {
        "id": "D",
        "markdown": "Use Amazon Athena along with Amazon QuickSight to query logs saved in Amazon S3 buckets."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon Athena is a suitable tool for querying Network Load Balancers logs. In the above case since a large amount of logs are saved in S3 buckets from Network load balancer, Amazon Athena can be used to query logs and generate required details of client IP address and TLS handshake time.\n\n\n\tOption B is incorrect as processing a large number of logs directly from the S3 console will be a time-consuming process.\n\tOption C is incorrect as using a third-party tool will not be a cost-effective solution.\n\tOption D is incorrect as in the above case, we require only details of Client IP details along with TLS handshake time for troubleshooting purposes. Amazon QuickSight will be useful in case you need data visualization.\n\n\nFor more information on using Amazon Athena to query Network Load Balancer logs, refer to the following URL:\n\n\n\t https://docs.aws.amazon.com/athena/latest/ug/networkloadbalancer-classic-logs.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are requested to provide guidance for a large Pharma company. They are looking for a solution to save all their R&D test analysis data in a secure way. Daily large numbers of reports are generated, this data would be accessed parallelly from multiple R&D centres spread across the globe. Company requires this data to be instantaneously available to all users. Which of the following is the most suitable way for storage in AWS to provide low latency access to users across the globe with least cost?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Amazon EC2 instance with instance store to store data."}, {
        "id": "B",
        "markdown": "Use Amazon EFS volumes to store data."
    }, {"id": "C", "markdown": "Use Amazon EBS volumes connected to EC2 instance to store data"}, {
        "id": "D",
        "markdown": "Use Amazon S3 Buckets to store data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAmazon S3 can be used to store any amount of data which can be accessed from multiple locations concurrently without any impact on latency.\n\n\n\tOption A is incorrect as Instance store will provide low latency access from EC2 instances but it’s a temporary storage option.\n\tOption B is incorrect as Since this data would be accessed globally Amazon EFS will not be an ideal solution for this requirement.\n\tOption C is incorrect as Amazon EBS volumes would be useful storage for single Amazon EC2 instances.\n\n\nFor more information on AWS Storage options, refer to the following URLs,\n\n\n\thttps://d0.awsstatic.com/whitepapers/AWS%20Storage%20Services%20Whitepaper-v9.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A financial firm is developing a new web application which has static informational content as well as dynamic functional content with server-side scripting. They are expecting heavy traffic for this application on launching which they are planning to launch using AWS Cloud Infrastructure. Application Data should be seamlessly saved in AWS to meet growing demands without any further manual interactions. Which of the following solutions can be used in case there are no budget constraints?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Amazon EFS for dynamic content & Amazon S3 for static content."
    }, {"id": "B", "markdown": "Use Amazon EBS for dynamic content & Amazon EFS for static content."}, {
        "id": "C",
        "markdown": "Use Amazon S3 for dynamic content & Amazon EBS for static content."
    }, {"id": "D", "markdown": "Use Amazon Instance Store for dynamic content & Amazon S3 for static content"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nFor web sites with dynamic user interactions, using Amazon EFS is an ideal option to use along with using Amazon S3 for static non changing data.\n\n\n\tOption B is incorrect as Amazon EBS can be used for dynamic content only in case a web server is hosted on an EC2 instance. Since there are a large number of requests to this application, Amazon EFS is a better option for dynamic content which can be accessed from multiple sources parallelly.\n\tOption C is incorrect as Amazon S3 cannot be used for dynamic contents, Amazon EC2 or EFS can be used.\n\tOption D is incorrect as Amazon Instance Store is a temporary storage & is not suited for dynamic web content.\n\n\nFor more information on AWS Storage Options, refer to the following URLs,\n\n\n\thttps://d0.awsstatic.com/whitepapers/AWS%20Storage%20Services%20Whitepaper-v9.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a global financial company. Company locations spread across various countries upload transaction details data to S3 bucket in the US-West region. A large amount of data is uploaded on a daily basis from each of these locations simultaneously. You are using Amazon Athena to query this data & create reports using Amazon QuickSight to create a daily dashboard to the management team. In some cases, while running queries, you are observing Amazon S3 exception errors.\n\nAlso, in the monthly bills, a high percentage of cost is associated with Amazon Athena. Which of the following could be helpful in eliminating S3 errors while querying data and reducing the cost associated with queries? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Partition data based upon user credentials"}, {
        "id": "B",
        "markdown": "Partition data based upon date & location."
    }, {"id": "C", "markdown": "Create a separate Workgroups based upon user groups."}, {
        "id": "D",
        "markdown": "Create a single Workgroup for all users."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B and C\n\nAWS Athena pricing is based upon per query and the amount of data scanned in each query. In the above case, each regional office is uploading a large amount of data simultaneously, this data needs to be partitioned based upon location & date. A separate Workgroup can be created based upon users, teams, application or workloads. This will lead to minimizing the amount of data scanned for each query, improving performance & reducing cost.\n\n\n\tOption A is incorrect as partitioning the data on user credentials is irrelevant here.\n\tOption D is incorrect as a single Workgroup will not decrease the amount of data scanned per query. \n\n\nFor more information on Partitioning data & using Workgroups, refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/athena/latest/ug/partitions.html\n\thttps://docs.aws.amazon.com/athena/latest/ug/manage-queries-control-costs-with-workgroups.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning to use Auto Scaling groups to maintain the performance of your web application. How would you ensure that the scaling activity has sufficient time to stabilize without executing another scaling action?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Modify the Instance User Data property with a timeout interval."}, {
        "id": "B",
        "markdown": "Increase the Auto Scaling Cooldown timer value."
    }, {"id": "C", "markdown": "Enable the Auto Scaling cross zone balancing feature."}, {
        "id": "D",
        "markdown": "Disable CloudWatch alarms till the application stabilizes."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nThe Cooldown period is a configurable setting for your Auto Scaling group which ensures that it doesn't launch or terminate additional instances before the previous scaling activity takes effect. After the Auto Scaling group dynamically scales using a simple Scaling Policy, it waits for the Cooldown period to complete before resuming scaling activities.\n\nFor more information on Auto Scaling Cooldown, please visit the following URL:\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company hosts a popular web application that connects to an Amazon RDS MySQL DB instance running in a private VPC subnet created with default ACL settings. The IT Security department has identified a DoS attack from a suspecting IP. How would you protect the subnets from this attack?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Change the Inbound Security Groups to deny access from the suspecting IP."
    }, {
        "id": "B",
        "markdown": "Change the Outbound Security Groups to deny access from the suspecting IP."
    }, {"id": "C", "markdown": "Change the Inbound NACL to deny access from the suspecting IP."}, {
        "id": "D",
        "markdown": "Change the Outbound NACL to deny access from the suspecting IP."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nOptions A and B are invalid because the Security Groups block traffic by default. You can use NACLs as an additional security layer for the subnet to deny traffic.\n\nOption D is invalid since just changing the Inbound Rules is sufficient.\n\nAWS Documentation mentions the following:\n\nA Network Access Control List (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPC. \n\nFor more information on Network Access Control Lists, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A popular educational website is facing a surge in demand for online video training. They have their large number of video content distributed between on-premise data centres & on Amazon S3 bucket in the us-west region. Students from across the globe are facing glitches in videos & complaining about time required to get these videos running even though each video size is less than 1 Gb. The Marketing Team is expecting a further increase in demand & you need to provide a scalable solution for this concern which can be deployed in the shortest time frame. Which of the following is a recommended cost-optimised scalable solution?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Amazon S3 Cross Region replication to replicate content from us-west region to other regions."
    }, {"id": "B", "markdown": "Use Throughput optimised EBS volumes to save video content."}, {
        "id": "C",
        "markdown": "Use Amazon CloudFront for videos saved in on-premise & Amazon S3 origin."
    }, {
        "id": "D",
        "markdown": "Move all content from on-premise data centres to Amazon S3 & enable Transfer Acceleration on this bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon CloudFront Can be used to offload origin server loads. In the above case, for videos which are saved in on-premise servers & Amazon S3 bucket, Amazon CloudFront can be used to deliver this content to users with less latency & also will offload load on servers.\n\n\n\tOption A is incorrect as Using storing video content in Amazon S3 bucket in different regions would incur additional charges.\n\tOption B is incorrect as EBS would be preferred for rapidly changing web content, in the above case video content would not be rapidly changing, so storing content in Amazon S3 bucket with Amazon CloudFront distribution is a better option.\n\tOption D is incorrect as using Amazon S3 transfer Acceleration would be costly as compared to using Amazon CloudFront. Also, for files less than 1 Gb, using Amazon CloudFront would provide better performance than Amazon S3 Transfer Acceleration. \n\n\nFor more information on using Amazon CloudFront for scalable web content, refer to the following URLs,\n\n\n\thttps://aws.amazon.com/blogs/architecture/scale-your-web-application-one-step-at-a-time/\n\thttps://aws.amazon.com/s3/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global conglomerate is looking for a Multi-site DR plan for an application deployed on a server fleet at the Data Centre. All regional locations send data to the Head Office from where the daily backup is done to AWS cloud infrastructure. This is a large database that needs to backup daily. Incomplete backups can impact RPO in case of failure in any site.  For this, they are looking for high bandwidth links having higher throughput for faster data transfer securely. Which of the following would meet this high performant secure connectivity between on-premise & VPC?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a private virtual interface for DX Connection with LAG enabled in active mode & configure VPN over this connection for secure consistent connection for data replication."
    }, {
        "id": "B",
        "markdown": "Create a public virtual interface for DX Connection with LAG enabled in active mode & configure VPN over this connection for secure consistent connection for data replication."
    }, {
        "id": "C",
        "markdown": "Create a public virtual interface for DX Connection with LAG enabled in passive mode & configure VPN over this connection for secure consistent connection for data replication."
    }, {
        "id": "D",
        "markdown": "Create a private virtual interface for DX Connection with LAG enabled in passive mode & configure VPN over this connection for secure consistent connection for data replication."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nFor higher throughput, LAG can be used to aggregate multiple DX connections to give a maximum of 40 Gig bandwidth. A VPN connection over this connection can provide secure connections between on-premise devices to AWS VGW.\n\n\n\tOptions A & D are incorrect as for creating a VPN connection over DX Connection public virtual interface that need to be created.\n\tOption C is incorrect as for creating LAG, at AWS end it's always in active mode, to aggregate multiple links into one virtual interface active mode needs to be enabled at Customer end routers.\n\n\nFor more information on using LAG & VPN over AWS Direct Connect refer to the following URLs,\n\n\n\thttps://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html\n\thttps://aws.amazon.com/premiumsupport/knowledge-center/create-vpn-direct-connect/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Videos are uploaded to an S3 bucket, and you need to provide access to users to view the same. What is the best way to do so, while maintaining a good user experience for all users regardless of the region in which they are located?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Enable Cross-Region Replication for the S3 bucket to all regions."
    }, {"id": "B", "markdown": "Use CloudFront with the S3 bucket as the source."}, {
        "id": "C",
        "markdown": "Use API Gateway with S3 bucket as the source."
    }, {"id": "D", "markdown": "Use AWS Lambda functions to deliver the content to users."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following to back up this requirement:\n\nAmazon CloudFront is a web service that speeds up the distribution of static and dynamic web content, such as .html, .css, .js, and image files to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations.\n\n \n\nWhen a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay) so that content is delivered with the best possible performance. If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately. If the content is not in that edge location, CloudFront retrieves it from an Amazon S3 bucket or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.\n\nOption A is incorrect. S3 Cross-region replication is a feature that enables an automatic and asynchronous copy of user data from one destination bucket to another destination bucket located in one of the other AWS regions. It is region-based rather than a global scale which is what the question is asking with regards to all users having a good experience, regardless of region locale.\n\n \n\nFor more information on Amazon CloudFront, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html\n\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization has a requirement to store 10TB worth of scanned files across multiple availability zones. It plans to have a search application in place to search through the scanned files. \n\nWhich of the following options is ideal for implementing the search facility?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use S3 with reduced redundancy to store and serve the scanned files. Install a commercial search application on EC2 Instances and configure with Auto-Scaling and an ElasticLoad Balancer."
    }, {
        "id": "B",
        "markdown": "Model the environment using CloudFormation. Use an EC2 instance running Apache webserver and an open-source search application, stripe multiple standard EBS volumes together to store the scanned files with a search index."
    }, {
        "id": "C",
        "markdown": "Use S3 with standard redundancy to store and serve the scanned files. Use CloudSearch for query processing, and use Elastic Beanstalk to deploy the website across multiple Availability Zones."
    }, {
        "id": "D",
        "markdown": "Use a single-AZ RDS MySQL instance to store the search index for the scanned files and use an EC2 instance with a custom application to search based on the index."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nWith Amazon CloudSearch, you can quickly add rich search capabilities to your website or application. You don't need to become a search expert or worry about hardware provisioning, setup, and maintenance. With a few clicks in the AWS Management Console, you can create a search domain and upload the data that you want to make searchable, and Amazon CloudSearch will automatically provision the required resources and deploy a highly tuned search index.\n\nYou can easily change your search parameters, fine-tune search relevance, and apply new settings at any time. As your volume of data and traffic fluctuates, Amazon CloudSearch seamlessly scales to meet your needs.\n\n \n\nFor more information on AWS CloudSearch, please visit the link below:\n\n\n\thttps://aws.amazon.com/cloudsearch/\n\n\n\n\n\nFor more information, please check the URL below:\n\n\n\thttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/awseb-dg.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a global financial company. Company locations spread across various countries upload transaction data to S3 bucket in the US-West region. You will be using AWS Glue & Amazon Athena to further analyze this data. You are using Crawler that will scan all data from S3 buckets & populate Glue Data Catalog, to which Amazon Athena will query.\n\nA large amount of CSV data is uploaded on a daily basis from all the global locations simultaneously. To decrease scanning time while scanning data in S3 buckets, you need to ensure only changes in datasets are scanned. Which of the following configurations would meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Reset Job Bookmark in AWS Glue."}, {
        "id": "B",
        "markdown": "Disable Job Bookmark in AWS Glue."
    }, {"id": "C", "markdown": "Pause Job Bookmark in AWS Glue."}, {
        "id": "D",
        "markdown": "Enable Job Bookmark in AWS Glue."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Glue keeps a track of processed data using Job Bookmark. Enabling Job Bookmark will help to scan only changes since the last bookmark and prevent the processing of whole data again.\n\n\n\tOption A is incorrect as resetting Job Bookmark in AWS Glue will reprocess all data & will not prevent the reprocessing of already scanned data.\n\tOption B is incorrect as disabling Job Bookmark will process all data each time.\n\tOption C is incorrect as pausing Job Bookmark will process incremental data since the last data scan but will not update state information. So, for the succeeding process, it will start scanning all data since the last bookmark.\n\n\n \n\nFor more information on Job Bookmark in AWS Glue, please refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A concern raised in your company is that developers could potentially delete production-based EC2 resources. As a Cloud Admin, what would you do to help alleviate this concern? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Tag the production instances with production-identifying tag and add resource-level permissions to the developers with an explicit deny on the terminate API call to instances with the production tag."
    }, {"id": "B", "markdown": "Create a separate AWS account and move the developers to that account."}, {
        "id": "C",
        "markdown": "Modify the IAM policy on the production users to require MFA before deleting EC2 instances, and disable MFA access to the employee."
    }, {
        "id": "D",
        "markdown": "Modify the IAM policy on the developers to require MFA before deleting EC2 instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A and B\n\nCreating a separate AWS account for developers will help the organization to facilitate the highest level of resource and security isolation.\n\nThe AWS documentation gives us a clear picture of the scenarios when we need to consider creating multiple accounts.\n\nWhen to Create Multiple Accounts\n\n\nWhile there is no one-size-fits-all answer for how many AWS accounts a particular customer should have, most companies will want to create more than one AWS account because multiple accounts provide the highest level of resource and security isolation. Answering “yes” to any of the following questions is a good indication that you should consider creating additional AWS accounts:\n\n \n\n\n\tDoes the business require administrative isolation between workloads?\n\tAdministrative isolation by account provides the most straightforward approach for granting independent administrative groups different levels of administrative control over AWS resources based on the workload, development lifecycle, business unit (BU) or data sensitivity.\n\n\n \n\n\n\tDoes the business require limited visibility and discoverability of workloads?\n\tAccounts provide a natural boundary for visibility and discoverability. Workloads cannot be accessed or viewed unless an administrator of the account enables access to users managed in another account.\n\n\n \n\n\n\tDoes the business require isolation to minimize the blast radius?\n\tBlast-radius isolation by account provides a mechanism for limiting the impact of a critical event such as a security breach in case of the unavailability of AWS Region or Availability Zone, account suspensions, etc. Separate accounts help define boundaries and provide natural blast-radius isolation.\n\n\n \n\n\n\tDoes the business require strong isolation of recovery and/or auditing data?\n\tBusinesses that are required to control access and visibility to auditing data due to regulatory requirements can isolate their recovery data and/or auditing data in an account separate from where they run their workloads (e.g., writing CloudTrail logs to a different account).\n\n\n \n\nFor more information, please check the URL below:\n\n\n\thttps://d0.awsstatic.com/aws-answers/AWS_Multi_Account_Security_Strategy.pdf\n\n\n \n\nTags enable you to categorize your AWS resources in different ways, for example, by purpose, owner or environment. This is useful when you have many resources of the same type — you can quickly identify a specific resource based on the tags you've assigned to it. Each tag consists of a key and an optional value, both of which you define.\n\n\n\tFor more information on tagging AWS resources, please refer to the below URL:\n\t\n\t\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n\t\n\t\n\n\n\nThe question says that the developers should not have the option to delete production-based resources. So, option A and B completely keep the developers away from production resources. \n\nYou wish to use MFA, which means developers can delete the production-based resources if they know MFA code which is not recommended. \n\nAWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on the top of your user name and password. With MFA enabled, when a user signs in to an AWS website, they will be prompted for their user name and password (the first factor—what they know), as well as for an authentication code from their AWS MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for your AWS account settings and resources.\n\nOrganizations have good control over newly created accounts rather than old AWS accounts. Because they can easily monitor and maintain (few) assigned permissions on accounts and they delete those accounts once the required task will be done.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company needs to monitor the read and write IOPS metrics for its AWS MySQL RDS instance and send real-time alerts to its Operations team. Which AWS services could help to accomplish this? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Simple Email Service"}, {
        "id": "B",
        "markdown": "Amazon CloudWatch"
    }, {"id": "C", "markdown": "Amazon Simple Queue Service"}, {"id": "D", "markdown": "Amazon Route 53"}, {
        "id": "E",
        "markdown": "Amazon Simple Notification Service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B and E\n\nAmazon CloudWatch may be used to monitor IOPS metrics from the RDS instance and Amazon Simple Notification Service, to send the notification if an alarm is triggered.\n\nFor more information on CloudWatch metrics, please refer to the link below.\n\n\n\thttp://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You run an ad-supported photo-sharing website using S3 to serve photos to visitors of your site. At some point, you find out that other sites have been linking to photos on your site, causing loss to your business. What would be an effective method to mitigate this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use CloudFront distributions for static content."}, {
        "id": "B",
        "markdown": "Store photos on an EBS volume of the web server."
    }, {"id": "C", "markdown": "Remove public read access and use signed URLs with expiry dates."}, {
        "id": "D",
        "markdown": "Block the IPs of the offending websites in Security Groups."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nYou can distribute private content using a signed URL that is valid for only a short time—possibly for as little as a few minutes. Signed URLs that are valid for such a short period are good for distributing content on-the-fly to a user for a limited purpose, such as distributing movie rentals or music downloads to customers on demand. \n\nFor more information on Signed URLs, please visit the link below:\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working with a global IT firm that has web-application hosted in AWS. This is a two-tier web application with web-servers behind Application load balancers. A new application is developed for which you need to analyze performance at each node.\n\nThese parameters will be used as a reference before making this application into commercial services & henceforth for any operational challenges. You are using AWS X-Ray for this purpose. Which of the following would help to get traces while ensuring cost is minimized?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Sampling at default rate."}, {
        "id": "B",
        "markdown": "Sampling at higher rate."
    }, {"id": "C", "markdown": "Filter expression"}, {"id": "D", "markdown": "Sampling at low rate."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe sampling rate can be lower to collect a significant number of requests statistically, to get optimum traces, and have a cost-effective solution.\n\n\n\tOption A is incorrect as the Default Sampling rate is conservative but can be further customized to sample at a lower rate based upon your sampling requirements.\n\tOption B is incorrect as Sampling at a higher rate will not only collect a lot of data but also incur an additional cost.\n\tOption C is incorrect as Filter expression can be used to narrow down results from the number of traces scanned during a defined period. It will not affect the number of traces scanned.\n\n\nFor more information on X-Ray parameters, refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A cash-starved start-up firm is using AWS Storage Gateway to backup all on-premise data to Amazon S3. For this, they have set-up VPN connectivity to VGW from client end devices using existing internet links. Recently they are observing data backups are taking a long time to complete due to large data size & looking for an immediate resolution for quick data backup. Which of the following is a cost-effective way to faster data backups on the VPN tunnel?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a new VPN tunnel with ECMP enabled on a separate VGW."}, {
        "id": "B",
        "markdown": "Create a new VPN tunnel with ECMP enabled on the same VGW."
    }, {"id": "C", "markdown": "Create an additional VPN tunnel using a different VGW-Client end device"}, {
        "id": "D",
        "markdown": "Enable ECMP on on-premise devices to forward traffic on both VPN endpoints."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nFor each VPN Tunnel, AWS provides two different VPN endpoints. ECMP (Equal Cost Multi Path) can be used to carry traffic on both VPN endpoints which can increase performance & faster data transfer.\n\n\n\tOption A & B are incorrect ECMP needs to be enabled on Client end devices & not on VGW end.\n\tOption C is incorrect as creating a separate VPN tunnel will incur additional cost & will not enhance any performance without enabling ECMP.\n\n\nFor more information on AWS VPN performance, refer to the following URL,\n\n\n\thttps://aws.amazon.com/vpn/features/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Developer Team is working on a new mobile game which will be using Amazon DynamoDB for storing player details. Team is unsure of the success of this game but need to make sure it will meet demand for any number of concurrent players. During the initial creation of the table, they are planning to create a local secondary index to create a top ten players scores dashboard. Also, a global secondary index is created to create a separate top ten players per country. IT Head is concerned about the performance of the game which will be used as reference for all future games. Which of the following can be used to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Enable Auto-Scaling for DynamoDB Table with same setting applied to Global Secondary Index"
    }, {
        "id": "B",
        "markdown": "Enable Auto-Scaling for DynamoDB Table with same setting applied to Local Secondary Index"
    }, {"id": "C", "markdown": "Enable Auto-Scaling only for Global Secondary Index"}, {
        "id": "D",
        "markdown": "Enable Auto-Scaling only for Local Secondary Index"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nFor applications where database utilization cannot be predicted, Amazon DynamoDB can be used with Auto Scaling which can help to scale dynamically to any load. Auto-Scaling needs to be applied to the DynamoDB table along with Global Secondary Index which uses separate read /write capacity.\n\n\n\tOption B is incorrect as Local Secondary Index uses the same read & write capacity as that of the primary DynamoDB table, so need to enable separate Auto-Scaling policy for it.\n\tOption C is incorrect as Auto-Scaling needs to enable for both DynamoDB tables as well as Global Secondary Index.\n\tOption D is incorrect as Auto-Scaling needs to enable on DynamoDB table & Global Secondary Index & not on Local Secondary index.\n\n\nFor more information on using Auto-Scaling with Amazon DynamoDB refer to the following URL,\n\n\n\thttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global pharma firm has a tie-up with hospitals across the globe. These hospitals share patient reports with pharma firms which are further analysed & used for creation of new drug formulation. Daily large numbers of reports are shared by these hospitals which are uploaded from various sources. Pharma firm is looking to tie-up with additional hospitals which will further increase in data load. These uploadings should be scalable which should be able to save a large amount of data to further analyse. Which of the following can be used for a cost-effective scalable application solution?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use AWS Kinesis Streams to upload data to Amazon Redshift"}, {
        "id": "B",
        "markdown": "Use AWS Kinesis Firehose to upload data to Amazon Redshift"
    }, {"id": "C", "markdown": "Use AWS Kinesis Streams to upload data to Amazon RDS"}, {
        "id": "D",
        "markdown": "Use AWS Kinesis Firehose to upload data to Amazon RDS"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon Kinesis Firehose s scalable option to load data to analytical tools like Amazon Redshift from multiple sources. Amazon Redshift can be used for complex analytical queries for large amounts of data. \n\n\n\tOption A is incorrect as AWS Kinesis Streams cannot directly upload data to Amazon Redshift. Additional applications need to be installed to get these data from Kinesis Streams & upload to Amazon Redshift.\n\tOption C & D are incorrect as Amazon Redshift will be a better option for analysis of large streams of data instead of Amazon RDS.\n\n\n For more information on using Amazon Redshift with Kinesis Firehose refer to the following URLs,\n\n\n\thttps://aws.amazon.com/kinesis/data-firehose/\n\thttps://aws.amazon.com/redshift/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An IT firm is using AWS cloud infrastructure for its three-tier web application. They are using memory optimised EC2 instances for application hosting & SQL based database servers deployed in Multi-AZ with auto-failover. Recently there are observing heavy loads on database servers & this is impacting user data lookup from application servers resulting in slow access. As an AWS Consultant, they are looking for guidance to resolve this issue. Which of the following will provide a faster scalable option to deliver data to users without impacting backend servers?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Amazon ElastiCache to store data."}, {
        "id": "B",
        "markdown": "Use Amazon RDS Read Replicas to provide read access to data in database servers."
    }, {"id": "C", "markdown": "Use Amazon CloudFront to save recently accessed data in cache."}, {
        "id": "D",
        "markdown": "Use on-host caching on memory optimised EC2 instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon ElastiCache provides a scalable faster approach to cache data which can be used with both SQL/Nosql databases. These can be used to save application data which will significantly improve latency & throughout application along with  offloading load on backend database servers.\n\n\n\tOption B is incorrect as Amazon RDS Read Replicas are not as fast as Amazon ElastiCache.\n\tOption C is incorrect as Amazon CloudFront is more suitable for website caching & not for application caching.\n\tOption D is incorrect as this would provide faster lookup of data but it’s not scalable.\n\n\nFor more information on using Amazon ElastiCache, refer to the following URLs,\n\n\n\thttps://d0.awsstatic.com/whitepapers/performance-at-scale-with-amazon-elasticache.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a construction firm that is using Amazon WorkDocs for sharing project planning document with third-party external contract teams. Last week there was an incident where a sensitive document was shared by a user that leaked financial information to external third-party users.\n\nSecurity team revoked access for all users and only nominated users should be allowed to grant access to use WorkDocs or share links with third-party users. How could this be achieved? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "For external users to use the WorkDocs site, allow permission only to Power users to invite new externals users."
    }, {
        "id": "B",
        "markdown": "For external users to use WorkDocs site, allow permission only to Managed users to invite new externals users"
    }, {
        "id": "C",
        "markdown": "For sending publicly shareable links, grant permission only to Power users to share publicly."
    }, {
        "id": "D",
        "markdown": "For sending publicly shareable links, grant permission only to Managed users to share publicly."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A and C\n\nTo restrict all users to invite external users and to share WorkDoc links publicly, you can create a Power user who will be responsible to perform this activity.\n\n\n\tOption B is incorrect as in this case, all users will be able to invite external users.\n\tOption D is incorrect as in this case, all users will be able to share links with external users.\n\n\nFor more information on managing access on Amazon WorkDocs, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/workdocs/latest/adminguide/security-settings.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your architecture for an application currently consists of EC2 Instances sitting behind a classic ELB. The EC2 Instances are used to serve an application and are accessible through the internet. What could be done to improve this architecture in the event that the number of users accessing the application increases regularly?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add another ELB to the architecture."}, {
        "id": "B",
        "markdown": "Use Auto Scaling Groups."
    }, {"id": "C", "markdown": "Use an Application Load Balancer instead."}, {
        "id": "D",
        "markdown": "Use the Elastic Container Service."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nAWS Auto Scaling monitors your applications and automatically adjusts the capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it is easy to setup application scaling for multiple resources across multiple services in minutes.\n\nFor more information on AWS Auto Scaling, please visit the following URL:\n\nhttps://aws.amazon.com/autoscaling/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a retail website having an application deployed on EC2 instance. You are using the SQS queue for storing messages between Web server & database servers. Due to heavy load on the website, there are some cases where clients are getting price details before logging to the website.\n\nTo resolve this issue, you are planning to migrate to the SQS FIFO queue that will preserve the order of messages. You have created a new FIFO queue with message delay time per queue instead of per message, deleting an existing standard queue. What are the prerequisites to have a smooth migration to the SQS FIFO queue? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Each FIFO queue should have Message group ID only when multiple ordered message groups are required."
    }, {
        "id": "B",
        "markdown": "For application with identical message bodies, use content-based deduplication ID while for unique message bodies, use unique deduplication ID."
    }, {
        "id": "C",
        "markdown": "Each FIFO queue should have a Message group ID irrespective of multiple ordered message groups required."
    }, {
        "id": "D",
        "markdown": "For application with identical message bodies, use unique deduplication ID, while for unique message bodies, use content-based deduplication ID."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – C and D\n\nFIFO queue uses Message Deduplication ID & Message Group ID per message. Message Deduplication ID is used as a token while sending messages. The message Group ID is used as a tag, based upon various groups so that messages in a group process in an orderly manner.\n\n\n\tOption A is incorrect as Each FIFO queue requires a Message group ID. If there are no multiple ordered message groups, you can specify the same message group ID.\n\tOption B is incorrect as if the application is using identical message bodies, a unique deduplication ID is required per message while for the application using unique message bodies, content-based deduplication ID should be used.\n\n\n \n\nFor more information on moving from an SQS Standard Queue to SQS FIFO queues, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are the architect for a business intelligence application that reads data from a MySQL database hosted on an EC2 Instance. The application experiences a high number of read and write requests.\n\nWhich Amazon EBS Volume type can meet the performance requirements of this database?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS Provisioned IOPS SSD"}, {
        "id": "B",
        "markdown": "EBS Throughput Optimized HDD"
    }, {"id": "C", "markdown": "EBS General Purpose SSD"}, {"id": "D", "markdown": "EBS Cold HDD"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nSince there is a high-performance requirement with the high IOPS needed, one needs to opt for EBS Provisioned IOPS SSD.\n\nThe below snapshot from AWS Documentation mentions the need for using Provisioned IOPS for better IOPS performance for database-based applications.\n\n\n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\n \n\nFor more information on AWS EBS Volume types, please visit the URL below:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization is planning to use AWS for its production roll-out. The organization wants to implement automation for deployment such that it will automatically create a LAMP stack, download the latest PHP installable from S3, and set up the ELB. Which AWS service would meet these requirements for making an orderly deployment of the software?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Elastic Beanstalk"}, {"id": "B", "markdown": "AWS CloudFront"}, {
        "id": "C",
        "markdown": "AWS CloudFormation"
    }, {"id": "D", "markdown": "AWS DevOps"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nThe Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.\n\nWe can simply upload code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, Auto-Scaling, to application health monitoring. Meanwhile, we can retain full control over the AWS resources used in the application and access the underlying resources at any time.\n\n \n\nHence, option A is the correct answer.\n\n \n\nFor more information on launching a LAMP stack with Elastic Beanstalk, please refer to the link below:\n\nhttps://aws.amazon.com/getting-started/projects/launch-lamp-web-app/\n\n \n\nHow is AWS CloudFormation different from AWS Elastic Beanstalk?\n\nAWS CloudFormation and AWS Elastic Beanstalk services are designed to complement each other. \n\nAWS Elastic Beanstalk provides an environment to easily deploy and run applications in the cloud. It is integrated with developer tools and provides a one-stop experience for you to manage the lifecycle of your applications.\n\nAWS CloudFormation is a convenient provisioning mechanism for a broad range of AWS resources. It supports the infrastructure needs of many different types of applications such as existing enterprise applications, legacy applications, applications built using a variety of AWS resources and container-based solutions (including those built using AWS Elastic Beanstalk).\n\nElastic Beanstalk is a Platform where you deploy an application. Cloudformation is where you define a stack of resources.\n\nElastic BeanStalk is good for the relatively narrow use case of PaaS applications and Cloudformation is good for the relatively broad use of defining Infrastructure as Code.\n\nThe question is \"Which WS service would meet the requirements for making an orderly deployment of the software? \n\nWe are not provisioning a broad range of AWS resources here. So, Elastic Beanstalk will be a suitable answer.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to use the API Gateway service to manage APIs for developers and users. There is a requirement to segregate access rights for both developers and users. How could this be accomplished?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use IAM permissions to control the access."}, {
        "id": "B",
        "markdown": "Use AWS Access keys to manage the access."
    }, {"id": "C", "markdown": "Use AWS KMS service to manage the access."}, {
        "id": "D",
        "markdown": "Use AWS Config Service to control the access."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nAWS Documentation mentions the following:\n\nYou can control access to Amazon API Gateway with IAM permissions by controlling access to the following two API Gateway component processes:\n\n\n\tTo create, deploy, and manage an API in API Gateway, you must grant the API developer permissions to perform the required actions supported by the API management component of API Gateway.\n\tTo call a deployed API or to refresh the API caching, you must grant the API caller permissions to perform required IAM actions supported by the API execution component of API Gateway.\n\n\nFor more information on permissions for the API gateway, please visit the following URL:\n\nhttps://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have 2 development environments hosted in 2 different VPCs in an AWS account in the same region. There is now a requirement to access the resources of one VPC from another. How could this be accomplished?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Establish a Direct Connect connection."}, {
        "id": "B",
        "markdown": "Establish a VPN connection."
    }, {"id": "C", "markdown": "Establish VPC Peering."}, {"id": "D", "markdown": "Establish Subnet Peering."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the following:\n\nA VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.\n\nFor more information on VPC peering, please visit the URL below:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-peering.html\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to use the EMR service available in AWS to run its big data framework and wants to minimize the cost of running the EMR service. How would you achieve this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Running the EMR cluster in a dedicated VPC"}, {
        "id": "B",
        "markdown": "Choosing Spot Instances for the underlying nodes"
    }, {"id": "C", "markdown": "Choosing On-Demand Instances for the underlying nodes"}, {
        "id": "D",
        "markdown": "Disable automated backups"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nSpot Instances in Amazon EMR provide an option to purchase Amazon EC2 instance capacity at a reduced cost as compared to On-Demand purchasing.\n\nFor more information on Instance types for EMR, please visit the following URLs:\n\n\n\thttps://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-purchasing-options.html\n\thttps://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-instances-guidelines.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an S3 bucket hosted in AWS that is used to store the promotional videos you upload. You need to provide users access to S3 bucket for a limited duration of time. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use versioning and enable a timestamp for each version."}, {
        "id": "B",
        "markdown": "Use Pre-signed URLs with session duration."
    }, {"id": "C", "markdown": "Use IAM Roles with a timestamp to limit the access."}, {
        "id": "D",
        "markdown": "Use IAM policies with a timestamp to limit the access."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - B\n\nAWS Documentation mentions the following:\n\nAll objects by default are private. Only the object owner has permission to access these objects. However, the object owner can optionally share objects with others by creating a pre-signed URL, using their own security credentials, to grant time-limited permission to download the objects.\n\n \n\nFor more information on pre-signed URLs, please visit the URL below.\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/ShareObjectPreSignedURL.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application currently writes a large number of records to a DynamoDB table in one region. There is a requirement for a secondary application to retrieve new records written to the DynamoDB table every 2 hours and process the updates accordingly. What would be an ideal method to ensure that the secondary application gets the relevant changes from the DynamoDB table?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Insert a timestamp for each record and then, scan the entire table for the timestamp as per the last 2 hours."
    }, {
        "id": "B",
        "markdown": "Create another DynamoDB table with the records modified in the last 2 hours."
    }, {"id": "C", "markdown": "Use DynamoDB Streams to monitor the changes in the DynamoDB table."}, {
        "id": "D",
        "markdown": "Transfer records to S3 which were modified in the last 2 hours."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the following:\n\nA DynamoDB Stream is an ordered flow of information about changes to items in an Amazon DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.\n\nWhenever an application creates, updates or deletes items in the table, DynamoDB Streams write a stream record with the primary key attribute(s) of the items that were modified. A stream record contains information about a data modification to a single item in a DynamoDB table. You can configure the stream so that the stream records capture additional information, such as the \"before\" and \"after\" images of modified items.\n\nFor more information on DynamoDB Streams, please visit the URL below:\n\nhttp://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for an IT firm that is developing a new application for traders in the Capital market. There would be multiple trading orders initiated by clients. You have multiple EC2 instances with Auto-Scaling groups to process these trades parallelly. Also, each trade should be stateful and processed independently. What could be used to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use the SQS FIFO queue with Receive Request Attempt ID."}, {
        "id": "B",
        "markdown": "Use the SQS FIFO queue with a Sequence number."
    }, {"id": "C", "markdown": "Use the SQS FIFO queue with Message Group ID."}, {
        "id": "D",
        "markdown": "Use the SQS FIFO queue with a Deduplication ID."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nMessages which are part of a specific message group will be processed in a strict orderly manner using a Message group ID. This message group ID helps to process messages by multiples consumers in a FIFO manner while keeping session data of each trade initiated by users.\n\n\n\tOption A is incorrect as the purpose of Receive request Attempt ID is adding a deduplication token for receive message, this will not suffice the requirement of processing multiple messages from different trades independently.\n\tOption B is incorrect as the SQS FIFO sequence number is a non-sequence number added to each message, it will not suffice the requirement of processing multiple messages from different trades independently.\n\tOption D is incorrect as the SQS FIFO queue with Deduplication ID will not suffice the requirement of multiple messages being process parallelly by multiple consumers with separate session data for each.   \n\n\nFor more information on managing SQS FIFO queues, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your IT Security department has mandated that all the traffic flowing in and out of EC2 instances needs to be monitored. The EC2 instances in question are launched in a VPC. Which services would you use to achieve this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Trusted Advisor"}, {"id": "B", "markdown": "VPC Flow Logs"}, {
        "id": "C",
        "markdown": "Use CloudWatch metrics"
    }, {"id": "D", "markdown": "Use CloudTrail"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nVPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data is stored using Amazon CloudWatch Logs. After you've created a flow log, you can view and retrieve its data in Amazon CloudWatch Logs.\n\nFor more information on VPC Flow Logs, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/flow-logs.html\n\n\n \n\nNote:\n\nThe question asks to monitor all traffic flowing in and out of EC2 instances. Now you have to launch EC2 instance inside the VPC. As there is no other Option available, to monitor the navigation of IP traffic, we use VPC Flow Logs. \n\nNow coming to the question - why not CloudTrail? \n\nBefore venturing into it, let's look into the types of log categories we have in AWS.\n1. AWS Infrastructure Logs - AWS CloudTrail, Amazon VPC Flow Logs\n2. AWS Service Logs - Amazon S3, AWS Elastic Load Balancing, Amazon CloudFront, AWS Lambda, AWS Elastic Beanstalk, etc.,\n3. Host Based Logs - Messages, Security, NGINX/Apache/IIS, Windows Event Logs, Windows Performance Counters, etc.,\n\nAWS CloudTrail: it is used to record AWS API calls for your account like,\n- who made the API call?\n- when was the API call made?\n- what was the API call?\n- which resources were acted upon in the API call?\n- where was the API calls made form and made to?\n\n \n\nNOTE:\n\n\nAWS has launched a new feature called VPC Traffic Mirroring, which is used to capture and inspect network traffic at scale.  To know more about this feature, please check the link below.\n\n\n\thttps://aws.amazon.com/blogs/aws/new-vpc-traffic-mirroring/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is currently utilizing Redshift cluster as their production warehouse. As a cloud architect, you are tasked to ensure that the disaster recovery is in place. Which would be the best option in addressing this issue?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Take a copy of the underlying EBS volumes to S3 and then do Cross-Region Replication."
    }, {"id": "B", "markdown": "Enable Cross-Region Snapshots for the Redshift Cluster."}, {
        "id": "C",
        "markdown": "Create a CloudFormation template to restore the Cluster in another region."
    }, {"id": "D", "markdown": "Enable Cross Availability Zone Snapshots for the Redshift Cluster."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe below diagram shows that snapshots are available for Redshift clusters enabling them to be available in different regions:\n\n\n\n \n\nFor more information on managing Redshift Snapshots, please visit the following URL:\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an AWS RDS PostgreSQL database hosted in the Singapore region. You need to ensure that a copy of the database exists and that the data is asynchronously copied. What would be helpful to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Multi-AZ for the database"}, {
        "id": "B",
        "markdown": "Enable Read Replicas for the database"
    }, {"id": "C", "markdown": "Enable Asynchronous replication for the database"}, {
        "id": "D",
        "markdown": "Enable manual backups for the database"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nAmazon RDS Read Replicas enable you to create one or more read-only copies of your database instance within the same AWS Region or in a different AWS Region. Updates made to the source database are then asynchronously copied to your Read Replicas. In addition to providing scalability for read-heavy workloads, Read Replicas can be promoted to become a standalone database instance when needed. \n\nFor more information on Read Replicas, please visit the following URL:\n\nhttps://aws.amazon.com/rds/details/read-replicas/\n\n\nNote: \nWhen you enable Multi-AZ for the database then you are enabling synchronous replication rather than asynchronous replication mentioned in the question.\n\nWhen you create a Read Replica, you first specify an existing DB instance as the source. Then Amazon RDS takes a snapshot of the source instance and creates a read-only instance from the snapshot. Amazon RDS then uses the asynchronous replication method for the DB engine to update the Read Replica whenever there is a change to the source DB instance. \n\nYou can use Read Replica promotion as a data recovery scheme if the source DB instance fails.\n\nFor more information, please click the link given below:\n\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your current log analysis application takes more than four hours to generate a report of the top 10 users of your web application. You have been asked to implement a system that can report this information in real time, ensure that the report is always up to date, and handle increases in the number of requests to your web application. Which of the following is a cost-effective option to fulfill these requirements?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Publish your data to CloudWatch Logs, and configure your application to Auto Scale to handle the load on demand."
    }, {
        "id": "B",
        "markdown": "Publish your log data to an Amazon S3 bucket. Use AWS CloudFormation to create an Auto Scaling group to scale your post-processing application which is configured to pull down your log files stored in Amazon S3."
    }, {
        "id": "C",
        "markdown": "Post your log data to an Amazon Kinesis data stream, and subscribe your log-processing application so that it is configured to process your logging data."
    }, {"id": "D", "markdown": "Configure an Auto Scaling group to increase the size of your Amazon EMR cluster."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the below:\n\nAmazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application. With Amazon Kinesis, you can ingest real-time data such as application logs, website clickstreams, IoT telemetry data, and more into your databases, data lakes and data warehouses, or build your own real-time applications using this data. Amazon Kinesis enables you to process and analyze data as it arrives and respond in real-time instead of having to wait until all your data is collected before the processing can begin.\n\nFor more information on AWS Kinesis, please see the below link:\n\nhttps://aws.amazon.com/kinesis/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect in a global financial firm. They provide daily consolidated reports to their clients for trades in stock markets. For large amount of data processing, they store daily trading transaction data in S3 buckets which triggers AWS Lambda function. This function submits a new AWS Batch job in Job queue. These queues use compute resources having EC2 On Demand instance with Amazon ECS-optimized AMI having enough resources to complete the job. Due to large volumes of data there has been requirement to increase storage size & create a customised AMI.\n\nYou have been working on new application on compute resources having a combination of EC2 On Demand instance & EC2 Spot Instance with this customised AMI. While you are performing a trial for this new application even though it has enough memory/CPU resources, your job is stuck in Runnable state. Which of the following can be used to get Job into starting state?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that awslogs log driver is configured on compute resources which will send log information to CloudWatch logs."
    }, {
        "id": "B",
        "markdown": "AWS Batch does not support customized AMI & requires only Amazon ECS-optimized AMI."
    }, {"id": "C", "markdown": "Check dependencies for the job which holds the job in Runnable state."}, {
        "id": "D",
        "markdown": "Use only On Demand EC2 instance in compute resource instead of combination of On Demand & Spot Instance."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Batch Job sends log information to CloudWatch logs which requires awslogs log driver to be configured on compute resources having customized AMI. In case of Amazon ECS-optimized AMI, these drivers are pre-configured.\n\n\n\tOption B is incorrect as AWS Batch supports both customized AMI as well as Amazon ECS-optimized AMI, this is not a reason for Job stuck in Runnable state.\n\tOption C is incorrect as a Job moves into Runnable state only after all dependencies are processed. If there are any dependencies, Job stays in Pending state, not Runnable state.\n\tOption D is incorrect as Compute resource can be an On Demand Instance or a Spot Instance. If there are enough compute resource available to process the job, it will move into Starting state.\n\n\nFor more information on AWS Batch Job state & troubleshooting, if a job stuck in Runnable state, refer to following URLs,\n\n\n\thttps://docs.aws.amazon.com/batch/latest/userguide/job_states.html\n\thttps://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to load a lot of data from your on-premises network to AWS S3, bypassing the internet service. What can be used for this data transfer? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Data Pipeline"}, {"id": "B", "markdown": "Direct Connect"}, {
        "id": "C",
        "markdown": "Snowball"
    }, {"id": "D", "markdown": "AWS VPN"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – B and C\n\nAWS documentation mentions the following about the above services:\n\nWith a Snowball, you can transfer hundreds of terabytes or petabytes of data between your on-premises data centers and Amazon Simple Storage Service (Amazon S3). AWS Snowball uses Snowball appliances and provides powerful interfaces that you can use to create jobs, transfer data, and track the status of your jobs to completion. By shipping your data in Snowballs, you can transfer large amounts of data at a significantly faster rate than if you were transferring that data over the Internet, saving you time and money.\n\nAWS Direct Connect links your internal network to an AWS Direct Connect location over a standard 1-gigabit or 10-gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to public AWS services (for example, to Amazon S3) or to Amazon VPC, bypassing Internet service providers in your network path.\n\n \n\nFor more information on Direct Connect, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html\n\n\n \n\n\n\tOption A is Incorrect because AWS Data Pipeline is a web service that you can use to automate the movement and transformation of data. Here, we are not transforming the data and we are just moving the data from on-premises to S3.\n\tOption D is Incorrect because AWS VPN is used just for connecting on-premises to S3 and not for moving the data.\n\n\nFor more information on AWS Snowball, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "With a Redshift cluster in AWS, you are trying to use SQL Client tools from an EC2 Instance, but aren't able to connect to the Redshift Cluster. What must you do to ensure that you are able to connect to the Redshift Cluster from the EC2 Instance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Install Redshift client tools on the EC2 Instance first."}, {
        "id": "B",
        "markdown": "Modify the Security Groups."
    }, {"id": "C", "markdown": "Use the AWS CLI instead of the Redshift client tools."}, {
        "id": "D",
        "markdown": "Modify the Route Table of the subnet."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Documentation mentions the following:\n\nBy default, any cluster that you create is closed to everyone. IAM credentials only control access to the Amazon Redshift API-related resources: the Amazon Redshift console, Command Line Interface (CLI), API, and SDK. To enable access to the cluster from SQL client tools via JDBC or ODBC, you use security groups:\n\n\n\tIf you are using the EC2-Classic platform for your Amazon Redshift cluster, you must use Amazon Redshift security groups.\n\tIf you are using the EC2-VPC platform for your Amazon Redshift cluster, you must use VPC security groups. \n\n\nFor more information on Amazon Redshift, please refer to the URL below:\n\nhttp://docs.aws.amazon.com/redshift/latest/mgmt/overview.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You currently work for a company that is specialized in baggage management. GPS devices installed on all the baggages deliver the coordinates of the unit every 10 seconds. You need to collect and analyze these coordinates in real-time from multiple sources. Which tool should you use to process the data?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EMR"}, {"id": "B", "markdown": "Amazon SQS"}, {
        "id": "C",
        "markdown": "AWS Data Pipeline"
    }, {"id": "D", "markdown": "Amazon Kinesis"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe AWS Documentation mentions the following:\n\nAmazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. Amazon Kinesis offers key capabilities to cost-effectively process streaming data at any scale, along with the flexibility to choose the tools that best suit the requirements of your application.\n\nWith Amazon Kinesis, you can ingest real-time data such as video, audio, application logs, website clickstreams, and IoT telemetry data for machine learning, analytics, and other applications. Amazon Kinesis enables you to process and analyze data as it arrives and respond instantly instead of having to wait until all your data is collected before the processing can begin.\n\nFor more information on Amazon Kinesis, please visit the link below.\n\nhttps://aws.amazon.com/kinesis/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning to host a web and MySQL database application in an AWS VPC. The database should only be accessible by the web server. What would you change to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Network Access Control Lists"}, {
        "id": "B",
        "markdown": "AWS RDS Parameter Groups"
    }, {"id": "C", "markdown": "Route Tables"}, {"id": "D", "markdown": "Security groups"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nSecurity group associated with the DB instance should allow port 3306 traffic from EC2 instance. The AWS Documentation additionally mentions the following:\n\nA security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC could be assigned to a different set of security groups. If you don't specify a particular group at launch time, the instance is automatically assigned to the default security group for the VPC.\n\nFor more information on VPC Security Groups, please visit the link below.\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a requirement for block level storage that should be able to store 800GB of data. Also, encryption of the data is required. What can be used in this case?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EBS Volumes"}, {"id": "B", "markdown": "AWS S3"}, {
        "id": "C",
        "markdown": "AWS Glacier"
    }, {"id": "D", "markdown": "AWS EFS"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nFor block level storage, consider EBS Volumes.\n\nOptions B and C are incorrect since they provide object level storage.\n\nOption D is incorrect since this provides file level storage.\n\nFor more information on EBS Volumes, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a media firm. The firm has large text files which needs to be converted into Audio files. They are using S3 buckets to store this text files.\n\nAWS Batch is used to process these files along with Amazon Polly. For compute environment you have a mix of EC2 On Demand & Spot instance. Critical Jobs are required to be completed quickly while non-critical Jobs can be scheduled during non-peak hours. While using AWS Batch, management wants a cost-effective solution with no performance impact. Which of the following Job Queue can be selected to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create single Job Queue with EC2 On Demand instance having higher priority & Spot Instance having lower priority."
    }, {
        "id": "B",
        "markdown": "Create multiple Job Queues with one Queue having EC2 On Demand instance & having higher priority while another queue having Spot Instance & lower priority."
    }, {
        "id": "C",
        "markdown": "Create multiple Job Queues with one Queue having EC2 On Demand instance & having lower priority while another queue having Spot Instance & higher priority."
    }, {
        "id": "D",
        "markdown": "Create single Job Queue with EC2 On Demand instance having lower priority & Spot Instance having higher priority."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nYou can create multiple Job queue with different priority & mapped Compute environments to each Job queue. When Job queues are mapped to a same compute environment, queues with higher priority are evaluated first.\n\n\n\tOption A is incorrect as Multiple queues need to be created for each Job type. In the requirement, critical Jobs will be processed using EC2 instance while low priority jobs will be using Job queue with Spot Instance. \n\tOption C is incorrect as Priority for a Job queue is selected in descending order, higher priority Job queue is preferred first.\n\tOption D is incorrect as Multiple queues need to be created for each Job type. In the requirement, critical Jobs will be processed using EC2 instance while low priority jobs will be using Job queue with Spot Instance. Also, higher priority Job queue is preferred first.\n\n\nFor more information on Job queues in AWS Batch, refer to the following URL:\n\n\n\thttps://docs.aws.amazon.com/batch/latest/userguide/job_queue_parameters.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As the cloud administrator of company, you notice that one of the EC2 instances is restarting frequently. There is a need to troubleshoot and analyze the system logs. What can be used in AWS to store and analyze the log files from the EC2 Instance?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS SQS"}, {"id": "B", "markdown": "AWS S3"}, {
        "id": "C",
        "markdown": "AWS CloudTrail"
    }, {"id": "D", "markdown": "AWS CloudWatch Logs"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nYou can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, and other sources.\n\nFor more information on CloudWatch Logs, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html\n\n \n\nNote: The question is not about compliance or auditing or tracking any kind of malicious activity or to monitor API calls in your account. If that would have been the case we w'd have used cloudtrail as it provides info such as who made the request, when the request was made, what was the request, what was the response etc.\n\nIn this question we need cloudwatch logs to store and analyze logs from EC2 to find why the instance is restarting frequently.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has migrated their production environment into AWS VPC 6 months ago. As a cloud architect, you are required to revise the infrastructure and ensure that it is cost-effective in the long term. There are more than 50 EC2 instances that are up and running all the time to support the business operation. What can you do to lower the cost?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Reserved instances"}, {
        "id": "B",
        "markdown": "On-demand instances"
    }, {"id": "C", "markdown": "Spot instances"}, {"id": "D", "markdown": "Regular instances"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nWhen you have instances that will be used continuously and throughout the year, the best option is to buy reserved instances. By buying reserved instances, you actually allocate an instance for the entire year or the duration you specify with a reduced cost.\n\nTo understand more on reserved instances, please visit the below URL:\n\nhttps://aws.amazon.com/ec2/pricing/reserved-instances/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your organization is building a collaboration platform for which they chose AWS EC2 for web and application servers and MySQL RDS instance as the database. Due to the nature of the traffic to the application, they would like to increase the number of connections to RDS instance. How could this be achieved?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Login to RDS instance and modify database config file under /etc/mysql/my.cnf"
    }, {
        "id": "B",
        "markdown": "Create a new parameter group, attach it to DB instance and change the setting."
    }, {
        "id": "C",
        "markdown": "Create a new option group, attach it to DB instance and change the setting."
    }, {"id": "D", "markdown": "Modify setting in default options group attached to DB instance."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nYou manage your DB engine configuration through the use of parameters in a DB parameter group . DB parameter groups act as a container for engine configuration values that are applied to one or more DB instances.\n\nA default DB parameter group is created if you create a DB instance without specifying a customer-created DB parameter group. Each default DB parameter group contains database engine defaults and Amazon RDS system defaults based on the engine, compute class, and allocated storage of the instance. You cannot modify the parameter settings of a default DB parameter group; you must create your own DB parameter group to change parameter settings from their default value. Note that not all DB engine parameters can be changed in a customer-created DB parameter group.\n\nIf you want to use your own DB parameter group, you simply create a new DB parameter group, modify the desired parameters, and modify your DB instance to use the new DB parameter group. All DB instances that are associated with a particular DB parameter group get all parameter updates to that DB parameter group.\n\n\n\nFor more information, please visit the URL below:\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a Pharma firm. You are using S3 buckets to save a large amount of sensitive project document for new medicine research. You need to ensure all data at rest in these buckets is encrypted. All the keys need to be managed by the inhouse Security team. Which of the following can be used as a best practice to encrypt all data securely?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Generate a data key using Customer managed CMK’s. Encrypt data with data key & delete data keys. Store encrypted data keys & data in S3 buckets. For decryption, use CMK to decrypt data key into plain text & then decrypt data using plain text data key."
    }, {
        "id": "B",
        "markdown": "Generate a data key using AWS managed CMK’s. Encrypt data with data key & delete data keys. Store encrypted data & data keys in S3 buckets. For decryption, use CMK to decrypt data key into plain text & then decrypt data using plain text data key."
    }, {
        "id": "C",
        "markdown": "Generate a data key using Customer managed CMK’s. Encrypt data with data key & do not delete data keys. Store encrypted data & plain text data keys in S3 buckets. For decryption, use plain text data key to decrypt data."
    }, {
        "id": "D",
        "markdown": "Generate a data key using AWS managed CMK’s. Encrypt data with data key & do not delete data keys. Store encrypted data & plain text data keys in S3 buckets. For decryption, use plain text data key to decrypt data."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nSInce Key Management will be done by Inhouse security team, Customer Managed CMK need to be used. Customer managed CMK will generate plain text Data Key & encrypted Data Keys. All project related sensitive documents will be encrypted using these plain text Data Keys. After encryption , plain text Data keys needs to be deleted to avoid any inappropriate use  & encrypted Data Keys along with encrypted Data is stored in S3 buckets.\n\nWhile decryption, encrypted Data Key is decrypted using Customer CMK into plain text Key which is further used to decrypt documents. This Envelope Encryption ensures that Data is protected by Data key which is further protected by another key.\n\n\n\tOption B is incorrect, since all keys needs to manage by inhouse customer Security team, AWS managed CMK’s cannot be used.\n\tOption C is incorrect as It's not a best practise to save data key file in plain text format. All plain text data keys should be deleted & only encrypted data keys need to be saved.\n\tOption D is incorrect since all keys needs to manage by inhouse customer Security team, AWS managed CMK’s cannot be used. Also, all plain text data keys should be deleted & only encrypted data keys need to be saved.\n\n\n For more information on AWS KMS, refer to following URLs,\n\n\n\t https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html\n\t https://d0.awsstatic.com/whitepapers/aws-kms-best-practices.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is building a service using Amazon EC2 as a worker instance that will process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Multiple Amazon EBS Volume with snapshots"}, {
        "id": "B",
        "markdown": "A single Amazon Glacier vault"
    }, {"id": "C", "markdown": "A single Amazon S3 bucket"}, {"id": "D", "markdown": "Multiple instance stores"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon S3 is the best storage option for this. It is durable and highly available.\n\nFor more information on Amazon S3, please refer to the below URL:\n\nhttps://aws.amazon.com/s3/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS developer for an online multiplayer game developing start-up company. Elasticache with Redis is used for gaming leaderboards along with application servers, to provide low latency and avoid stale data for these highly popular online games. Redis clusters are deployed within a dedicated VPC in the us-east-1 region.\n\nLast week, due to configuration changes in Redis Clusters, the gaming application was impacted for two hours. To avoid such incidents, you have been requested to plan for secure access to all the new clusters. What would you prefer to use for secure access to Redis Clusters while accessing from EC2 instance, initialized in different VPC in the us-east-1 region? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["C", "F"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Redis AUTH with in-transit encryption disabled for clusters."}, {
        "id": "B",
        "markdown": "Create a Transit VPC solution to have connectivity between 2 VPC’s."
    }, {"id": "C", "markdown": "Use Redis AUTH with in-transit encryption, enabled for clusters."}, {
        "id": "D",
        "markdown": "Create an Amazon VPN connection between 2 VPCs."
    }, {"id": "E", "markdown": "Use Redis AUTH with At-Rest encryption, enabled for clusters."}, {
        "id": "F",
        "markdown": "Create an Amazon VPC Peering connection between 2 VPCs."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C and F\n\nTo use Redis AUTH that will require users to provide a password before accessing Redis Cluster, in-transit encryption needs to be enabled on the cluster while creation of the cluster.  For accessing Redis Cluster from EC2 instance in different VPCs from the same region, a VPC peering can be established between 2 VPCs.\n\n\n\tOption A is incorrect. For Redis AUTH, clusters must be enabled with in-transit encryption during initial deployment.\n\tOption B is incorrect. Transit VPC solution is suitable to access Redis Clusters from EC2 instance in VPC created in different regions. Since, in this requirement, both VPCs are in the same region, VPC peering is a correct option.\n\tOption D is incorrect as VPN Connections will be required to access the Redis Cluster from on-prem servers.\n\tOption E is incorrect. For Redis AUTH, clusters must be enabled with in-transit encryption during initial deployment, not At-Rest encryption.\n\n\nFor more information on Authentication with Redis & Accessing Redis Clusters from a different VPC, refer to the following URLs:\n\n\n\thttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html\n\thttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-vpc-accessing.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is utilizing CloudFront to distribute its media content to multiple regions. The content is frequently accessed by users. As a cloud architect, which of the following options would help you improve the performance of the system?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Change the origin location from an S3 bucket to an ELB."}, {
        "id": "B",
        "markdown": "Use a faster Internet connection."
    }, {"id": "C", "markdown": "Increase the cache expiration time."}, {
        "id": "D",
        "markdown": "Create an \"invalidation\" for all your objects, and recache them."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nYou can control how long your objects stay in a CloudFront cache before CloudFront forwards another request to your origin. Reducing the duration allows you to serve dynamic content. Increasing the duration means your users get better performance because your objects are more likely to be served directly from the edge cache. A longer duration also reduces the load on your origin.\n\nFor more information on CloudFront cache expiration, please refer to the following link:\n\nhttp://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been instructed by your supervisor to devise a disaster recovery model for the resources in the AWS account. The key requirement while devising the solution is to ensure that the cost is at a minimum. Which disaster recovery mechanism would you employ in such a scenario?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Backup and Restore"}, {"id": "B", "markdown": "Pilot Light"}, {
        "id": "C",
        "markdown": "Warm standby"
    }, {"id": "D", "markdown": "Multi-Site"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nSince the cost needs to be at a minimum, the best option is to back up all the resources and then perform a restore in the event of a disaster.\n\n \n\nFor more information on disaster recovery, please refer to the below link:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-whitepaper-use-aws-for-disaster-recovery/\n\thttps://aws.amazon.com/disaster-recovery/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application consists of the following architecture:\n\na. EC2 Instances are in multiple AZ’s behind an ELB.\n\nb. The EC2 Instances are launched via an Auto Scaling Group.\n\nc. There is a NAT instance used so that instances can download updates from the internet.\n\nDue to the high bandwidth being consumed by the NAT instance, it has been decided to use a NAT Gateway. How could this be implemented?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use NAT Instances along with the NAT Gateway."}, {
        "id": "B",
        "markdown": "Host the NAT instance in the private subnet."
    }, {
        "id": "C",
        "markdown": "Migrate the NAT Instance to NAT Gateway and host the NAT Gateway in the public subnet."
    }, {"id": "D", "markdown": "Host the NAT gateway in the private subnet"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C \n\nOne can simply start using the NAT Gateway service and stop using the deployed NAT instances. But you need to ensure that the NAT Gateway is deployed in the public subnet.\n\n\n\tFor more information on migrating to a NAT Gateway, please visit the following URL:\n\t\n\t\thttps://aws.amazon.com/premiumsupport/knowledge-center/migrate-nat-instance-gateway/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application hosted in AWS. This application consists of EC2 Instances that sit behind an ELB. The following are the requirements from an administrative perspective:\n\na) Must be able to collect and analyze logs with regard to ELB’s performance.\n\nb) Ensure that notifications are sent when the latency goes beyond 10 seconds.\n\nWhat should be used to achieve this requirement? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use CloudWatch for monitoring."}, {
        "id": "B",
        "markdown": "Enable VPC Flow logs and then investigate the logs whenever there is an issue."
    }, {
        "id": "C",
        "markdown": "Enable the logs on the ELB with Latency Alarm that sends an email and then investigate the logs whenever there is an issue."
    }, {"id": "D", "markdown": "Use CloudTrail to monitor whatever metrics need to be monitored."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nWhen you use CloudWatch metrics for an ELB, you can get the amount of read requests and latency out of the box.\n\nFor more information on using CloudWatch with the ELB, please visit the following URL:\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-cloudwatch-metrics.html\n\nElastic Load Balancing provides access logs that capture detailed information about requests sent to your load balancer. Each log contains information such as the time when the request was received, the client's IP address, latencies, request paths, and server responses. You can use these access logs to analyze traffic patterns and to troubleshoot issues.\n\nFor more information on using ELB logs, please visit the following URL:\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html\n\nOption B is INCORRECT because using VPC flow logs we cannot pinpoint to the issues related to ELB performance\n\nOption D is INCORRECT because CloudTrail is used only for monitoring API activities on AWS resources\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company would like to leverage the AWS storage option and integrate it with the current on-premises infrastructure. Additionally, due to business requirements, low latency access to all the data is a must. Which of the following options would be best suited for this scenario?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Configure the Simple Storage Service."}, {
        "id": "B",
        "markdown": "Configure Storage Gateway Cached Volume."
    }, {"id": "C", "markdown": "Configure Storage Gateway Stored Volume."}, {
        "id": "D",
        "markdown": "Configure Amazon Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS Documentation mentions the following:\n\nIf you need low-latency access to your entire dataset, first configure your on-premises gateway to store all your data locally. Then asynchronously back up point-in-time snapshots of this data to Amazon S3.\n\nThis configuration provides durable and inexpensive offsite backups that you can recover to your local data center or Amazon EC2. For example, if you need replacement capacity for disaster recovery, you can recover the backups to Amazon EC2.\n\nFor more information on the Storage Gateway, please visit the following URL:\n\n\n\thttps://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\n\n\n \n\nNote:\n\nCached volumes – You store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Cached volumes offer substantial cost savings on primary storage and minimize the need to scale your storage on-premises. You also retain low-latency access to your frequently accessed data.\n\nStored volumes – If you need low-latency access to your entire dataset, first configure your on-premises gateway to store all your data locally. Then asynchronously back up point-in-time snapshots of this data to Amazon S3.\n\nThis configuration provides durable and inexpensive offsite backups that you can recover to your local data center or Amazon EC2. For example, if you need replacement capacity for disaster recovery, you can recover the backups to Amazon EC2.\n\nIf you see the Cached volumes primary function to reduce cost and low latency (For frequently accessed data or recently accessed data), however, In the question, the requirement is to maintain all data with low latency. So, Stored volume is the correct answer.\n\nPlease check the below link to know more about it.\n\n\n\thttps://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An IT company has a set of EC2 Instances hosted in a VPC. They are hosted in a private subnet. These instances now need to access resources stored in an S3 bucket. The traffic should not traverse the internet. The addition of which of the following would help to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "VPC Endpoint"}, {"id": "B", "markdown": "NAT Instance"}, {
        "id": "C",
        "markdown": "NAT Gateway"
    }, {"id": "D", "markdown": "Internet Gateway"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - A\n\nA VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.\n\nFor more information on AWS VPC endpoints, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-endpoints.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You need to host a set of web servers and database servers in an AWS VPC. What would be a best practice in designing a multi-tier infrastructure?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use a public subnet for the web tier and a public subnet for the database layer."
    }, {
        "id": "B",
        "markdown": "Use a public subnet for the web tier and a private subnet for the database layer."
    }, {
        "id": "C",
        "markdown": "Use a private subnet for the web tier and a private subnet for the database layer."
    }, {"id": "D", "markdown": "Use a private subnet for the web tier and a public subnet for the database layer."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe ideal setup is to ensure that the web server is hosted in the public subnet so that it can be accessed by users on the internet. The database server can be hosted in the private subnet.\n\nThe below diagram from AWS Documentation shows how this can be setup:\n\n\n\n \n\nFor more information on public and private subnets in AWS, please visit the following URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An IT company wants to secure their resources in their AWS Account. Which of the following options would secure data at rest and in transit in AWS? (SELECT THREE)",
    "prompt": "",
    "correctAnswerId": ["A", "B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Encrypt all EBS volumes attached to EC2 Instances."}, {
        "id": "B",
        "markdown": "Use Server-Side Encryption for S3."
    }, {"id": "C", "markdown": "Use SSL/HTTPS when using the Elastic Load Balancer."}, {
        "id": "D",
        "markdown": "Use IOPS Volumes when working with EBS Volumes on EC2 Instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers – A, B and C\n\nAWS documentation mentions the following:\n\nAmazon EBS encryption offers you a simple encryption solution for your EBS volumes without the need for you to build, maintain, and secure your own key management infrastructure. When you create an encrypted EBS volume and attach it to a supported instance type, the following types of data are encrypted:\n\n\n\tData at rest inside the volume\n\tAll data moving between the volume and the instance\n\tAll snapshots created from the volume \n\n\n \n\nData protection refers to protecting data while in-transit (as it travels to and from Amazon S3) and at rest (while it is stored on disks in Amazon S3 data centers). You can protect data in transit by using SSL or by using client-side encryption. You have the following options of protecting data at rest in Amazon S3.\n\n \n\n\n\tUse Server-Side Encryption – You request Amazon S3 to encrypt your object before saving it on disks in its data centers and decrypt it when you download the objects.\n\tUse Client-Side Encryption – You can encrypt data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools. \n\n\n \n\nYou can create a load balancer that uses the SSL/TLS protocol for encrypted connections (also known as SSL offload). This feature enables traffic encryption between your load balancer and the clients that initiate HTTPS sessions, and for connections between your load balancer and your EC2 instances.\n\nFor more information on securing data at rest, please refer to the below link:\n\nhttps://d0.awsstatic.com/whitepapers/aws-securing-data-at-rest-with-encryption.pdf\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a set of EC2 Instances running a web application which sits behind an Elastic Load Balancer. You also have an Amazon RDS instance which is accessible from the web application. You have been asked to ensure that this architecture is self-healing in nature. What would fulfill this requirement? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use CloudWatch metrics to check the utilization of the web layer. Use Auto Scaling Group to scale the web instances accordingly based on the CloudWatch metrics."
    }, {
        "id": "B",
        "markdown": "Use CloudWatch metrics to check the utilization of the database servers. Use Auto Scaling Group to scale the database instances accordingly based on the CloudWatch metrics."
    }, {"id": "C", "markdown": "Utilize the Read Replica feature for the Amazon RDS layer."}, {
        "id": "D",
        "markdown": "Utilize the Multi-AZ feature for the Amazon RDS layer."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers - A and D\n\nThe following diagram from AWS showcases a self-healing architecture where you have a set of EC2 servers as Web server being launched by an Auto Scaling Group.\n\n\n\n \n\nAWS Documentation mentions the following:\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable.\n\nIn case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.\n\n\n\tFor more information on Multi-AZ RDS, please refer to the below link:\n\t\n\t\thttps://aws.amazon.com/rds/details/multi-az/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of EC2 Instances that access data objects stored in an S3 bucket. Your IT Security department is concerned about the security of this architecture and wants you to implement the following:\n\n1) Ensure that the EC2 Instance securely accesses the data objects stored in the S3 bucket\n\n2) Prevent accidental deletion of objects\n\nWhat would be helpful to fulfill the requirements of the IT Security department? (SELECT TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an IAM user and ensure the EC2 Instances use the IAM user credentials to access the data in the bucket."
    }, {
        "id": "B",
        "markdown": "Create an IAM Role and ensure the EC2 Instances use the IAM Role to access the data in the bucket."
    }, {
        "id": "C",
        "markdown": "Use S3 Cross-Region Replication to replicate the objects so that the integrity of data is maintained."
    }, {
        "id": "D",
        "markdown": "Use an S3 bucket policy that ensures that MFA Delete is set on the objects in the bucket."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers - B and D\n\nAWS Documentation mentions the following:\n\nIAM roles are designed so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use. Instead of creating and distributing your AWS credentials, you can delegate permission to make API requests using IAM roles \n\nFor more information on IAM Roles, please refer to the link below:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n\nMFA Delete can be used to add another layer of security to S3 Objects to prevent accidental deletion of objects.\n\nFor more information on MFA Delete, please refer to the link below:\n\nhttps://aws.amazon.com/blogs/security/securing-access-to-aws-using-mfa-part-3/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a requirement to get a snapshot of the current configuration of resources in your AWS Account. Which service can be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CodeDeploy"}, {"id": "B", "markdown": "AWS Trusted Advisor"}, {
        "id": "C",
        "markdown": "AWS Config"
    }, {"id": "D", "markdown": "AWS IAM"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer - C\n\nAWS Documentation mentions the following:\n\nWith AWS Config, you can do the following:\n\n\n\tEvaluate your AWS resource configurations for desired settings.\n\tGet a snapshot of the current configurations of the supported resources that are associated with your AWS account.\n\tRetrieve configurations of one or more resources that exist in your account.\n\tRetrieve historical configurations of one or more resources.\n\tReceive a notification whenever a resource is created, modified or deleted.\n\tView relationships between resources. For example, you might want to find all resources that use a particular security group.\n\n\nFor more information on AWS Config, please visit the below URL:\n\nhttp://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is hosting an application in AWS. The application is read intensive and consists of a set of web servers and AWS RDS. It has been noticed that the response time of the application increases due to the load on the AWS RDS instance. Which of the following measures can be taken to scale the data tier? (SELECT THREE)",
    "prompt": "",
    "correctAnswerId": ["A", "B", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create Amazon DB Read Replicas. Configure the application layer to query the Read Replicas for query needs."
    }, {"id": "B", "markdown": "Use Auto Scaling to scale out and scale in the database tier."}, {
        "id": "C",
        "markdown": "Use SQS to cache the database queries."
    }, {"id": "D", "markdown": "Use ElastiCache in front of your Amazon RDS DB to cache common queries."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answers - A, B and D\n\nAWS documentation mentions the following:\n\nAmazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This replication feature makes it easy to elastically scale out beyond the capacity constraints of a single DB Instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances.\n\nFor more information on AWS RDS Read Replica’s, please visit the URL below:\n\nhttps://aws.amazon.com/rds/details/read-replicas/ \n\nAmazon RDS now supports Storage Auto Scaling, and hence it can be used for scaling.\n\nhttps://aws.amazon.com/about-aws/whats-new/2019/06/rds-storage-auto-scaling/\n\nAmazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.\n\nFor more information on AWS ElastiCache, please visit the URL below:\n\nhttps://aws.amazon.com/elasticache/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on hosting a set of EC2 Instances in AWS. The Instances would be configured in a way that one will be used as a web tier and the other as a database (EC2 Hosted). The web tier should be exposed to the Internet in the Public Subnet and Database is in Private Subnet in the same VPC with the default configuration. What configuration needs to be done in order to let Web Server communicate with Database Server?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Change the main route tables to have the desired routing between the subnets"
    }, {
        "id": "B",
        "markdown": "Ensure that the Security Groups have the required rules defined to allow traffic"
    }, {"id": "C", "markdown": "Ensure that all instances have a public IP for communication"}, {
        "id": "D",
        "markdown": "Ensure that all subnets are defined as public subnets"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nA security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC could be assigned to a different set of security groups. If you don't specify a particular group at launch time, the instance is automatically assigned to the default security group for the VPC\n\nMain route table\n\nThe first entry is the default entry for local routing in the VPC; this entry enables the instances in the VPC to communicate with each other.\n\n\n\t\n\t\t\n\t\t\t\n\t\t\tDestination\n\t\t\t\n\t\t\t\n\t\t\tTarget\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t10.0.0.0/16\n\t\t\t\n\t\t\t\n\t\t\tlocal\n\t\t\t\n\t\t\n\t\n\n\n \n\nOption A is invalid since the main route table will have the required rules to route traffic between subnets in a VPC (By default). No change is required there.\n\nRefer below URL for more details,\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html#VPC_Scenario2_Routing\n\nOption C is invalid since the instances would communicate with each other on the private IP\n\nThe primary reason to use the Private IP of an EC2 instance is to route the traffic internally within your VPC.\n\nIf you use the private IP to communicate, traffic will stay within the VPC, it will not be routed out, the routing table will route it internally\n\nOption D is invalid since the database should be in the private subnet and not the public subnet\n\nThis question asks for communication between subnets.\n\nFor more information on Security Groups, please visit the below URL:\n\nhttp://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.htm\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work for a company that has a set of EC2 Instances. There is an internal requirement to create another instance in another availability zone. One of the EBS volumes from the current instance needs to be moved from one of the older instances to the new instance. How can you achieve this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Detach the volume and attach to an EC2 instance in another AZ."}, {
        "id": "B",
        "markdown": "Create a new volume in the other AZ and specify the current volume as the source."
    }, {
        "id": "C",
        "markdown": "Create a snapshot of the volume and then create a volume from the snapshot in the other AZ"
    }, {
        "id": "D",
        "markdown": "Create a new volume in the AZ and do a disk copy of contents from one volume to another."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nIn order for a volume to be available in another availability zone, you need to first create a snapshot from the volume. Then in the snapshot from creating a volume from the snapshot, you can then specify the new availability zone accordingly.\n\nThe EBS Volumes attached to the EC2 Instance will always have to remain in the same availability zone as the EC2 Instance. A possible reason for this could be because of the fact that EBS Volumes are present outside of the host machine and instances have to be connected over the network, if the EBS Volumes are present outside the Availability Zone there can be potential latency issues and subsequent performance degradation.\n\nWhat one can do in such scenario is, get the Snapshot of the EBS Volume (Snapshot sequentially captures the state of your EBS Volume, you can create an EBS Volume from this snapshot in your desired Availability Zone and attach it to your new Instance\n\nLater you can detach the volume from the older instance and delete then.\n\n\n\n\n\tOption A is invalid because the Instance and Volume have to be in the same AZ in order for it to be attached to the instance because we have to specify AZ while creating Volume\n\tOption B is invalid because there is no way to specify a volume as a source\n\tOption D is invalid because the Diskcopy would just be a tedious process\n\n\nFor more information on snapshots, please visit the below URL\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-detaching-volume.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team has developed an application and now needs to deploy that application onto an EC2 Instance. This application interacts with a DynamoDB table. Which of the following is the correct and MOST SECURE way to ensure that the application interacts with the DynamoDB table",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a role which has the necessary permissions and can be assumed by the EC2 instance"
    }, {
        "id": "B",
        "markdown": "Use the API credentials from an EC2 instance. Ensure the environment variables areupdated with the API access keys."
    }, {
        "id": "C",
        "markdown": "Use the API credentials from a bastion host. Make the application on the EC2 Instance send requests via the bastion host."
    }, {
        "id": "D",
        "markdown": "Use the API credentials from a NAT Instance. Make the application on the EC2 Instance send requests via the NAT Instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nIAM roles are designed in such a way so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use.\n\nOptions B, C, and D are invalid because it is not secure to use API credentials from any EC2 instance. The API credentials can be tampered with and hence is not the ideal secure way to make API calls.\n\nFor more details on AWS Credentials, please refer below URL\n\nhttps://aws.amazon.com/blogs/security/what-to-do-if-you-inadvertently-expose-an-aws-access-key/\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey_API\n\nFor more information on IAM roles for EC2, please refer below URL:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are using Amazon RDS as a relational database for your web application in AWS. All your data stored in Amazon RDS is encrypted using AWS KMS. Encrypting this data is handled by a separate team of 4 users (User A, B, C, & D) in Security Team. They have created 2 CMK’s for encryption of data. During annual Audit, there were concerns raised by Auditors for access to these CMK’s for each user. Security Team has following IAM Policy & Key Policy set for AWS KMS.\n\n·         CMK1 is created by AWS KMS API & has a default Key policy.\n\n·         CMK2 is default key policy created by AWS Management console & allows User D.\n\n·         User C has IAM Policy denying all action for CMK1 while allowing for CMK2.\n\n·         User A & User B has IAM Policy allowing access to CMK1 while denying access to CMK2.\n\n·         User D has IAM policy allowing full access to AWS KMS.\n\nWhich of the following is correct statement for access each user has for AWS KMS CMK?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "User A & B can use the only CMK1, user C cannot use CMK1, while user D can use both CMK1 & CMK2."
    }, {
        "id": "B",
        "markdown": "User A & B can use CMK1& CMK2, user C can use only CMK2, while user D can use both CMK1 & CMK2."
    }, {
        "id": "C",
        "markdown": "User A & B can use CMK1, user C can use CMK1 & CMK2, while user D can use both CMK1 & CMK2."
    }, {
        "id": "D",
        "markdown": "User A & B can use only CMK1, user C can use only CMK2, while user D cannot use both CMK1 & CMK2."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAccess to AWS KMS CMK is a combination of both Key policy & IAM policy. IAM Policy should grant access to a user for AWS KMS. While Key Policy is used to control access to CMK in AWS KMS.\n\n\n\tOption B is incorrect as CMK2 key policy do not grant access to User C. Also, User A & B do not have IAM policy to access CMK2.\n\tOption C is incorrect as CMK2 key policy do not grant access to User C. Also, it does not have IAM policy to access CMK1.\n\tOption D is incorrect as User D has IAM policy & Key Policy to use both CMK1 & CMK2.\n\n\nFor more information on determining access to AWS KMS CMK, refer to following URL,\n\n\n\thttps://docs.aws.amazon.com/kms/latest/developerguide/determining-access.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is building container-based applications. Currently, they use Kubernetes for their on-premises docker based orchestration. They want to move to AWS and preferably not have to manage the infrastructure for the underlying orchestration service. Which of the following could be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DynamoDB"}, {"id": "B", "markdown": "AWS ECS with Fargate"}, {
        "id": "C",
        "markdown": "AWS EC2 with Kubernetes installed"
    }, {"id": "D", "markdown": "AWS Elastic beanstalk"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nWith Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without having to learn about the infrastructure that runs those applications. Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.\n\nOption A is incorrect since this is a fully managed NoSQL database\n\nOption B can be correct but you have to manage infrastructure.\n\nOption C is incorrect since this would add maintenance overhead for the company and the question mentions that the company does not want to manage the infrastructure\n\nElastic Beanstalk vs ECS really comes down to control. Do you want to control your scaling and capacity or do you want to have that more abstracted and instead focus primarily on your app? ECS will give you control, as you have to specify the size and number of nodes in the cluster and whether or not auto-scaling should be used. With Elastic Beanstalk, you simply provide a Dockerfile and Elastic Beanstalk takes care of scaling your provisioning of number and size of nodes, you basically can forget about the infrastructure with the Elastic Beanstalk route.\n\nFor more information on Elastic Beanstalk, please visit the below URL:\n\nhttp://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html\n\nWith ECS you'll have to build the infrastructure first before you can start deploying the Dockerfile.\n\nFor more information on AWS ECS service, please visit the below URL:\n\nhttps://aws.amazon.com/ecs/\n\nhttps://aws.amazon.com/blogs/aws/amazon-elastic-container-service-for-kubernetes/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is looking at decreasing the amount of time it takes to build servers that are deployed as EC2 Instances. These Instances always have the same type of software installed as per the security standards. As an architect what would you recommend in decreasing the server build time?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Look at creating snapshots of EBS Volumes"}, {
        "id": "B",
        "markdown": "Create the same master copy of the EBS volume"
    }, {"id": "C", "markdown": "Create a custom AMI"}, {"id": "D", "markdown": "Create a base profile"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nAn Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You must specify a source AMI when you launch an instance. You can launch multiple instances from a single AMI when you need multiple instances with the same configuration. You can use different AMIs to launch instances when you need instances with different configurations.\n\nYou can launch an instance from an existing AMI, customize the instance, and then save this updated configuration as a custom AMI. Instances launched from this new custom AMI include the customizations that you made when you created the AMI.\n\nOptions A and B are incorrect since these cannot be used to create a master copy of the instance\n\nOption D is incorrect because creating a profile will not assist\n\nFor more information on AMI’s, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Administrator for a global IT company. The Software team has developed a new application for Project delivery deployed on AWS. Changes in the application are done on a quarterly basis and will be deployed on a new redundant infrastructure. The company would like to automate this process of development changes and provisioning of resources. For deploying new features, AWS CodePipeline will be used for an automated release cycle. What would you recommend as a source stage and deploy stage integration along with AWS CodePipeline?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use CodePipeline with source stage as CodeCommit and deploy stage using AWS CodeDeploy."
    }, {
        "id": "B",
        "markdown": "Use CodePipeline with source stage as CodeCommit and deploy stage using AWS Elastic Beanstalk."
    }, {
        "id": "C",
        "markdown": "Use CodePipeline with source stage as S3 bucket having versioning enable and deploy stage using AWS Elastic Beanstalk."
    }, {
        "id": "D",
        "markdown": "Use CodePipeline with source stage as S3 bucket having versioning enable and deploy stage using AWS Code Deploy."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS CodeCommit can be used as a source stage integration with AWS CodePipeline. Also, new infrastructure needs to be built for this new application deployment, AWS Elastic Beanstalk can be used to build & manage redundant resources.\n\n\n\nOption A is incorrect. There is no existing infrastructure. As a new resource needs to be provisioned, AWS Code Deploy is not a correct option.\n\nOptions C and D are incorrect as using S3 as a source is not recommended for Software Development because CodeCommit is optimized for team software development. It manages batches of changes across multiple files, which can occur in parallel with changes made by other developers. Amazon S3 versioning supports the recovery of past versions of files, but it's not focused on collaborative file tracking features that software development teams need. Refer below URL for details\n\n https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html#welcome-arc-vs-s3\n\nFor more information on AWS CodePipeline Integration type, refer to the following URL:\n\n https://docs.aws.amazon.com/codepipeline/latest/userguide/integrations-action-type.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are designing the following application in AWS. Users will use the application to upload videos and images. The files will then be picked up by a worker process for further processing. Which of the below services should be used in the design of the application. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Simple storage service for storing the videos and images"}, {
        "id": "B",
        "markdown": "AWS Glacier for storing the videos and images"
    }, {"id": "C", "markdown": "AWS SNS for distributed processing of messages by the worker process"}, {
        "id": "D",
        "markdown": "AWS SQS for distributed processing of messages by the worker process"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and D\n\nThe AWS Documentation mentions the following\n\nAmazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers.\n\nAmazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.\n\nBased on S3 Bucket events, you can trigger the SQS Queue.\n\nYou can go in Bucket properties and select the event and choose SQS Queue\n\n \n\n\n\nOption B is incorrect since this is used for archive storage\n\nOption C is incorrect since this is used as a notification service\n\nFor more information on S3, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html\n\nFor more information on SQS, please visit the below URL:\n\nhttps://aws.amazon.com/sqs/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your development team has created a web application in a subnet that needs to be tested. You need to advise the IT admin team on how they should configure the VPC to ensure the application can be accessed from the Internet. Which of the following components would be part of the design. Choose 3 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "An Internet gateway attached to the VPC."}, {
        "id": "B",
        "markdown": "A NAT gateway attached to the VPC."
    }, {"id": "C", "markdown": "Custom Route table entry added for the Internet gateway"}, {
        "id": "D",
        "markdown": "All instances launched with a public IP"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A, C and D\n\nThe configuration for this scenario includes a virtual private cloud (VPC) with a single public subnet, and an internet gateway to enable communication over the internet\n\n\n\nAn internet gateway. This connects the VPC to the internet and to other AWS services.\n\nA custom route table associated with the subnet. The route table entries enable instances in the subnet to use IPv4 to communicate with other instances in the VPC, and to communicate directly over the internet. A subnet that's associated with a route table that has a route to an internet gateway is known as a public subnet.\n\nInstances receive a Public IP address so that it is reachable from outside the VPC. This IP address might change if the instance stops and starts. Alternatively, you can use an Elastic IP Address that remains static.\n\nOnly use a Public IP/Elastic IP address when communicating with the instance from outside the VPC.\n\nOption B is incorrect since this should be used for communication of instances in the private subnet to the Internet \n\nFor more information on public subnets and the VPC, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario1.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on deploying an application which will consist of a web and database tier. The database tier should not be accessible from the Internet. How would you design the networking part of the application? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "A public subnet for the web tier"}, {
        "id": "B",
        "markdown": "A private subnet for the web tier"
    }, {"id": "C", "markdown": "A public subnet for the database tier"}, {
        "id": "D",
        "markdown": "A private subnet for the database tier"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and D\n\nThe below diagram from the AWS Documentation shows the design of a web and database tier\n\n \n\nOption B is incorrect since users will not be able to access the web application if it placed in a private subnet\n\nOption C is incorrect since the question mentions that the database should not be accessible from the internet\n\nFor more information on private and public subnets and the VPC, please visit the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Scenario2.html\n\n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are creating a number of EBS Volumes for the EC2 Instances hosted in your company's AWS account. The company has asked you to ensure that the EBS volumes are available even in the case of an entire region facing an outage due to a natural disaster. How would you accomplish this? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configure Amazon Storage Gateway with EBS volumes as the data source and store the backups on premise through the storage gateway"
    }, {"id": "B", "markdown": "Create snapshots of the EBS Volumes."}, {
        "id": "C",
        "markdown": "Ensure the snapshots are made available in another availability zone"
    }, {"id": "D", "markdown": "Ensure the snapshots are made available in another region"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B and D\n\nThe AWS Documentation mentions the following\n\nYou can back up the data on your Amazon EBS volumes to Amazon S3 by taking point-in-time snapshots. Snapshots are incremental backups, which means that only the blocks on the device that have changed after your most recent snapshot are saved. This minimizes the time required to create the snapshot and saves on storage costs by not duplicating data. When you delete a snapshot, only the data unique to that snapshot is removed. Each snapshot contains all of the information needed to restore your data (from the moment when the snapshot was taken) to a new EBS volume.\n\nOption A is incorrect since you have to make use of EBS snapshots\n\nOption C is incorrect since the snapshots need to be made available in another region for such a huge disaster. It may be rare for the whole AWS region to go down, but it could cause massive permanent damage if we don’t plan for it.\n\nFor more information on EBS snapshots, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning on hosting a static website on EC2 Instances. You need to ensure that the environment is highly available and scalable to meet demand. Which of the below aspects can be used to create a highly available environment. Choose 3 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["A", "B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Auto Scaling group"}, {
        "id": "B",
        "markdown": "Elastic Load Balancer"
    }, {"id": "C", "markdown": "SQS queue"}, {"id": "D", "markdown": "Multiple Availability Zones"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A, B and D\n\nThe diagram below shows an example of a highly available architecture for hosting EC2 Instances\n\n\n\n \n\nHere you have the\n\n\n\tELB is placed in front of the users which helps in directing the traffic to the EC2 Instances.\n\tThe EC2 Instances which are placed as part of an AutoScaling Group\n\tThen you have multiple subnets which are mapped to multiple availability zones\n\n\nThe solution is to create several instances across several availability zones and to use an elastic load balancer to distribute the traffic and Auto Scaling group to scale the instances. This way, even if an instance fails, you already have other ones available. AWS recommends this solution as they have an SLA of 99.95% for their instance in an AZ. By putting in several AZs you can have 100% availability\n\nFor a static web site, the SQS is not required to build such an environment. If you have a system such as an order processing system, which has that sort of queuing of requests, then that could be a candidate for using SQS Queues.\n\nFor more information on high availability, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html#scale-and-load-balance-prerequisites \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global media firm is using AWS CodePipeline as an automation service for releasing new features to customers. All the codes are uploaded in the Amazon S3 bucket. Changes in files stored in the S3 bucket should trigger AWS CodePipeline that will further initiate AWS Elastic Beanstalk for deploying additional resources. What is the additional requirement that should be configured to trigger CodePipeline in a faster way?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Enable periodic checks and create a Webhook which triggers pipeline once S3 bucket is updated."
    }, {
        "id": "B",
        "markdown": "Disable periodic checks, create an Amazon CloudWatch Events rule & AWS CloudTrail trail."
    }, {
        "id": "C",
        "markdown": "Enable periodic checks, create an Amazon CloudWatch Events rule & AWS CloudTrail trail."
    }, {
        "id": "D",
        "markdown": "Disable periodic checks and create a Webhook which triggers pipeline once S3 bucket is updated."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nTo automatically trigger pipeline with changes in the source S3 bucket, Amazon CloudWatch Events rule & AWS CloudTrail trail must be applied. When there is a change in the S3 bucket, events are filtered using AWS CloudTrail & then Amazon CloudWatch events are used to trigger the start of the pipeline. This default method is faster & periodic checks should be disabled to have events-based triggering of CodePipeline.\n\nYou can use the following tools to monitor your CodePipeline pipelines and their resources:\n\n\n\tAmazon CloudWatch Events — Use Amazon CloudWatch Events to detect and react to pipeline execution state changes (for example, send an Amazon SNS notification or invoke a Lambda function).\n\tAWS CloudTrail — Use CloudTrail to capture API calls made by or on behalf of CodePipeline in your AWS account and deliver the log files to an Amazon S3 bucket. You can choose to have CloudWatch publish Amazon SNS notifications when new log files are delivered so you can take quick action.\n\tConsole and CLI — you can use the CodePipeline console and CLI to view details about the status of a pipeline or a particular pipeline execution.\n\n\nOption A is incorrect as Webhooks are used to trigger pipeline when the source is GitHub repository. Also, the periodic check will be a slower process to trigger CodePipeline.\n\nOption C is incorrect as Periodic checks are not a faster way to trigger CodePipeline.\n\nOption D is incorrect as Webhooks are used to trigger pipeline when the source is GitHub repository.\n\nFor more information on Automatically Triggering Pipeline, refer to the following URL:\n\nhttps://docs.aws.amazon.com/codepipeline/latest/userguide/pipelines-about-starting.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a requirement to host a web based application. You need to enable high availability for the application, so you create an Elastic Load Balancer and place the EC2 Instances behind the Elastic Load Balancer. You need to ensure that users only access the application via the DNS name of the load balancer. How would you design the network part of the application? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create 2 public subnets for the Elastic Load Balancer"}, {
        "id": "B",
        "markdown": "Create 2 private subnets for the Elastic Load Balancer"
    }, {"id": "C", "markdown": "Create 2 public subnets for the EC2 Instances"}, {
        "id": "D",
        "markdown": "Create 2 private subnets for the EC2 Instances"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and D\n\nThe AWS Documentation mentions the following\n\nUse Case: A load balancer, two public subnets, two private subnets, two NAT Gateways,\n\nThe NAT Gateway goes into both public subnets (Public-Subnet-A, Public-Subnet-B)\n\n\n\tThe EC2 instances are launched in private subnets across two AZs (Private-Subnet-A, Private-Subnet-B)\n\tThe Route Table Private-Subnet-A points to the NAT Gateway in Public-Subnet-A\n\tThe Route Table Private-Subnet-B points to the NAT Gateway in Public-Subnet-B\n\n\nIf one of the AZs should fail, then the EC2 instances in the remaining private subnet will still be able to communicate with the Internet because they have their own NAT Gateway in that AZ.\n\nOption B is incorrect since the ELB needs to be placed in the public subnet to allow access from the Internet\n\nOption C is incorrect based on security issues. Private subnet gives us better security from the attacks.\n\nFor more information on an example to use the Load balancer, please visit the below URL:\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a retail company using AWS EC2 instance for a web application. The company is using Provisioned IOPS SSD EBS volumes to store all product database.\n\nThis is a critical database & you need to ensure appropriate backups are accomplished every 12 hours. Also, you need to ensure that storage space is optimally used for storing all these snapshots removing all older files. Which of the following can help to meet this requirement with the least management overhead?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Manually create snapshots & delete old snapshots for EBS volumes as this is a critical data."
    }, {
        "id": "B",
        "markdown": "Use Amazon CloudWatch events to initiate AWS Lambda which will create snapshot of EBS volumes along with deletion of old snapshots."
    }, {
        "id": "C",
        "markdown": "Use Amazon Data Lifecycle Manager to schedule EBS snapshots and delete old snapshots as per retention policy."
    }, {
        "id": "D",
        "markdown": "Use Third party tool to create snapshot of EBS volumes along with deletion of old snapshots."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon Data Lifecycle Manager can be used for creation, retention & deletion of EBS snapshots. It protects critical data by initiating backup of Amazon EBS volumes at selected intervals, along with storing & deletion of old snapshots to save storage space & cost.\n\nOption A is incorrect as this will result in additional admin work & there can be a risk of losing critical data due to manual errors.\n\nOption B is incorrect as for this we will need to do additional config changes in CloudWatch & AWS Lambda. Also, AWS Lambda would need a script to create snapshots which can be an overhead\n\nOption D is incorrect as this will result in an additional cost to maintain a third-party software.\n\nFor more information on Automating Amazon EBS Snapshot Lifecycle, refer to the following URL,\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work as an architect for a consulting company. The consulting company normally creates the same set of resources for their clients. They want some way of building templates, which can then be used to deploy the resources to the AWS accounts for the various clients. Also, your team needs to be ensured that they have control over the infrastructure. Which of the following service can help fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Elastic Beanstalk"}, {"id": "B", "markdown": "Custom AMI"}, {
        "id": "C",
        "markdown": "AWS Cloudformation"
    }, {"id": "D", "markdown": "EBS Snapshots"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nAWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you.\n\nElastic Beanstalk is intended to make developers' lives easier. CloudFormation is intended to make systems engineers' lives easier.\n\nElastic Beanstalk is a PaaS layer on top of AWS's IaaS services which abstracts away the underlying EC2 instances, Elastic Load Balancers, Auto Scaling groups, etc. This makes it a lot easier for developers, who don't want to be dealing with all the systems stuff, to get their application quickly deployed on AWS. With Elastic Beanstalk, you don't need to understand how any of the underlying magic works.\n\nCloudFormation, on the other hand, doesn't automatically do anything. It's simply a way to define all the resources needed for deployment in a huge JSON file.\n\nOption A could be a valid choice but it has been clearly asked in question that the team needs to have control over the infrastructure.\n\nOption B is invalid because Custom AMI will help to create an Image for EC2 Instances not for all the resources.\n\nOption D is invalid because EBS Snapshot is a copy of your Volume used for EC2 Instance.\n\nFor more information on CloudFormation, please visit the below URL:\n\nhttp://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work as an architect for a company. An application is going to be deployed on a set of EC2 instances in a private subnet of VPC. You need to ensure that IT administrators can securely administer the instances in the private subnet. How can you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a NAT gateway, ensure SSH access is provided to the NAT gateway. Access the Instances via the NAT gateway."
    }, {
        "id": "B",
        "markdown": "Create a NAT instance in a public subnet, ensure SSH access is provided to the NAT instance. Access the Instances via the NAT instance."
    }, {
        "id": "C",
        "markdown": "Create a bastion host in the private subnet. Make IT admin staff use this as a jump server to the backend instances."
    }, {
        "id": "D",
        "markdown": "Create a bastion host in the public subnet. Make IT admin staff use this as a jump server to the backend instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nA bastion host is a server whose purpose is to provide access to a private network from an external network, such as the Internet. Because of its exposure to potential attack, a bastion host must minimize the chances of penetration. For example, you can use a bastion host to mitigate the risk of allowing SSH connections from an external network to the Linux instances launched in a private subnet of your Amazon Virtual Private Cloud (VPC).\n\n\n\tOptions A and B are invalid because you would not route access via the NAT instance or the NAT gateway\n\tOption C is incorrect since the bastion host needs to be in the public subnet\n\tFor more information on bastion hosts please visit the below URL:\n\t\n\t\thttps://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work as an architect for a company. An application is going to be deployed on a set of EC2 instances in a VPC. The Instances will be hosting a web application. You need to design the security group to ensure that users have the ability to connect from the Internet via HTTPS. Which of the following needs to be configured for the security group",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Allow Inbound access on port 443 for 0.0.0.0/0"}, {
        "id": "B",
        "markdown": "Allow Outbound access on port 443 for 0.0.0.0/0"
    }, {"id": "C", "markdown": "Allow Inbound access on port 80 for 0.0.0.0/0"}, {
        "id": "D",
        "markdown": "Allow Outbound access on port 80 for 0.0.0.0/0"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nA security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC could be assigned to a different set of security groups. If you don't specify a particular group at launch time, the instance is automatically assigned to the default security group for the VPC.\n\nAWS Security groups are stateful which means you do not need to open the outbound for responses - open only inbound for requests. If you think your instances will be sending requests to certain IPs (for example: to upgrade/install a package), then you need to open the IP/port for that request. By default, it is open for all traffic.\n\nOption B is incorrect since security groups are stateful, you don’t need to define the rule for outbound traffic\n\nOptions C and D are incorrect since you need to only ensure access for HTTPS, hence you should not configure rules for port 80\n\nFor more information on security groups, please visit the below URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company runs an automobile reselling company that has a popular online store on AWS. The application sits behind an Auto Scaling group and requires new instances of the Auto Scaling group to identify their public and private IP addresses. Which of the following is the correct AWS option to identify the IP addresses?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "By using Ipconfig for windows or Ifconfig for Linux."}, {
        "id": "B",
        "markdown": "By using a CloudTrail."
    }, {
        "id": "C",
        "markdown": "Using a Curl or Get Command to get the latest meta-data from http://169.254.169.254/latest/meta-data/"
    }, {
        "id": "D",
        "markdown": "Using a Curl or Get Command to get the latest user-data from http://169.254.169.254/latest/user-data/"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nTo get the private and public IP addresses, you can run the following commands on the running instance\n\n\n\thttp://169.254.169.254/latest/meta-data/local-ipv4\n\thttp://169.254.169.254/latest/meta-data/public-ipv4\n\n\nOption A is partially correct but it is an overhead when you already have the service running in AWS.\n\nOption B is incorrect because CloudTrail is used for tracking the API activities of a resource\n\nOption D is incorrect because user-data cannot get the IP addresses\n\nFor more information on instance metadata, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been designing a CloudFormation template that creates one elastic load balancer fronting two EC2 instances. Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Resources"}, {"id": "B", "markdown": "Parameters"}, {
        "id": "C",
        "markdown": "Outputs"
    }, {"id": "D", "markdown": "Mappings"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe below example shows a simple CloudFormation template. It creates an EC2 instance based on the AMI - ami-d6f32ab5. When the instance is created, it will output the AZ in which it is created.\n\n{\n\n    \"Resources\": {\n\n        \"MyEC2Instance\": {\n\n            \"Type\": \"AWS::EC2::Instance\",\n\n            \"Properties\": {\n\n                \"ImageId\": \"ami-d6f32ab5\"\n\n            }\n\n        }\n\n    },\n\n    \"Outputs\": {\n\n        \"Availability\": {\n\n            \"Description\": \"The Instance ID\",\n\n            \"Value\":\n\n            { \"Fn::GetAtt\" : [ \"MyEC2Instance\", \"AvailabilityZone\" ]}\n\n        }\n\n    }\n\n}\n\n\n\tOption A is incorrect because this is used to define the main resources in the template\n\tOption B is incorrect because this is used to define parameters which can taken in during template deployment\n\tOption D is incorrect because this used to map key value pairs in a template\n\n\nTo understand more on CloudFormation, please visit the url\n\n\n\thttps://aws.amazon.com/cloudformation/\n\thttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a set of VPC's defined in AWS. They need to connect this to their on-premises network. They need to ensure that all data is encrypted in transit. Which of the following would you use to connect the VPC's to the on-premises networks?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "VPC Peering"}, {"id": "B", "markdown": "VPN connections"}, {
        "id": "C",
        "markdown": "AWS Direct Connect"
    }, {"id": "D", "markdown": "Placement Groups"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nBy default, instances that you launch into an Amazon VPC can't communicate with your own (remote) network. You can enable access to your remote network from your VPC by attaching a virtual private gateway to the VPC, creating a custom route table, updating your security group rules, and creating an AWS managed VPN connection.\n\nVPN connection encrypts the traffic whereas Direct Connect does not encrypt your traffic that is in transit. To encrypt the data in transit that traverses AWS Direct Connect, you must use the transit encryption options for that service.\n\nOption A is incorrect because this is used to connect multiple VPC’s together.\n\nOption C is incorrect because this does not encrypt traffic in connections between AWS VPC’s and the On-premises network\n\nOption D is incorrect because this is used for low latency access between EC2 Instances\n\nFor more information on AWS VPN connections and Direct Connect, please visit the below URL\n\nhttps://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html#concepts\n\nhttps://docs.aws.amazon.com/directconnect/latest/UserGuide/encryption-in-transit.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to host a selection of MongoDB instances. They are expecting a high load and want to achieve high performance. As an architect, you need to ensure that the right storage is used to host the MongoDB database. Which of the following would you incorporate as the underlying storage layer?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Provisioned IOPS"}, {"id": "B", "markdown": "General Purpose SSD"}, {
        "id": "C",
        "markdown": "Throughput Optimized HDD"
    }, {"id": "D", "markdown": "Cold HDD"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe below snapshot from the AWS Documentation shows the different volume types and why Provisioned IOPS is the most ideal for this requirement\n\nAlso, Provisioned IOPS is recommended for NoSQL and Relational Databases.\n\n\n\nBecause of what is mentioned in the documentation as the ideal storage type, the other options are invalid.\n\nFor more information on the different EBS volume types, please visit the below URL\n\nhttps://aws.amazon.com/ebs/details/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. Each division has its own AWS account and there is a need to ensure that the security policies are kept in place at the Account Level. How can you achieve this? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use AWS organizations"}, {
        "id": "B",
        "markdown": "Club all divisions under a single account instead"
    }, {"id": "C", "markdown": "Use IAM Policies to segregate access"}, {
        "id": "D",
        "markdown": "Use Service control policies"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and D\n\nWith AWS Organizations, you can centrally manage policies across multiple AWS accounts without having to use custom scripts and manual processes. For example, you can apply service control policies (SCPs) across multiple AWS accounts that are members of an organization. SCPs allow you to define which AWS service APIs can and cannot be executed by AWS Identity and Access Management (IAM) entities (such as IAM users and roles) in your organization’s member AWS accounts. SCPs are created and applied from the master account, which is the AWS account that you used when you created your organization.\n\n\n\tOption B is incorrect since the question mentions that you need to use separate AWS accounts\n\tOption C is incorrect since you need to use service control policies.\"AWS IAM doesn't provide the facility to define access permissions to that minute level i.e., which AWS service APIs can and cannot be executed by IAM entities.\"\n\n\nFor more information on how to use service control policies, please visit the below URL\n\n\n\thttps://aws.amazon.com/blogs/security/how-to-use-service-control-policies-in-aws-organizations/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of EC2 Instances hosted on the AWS Cloud. As an architect, you have been told to ensure that if the status of any of the instances is related to failure, then the instances should restart automatically. How can you achieve this in the most efficient way possible?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create CloudWatch alarms that stop and start the instance based off of status check alarms"
    }, {"id": "B", "markdown": "Write a script that queries the EC2 API for each instance status check"}, {
        "id": "C",
        "markdown": "Write a script that periodically shuts down and starts instances based on certain stats."
    }, {"id": "D", "markdown": "Implement a third-party monitoring tool."}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nUsing Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.\n\nAll other options are possible , but would just be an extra maintenance overhead\n\nFor more information on using alarm actions, please refer to the below link\n\n\n\thttp://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a financial institute using AWS cloud infrastructure. All project related data is uploaded to Amazon EFS. This data is retrieved from on-premises data centre connecting to VPC via AWS Direct Connect. You need to ensure that all client access to EFS is encrypted using TLS 1.2 to adhere to latest security guidelines issued by security team. Which of the following is cost effective recommended practice for securing data in transit while accessing data from Amazon EFS?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use EFS mount helper to encrypt data in transit."}, {
        "id": "B",
        "markdown": "Use stunnel to connect to Amazon EFS & encrypt traffic in transit."
    }, {"id": "C", "markdown": "Use third-party tool to encrypt data in transit."}, {
        "id": "D",
        "markdown": "Use NFS client to encrypt data in transit."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nWhile mounting Amazon EFS, if encryption of data in transit is enabled, EFS Mount helper initializes the client Stunnel process to encrypt data in transit. EFS Mount helper uses TLS 1.2 to encrypts data in transit.\n\nOption B is incorrect as using stunnel for encryption of data in transit will work fine, but there would be additional admin work to download & install stunnel for each mount.\n\nOption C is incorrect as using a third-party tool will be a costly option.\n\nOption D is incorrect as NFS client can’t be used to encrypt data in transit. The amazon-efs-utils package can be used which consists of an EFS mount helper.\n\nFor more information on encrypting of data in transit for EFS, refer to the following URL,\n\nhttps://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html#encrypt-mount\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of resources defined in AWS. These resources consist of applications hosted on EC2 Instances. Data is stored on EBS volumes and S3. The company mandates that all data should be encrypted at rest. How can you achieve this? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable SSL with the underlying EBS volumes"}, {
        "id": "B",
        "markdown": "Enable EBS Encryption"
    }, {"id": "C", "markdown": "Make sure that data is transmitted from S3 via HTTPS"}, {
        "id": "D",
        "markdown": "Enable S3 server-side Encryption"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B and D\n\nThe AWS Documentation mentions the following\n\nAmazon EBS encryption offers a simple encryption solution for your EBS volumes without the need to build, maintain, and secure your own key management infrastructure.\n\nServer-side encryption protects data at rest. Server-side encryption with Amazon S3-managed encryption keys (SSE-S3) uses strong multi-factor encryption.\n\nOptions A and C are incorrect since these have to do with encryption of data in transit and not encryption of data at rest\n\nFor more information on EBS Encryption, please refer to the below link\n\n \n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html\n\n\n \n\nFor more information on S3 server-side encryption, please refer to the below link\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a web application hosted in AWS that makes use of an Application Load Balancer. You need to ensure that the web application is protected from web-based attacks such as cross site scripting etc.\n\nWhich of the following implementation steps can help protect web applications from common security threats from the outside world?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Place a NAT instance in front of the web application to protect against attacks"
    }, {"id": "B", "markdown": "Use the WAF service in front of the web application"}, {
        "id": "C",
        "markdown": "Place a NAT gateway in front of the web application to protect against attacks"
    }, {"id": "D", "markdown": "Place the web application in front of a CDN service instead"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nAWS WAF is a web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. AWS WAF gives you control over which traffic to allow or block to your web applications by defining customizable web security rules. You can use AWS WAF to create custom rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that are designed for your specific application. \n\nOptions A and C are incorrect because these are used to allow instances in your private subnet to communicate with the internet\n\nOption D is incorrect since this is ideal for content distribution and good when you have DDos attacks , but the WAF should be used for concentrated types of web attacks\n\nFor more information on AWS WAF, please refer to the below link\n\n\n\thttps://aws.amazon.com/waf/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your supervisor asks you to create a decoupled application whose process includes dependencies on EC2 instances where you would be using Polling Strategy to trigger messages once the defined criteria are fulfilled. Which of the following would you include in the architecture?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "An SQS queue as the messaging component between the Instances and servers"
    }, {"id": "B", "markdown": "An SNS topic as the messaging component between the Instances and servers"}, {
        "id": "C",
        "markdown": "An Elastic Load balancer to distribute requests to your EC2 Instance"
    }, {"id": "D", "markdown": "Route 53 resource records to route requests based on failure"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAmazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.\n\nSQS is a distributed queuing system. Messages are NOT pushed to receivers. Receivers have to poll or pull messages from SQS\n\nSNS is a distributed publish-subscribe system. Messages are pushed to subscribers as and when they are sent by publishers to SNS.\n\nOption B is incorrect since this is a push-based notification service\n\nOption C is incorrect since there is no mention in the question of adding any fault tolerance\n\nOption D is incorrect since there is no mention in the question of adding any failure detection\n\nFor more information on AWS SQS, please refer to the below link\n\nhttps://aws.amazon.com/sqs/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of VPC's. There is now a requirement to establish communication across the Instances in the VPC's. Your supervisor has asked you to implement the VPC peering connection. Which of the following considerations would you keep in mind for VPC peering. Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Ensuring that the VPC's don't have overlapping CIDR blocks"}, {
        "id": "B",
        "markdown": "Ensuring that no on-premises communication is required via transitive routing"
    }, {"id": "C", "markdown": "Ensuring that the VPC's only have public subnets for communication"}, {
        "id": "D",
        "markdown": "Ensuring that the VPC's are created in the same region"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and B\n\nThe AWS Documentation mentions the following with restrictions for VPC peering\n\nOverlapping CIDR Blocks\n\nYou cannot create a VPC peering connection between VPCs with matching or overlapping IPv4 CIDR blocks.\n\n\n\nTransitive peering is unsupported for VPC Peering\n\nOption C is incorrect since it is not necessary that the VPC's only contain public subnets\n\nOption D is incorrect since it is not necessary that the VPC's are created in the same region\n\nFor more information on Invalid peering configurations, please refer to the below link\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html\n\nNote: AWS now supports VPC Peering across different regions.  Please check below AWS Docs for more details:\n\n https://aws.amazon.com/about-aws/whats-new/2017/11/announcing-support-for-inter-region-vpc-peering/\n\n https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been instructed to establish a successful site-to-site VPN connection from your on-premises network to the VPC (Virtual Private Cloud). As an architect, which of the following pre-requisites should you ensure are in place for establishing the site-to-site VPN connection. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The main route table to route traffic through a NAT instance"}, {
        "id": "B",
        "markdown": "A public IP address on the customer gateway for the on-premises network"
    }, {"id": "C", "markdown": "A virtual private gateway attached to the VPC"}, {
        "id": "D",
        "markdown": "An Elastic IP address to the Virtual Private Gateway"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B and C\n\nThis is mentioned in the AWS Documentation\n\n\n\n \n\nOption A is incorrect since NAT instance is not required to route traffic via the VPN connection\n\nOption D is incorrect the Virtual Private Gateway is managed by AWS\n\nFor more information on VPN connections, please refer to the below link\n\nhttps://docs.aws.amazon.com/vpn/latest/s2svpn/SetUpVPNConnections.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company wants to enable encryption of services such as S3 and EBS volumes so that the data it maintains is encrypted at rest. They want to have complete control over the keys ( including hardware ) and the entire lifecycle around the keys. How can you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use the AWS CloudHSM"}, {
        "id": "B",
        "markdown": "Use the KMS service"
    }, {"id": "C", "markdown": "Enable S3 server-side encryption"}, {
        "id": "D",
        "markdown": "Enable EBS Encryption with the default KMS keys"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThis is mentioned in the AWS Documentation\n\nAWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With CloudHSM, you can manage your own encryption keys using FIPS 140-2 Level 3 validated HSMs\n\nKMS is a shared hardware tenancy - your keys are in their own partition of an encryption module shared with other AWS customers, each with their own isolated partition. Cloud HSM gives you your own hardware module, so the most likely reason to choose Cloud HSM is if you had to ensure your keys were isolated on their own encryption module.\n\nOptions B, C, and D are incorrect since they have shared hardware tenancy.\n\nFor more information on cloud HSM and Encryption Tools, please refer to the below URL\n\nhttps://aws.amazon.com/cloudhsm/\n\nhttps://docs.aws.amazon.com/crypto/latest/userguide/awscryp-choose-toplevel.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to implement a data store in AWS. The data store needs to have the following requirements\n\n \n\n1) Completely managed by AWS\n\n2) Ability to store JSON objects efficiently\n\n3) Scale based on demand\n\nWhich of the following would you use as the data store?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Redshift"}, {"id": "B", "markdown": "AWS DynamoDB"}, {
        "id": "C",
        "markdown": "AWS Aurora"
    }, {"id": "D", "markdown": "AWS Glacier"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nAmazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database so that you don't have to worry about hardware provisioning, setup, and configuration, replication, software patching, or cluster scaling. It is ideal for storing JSON based objects\n\nWith DynamoDB On-Demand, capacity planning is a thing of the past. You don't specify read and write capacity at all—you pay only for the usage of your DynamoDB tables. I pay more when I have more usage, which means I'm delivering more value to my customers.\n\nPreviously, you had to set read and write throughput capacity on your DynamoDB tables. This specified how many and how large of reads and writes you could make on your table in any given second. Read and write capacity units were charged by the hour, and your requests would be throttled if you exceeded your provisioned capacity in any given second.\n\nOption A is incorrect since this is normally used to host a data warehousing solution\n\nOption C is incorrect since this doesn’t provide scaling on-demand.\n\nOption D is incorrect since this is used for archive storage\n\nFor more information on DynamoDB, please refer to the below link\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\n\nhttps://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has set up some EC2 Instances in a VPC with the default Security group and NACL settings. They want to ensure that the IT admin staff can connect to the EC2 Instance via SSH. As an architect what would you ask the IT admin team to do to ensure that they can connect to the EC2 Instance from the Internet? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Ensure that the Instance has a Public or Elastic IP"}, {
        "id": "B",
        "markdown": "Ensure that the Instance has a Private IP"
    }, {"id": "C", "markdown": "Ensure to modify the Security groups"}, {
        "id": "D",
        "markdown": "Ensure to modify the NACL rules"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and C\n\nThe AWS Documentation mentions the following\n\nTo enable access to or from the internet for instances in a VPC subnet, you must do the following:\n\nAttach an Internet gateway to your VPC.\n\nEnsure that your subnet's route table points to the internet gateway.\n\nEnsure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address)\n\nEnsure to add an inbound rule to allow traffic from SSH with source 0.0.0.0/0. By default, all outbound traffic is allowed\n\nOption B is incorrect since the Private IP will always be created, and would not be used to connect from the internet\n\n\n\tIf you use the private IP to communicate, traffic will stay within the VPC, it will not be routed out, the routing table will route it internally\n\tIf you use the public IP to communicate, traffic will go out to the internet (through internet gateway) and come back to your VPC\n\tInstances receive a Public IP address so that it is reachable from outside the VPC. This IP address might change if the instance stops and starts. Alternatively, you can use an Elastic IP Address that remains static.\n\n\nOption D is incorrect since the default NACL rules will allow all traffic\n\nFor more information on exposing VPC resources to the Internet please refer to the below link\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Internet_Gateway.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of EBS volumes and a set of adjoining EBS snapshots. They want to minimize the costs for the underlying EBS snapshots. Which of the following approaches provides the lowest cost for Amazon Elastic Block Store snapshots while giving you the ability to fully restore data?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Maintain two snapshots: the original snapshot and the latest incremental snapshot."
    }, {
        "id": "B",
        "markdown": "Maintain a volume snapshot; subsequent snapshots will overwrite one another"
    }, {
        "id": "C",
        "markdown": "Maintain a single snapshot: the latest snapshot is both Incremental and complete."
    }, {
        "id": "D",
        "markdown": "Maintain the most current snapshot, archive the original and incremental to Amazon Glacier."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nYou can back up the data on your Amazon EBS volumes to Amazon S3 by taking point-in-time snapshots. Snapshots are incrementalbackups, which means that only the blocks on the device that have changed after your most recent snapshot are saved. This minimizes the time required to create the snapshot and saves on storage costs by not duplicating data. When you delete a snapshot, only the data unique to that snapshot is removed. Each snapshot contains all of the information needed to restore your data (from the moment when the snapshot was taken) to a new EBS volume.\n\n\n\tFor more information on EBS Snapshots, please refer to the below link\n\t\n\t\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are using a c5.large EC2 Instance with one 300GB EBS General purpose SSD volume to host a relational database. You noticed that the read/write capacity of the database needs to be increased. Which of the following approaches can help achieve this? Choose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use a larger EC2 Instance Type"}, {
        "id": "B",
        "markdown": "Enable Multi-AZ feature for the database."
    }, {"id": "C", "markdown": "Consider using Provisioned IOPS Volumes."}, {
        "id": "D",
        "markdown": "Put the database behind an Elastic Load Balancer."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and C\n\nThe below snapshot from the AWS Documentation shows the different volume types and why Provisioned IOPS is the most ideal for this requirement\n\n\n\n \n\nAlso, consider using a larger instance size for better processing capabilities based on EBS Bandwidth\n\nOption B is incorrect since the Multi-AZ feature is only for high availability\n\nOption D is incorrect since this would not alleviate the high number of read/write of the database\n\nFor more details on EBS Volume Types and EC2 Instance Types, please refer below URL \n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#EBSVolumeTypes_piops\n\nhttps://aws.amazon.com/ec2/instance-types/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of AWS RDS Instances. Your management has asked you to disable Automated backups to save on cost. When you disable automated backups for AWS RDS, what are you compromising on?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Nothing,you are actually saving resources on aws"}, {
        "id": "B",
        "markdown": "You are disabling the point-in-time recovery."
    }, {"id": "C", "markdown": "Nothing really, you can still take manual backups."}, {
        "id": "D",
        "markdown": "You cannot disable automated backups in RDS."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nAmazon RDS creates a storage volume snapshot of your DB instance, backing up the entire DB instance and not just individual databases. You can set the backup retention period when you create a DB instance. If you don't set the backup retention period, Amazon RDS uses a default period retention period of one day. You can modify the backup retention period; valid values are 0 (for no backup retention) to a maximum of 35 days.\n\nAutomatic Backups are taken daily at whichever time we specify, the point in time recovery feature enables to recover the database at any point in time and AWS applies the transaction logs to the most appropriate DB backup. Whereas DB snapshots are a manual thing where we user manually triggers the backup and then restores it from the desired time period.\n\nYou will also specifically see AWS mentioning the risk of not allowing automated backups.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.Disabling\n\nImportant\n\nWe highly discourage disabling automated backups because it disables point-in-time recovery. If you disable and then re-enable automated backups, you are only able to restore starting from the time you re-enabled automated backups. \n\nManual snapshots are user-initiated backups of your instance stored in Amazon S3 that are kept until you explicitly delete them. You can create a new instance from a database snapshot whenever you desire. Although database snapshots serve operationally as full backups, you are billed only for incremental storage use.\n\nBecause of the risk which is clearly mentioned in the AWS Documentation, all other options are incorrect.\n\nFor more information on Automated backups, please visit\n\nhttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning on setting up a web-based application. They need to ensure that users across the world have the ability to view the pages from the web site with the least amount of latency. How can you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Route 53 with latency-based routing"}, {
        "id": "B",
        "markdown": "Place a cloudfront distribution in front of the web application"
    }, {"id": "C", "markdown": "Place an Elastic Load balancer in front of the web application"}, {
        "id": "D",
        "markdown": "Place an Elastic Cache in front of the web application"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nAmazon CloudFront is a global content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to your viewers with low latency and high transfer speeds. CloudFront is integrated with AWS – including physical locations that are directly connected to the AWS global infrastructure, as well as software that works seamlessly with services including AWS Shield for DDoS mitigation, Amazon S3, Elastic Load Balancing or Amazon EC2 as origins for your applications, and Lambda@Edge to run custom code close to your viewers.\n\nCloudFront vs Route 53\n\n\n\tCloudFront will distribute your content over 100+ edge location which will decrease your response time with low latency and save your cost as well. It will deliver the content from the nearest location.\n\tCloudFront: It is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. The content is cached at the edge location (data center). In CloudFront, you specify the distribution from where the content needs to be served.\n\tRoute53 is a DNS service and is an origin of data. The term Origin is a term for where the original data resides before it is cached in the CDN (CloudFront). It redirects the original content rather than caching.\n\n\nOption A can be correct but the least amount of latency will not be there.\n\nOption C is incorrect since this is used for fault tolerance for the web application\n\nOption D is incorrect since this is used for caching requests in front of a database layer\n\nFor more information on AWS CloudFront, please visit\n\nhttps://aws.amazon.com/cloudfront/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is hosting their company website on a cluster of web servers that are behind a public-facing load balancer. The customer also uses Amazon Route 53 to manage its public DNS. How should Route 53 be configured to ensure the custom domain is made to point to the load balancer and it should be cost-effective? Choose 2 answers from the options below.",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Don’t go for Route 53, choose third party service."}, {
        "id": "B",
        "markdown": "Create a CNAME record pointing to the load balancer"
    }, {"id": "C", "markdown": "Create an alias record pointing to the load balancer."}, {
        "id": "D",
        "markdown": "Ensure that a hosted zone is in place"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - C and D\n\nThe AWS Documentation mentions the following\n\nWhile ordinary Amazon Route 53 records are standard DNS records, alias records provide a Route 53–specific extension to DNS functionality. Instead of an IP address or a domain name, an alias record contains a pointer to an AWS resource such as a CloudFront distribution or an Amazon S3 bucket. When Route 53 receives a DNS query that matches the name and type in an alias record, Route 53 follows the pointer and responds with the applicable value:\n\nIf you host a website on multiple Amazon EC2 instances, you can distribute traffic to your website across the instances by using an Elastic Load Balancing (ELB) load balancer. The ELB service automatically scales the load balancer as traffic to your website changes over time. The load balancer also can monitor the health of its registered instances and route domain traffic only to healthy instances.\n\nTo route domain traffic to an ELB load balancer, use Amazon Route 53 to create an alias record that points to your load balancer. An alias record is a Route 53 extension to DNS. It's similar to a CNAME record, but you can create an alias record both for the root domain, such as example.com and for subdomains, such as www.example.com. (You can create CNAME records only for subdomains.)\n\nRoute 53 doesn't charge for alias queries to ELB load balancers or other AWS resources.\n\nOptions A is incorrect since it will cost you more\n\nOption B can be correct as well but that is not cost-effective.\n\nOption D is correct because Hosted Zone - is a container for records, and records contain information about how you want to route traffic for a specific domain, such as example.com, and its subdomains (vpc.example.com, elb.example.com).  A hosted zone and the corresponding domain have the same name.\n\nFor more information on the procedure, please visit below URL\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html#dns-associate-custom-elb\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is hosting their website on a cluster of web servers that are behind a public-facing load balancer. The web application interacts with an AWS RDS database. It has been noticed that a set of similar types of queries is causing a performance bottleneck at the database layer. Which of the following architecture additions can help alleviate this issue?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deploy ElastiCache in front of the web servers"}, {
        "id": "B",
        "markdown": "Deploy ElastiCache in front of the database servers"
    }, {"id": "C", "markdown": "Deploy Elastic Load balancer in front of the web servers"}, {
        "id": "D",
        "markdown": "Enable Multi-AZ for the database"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nAmazon ElastiCache offers fully managed Redis and Memcached. Seamlessly deploy, operate, and scale popular open source compatible in-memory data stores. Build data-intensive apps or improve the performance of your existing apps by retrieving data from high throughput and low latency in-memory data stores\n\nOption A is incorrect since the database is having issues hence you need to ensure that ElastiCache is placed in front of the database servers\n\nOption C is incorrect since there is an issue with the database servers, so we don’t need to add anything for the web servers\n\nOption D is incorrect since this is used for high availability of the database\n\nFor more information on ElastiCache, please visit\n\n\n\thttps://aws.amazon.com/elasticache/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is hosting their website on a cluster of web servers that are behind a public-facing load balancer. The web application interfaces with an AWS RDS database. The management has specified that the database needs to be available in case of a hardware failure on the primary database. The secondary needs to be made available in the least amount of time. Which of the following would you opt for?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Made a snapshot of the database"}, {
        "id": "B",
        "markdown": "Enabled Multi-AZ failover"
    }, {"id": "C", "markdown": "Increased the database instance size"}, {
        "id": "D",
        "markdown": "Created a read replica"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nAmazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. \n\nOptions A and D are incorrect since even though they can be used to recover a database, it would just take more time than just enabling Multi-AZ\n\nOption C is incorrect since this will not help the cause\n\nFor more information on Multi-AZ, please visit\n\n\n\thttps://aws.amazon.com/rds/details/multi-az/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on launching a set of EC2 Instances for hosting their production-based web application. As an architect, you have to instruct the operations department on which service they can use to trigger AWS Lambda based on real-time events. Which of the following would you recommend?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Cloudtrail"}, {"id": "B", "markdown": "AWS Cloudwatch"}, {
        "id": "C",
        "markdown": "AWS SQS"
    }, {"id": "D", "markdown": "AWS SNS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nAmazon CloudWatch is a monitoring and management which collects monitoring and operational data in the form of logs, metrics, and events, providing you with a unified view of AWS resources, applications and services that run on AWS, and on-premises servers. It captures real-time events which can be further used to trigger AWS Lambda\n\nAWS CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs. It doesn’t have the capability to trigger anything.\n\nFor more details on the process, refer below URL\n\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-Rule.html\n\nOption C is incorrect since this is used to working with messages in the queue\n\nOption D is incorrect since this is used for sending notifications\n\nFor more information on AWS CloudWatch, please visit the below URL\n\nhttps://aws.amazon.com/cloudwatch/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning on storing their files from their on-premises location onto the Simple Storage service. After a period of 3 months, they want to archive the files, since they would be rarely used. Which of the following would be the right way to service this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use an EC2 instance with EBS volumes. After a period of 3 months, keep on taking snapshots of the data."
    }, {
        "id": "B",
        "markdown": "Store the data on S3 and then use Lifecycle policies to transfer the data to Amazon Glacier"
    }, {
        "id": "C",
        "markdown": "Store the data on Amazon Glacier and then use Lifecycle policies to transfer the data to Amazon S3"
    }, {
        "id": "D",
        "markdown": "Use an EC2 instance with EBS volumes. After a period of 3 months , keep on taking copies of the volume using Cold HDD volume type."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nTo manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:\n\n\n\tTransition actions—Define when objects transition to another storage class. For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the GLACIER storage class one year after creating them.\n\tExpiration actions—Define when objects expire. Amazon S3 deletes expired objects on your behalf.\n\n\nOptions A and D are incorrect since using EBS volumes is not the right storage option for this sort of requirement\n\nOption C is incorrect since the files should be initially stored in S3.\n\nFor more information on AWS S3 Lifecycle policies, please visit the below URL\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a workflow that sends video files from their on-premise system to AWS for transcoding. They use EC2 worker instances that pull transcoding jobs from SQS. As an architect, you need to design how the SQS service would be used in this architecture in order to achieve high throughput. Which of the following is the ideal way in which the SQS service should be used?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "SQS should be used to guarantee high throughput because of the order of messages."
    }, {"id": "B", "markdown": "SQS should be used to synchronously manage the transcoding output."}, {
        "id": "C",
        "markdown": "SQS should be used to check the health of the worker instances."
    }, {"id": "D", "markdown": "SQS should be used to facilitate horizontal scaling"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nAmazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components. \n\nOption A is incorrect since the ordering of messages won't help in achieving high throughput\n\nOptions B and C are incorrect since these are not the responsibility of the SQS queue\n\nFor more information on AWS SQS Horizontal Scaling, please visit the below URL\n\nhttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-throughput-horizontal-scaling-and-batching.html#horizontal-scaling\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You're an architect for your company. Your IT admin staff needs access to newly created EC2 Instances for administrative purposes. Which of the following needs to be done to ensure that the IT admin staff can successfully connect via port 22 on to the EC2 Instances",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Adjust Security Group to permit egress traffic over TCP port 443 from your IP."
    }, {"id": "B", "markdown": "Configure the IAM role to permit changes to security group settings."}, {
        "id": "C",
        "markdown": "Modify the instance security group to allow ingress of ICMP packets from your IP."
    }, {
        "id": "D",
        "markdown": "Adjust the instance’s Security Group to permit ingress traffic over port 22."
    }, {"id": "E", "markdown": "Apply the most recently released Operating System security patches."}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - D\n\nA security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you associate one or more security groups with the instance. You add rules to each security group that allow traffic to or from its associated instances.\n\nFor connecting via SSH on EC2, you need to ensure that port 22 is open on the security group for the EC2 instance.\n\nOption A is wrong, because port 443 is for HTTPS and not for SSH.\nOption B is wrong because IAM role is not pertinent to security groups\nOption C is wrong because this is relevant to ICMP and not SSH\nOption E is wrong because it does not matter what patches are there on the system\n\nFor more information on EC2 Security groups, please visit the url \n\n \n\n\n\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html\n\n\n \n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is running a photo sharing website. Currently all the photos are stored in S3. At some point the company finds out that other sites have been linking to the photos on your site, causing loss to your business. You need to implement a solution for the company to mitigate this issue. Which of the following would you look at implementing?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Remove public read access and use signed URLs with expiry dates."}, {
        "id": "B",
        "markdown": "Use CloudFront distributions for static content."
    }, {"id": "C", "markdown": "Block the IPs of the offending websites in Security Groups."}, {
        "id": "D",
        "markdown": "Store photos on an EBS volume of the web server."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - A\n\nThe AWS Documentation mentions the following\n\nA pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permission to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.\n\nOption B is incorrect since CloudFront is only used for the distribution of content across edge or region locations. It is not used for restricting access to content\n\nOption C is incorrect since Blocking IP’s is challenging because they are dynamic in nature and you will not know which sites are accessing your main site\n\nOption D is incorrect since Storing photos on EBS volume is not a good practice or architecture approach for an AWS Solution Architect\n\nFor more information on serving private content please visit the URL\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have been hired as a consultant for a company to implement their CI/CD processes. They currently use an on-premises deployment of Chef for their configuration management on servers. You need to advise them on what they can use on AWS to leverage their existing capabilities. Which of the following service would you recommend?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Simple Workflow Service"}, {
        "id": "B",
        "markdown": "AWS Elastic Beanstalk"
    }, {"id": "C", "markdown": "AWS CloudFormation"}, {"id": "D", "markdown": "AWS OpsWorks"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nAWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments. OpsWorks has three offerings, AWS Opsworks for Chef Automate, AWS OpsWorks for Puppet Enterprise, and AWS OpsWorks Stacks.\n\nAll of the other options are incorrect since the only tool which works effectively with the Chef Configuration management tool is AWS OpsWorks.\n\nFor more information on AWS Opswork, please visit the url\n\n\n\thttps://aws.amazon.com/opsworks/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS consultant for a banking institute. They have deployed a digital wallet platform for clients using multiple EC2 instances in us-east-1 region. The application establishes a secure encrypted connection between clients & EC2 instances for each transaction using custom TCP port 5810.\n\nDue to the increasing popularity of this digital wallet, they are observing load on backend servers resulting in delay in transaction. For security purpose, all client IP address accessing this application should be preserved & logged. The technical team of banking institute is looking for a solution which will address this delay & also proposed solution should be compatible with millions of transactions done simultaneously. Which of the following is a recommended option to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Network Load Balancers with SSL certificate. Configure TLS Listeners on this NLB with custom security policy consisting of protocols & ciphers."
    }, {
        "id": "B",
        "markdown": "Use Network Load Balancers with SSL certificate. Configure TLS Listeners on this NLB with default security policy consisting of protocols & ciphers."
    }, {
        "id": "C",
        "markdown": "Use Network Load Balancers with SSL certificate. Configure TLS Listeners on this NLB with default security policy consisting of protocols & TCP port 5810."
    }, {
        "id": "D",
        "markdown": "Use Network Load Balancers with SSL certificate. Configure TLS Listeners on this NLB with custom security policy consisting of protocols & TCP port 5810."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nNetwork Load Balancer can be used to terminate TLS connections instead of back end instance reducing the load on this instance. With Network Load Balancers, millions of simultaneous sessions can be established with no impact on latency along with preserving client IP address. To negotiate TLS connections with clients, NLB uses a security policy which consists of protocols & ciphers.\n\n\n\tOption A is incorrect as Network Load Balancers does not support custom security policy\n\tOption C is incorrect as Network Load Balancers should consist of security policies comprising of Protocols & Ciphers.\n\tOption D is incorrect as Network Load Balancers does not support custom security policy as well as security policies should comprise of protocols & ciphers.\n\n\nFor more information on Security Policies for TLS termination on Network Load Balancers, refer to the following URL,\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You work as an architect for a company. There is a requirement for an application to be deployed on a set of EC2 Instances. These would be part of a compute cluster that requires low inter-node latency. Which of the following would you use for this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Multiple Availability Zones"}, {
        "id": "B",
        "markdown": "AWS Direct Connect"
    }, {"id": "C", "markdown": "EC2 Dedicated Instances"}, {
        "id": "D",
        "markdown": "Cluster placement Groups"
    }, {"id": "E", "markdown": "VPC private subnets"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – D\n\nThe AWS Documentation mentions the following\n\nAmazon Web Services' solution to reducing latency between instances involves the use of placement groups. As the name implies, a placement group is just that -- a group. AWS instances that exist within a common availability zone can be grouped into a placement group. Group members are able to communicate with one another in a way that provides low latency and high throughput.\n\nCluster Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both, and if the majority of the network traffic is between the instances in the group. To provide the lowest latency and the highest packet-per-second network performance for your placement group, choose an instance type that supports enhanced networking\n\nBecause of what is mentioned in the documentation, all other options are incorrect\n\nFor more information on AWS placement groups, please visit the URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company stores a large set of files in Amazon S3. They need to ensure that if any new files are added to an S3 bucket, an event notification would be sent to the IT admin staff. Which of the following could be used to fulfil this requirement? Choose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create an SNS topic"}, {
        "id": "B",
        "markdown": "Create an SQS queue"
    }, {"id": "C", "markdown": "Add an event notification to the S3 bucket"}, {
        "id": "D",
        "markdown": "Add an event notification to the S3 object"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and C\n\nThe AWS Documentation mentions the following\n\nThe Amazon S3 notification feature enables you to receive notifications when certain events happen in your bucket. To enable notifications, you must first add a notification configuration identifying the events you want Amazon S3 to publish, and the destinations where you want Amazon S3 to send the event notifications.\n\nGo in S3 bucket properties then events and choose the relevant event and select send to as SNS topic\n\n\n\n \n\nOption B is incorrect since you need to create an SNS topic that could be used to send an email to multiple IT administrators\n\nOption D is incorrect since the event notification needs to be placed on the bucket and not the object\n\nNOTE:\n\nOptions C and D are different.\n\nOption C: Add an event notification to the S3 bucket\n\nOption D: Add an event notification to the S3 object\n\nFor more information on AWS S3 notifications, please visit the URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on migrating code written in C# from their on-premises infrastructure onto AWS. They want to ensure to limit the amount of maintenance that would be required for the underlying infrastructure. Which of the following would they choose for hosting the code base?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Lambda"}, {"id": "B", "markdown": "AWS EC2"}, {
        "id": "C",
        "markdown": "AWS ECS"
    }, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running. With AWS Lambda, you can run code for virtually any type of application or backend service - all with zero administration\n\nWith Lambda you don't need to build, secure, or maintain a container. You just worry about the code\n\nEC2 - is simply a remote (virtual) machine.\n\nECS stands for Elastic Container Service. ECS is basically a logical grouping of EC2 Instances. Technically, ECS is a mere configuration for the efficient use and management of your EC2 instance(s) resources i.e. storage, memory, CPU, etc.\n\nTo simplify it further, if you have launched an Amazon ECS with no EC2 instances added to it, it's good for nothing i.e. you can't do anything about it. ECS makes sense only once one (or more) EC2 instances are added to it.\n\nOptions B and C are incorrect since here you would need to manage the underlying servers\n\nOption D is incorrect since this is a messaging service\n\nFor more information on AWS Lambda, please visit the URL\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/welcome.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. There is a requirement to ensure that instances in the Development and Test VPC's can access resources in the Production VPC for a limited amount of time. Which of the following would be the ideal way to get this in place?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an AWS Direct Connect connection between the Development, Test VPC to the Production VPC"
    }, {
        "id": "B",
        "markdown": "Create a separate VPC peering connection from Development to Production and from Test to the Production VPC"
    }, {
        "id": "C",
        "markdown": "Create a VPN connection between the Development, Test VPC to the Production VPC"
    }, {
        "id": "D",
        "markdown": "Create a VPC peering connection between the Development to the Production VPC and from Development to the Test VPC."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nOptions A and C are incorrect since this is only required for a short duration of time, hence you need to choose VPC peering\n\nOptions D is incorrect since the VPC Peering configuration mentioned would be invalid.\n\nYou need VPC Peering Configuration between Dev to Prod and Test to Prod\n\n\"A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. The VPCs can be in different regions (also known as an inter-region VPC peering connection).\"\n\n\n \n\nFor more information on VPC peering please visit the URL\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are designing the application architecture for a company. The architecture is going to consist of a web tier that will be hosted on EC2 Instances placed behind an Elastic Load Balancer. Which of the following would be considered as the basic requirements for the components of the application architecture? Choose 2 options:",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Determine the required I/O operations"}, {
        "id": "B",
        "markdown": "Determining the minimum memory requirements for an application"
    }, {"id": "C", "markdown": "Determining where the traffic has to be routed."}, {
        "id": "D",
        "markdown": "Determining what all licenses Client require for their applications in Instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and B\n\nYou should decide on what are requirements for the underlying EC2 Instance. You can then choose the Instance type for the underlying EC2 Instance\n\nOption C is incorrect since the ELB will take care of the distribution of traffic\n\nOption D is incorrect since this is not considered as basic requirement as it is something required inside the Instance\n\nFor more information on EC2 Instance types, please visit the URL\n\nhttps://aws.amazon.com/ec2/instance-types/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a requirement to host an application in AWS that requires access to a NoSQL database. But there are no human resources available who can take care of the database infrastructure. In addition to this, the database should have the capability to scale automatically based on demand and also have high availability. Which of the following databases would you use for this purpose?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "DynamoDB"}, {"id": "B", "markdown": "ElasticMap Reduce"}, {
        "id": "C",
        "markdown": "Amazon RDS"
    }, {"id": "D", "markdown": "Amazon Aurora"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAmazon DynamoDB is a nonrelational database that delivers reliable performance at any scale. It's a fully managed, multi-region, multi-master database that provides consistent single-digit millisecond latency, and offers built-in security, backup and restore, and in-memory caching.\n\nWith DynamoDB On-Demand, capacity planning is a thing of the past. You don't specify read and write capacity at all—you pay only for the usage of your DynamoDB tables. This fits perfectly with the Lambda and Serverless model—I pay more when I have more usage, which means I'm delivering more value to my customers.\n\nPreviously, you had to set read and write throughput capacity on your DynamoDB tables. This specified how many and how large of reads and writes you could make on your table in any given second. Read and write capacity units were charged by the hour, and your requests would be throttled if you exceeded your provisioned capacity in any given second.\n\nOption B is invalid since this is used for Big Data\n\nOption C is invalid since here you still have to partially manage the infrastructure\n\nOption D is invalid since this would allow you to host MySQL compatible databases\n\nFor more information on DynamoDB, please visit the URL\n\nhttps://aws.amazon.com/dynamodb/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS consultant for an online grocery store. They are using two-tier web application with web-servers hosted in VPC’s at us-east-1 region & on-premise data-centre. Network Load balancer is configured in front end to distribute traffic between these servers. All traffic between clients & servers is encrypted. To reduce load on back-end servers , they  are looking for an alternate solution to terminate TLS connection on this Network Load balancer.\n\nManagement team of this store has engaged you for suggesting a solution for certificate management used in case of TLS termination. Which of the following is preferred secure option to provision & store certificates to be used along with Network Load Balancer for terminating TLS?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use multiple certificates per TLS listener & If a hostname provided by a client matches multiple certificates in the certificate list, the load balancer selects all of the certificates"
    }, {
        "id": "B",
        "markdown": "Use TLS tools to generate a new certificate & upload in AWS Certificate Manager."
    }, {
        "id": "C",
        "markdown": "Use a single certificate per TLS listener provided by AWS Certificate Manager."
    }, {"id": "D", "markdown": "Use a single certificate with 4096 bits RSA keys for higher security."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nNetwork Load Balancer requires one certificate per TLS connection to encrypt traffic between client & NLB , & forward decrypted traffic to target servers. Using  AWS Certificate Manager is a preferred option, as these certificates are automatically renewed on expiry.\n\n\n\tOption A is incorrect as Network Load Balancer uses a smart certificate selection algorithm with support for Server Name Indication (SNI). If the hostname provided by a client matches a single certificate in the certificate list, the load balancer selects this certificate. If a hostname provided by a client matches multiple certificates in the certificate list, the load balancer selects the best certificate that the client can support.\n\tRefer section \"Certificate List\" under the link : https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html\n\tOption B is incorrect as this will increase admin work. Also, you will need to monitor expiry dates of certificates & renew these certificates before expiration. \n\tOption D is incorrect as Network Load Balancer do not support certificates with RSA bits higher than 2048 bits.\n\n\nFor more information on certificates for TLS termination on Network Load Balancers, refer to the following URL,\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on moving to the AWS Cloud. One of the Web applications will be launched on a set of EC2 Instances. You need to ensure that the architecture is fault tolerant and highly available. Which of the following would be considered during the design process. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Have a Single Availability Zone for the databases"}, {
        "id": "B",
        "markdown": "Use a load balancer in front of the EC2 Instances"
    }, {
        "id": "C",
        "markdown": "Ensure that the EC2 Instances are spread across multiple availability zones"
    }, {
        "id": "D",
        "markdown": "Ensure that the EC2 Instances are spread across a single availability zone for better maintenance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B and C\n\nThis is clearly mentioned in the AWS Documentation\n\nWhat Is Elastic Load Balancing?\n\nElastic Load Balancing distributes incoming application or network traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses, in multiple Availability Zones. Elastic Load Balancing scales your load balancer as traffic to your application changes over time and can scale to the vast majority of workloads automatically.\n\nLoad Balancer Benefits\n\nA load balancer distributes workloads across multiple compute resources, such as virtual servers. Using a load balancer increases the availability and fault tolerance of your applications.\n\nOption A is invalid because it will not increase the availability and fault tolerance of your applications\n\nOption D is invalid because you need to ensure that the Instances are spread across multiple availability zones\n\nFor more information on load balancing and availability of EC2 Instances, please visit the URL\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a global IT firm. You need to set up a pilot blockchain project in the US East region using Amazon Managed Blockchain. You have created multiple nodes for this project to perform a secure transactions within the Blockchain network. Which of the following peer node will be used as Resource Endpoint to verify & complete transactions with other members?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "ResourceID.MemberID.NetworkID.managedblockchain.us-east-1.amazonaws.com:PortNumber"
    }, {
        "id": "B",
        "markdown": "NetworkID.MemberID.ResourceID.managedblockchain.us-east-1.amazonaws.com:PortNumber"
    }, {
        "id": "C",
        "markdown": "MemberID.NetworkID.ResourceID.managedblockchain.us-east-1.amazonaws.com:PortNumber"
    }, {"id": "D", "markdown": "MemberID.ResourceID.NetworkID.managedblockchain.us-east-1.amazonaws.com:PortNumber"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer –  A\n\nIn AWS Managed Blockchain network , when any new member is created, a unique Id is assigned to these members. For any transaction between these members, each member should use following format “ResourceID.MemberID.NetworkID.managedblockchain.AWSRegion.amazonaws.com:PortNumber”.\n\n\n\tOptions B, C, & D are incorrect as format for resource endpoint is “ResourceID.MemberID.NetworkID.managedblockchain.us-east-1.amazonaws.com:PortNumber”\n\n\nFor more information on AWS Blockchain concepts, refer to following URL,\n\nhttps://docs.aws.amazon.com/managed-blockchain/latest/managementguide/network-components.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a start-up firm, working on a POC project, in which multiple EC2 instances are launched for an internal project to check Web application performance. During Test, you are observing a delay in new EC2 instance moving from booting to full load mode.\n\nYou perform another test to pre-warm EC2 instance by initiating EC2 instance into the desired mode & then moving to Hibernate state. You are looking for IP addressing changes post Hibernate state to provide this IP address details to Firewall Team. Which of the following is correct statement for IP address changes when EC2 instance is moved from Running state to Hibernate & back to Running state?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Both Public IPv4 and Private IPv4 are allocated with new IP while any IPv6 is retained"
    }, {
        "id": "B",
        "markdown": "Only Public IPv4 is allocated with new IP while Private IPv4 and any IPv6 are retained."
    }, {
        "id": "C",
        "markdown": "Only IPv6 is allocated with new IP while both Private IPv4 and Public IPv4 are retained."
    }, {
        "id": "D",
        "markdown": "All IP addresses allocated to EC2 instance are released & new IP address is allocated to EC2 instance post hibernation."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe instance retains its private IPv4 addresses and any IPv6 addresses when hibernated and started. AWS releases the public IPv4 address and assigns a new one when you start it.\n\nOption A is incorrect as when the EC2 instance is hibernated & restarted, there is no change in Private IPv4 address assigned to EC2 instance.\n\nOption C is incorrect as when the EC2 instance is hibernated & restarted, there is no change in Public IPv6 address assigned to EC2 instance.\n\nOption D is incorrect as when the EC2 instance is hibernated & restarted, there is a change in Public IPv4 address assigned to EC2 instance while no change in Private IPv4 & IPv6 address assigned to EC2 instance.\n\nFor more information on IP Address for EC2 in Hibernate state, refer to the following URL,\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#instance_hibernate\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As a solutions architect, it is your job to design for high availability and fault tolerance. Company-A is utilizing Amazon S3 to store large amounts of file data. You need to ensure that the files are still available in the case of an entire region facing an outage due to a natural disaster. How can you achieve this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Copy the S3 bucket to an EBS optimized backed EC2 instance"}, {
        "id": "B",
        "markdown": "Amazon S3 is highly available and fault tolerant by design and requires no additional configuration"
    }, {"id": "C", "markdown": "Enable Cross-Region Replication for the bucket"}, {
        "id": "D",
        "markdown": "Enable versioning for the bucket"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nCross-region replication is a bucket-level configuration that enables automatic, asynchronous copying of objects across buckets in different AWS Regions. We refer to these buckets as source bucket and destination bucket. These buckets can be owned by different AWS accounts.\n\nAWS services are designed with DR considerations in mind. S3, for example, achieves 99.999999999% durability and 99.99% availability by redundantly storing data across multiple AZs within a region. It may be rare for the whole AWS region to go down, but it could cause massive permanent damage if we don’t plan for it; this is when S3 Cross-Region Replication (CRR) solution comes into play.\n\nOption A is invalid because this is not the right way to take backups of an S3 bucket\n\nOption B is invalid because yes S3 will ensure objects are available in multiple availability zones but not across regions in case of a disaster\n\nOption D is invalid because versioning can only help from accidental deletion of objects but not from disaster recovery\n\n \n\nFor more information on Cross-Region Replication, please visit the URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html\n\nNOTE:\n\nMost organizations try to implement High Availability (HA) instead of DR to guard them against any downtime of services. In case of HA, we ensure there exists a fallback mechanism for our services. The service that runs in HA is handled by hosts running in different availability zones but in the same geographical region. This approach, however, does not guarantee that our business will be up and running in case the entire region goes down. DR takes things to a completely new level, wherein you need to be able to recover from a different region that’s separated by over 250 miles. Our DR implementation is an Active/Passive model, meaning that we always have minimum critical services running in different regions, but a major part of the infrastructure is launched and restored when required.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a set of virtual servers that need to be migrated to the AWS Cloud. These Instances are normally 70% utilized and used throughout most of the year. As a solutions architect which of the following Instance pricing model would you suggest?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Reserved instances"}, {
        "id": "B",
        "markdown": "On-demand instances"
    }, {"id": "C", "markdown": "Spot instances"}, {"id": "D", "markdown": "Regular instances"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nThe AWS Documentation mentions the following on the different instance pricing options\n\nAmazon EC2 provides the following purchasing options to enable you to optimize your costs based on your needs:\n\n\n\tOn-Demand Instances – Pay, by the second, for the instances that you launch.\n\tReserved Instances – Purchase, at a significant discount, instances that are always available, for a term from one to three years.\n\tSpot Instances – Request unused EC2 instances, which can lower your Amazon EC2 costs significantly.\n\n\nReserved Instances provide you with a significant discount (up to 75%) compared to On-Demand instance pricing\n\nOn-demand can be used but Reserved Instances are most cost-efficient in the given scenario\n\nOption B is incorrect because Reserved Instances are more effective\n\nOption C is incorrect because in Spot Instances Instance there is no commitment. As soon as the Bid price exceeds Spot price, a user gets the Instance. In an On-demand Instance, a user has to pay the On-demand rate specified by Amazon. Once they have bought the Instance they have to use it by paying that rate.\nIn Spot Instance, once the Spot price exceeds the Bid price, Amazon will shut the instance. The benefit to the user is that they will not be charged for the partial hour in which Instance was taken back from them.\n\nOption D is incorrect because there is nothing like Regular Instances in AWS.\n\nFor more information on instance pricing options, please visit the URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a set of EC2 Instances hosted on the AWS Cloud. There is a requirement to ensure the restart of instances if a CloudWatch metric goes beyond a certain threshold. As a solutions architect, how would you ask the IT admin staff to implement this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Look at the Cloudtrail logs for events and then restart the Instance based on the events"
    }, {
        "id": "B",
        "markdown": "Create a CloudWatch metric which looks into the instance threshold, and assign this metric against an alarm to reboot the instance."
    }, {"id": "C", "markdown": "Create a CLI script that restarts the server at certain intervals"}, {
        "id": "D",
        "markdown": "Use the AWS Config utility on the EC2 Instance to check for metrics and restart the server"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nUsing Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.\n\nOption A is incorrect because CloudTrail logs will provide event details and not metrics\n\nOption C is incorrect because we want to restart Instance as we reach a certain threshold but this way it will keep on restarting the Instance even without any threshold reach\n\nOption D is incorrect because AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources\n\nFor more information on using alarm actions, please visit the URL\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingAlarmActions.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a read-intensive application hosted in AWS. The application is currently using the MySQL RDS feature in AWS. The CloudWatch metrics are showing high read throughput on the database and are causing performance issues on the database. Which of the following can be used to reduce the read throughput on the MySQL database?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable the Multi-AZ on the MySQL RDS"}, {
        "id": "B",
        "markdown": "Use Cold Storage Volumes for the MySQL RDS"
    }, {"id": "C", "markdown": "Enable Read Replica"}, {"id": "D", "markdown": "Use SQS to queue up the reads"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nThe AWS documentation mentions the following on Read Replica\n\nAmazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This replication feature makes it easy to elastically scale out beyond the capacity constraints of a single DB Instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput. Read replicas can also be promoted when needed to become standalone DB instances.\n\nOption A is invalid since this is used for fault tolerance for the database\n\nOption B is invalid since this is not the ideal storage mechanism to use for databases which require high read throughput\n\nOption D is invalid since SQS is used as a decoupling component and would not be the ideal fit to reduce the reads on the database\n\nFor more information on Read Replica, please visit the below URL:\n\n\n\thttps://aws.amazon.com/rds/details/read-replicas/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a software company. You are working on a new project which involves an application, deployed on twenty C5 EC2 On-demand Instances with Elastic IP attached to each instance. During peak hours when you are initiating new instances, a considerable delay is observed. You perform a pilot test for the option of initiating these Instances and hibernating so that during peak hours, these instances could be quickly launched.\n\nIt works fine during a pilot phase and you are recommending this option to be implemented in production. The management team is concerned about the pricing of a large number of EC2 instances in the Hibernate state. What is considered to calculate the pricing for an EC2 instance in the Hibernate state?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Elastic IP address and EBS volumes attached to EC2 Instance"}, {
        "id": "B",
        "markdown": "Total Compute capacity per hour, Elastic IP address and EBS volumes attached to EC2 Instance"
    }, {"id": "C", "markdown": "Total Compute capacity per hour and EBS volumes attached to EC2 Instance"}, {
        "id": "D",
        "markdown": "Total Compute capacity per hour & Elastic IP address attached to EC2 Instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer –  A\n\nWhen an EC2 instance is in the Hibernate state, you pay only for the EBS volumes and Elastic IP Addresses attached to it.\n\n\n\tOptions B, C, and D are incorrect because, when an EC2 instance is in hibernate state, compute capacity charges are not applicable. The charges are only applicable for the EBS volumes and Elastic IP Addresses attached to it.\n\n\nFor more information on pricing for an EC2 instance in Hibernate state, refer to the following URL:\n\n https://aws.amazon.com/blogs/aws/new-hibernate-your-ec2-instances/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has started hosting their databases on the Amazon RDS. As an architect, they have requested you to advise the IT admin staff on what they should use to monitor the underlying databases and notifications should be sent to IT admin staff if any issues are detected. Which AWS services can accomplish these requirements? Choose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["B", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Simple Email Service"}, {
        "id": "B",
        "markdown": "Amazon CloudWatch"
    }, {"id": "C", "markdown": "Amazon Simple Queue Service (SQS)"}, {
        "id": "D",
        "markdown": "Amazon Route 53"
    }, {"id": "E", "markdown": "Amazon Simple Notification Service (SNS)"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B and E\n\nThe AWS Documentation mentions the following\n\nYou can monitor DB instances using Amazon CloudWatch, which collects and processes raw data from Amazon RDS into readable, near real-time metrics. These statistics are recorded for a period of two weeks, so that you can access historical information and gain a better perspective on how your web application or service is performing. \n\nOption A is invalid since this an email service and not a notification service\n\nOption C is invalid since this is a queuing service\n\nOption D is invalid since this is a domain name service\n\nFor more information on monitoring databases, please visit the below URL\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Monitoring.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has started hosting their data store on AWS by using the Simple Storage service. They are storing files which are downloaded by users on a frequent basis. After a duration of 3 months, the files need to transferred to archive storage since they are not used beyond this point. Which of the following could be used to effectively manage this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Transfer the files via scripts from S3 to Glacier after a period of 3 months"
    }, {
        "id": "B",
        "markdown": "Use Lifecycle policies to transfer the files onto Glacier after a period of 3 months"
    }, {
        "id": "C",
        "markdown": "Use Lifecycle policies to transfer the files onto Cold HDD after a period of 3 months"
    }, {"id": "D", "markdown": "Createa snapshot of the files in S3 after a period of 3 months"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B\n\nThe AWS Documentation mentions the following\n\nTo manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:\n\n\n\tTransition actions—Define when objects transition to another storage class. For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the GLACIER storage class one year after creating them.\n\tExpiration actions—Define when objects expire. Amazon S3 deletes expired objects on your behalf. The lifecycle expiration costs depend on when you choose to expire objects.\n\n\nOption A is invalid since there is already the option of lifecycle policies\n\nOption C is invalid since lifecycle policies are used to transfer to Glacier or S3-Infrequent Access\n\nOption D is invalid since snapshots are used for EBS volumes\n\nFor more information on S3 lifecycle policies, please visit the below URL\n\n\n\thttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on setting up a VPC with private and public subnets and then hosting EC2 Instances in the subnet. It has to be ensured that instances in the private subnet can download updates from the internet. Which of the following needs to be part of the architecture for this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "WAF"}, {"id": "B", "markdown": "Direct Connect"}, {
        "id": "C",
        "markdown": "NAT Gateway"
    }, {"id": "D", "markdown": "VPN"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nYou can use a network address translation (NAT) gateway to enable instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances\n\nOption A is invalid since this is a web application firewall\n\nOptions B and D are invalid since this are used to connect on-premises infrastructure to AWS VPC’s\n\nFor more information on NAT gateway, please visit the below URL\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpc-nat-gateway.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on the following architecture for their application\n\n\n\tA set of EC2 Instances hosting the web part of the application.\n\tA relational database for the backend\n\tA Load balancer for distribution of traffic\n\tA NAT gateway for routing traffic from the database server to the Internet\n\n\nWhich of the following architecture ensures high availability across all components?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "A Load balancer with one public subnet, one private subnet. The EC2 Instances placed in one Availability Zone. RDS with Multi-AZ Enabled. NAT Gateway in one availability zone."
    }, {
        "id": "B",
        "markdown": "A Load balancer with 2 public subnets, 2 private subnets. The EC2 Instances placed across 2 Availability Zones. RDS with Multi-AZ Enabled. NAT Gateways in each availability zone"
    }, {
        "id": "C",
        "markdown": "A Load balancer with 2 public subnets, 2 private subnets. The EC2 Instances placed in 2 Availability Zones. RDS with Multi-AZ Enabled. NAT Gateway in one availability zone"
    }, {
        "id": "D",
        "markdown": "A Load balancer with 2 public subnets, 2 private subnets. The EC2 Instances placed in one Availability Zone. RDS with Multi-AZ Enabled. NAT Gateway in one availability zone"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer: B\n\nIn a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.\n\nLet’s try to understand the scenario using a few use cases:\n\nDepending upon your appetite for risk, you might configure things differently...\n\nUse Case 1: A load balancer, one public subnet, one private subnet in same AZ, one NAT Gateway, and RDS with Multi-AZ\n\n\n\tThe NAT Gateway goes into the public subnet\n\tThe EC2 Instances go into the private subnet\n\tThe Route Table for the private subnet points to the NAT Gateway in the public subnet\n\n\nUse Case 2: A load balancer, two public subnets, two private subnets, one NAT Gateway, RDS with Multi-AZ\n\n\n\tThe NAT Gateway goes into one public subnet (Public-Subnet-A)\n\tThe EC2 instances are launched in private subnets across two AZs (Private-Subnet-A, Private-Subnet-B) or across same AZ ( Private-Subnet-A/Private-Subnet-B)\n\tThe Route Table for both of the private subnets point to the NAT Gateway\n\n\n \n\nHowever, if there is a failure with Availability Zone A (rare, but can happen), then the NAT Gateway is not reachable from Private-Subnet-B. Thus, the system may be impacted even though it is running across two AZs or single AZ.\n\n \n\nUse Case 3: A load balancer, two public subnets, two private subnets, two NAT Gateways, RDS with Multi-AZ\n\n\n\tThe NAT Gateway goes into both public subnets (Public-Subnet-A, Public-Subnet-B)\n\tThe EC2 instances are launched in private subnets across two AZs (Private-Subnet-A, Private-Subnet-B)\n\tThe Route Table Private-Subnet-A points to the NAT Gateway in Public-Subnet-A\n\tThe Route Table Private-Subnet-B points to the NAT Gateway in Public-Subnet-B\n\n\n \n\nIf one of the AZs should fail, then the EC2 instances in the remaining private subnet will still be able to communicate with the Internet because they have their own NAT Gateway in the same AZ.\n\nOption A) is incorrect because according to Use Case 1, High Availability is not ensured as\n\nWhen you enable an Availability Zone for your load balancer, Elastic Load Balancing creates a load balancer node in the Availability Zone. If you register targets in an Availability Zone but do not enable the Availability Zone, these registered targets do not receive traffic. Note that your load balancer is most effective if you ensure that each enabled Availability Zone has at least one registered target.\n\nWe recommend that you enable multiple Availability Zones. (Note that with an Application Load Balancer, we require you to enable multiple Availability Zones.) With this configuration, if one Availability Zone becomes unavailable or has no healthy targets, the load balancer can continue to route traffic to the healthy targets in another Availability Zone.\n\nOption B) is Correct because according to Use Case 3, High Availability is ensured.\n\nOption C) and D) are incorrect because according to Use Case 2, High Availability is not ensured as either if we have EC2 in single AZ or in multiple AZ, We have NAT Gateway in single AZ which is a cause for not ensuring High Availability.\n\nFor more information on Elastic Load Balancing, Multi-AZ and NAT gateway, please refer to the below URL’s\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has an AWS account and a lot of resources defined in the Frankfurt region. They want to track the changes to the resources in their account. Which of the following should be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Config"}, {"id": "B", "markdown": "AWS CloudTrail"}, {
        "id": "C",
        "markdown": "AWS CloudWatch"
    }, {"id": "D", "markdown": "AWS Opswork"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: B\n\nOption A is incorrect because AWS Config is a fully managed service that provides you with a resource inventory, configuration history, and configuration change notifications to enable security and governance. Also, you can discover existing AWS resources, export a complete inventory of your AWS resources with all configuration details, and determine how a resource was configured at any point in time.\n\nOption B is correct because this is an API monitoring service and using CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS management console, AWS SDKs, command-line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting. In addition, you can use CloudTrail to detect unusual activity in your AWS accounts.\n\nAlso, CloudTrail records the changes made to AWS Config including who made the change, vice versa may not true.\n\nOption C is invalid because this is a metric and logging service\n\nOption D is invalid because is used to deploy stacks of resources\n\nFor more information on AWS CloudTrail, please refer to the below URL\n\nhttps://aws.amazon.com/cloudtrail/\n\n \n\nCloudWatch and Config serve distinct use cases for monitoring and complements each other from the AWS ecosystem.\n\nConfig is typically used for auditing and compliance purposes across organizations to verify whether AWS resource changes being made are per compliance rules.\n\nCloudWatch is designed to provide performance information about AWS resources such as EC2, Lambda, etc. Developers can use information from CloudWatch to identify bottlenecks in applications or workflows.\n\nCloudWatch will help you to send alerts when CPU /Memory utilization reaches a certain threshold and browse metrics associated with CPU/Network to identify operational and security issues.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a Pharma company having operations in North America. The company has a corporate Data Centre in New York which includes Web Servers & Active Directory. As a part of migrating all services to the cloud, few services will be initially migrated to EC2 instances deployed in VPC at the us-east-1 region. The Pharma Company already has a managed AD server in AWS. You are planning to set up AWS SSO for this purpose so that users can sign in to AWS accounts using on-premise Active Directory credentials. You need to ensure that the proposed solution should consider the future growth of users and all users should be able to reset the password from anywhere.\n\nAlso, the highly available solution should be secure, cost-effective and ensure reliable performance with bandwidth requirement up-to 1.2 Gbps. What would be the most appropriate solution to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Setup a Direct-Connect between the Data Centre and VPC in us-east1. Create a Two-Way Trust relationship with on-premise Active Directory."
    }, {
        "id": "B",
        "markdown": "Setup a Direct-Connect between the Data Centre and VPC in us-east1. Create an AD Connector with on-premise Active Directory."
    }, {
        "id": "C",
        "markdown": "Setup a VPN connection between the Data Centre and VPC in us-east1. Create a Two-Way Trust relationship with on-premise Active Directory."
    }, {
        "id": "D",
        "markdown": "Setup a VPN connection between Data Centre & VPC in us-east1. Create an AD Connector with on-premise Active Directory."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS SSO can connect to On-Premise Active Directory so that users in on-premise Active-Directory can use AWS SSO to access AWS accounts & resources. Since the company is looking for a solution with future growth, there would be a necessity of 1.2 Gbps bandwidth for which VPN connection between Data Centre & VPC will be the most appropriate solution.\n\n\n\tOption A is incorrect because each connection consists of a single dedicated connection between ports on your router and an Amazon router. We recommend establishing a second connection if redundancy is required. When you request multiple ports at the same AWS Direct Connect location, they will be provisioned on redundant Amazon routers. To achieve high availability, we recommend you to have connections at multiple AWS Direct Connect locations. You can refer to the below URL to learn more about achieving highly available network connectivity. Setting up second connection will incur high costs whereas setting up a failover VPN connection will not incur high cost.\n\n\nhttps://aws.amazon.com/answers/networking/aws-multiple-data-center-ha-network-connectivity/\n\n\n\tOption B is incorrect as with AD Connector, users will not be able to reset passwords from AWS SSO, but only from On-Premise Active Directory. With AD Connector, AWS SSO does not cache user information & forward all requests to On-Premise Active Directory.\n\tOption C is correct as because VPN connection is encrypted and high available and have bandwidth up to 1.25 Gbps. \n\n\nhttps://aws.amazon.com/vpn/features/\n\n\n\tOption D is incorrect because, With AD Connector, users will not be able to reset passwords from AWS SSO, but only from On-Premise Active Directory. With AD Connector, AWS SSO does not cache user information and forward all requests to On-Premise Active Directory.\n\n\nA two-way trust relationship is required because when two-way trust relationships are created between AWS Managed Microsoft AD and an on-premises Active Directory, on-premises users can sign in with their corporate credentials to various AWS services and business applications.\n\nFor more information on connecting AWS SSO to On-Premise Active Directory, refer to the following URLs:\n\nhttps://docs.aws.amazon.com/singlesignon/latest/userguide/connectonpremad.html\n\nhttps://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_setup_trust.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning on hosting an application with the below architecture\n\n·         A lambda function which reads the metadata of objects from an S3 bucket\n\n·         The Lambda function then stores the metadata in DynamoDB and AWS RDS - MySQL\n\nWhich of the following needs to be in place to ensure the above architecture is high available?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Cross Region Replication for the S3 bucket"}, {
        "id": "B",
        "markdown": "Enable Lambda functions in Multiple Availability Zones"
    }, {"id": "C", "markdown": "Enabling Multi-AZ for the MySQL database"}, {
        "id": "D",
        "markdown": "Enable Auto-Scaling for the DynamoDB table"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nOption C is correct because In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.\n\nOption A is invalid because the S3 service is already a highly available service within a particular region. Also, Amazon S3 gives any developer access to the same highly scalable, highly available, fast, inexpensive data storage infrastructure that Amazon uses to run its own global network of web sites. The S3 Standard storage class is designed for 99.99% availability, the S3 Standard-IA storage class is designed for 99.9% availability, the S3 One Zone-IA storage class is designed for 99.5% availability, and the S3 Glacier and S3 Glacier Deep Archive class are designed for 99.99% availability and SLA of 99.9%. All of these storage classes are backed by the Amazon S3 Service Level Agreement\n\nOptions B is invalid because AWS Lambda already a highly available service in AWS, Refer below document.\n\nhttps://aws.amazon.com/lambda/features/\n\nOption D is invalid because High Availability is about availability; AS is about performance (usually throughput), also DynamoDB is high available by default. High Availability focuses on maintaining the liveness of the system in the presence of server or network failures whereas Auto Scaling just means adding more resources when demand increases. Refer the below document for DynamoDB reliability.\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\n\nFor more information on RDS Multi-AZ, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a set of EC2 Instances hosting a revenue generating applications. Some of the data on the root EBS volumes are critical to retain. Hence it has to be ensured that even after the instances are terminated, the EBS volumes will still remain intact. Which of the following needs to be done to ensure this requirement can be met?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable the DisableApiTermination for the EC2 Instance"}, {
        "id": "B",
        "markdown": "Make the attribute of DeleteOnTermination for the EBS volume to false"
    }, {
        "id": "C",
        "markdown": "Run the command, (aws ec2 delete-volume –f) in AWS Command Line Interface to disable deletion of volume on terminating Instances."
    }, {
        "id": "D",
        "markdown": "Run the command ( aws ec2 modify-instance-attribute  \\  --block-device-mappings 'DeviceName=/dev/sda1,Ebs={DeleteOnTermination-false} ) in AWS Command Line Interface to disable deletion of volume on terminating Instances"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nOption B is correct because When an instance is terminated, Amazon Elastic Compute Cloud (Amazon EC2) uses the value of the DeleteOnTermination attribute for each root EBS volume to determine whether to preserve or delete the volume when the instance is terminated. By default, the DeleteOnTermination attribute for the root volume of an instance is set to true, but it is set to false for all other volume types.\n\nTo preserve the root volume when an instance is terminated, change the DeleteOnTermination attribute for the root volume to false.\n\nOption A is invalid since the flag needs to be set on the EBS volume\n\nOption C is invalid because (-f) no such parameter exists as per AWS Documentation and moreover, this command is used to delete the volume, see the below correct syntax to delete a volume using CLI\n\naws ec2 delete-volume --volume-id vol-049df61146cXXXX\n\nOption D is invalid because command syntax is not correct, (=) should be used but (-) is used, see the actual syntax below\n\naws ec2 modify-instance-attribute\\ --instance-id i-1234567890abcdef0 \\ --block-device-mappings 'DeviceName=/dev/sda1,Ebs={DeleteOnTermination=false}'\n\n\nIn AWS Documentation, the format is given in JSON, so if you follow that you have to specify the JSON in a file mapping.json\n\n[{\\\"DeviceName\\\": \\\"/dev/sda1\\\",\\\"Ebs\\\":{\\\"DeleteOnTermination\\\":false}}]\n\nAnd run the command as below\n\naws ec2 modify-instance-attribute --block-device-mappings file://mapping.json\n\nIf you don't want to follow this, another syntax provided above is also correct\n\nFor more information on the Delete on termination flag, please refer to the below URL\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/deleteontermination-ebs/\n\nhttps://docs.aws.amazon.com/cli/latest/reference/ec2/modify-instance-attribute.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a set of EC2 Instances hosted in a VPC. The IT Security department has specified that they need to ensure they get a list of IP addresses for all sources that are making requests to the EC2 Instances. Which one of the following could help achieve this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS VPC Flow Logs"}, {"id": "B", "markdown": "AWS Cloudwatch"}, {
        "id": "C",
        "markdown": "AWS CloudFormation"
    }, {"id": "D", "markdown": "AWS Trusted Advisor"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nVPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC. Flow log data can be published to Amazon CloudWatch Logs and Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination.\n\nOption B is invalid since this is a monitoring service which can only give metrics and not the detailed IP address tracing for traffic flowing into EC2 Instances\n\nOption C is invalid since AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS\n\nOption D is invalid since this is only used as a recommendation service\n\nFor more information on VPC Flow logs, please refer to the below URL\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a financial company having intranet application hosted on AWS. They are using AWS SSO for granting access to users to AWS resources. During the annual security audit, Auditors have concerns on users sign-in process & prompted non-compliance for the security process when sign-in is observed from users using unknown locations or devices. Auditors are looking for enhancing security controls to be in place for such users. What would you use to improve the security process during user sign-in?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Enable Context-aware MFA with TOTP (time-based one-time passcodes) available in Auth App on MFA Device"
    }, {
        "id": "B",
        "markdown": "Enable Always-On MFA with TOTP (time-based one-time passcodes) available in Auth App on MFA Device"
    }, {
        "id": "C",
        "markdown": "Enable Always-On MFA with verification code sent to the user's email address."
    }, {"id": "D", "markdown": "Enable Context-aware MFA with verification code sent to the user's email address."}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer –  A\n\nOption A is correct because, for additional security, AWS SSO MFA can be enabled. After MFA is enabled, post login with authorized email & password, users are prompted for additional verification code which is generated on Authentication App like Google Auth on MFA Device ( MFA Device has to be registered first, Refer below document to see how to register MFA Device).\n\nWith Context-aware MFA, AWS SSO analyzes user sign-in context such as browser, location, and devices. If any deviation is observed, only then it asks for the additional second level of verification code. With this, a user does not have to perform MFA repeatedly from the same device.\n\n \n\nOption B is incorrect because with Always-on MFA, each time the user logs in to any cloud application, it would prompt for TOTP generated in Authentication App. This is true even if the user logs in from the same device. We need to authenticate only when Sign-In is observed from unknown locations or devices.\n\n \n\nEmail-based Verification code can be used also by enabling ‘Require Them to Provide a One-Time Password Sent by Email’  while configuring MFA, this is for the Users not having MFA Device registered. But email-based verification is not that much secure option.\n\nOption C is incorrect as with Always-on MFA, each time the user logs in to any cloud application, it would prompt for MFA verification code. This is true even if the user logs in from the same device.\n\nOption D could be a correct choice but it is not that much secure option.\n\nFor more information on enabling MFA on AWS SSO, refer to the following URL:\n\nhttps://docs.aws.amazon.com/singlesignon/latest/userguide/how-to-register-device.html\n\nhttps://docs.aws.amazon.com/singlesignon/latest/userguide/enable-mfa.html\n\nhttps://aws.amazon.com/about-aws/whats-new/2019/10/increase-aws-single-sign-on-security-with-multi-factor-authentication-using-authenticator-apps/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has just started using the AWS RDS service. They have an application making requests to a MySQL instance on this service. Due to the sudden surge of high requests, you need to ensure that the backup activities on the database do not interfere with the normal operation of the database. Which of the following would help in this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that the underlying instance type RDS instance is using General Purpose SSD storage. This type of storage will give minimal impact on such operations."
    }, {
        "id": "B",
        "markdown": "Ensure that the underlying instance type RDS instance is using Enhanced Networking. This type of setting will give minimal impact on such operations."
    }, {
        "id": "C",
        "markdown": "Ensure that the Multi-AZ feature has been enabled for the underlying RDS Instance."
    }, {"id": "D", "markdown": "Ensure that cross-region replication is enabled for the underlying RDS Instance."}],
    "answerExplanation": "\n                            Explanation:\n                            Option C is correct because, In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to a standby replica to provide data redundancy, eliminate I/O freezes, and minimize latency spikes during system backups. Running a DB instance with high availability can enhance availability during planned system maintenance, and help protect your databases against DB instance failure and Availability Zone disruption.\n\nWe know that during the backups, for instance taking snapshots, there is usually an I/O consumption that takes place. To avoid this when using a multi-AZ enabled RDS database engine, create a backup on the standby instance. With automated backups, I/O activity is no longer suspended on your primary during your preferred backup window, since backups are taken from the standby\n\nOptions A and B are incorrect because, by using General Purpose SSD Storage or using Enhanced networking, our backup activities will interfere with normal database operation.\n\nOption D is incorrect, Cross-region replication not required as it is Asynchronous replication.\n\nhttps://aws.amazon.com/rds/faqs/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application that needs to be hosted on an EC2 Instance. The general amount of throughput data per volume will be in the range of 400-500 MiB/s from the application. Which of the following should be used as the storage type for the underlying EC2 Instance in a Cost-effective manner?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS - General Purpose SSD"}, {
        "id": "B",
        "markdown": "EBS - Provisioned IOPS SSD"
    }, {"id": "C", "markdown": "EBS - Throughput Optimized HDD"}, {"id": "D", "markdown": "EBS - Cold HDD"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nWhen you want high throughput, you should choose using the Throughput Optimized EBS volume. The below snapshot from the AWS Documentation shows the features of the different types of volumes.\n\n\n\n \n\nAs per the above document, Option A), B) and D) stands invalid\n\nFor more information on the EBS volume types, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has setup their application in AWS. It consists of a web tier hosted on a set of EC2 Instances. These instances interact with a MongoDB database server located in a private subnet. The web tier also interacts with many service-based applications in the private subnet. A NAT Instance is being used to route traffic from the instances in the private subnet to the Internet. The IT Administrative team is now getting Cloudwatch alerts that the NAT Instance is going beyond its threshold value for Network Activity. Which of the following would you advise to increase the performance of this architecture?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Place the database server and application servers in the public subnet."
    }, {
        "id": "B",
        "markdown": "Place the NAT instance closer to the database servers by placing them in the private subnet"
    }, {"id": "C", "markdown": "Use the NAT gateway service instead of the NAT Instance"}, {
        "id": "D",
        "markdown": "Use a VPN connection for the Instances in the private subnet"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe below snapshot from the AWS Documentation shows a partial comparison of the NAT Instance and NAT Gateway. You should consider using the NAT gateway for higher bandwidth requirements\n\n\n\n \n\nOption A is incorrect since you should not change the architecture of the database or application servers since this would result in security issues\n\n \n\nOption B is incorrect since this would still alleviate the current network issue\n\nOption D is incorrect since the NAT instance should be used to route traffic to the Internet from the Instances in the private subnet\n\nFor more information on the comparison between NAT Instances and the NAT gateway, please refer to the below URL\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is currently hosting a long-running heavy load application on its On-premise environment. The company has developed this application in-house. Consulting companies then use this application via API calls. You now need to consider moving this application to AWS. Which of the following services would best be suited in the architecture design, which would also help deliver a cost-effective solution? Choose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Lambda"}, {"id": "B", "markdown": "AWS API Gateway"}, {
        "id": "C",
        "markdown": "AWS Config"
    }, {"id": "D", "markdown": "AWS EC2"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and D\n\nOption A might be a valid choice but the question specifies heavy load application which may lead to a need for time-out of API greater than 15min. As per AWS documentation, AWS Lambda can handle max time-out of up to 15 minutes. In this case, the application may take more time to run.\n\nOption B is correct because Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. With a few clicks in the AWS Management Console, you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, or any web application.\n\nOption C is incorrect since this is a configuration service available from AWS.\n\nOption D is correct because EC2 would fit for using API calls for the application. For more information on AWS EC2 and the API gateway, please refer to the below URL       \n\nhttps://aws.amazon.com/api-gateway/\n\nhttps://aws.amazon.com/ec2\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on the following architecture for their application\n\n \n\n·         A set of EC2 Instances hosting the web part of the application.\n\n·         A relational database for the backend\n\n·         A Load balancer for distribution of traffic\n\nDue to the critical nature of the data stored on the underlying EBS volumes attached to the EC2 Instances, As a Solutions Architect of the Company, your supervisor has asked you to follow best backup practices to make sure data is available in another region for disaster recovery purposes. Which of the following would you consider complying with this requirement",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a copy of the volume in another region."}, {
        "id": "B",
        "markdown": "Create a snapshot of the volume in another region."
    }, {"id": "C", "markdown": "Create a snapshot. Copy the snapshot to the new region."}, {
        "id": "D",
        "markdown": "Create a copy of the volume. Copy the volume to the new region."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation showcases the use  cases of EBS snapshots\n\nUse Cases\n\n \n\n\n\tGeographic expansion: Launch your applications in a new region.\n\tMigration: Move an application to a new region, to enable better availability and to minimize cost.\n\tDisaster recovery: Back up your data and logs across different geographical locations at regular intervals. In case of disaster, you can restore your applications using point-in-time backups stored in the secondary region. This minimizes data loss and recovery time.\n\tEncryption: Encrypt a previously unencrypted snapshot, change the key with which the snapshot is encrypted, or, for encrypted snapshots that have been shared with you, create a copy that you own in order to restore a volume from it.\n\tData retention and auditing requirements: Copy your encrypted EBS snapshots from one AWS account to another to preserve data logs or other files for auditing or data retention. Using a different account helps prevent accidental snapshot deletions, and protects you if your main AWS account is compromised.\n\n\n \n\n \n\nOptions A and D are incorrect, since you need to create a snapshot\n\n \n\nOption B is incorrect since you cannot directly create a snapshot in another region\n\nFor more information on EBS Snapshot copy, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application consists of a fleet of EC2 Instances. These Instances are launched in the Oregon (us-west-2) region which consists of 3 availability zones. This application needs 6 Instances running at all times. As an architect, you need to distribute the instances in such a way that the application could still maintain its capacity if any availability zone goes down. Also, you need to ensure that the cost is kept to a minimum? Which of the following configurations would you consider?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "6 Instances running in us-west-2a, 6 Instances running in us-west-2b, 6 Instances running in us-west-2c"
    }, {
        "id": "B",
        "markdown": "3 Instances running in us-west-2a, 3 Instances running in us-west-2b, 3 Instances running in us-east-2c"
    }, {
        "id": "C",
        "markdown": "6 Instances running in us-west-2a, 3 Instances running in us-west-2b, 3 Instances running in us-west-2c"
    }, {
        "id": "D",
        "markdown": "3 Instances running in us-west-2a, 3 Instances running in us-west-2b, 3 Instances running in us-west-2c"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nSo now let’s look at Option A\n\nIf any availability zone goes down, we will have a total of 12 instances running. This is an additional 6 over the requirement of the question and will result in a higher cost.\n\nSo now let’s look at Option B\n\nIf the availability zone us-west-2a goes down, then you will have only 3 instances running. Because other 3 instances are running in us-east-2c region\n\nSo now let’s look at Option C\n\nIf either us-west-2b or us-west-2c availability zone goes down, we will have a total of 9 instances running. This is an additional 3 over the requirement of the question and will result in a higher cost.\n\nSo now let’s look at Option D\n\nIf either us-east-2a or us-west-2b or us-west-2c availability zone goes down, there will be a total of 6 instances running, which is what we need\n\nFor more information on Regions and Availability zones, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a set of EC2 Instances in a custom VPC. You have installed a web application and need to ensure that only HTTP and HTTPS traffic is allowed into the instance. Which of the following would you consider for this requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add a security group rule to allow HTTP and HTTPS Traffic"}, {
        "id": "B",
        "markdown": "Add a security group rule to an explicit DENY all traffic and a default allow on HTTP and HTTPS Traffic"
    }, {
        "id": "C",
        "markdown": "Add a security group rule to deny explicit traffic on HTTP and HTTPS Traffic"
    }, {"id": "D", "markdown": "Add a security group rule to allow all traffic"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A \n\nOption A is correct because we need to specify the allowed traffic in Security group i.e. HTTP and HTTPS Traffic must be allowed from all sources.  No inbound traffic is allowed by default. By adding security group rules, you can specify which traffic you want to allow. This is essentially a whitelist.\n\nOptions B is incorrect since by default nothing is allowed and in Security group we can’t specify what is denied. We don’t have any deny option in Security Groups.\n\nOption C is incorrect because in Security group we can specify what is allowed but not what is denied. If you want to deny explicitly, you should use Network Access control list.\n\nOption D is incorrect since this would be a security issue.\n\nFor more information on VPC Security groups, please refer to the below URL \n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application defined with the following architecture\n\n\n\tA fleet of EC2 Instances which are used to accept video uploads from users.\n\tA fleet of EC2 Instances which are used to process the video uploads.\n\n\nWhich of the following would help architect an operationally excellent architecture?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create an SQS queue to store the information for Video uploads. Spin up the processing servers via an Autoscaling Group. Ensure the Group scales based on the Memory utilization of the underlying processing servers"
    }, {
        "id": "B",
        "markdown": "Create an SQS queue to store the information for Video uploads. Spin up the processing servers via an Autoscaling Group. Ensure the Group scales based on the size of the queue"
    }, {
        "id": "C",
        "markdown": "Create an SNS topic to store the information for Video uploads. Spin up the processing servers via an Autoscaling Group. Ensure the Group scales based on the Memory utilization of the underlying processing servers"
    }, {
        "id": "D",
        "markdown": "Create an SNS topic to store the information for Video uploads. Spin up the processing servers via an Autoscaling Group. Ensure the Group scales based on the size of the queue messages"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThis architecture is also given in the AWS Documentation\n\n\n\n \n\n\n\tOption A is incorrect the ideal approach is to scale the instances based on the size of queue.\n\n\n \n\n\n\tOptions C and D are incorrect since you should be using SQS queues. SNS topics are used for notification purposes.\n\n\n \n\n\n\tFor more information on using SQS queues for Autoscaling, please refer to the below URL\n\t\n\t\thttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html\n\t\n\t\n\n\n \n\nAs per AWS,\nYou can use the number of messages stored in an SQS queue as an indicator of the amount of work that is waiting in line for eventual processing within an Auto Scaling Group comprised of a variable number of EC2 instances. Each SQS queue reports a number of metrics to CloudWatch at five minute intervals, including ApproximateNumberOfMessagesVisible. If your workload is spikey in nature, you may want to build an application that can respond more quickly to changes in the size of the queue.\n\nMemory utilization metrics is a custom metric.  For this, to work, you need to install Cloudwatch agent on the EC2 instances and need to aggregate the dimensions.  \nHowever, AWS already has a well-defined architecture based on SQS Queuelength being used for Autoscaling EC2 instances.\n\n\n\tFor more information please refer:\n\t\n\t\thttps://aws.amazon.com/blogs/aws/auto-scaling-with-sqs/\n\t\n\t\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an application that currently produces a lot of data streams that need to be processed in real-time. They need to do some custom processing for their internal analysis. Which of the following can be used to help fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Kinesis Data Firehose"}, {
        "id": "B",
        "markdown": "AWS Kinesis Data Streams"
    }, {"id": "C", "markdown": "AWS Athena"}, {"id": "D", "markdown": "AWS Redshift"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nYou can use Amazon Kinesis Data Streams to collect and process large streams of data records in real-time. Kinesis data streams are highly customizable and best suited for developers building custom applications or streaming data for specialized needs whereas Firehose handles loading data streams directly into AWS products for processing.\n\nYou should use Kinesis Data Streams if you want to do some custom processing with streaming data. With Kinesis Data Firehose you are simply ingesting it into S3, Redshift or ElasticSearch.\n\nOption A is incorrect since Company needs to do customized processing for which data streams are best suited and also data needs to be processed in real-time, Firehose is nearly real-time but not exactly real-time.\n\nOption C is incorrect since is used for getting data via SQL queries from data sources such as S3\n\nOption D is incorrect since is used for petabyte data storage\n\nFor more information on AWS Data Streams and Firehose, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/streams/latest/dev/introduction.html\n\nhttps://aws.amazon.com/kinesis/data-firehose/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has an Amazon Aurora cluster setup. They have setup a Lambda function which needs to insert records into a DynamoDB table. The Amazon Aurora cluster needs to invoke the Lambda. Which of the following need to be in place for this setup to work. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that the Lambda function has an IAM Role assigned to it which can be used to invoke functions on Amazon Aurora"
    }, {
        "id": "B",
        "markdown": "Ensure that the Amazon Aurora cluster has an IAM Role which allows it to invoke Lambda functions"
    }, {
        "id": "C",
        "markdown": "Allow the Lambda function to allow outbound communication to Amazon Aurora"
    }, {
        "id": "D",
        "markdown": "Allow the Amazon Aurora cluster to allow outbound communication to the Lambda function"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and D\n\nThe below snapshot from the AWS Documentation shows what are the different steps required to ensure that the Lambda function has access to Amazon Aurora\n\n\n\nOptions A and C are incorrect since the configurations need to be the other way around\n\nFor more information on invoking AWS Lambda using Aurora, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Integrating.Lambda.html#AuroraMySQL.Integrating.LambdaAccess\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your application consists of a set of EC2 Instances that are spun up as part of an Auto scaling group. These Instances need to access objects in an S3 bucket. Which of the following is the ideal approach to ensure this access is set in place?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that the Access Keys are picked up from another S3 bucket. Access Keys can be embedded in the User data during Instance Launch."
    }, {
        "id": "B",
        "markdown": "Ensure that the launch configurations in Auto scaling group have an IAM Role to access S3 Objects"
    }, {
        "id": "C",
        "markdown": "Ensure that an IAM policy is attached to the S3 bucket which allows access to the S3 buckets."
    }, {
        "id": "D",
        "markdown": "Ensure that the launch configurations in Auto scaling group have an IAM user to access S3 Objects."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nApplications must sign their API requests with AWS credentials. Therefore, if you are an application developer, you need a strategy for managing credentials for your applications that run on EC2 instances. For example, you can securely distribute your AWS credentials to the instances, enabling the applications on those instances to use your credentials to sign requests, while protecting your credentials from other users. However, it's challenging to securely distribute credentials to each instance, especially those that AWS creates on your behalfs, such as Spot Instances or instances in Auto Scaling groups. You must also be able to update the credentials on each instance when you rotate your AWS credentials.\n\nWe designed IAM roles so that your applications can securely make API requests from your instances, without requiring you to manage the security credentials that the applications use.\n\nA launch configuration is an instance configuration template that an Auto Scaling group uses to launch EC2 instances\n\nFor details about launch configurations, please refer below URL\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html\n\nOption A is incorrect since using Access keys is the least secure option\n\nOption C is incorrect since the IAM policy is not the right option, you have to use IAM Roles instead. Also, attaching IAM role should be a part of Launch Configurations.  \n\nOption D is incorrect since you need to use IAM Roles and not IAM Users\n\nTo understand the basic difference between IAM Roles and Users:\n\nIAM controls: Who can do What in your AWS account. Who (Authentication) in IAM is defined using users/groups and roles means what (Authorization) defined by policies.\n\nUser - End-user think about people\n\nGroups- a set of users under one set of permission(policies)\n\nRoles - are used to grant specific permission to specific users for a set of duration of time.\n\nFor more information on IAM Roles for EC2, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are an architect for a company that is going to be hosting an application in AWS. They want to load balance the traffic based on which route the user chooses. The 2 possible routes for the application are /customer and /orders. Which of the following would you include in the design?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Application Load Balancer"}, {
        "id": "B",
        "markdown": "EC2 Container service"
    }, {"id": "C", "markdown": "Classic Load Balancer"}, {"id": "D", "markdown": "Docker containers on EC2 Instances"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe below snapshot from the AWS Documentation shows the benefits of using the Application Load balancer\n\n\n\n \n\nOptions B and D are incorrect since we don’t have enough information on the question to decide on whether to use Docker containers or not.\n\n \n\nOption C is invalid since Classic Load balancers will not fit the requirement for route-based load balancing\n\nFor more information on the Application Load Balancer, please refer to the below URL\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on the following architecture for their application\n\n·         A set of EC2 Instances hosting the web part of the application.\n\n·         A relational database for the backend using the AWS RDS MySQL service\n\n·         A Load balancer for distribution of traffic\n\nThere is a requirement to ensure that all data hosted in the database service is encrypted at rest. How can you achieve this requirement in the easiest manner? (Select 2)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Encrypt the underlying EBS volumes for the database"}, {
        "id": "B",
        "markdown": "Use the Encryption feature for RDS"
    }, {"id": "C", "markdown": "Use S3 server-side encryption"}, {
        "id": "D",
        "markdown": "Use AWS Key Management Service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and D\n\nThe AWS Documentation mentions the following\n\nOption B is correct because, With RDS-encrypted resources, data is encrypted at rest, including the underlying storage for a database (DB) instance, its automated backups, read replicas, and snapshots. This capability uses the open standard AES-256 encryption algorithm to encrypt your data, which is transparent to your database engine.\n\nThis encryption option protects against physical exfiltration or access to your data bypassing the DB instances. It is therefore critical to complement encrypted resources with an effective encryption key management and database credential management practice to mitigate any unauthorized access. Otherwise, compromised credentials or insufficiently protected keys might allow unauthorized users to access the plaintext data directly through the database engine.\n\nEncryption key management is provided using the AWS KMS\n\nOption D is correct because Amazon RDS encrypts your databases using keys you manage with the AWS Key Management Service (KMS). On a database instance running with Amazon RDS encryption, data stored at rest in the underlying storage is encrypted, as are its automated backups, read replicas, and snapshots. RDS encryption uses the industry-standard AES-256 encryption algorithm to encrypt your data on the server that hosts your RDS instance.\n\nOptions C is incorrect because this is used for encryption of objects in S3.\n\nOption A is incorrect since this can be easily achieved using the encryption at rest feature for AWS RDS.\n\nThe term 'rest' means when data is resting (not in transition-while data is traveling to database\n\nFor more information on Encryption for AWS RDS, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html\n\nhttps://aws.amazon.com/blogs/database/selecting-the-right-encryption-options-for-amazon-rds-and-amazon-aurora-database-engines/\n\nhttps://aws.amazon.com/rds/features/security/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on hosting an application that will be based on Docker containers. They need to setup an orchestration service that would automatically scale based on the load. As much as possible , the company does not want the burden of managing the underlying infrastructure. Which of the following can assist in this scenario?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS ECS with service Auto Scaling"}, {
        "id": "B",
        "markdown": "Use an Elastic Load Balancer in front of an EC2 Instance. Use Docker containers on the EC2 Instance."
    }, {"id": "C", "markdown": "Use Auto Scaling with Spot Instances for the Orchestration Service."}, {
        "id": "D",
        "markdown": "Install and use Kubernetes on the EC2 Instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nAWS Documentation mentions the following\n\nYour Amazon ECS service can optionally be configured to use Service Auto Scaling to adjust its desired count up or down in response to CloudWatch alarms. Service Auto Scaling leverages the Application Auto Scaling service to provide this functionality. Service Auto Scaling is available in all regions that support Amazon ECS.\n\nAmazon ECS publishes CloudWatch metrics with your service’s average CPU and memory usage. You can use these service utilization metrics to scale your service out to deal with high demand at peak times, and to scale your service in to reduce costs during periods of low utilization.\n\nOptions B is incorrect because load balancer won’t help scale up, but Auto Scaling can be used with a load balancer which is not mentioned in the question. Moreover, if all the things are in place then also this architecture would involve a lot of manual maintenance.\n\nOption D is incorrect since this would involve a lot of manual maintenance\n\nOption C is incorrect since Spot Instances are volatile and should not be used for the orchestration service\n\nFor more information on AWS ECS with Auto Scaling, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team has an application hosted on AWS. This application currently interacts with a DynamoDB table which has the Read capacity set to 10. Based on recent cloudwatch alarms which indicated that throttling was occurring in the requests to the DynamoDB table. Which of the following would help ensure the issue was resolved now and also help ensure the issue does not occur in the future?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Add an Elastic Load Balancer in front of the DynamoDB table."}, {
        "id": "B",
        "markdown": "Change the Read Capacity for the table to 20."
    }, {"id": "C", "markdown": "Change the Write capacity for the table to offset the Read capacity."}, {
        "id": "D",
        "markdown": "Enable Autoscaling for the underlying DynamoDB table."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nDynamoDB auto scaling uses the AWS Application Auto Scaling service to dynamically adjust provisioned throughput capacity on your behalf, in response to actual traffic patterns. This enables a table or a global secondary index to increase its provisioned read and write capacity to handle sudden increases in traffic, without throttling. When the workload decreases, Application Auto Scaling decreases the throughput so that you don't pay for unused provisioned capacity.\n\nYou can optionally allow DynamoDB Auto-scaling to manage your table's throughput capacity. However, you still must provide initial settings for read and write capacity when you create the table. DynamoDB auto scaling uses these initial settings as a starting point and then adjusts them dynamically in response to your application's requirements. \n\nAs your application data and access requirements change, you might need to adjust your table's throughput settings. If you're using DynamoDB Auto-scaling, the throughput settings are automatically adjusted in response to actual workloads. You can also use the UpdateTable operation to manually adjust your table's throughput capacity. You might decide to do this if you need to bulk-load data from an existing data store into your new DynamoDB table.\n\nFor more details, please refer to below URL:\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html\n\nhttps://aws.amazon.com/blogs/database/amazon-dynamodb-auto-scaling-performance-and-cost-optimization-at-any-scale/\n\nOption A is incorrect since the Elastic Load balancer in front of the DynamoDB table won’t help increase the capacity of DynamoDB. Here, We need to scale up and down the capacity automatically based on the requirement.\n\nOption B is incorrect since this would only help in temporarily resolving the situation\n\nOption C is incorrect since provisioning Write capacity would not help in this case\n\nFor more information on DynamoDB Autoscaling, please refer to the below URL\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team is developing Lambda functions. These functions would need to interact with databases belonging to different environments. Which of the following is the ideal approach to ensuring that the Lambda functions are designed in the right way to interact with Databases in multiple environments?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a lambda function for each environment"}, {
        "id": "B",
        "markdown": "Create a lambda function for each environment and ensure each has a different programming language"
    }, {
        "id": "C",
        "markdown": "Make use of environment variables to store the database connecting strings"
    }, {"id": "D", "markdown": "Make use of AWS Lambda tags to store the database connecting strings"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nEnvironment variables for Lambda functions enable you to dynamically pass settings to your function code and libraries, without making changes to your code. Environment variables are key-value pairs that you create and modify as part of your function configuration, using either the AWS Lambda Console, the AWS Lambda CLI or the AWS Lambda SDK. AWS Lambda then makes these key-value pairs available to your Lambda function code using standard APIs supported by the language, like process.env for Node.js functions.\n\nYou can use environment variables to help libraries know what directory to install files in, where to store outputs, store connection and logging settings, and more. By separating these settings from the application logic, you don't need to update your function code when you need to change the function behavior based on different settings.\n\nOption A is invalid since creating a lambda function for each environment will create overhead.\n\nOption B is invalid since creating a lambda function for each environment will create overhead and using different programming languages makes no sense.\n\nOption D is invalid since, you can tag Lambda functions to organize them by owner, project or department. Tags are freeform key-value pairs that are supported across AWS services for use in filtering resources and adding detail to billing reports. It is not used to store such connection strings.\n\nFor more information on AWS Lambda environment variables, please refer to the below URL.\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/env_variables.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team has been instructed to develop an application that will make use of a DynamoDB table. During the design stage, you have to provide inputs to ensure that an optimal strategy is employed for a high read and write expectancy on the underlying DynamoDB table. Which of the following would you consider?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Consider a lesser number of partition keys for the underlying table"
    }, {
        "id": "B",
        "markdown": "Use partition keys with a large number of distinct values for the underlying table"
    }, {
        "id": "C",
        "markdown": "Use partition keys with a small number of distinct values for the underlying table"
    }, {"id": "D", "markdown": "Use partition keys with the number data type only"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nDynamoDB is optimized for uniform distribution of items across a table's partitions, no matter how many partitions there may be. We recommend that you choose a partition key that can have a large number of distinct values relative to the number of items in the table.\n\nDynamoDB stores data as groups of attributes, known as items. Items are similar to rows or records in other database systems. DynamoDB stores and retrieves each item based on the primary key value which must be unique.\n\nWhen an Amazon DynamoDB table is created, you can specify the desired throughput in Reads per second and Writes per second. The table will then be provisioned across multiple partitions sufficient to provide the requested throughput.\n\nYou do not have visibility into the number of partitions created -- it is fully managed by DynamoDB. Additional partitions will be created as the quantity of data increases or when the provisioned throughput is increased.\n\nLet's say you have requested 1000 Reads per second and the data has been internally partitioned across 10 partitions. Each partition will provide 100 Reads per second. If all Read requests are for the same partition key, the throughput will be limited to 100 Reads per second. If the requests are spread over a range of different values, the throughput can be the full 1000 Reads per second.\n\nIf multiple queries are made for the same Partition Key, it may result in a limited available throughput.\n\nLet’s try to understand with a real-world example, Think of it as a bank with lines in front of teller windows. If everybody lines up at one teller, fewer customers can be served. It is more efficient to distribute customers across many different teller windows. A good partition key for distributing customers might be the customer number since it is different for each customer. A poor partition key might their zip code because they all live in the same area near the bank.\n\nAll other Options are incorrect since option B is the most optimal choice.\n\nFor more information on how to choose your partition key wisely, please refer to the below URL\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.Partitions.html\n\nhttps://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for an enterprise customer. Users access Amazon S3 buckets to save all project-related documents and also use business applications like Office 365 for daily work activities. These applications need to be accessible from any device for a limited number of hours in the day.\n\nThey are using AWS SSO to centrally manage and control access to AWS resources. Users are complaining that after each hour, they are getting logout from console & need to re-login. You need to ensure that the User session is optimum based upon the time required to complete the activity. Which of the following can be set to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a custom Permission Set with session duration as 24 hours"}, {
        "id": "B",
        "markdown": "Use an existing Job Function policy to set session duration as 24 hours"
    }, {"id": "C", "markdown": "Create a custom Permission Set with session duration as 6 hours"}, {
        "id": "D",
        "markdown": "Use an existing Job Function policy to set session duration as 6 hours"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nCorrect Answer –  C\n\nPermission sets can control time duration for user login to the AWS Console by setting session duration. The Default Session duration is 1 hour while the maximum can be set to 12 hours. Post this session duration, the user is automatically logout.\n\nAWS Single Sign-On (SSO) enables you to customize the session duration to AWS accounts ranging from 1 hour up to 12 hours. You can configure session duration for each permission set so that you can optimize how long your users can access the AWS Management Console and AWS CLI for your AWS accounts. For example, when your users need to run long-running operations, you can increase the session duration so that your users can complete the operation using a single session.\n\n\n\tOption A is incorrect as the maximum Session duration that can be set is 12 hours.\n\tOption B is incorrect. This will use predefined AWS managed policies since the requirement is for customized permission policy for session duration. Also, the maximum Session duration that can be set is 12 hours.\n\tOption D is incorrect. This will use predefined AWS managed policies since the requirement is for customized permission policy for session duration.\n\n\nFor more information on Permission Set properties in AWS SSO, refer to the following URL:\n\nhttps://aws.amazon.com/about-aws/whats-new/2018/10/aws-single-sign-on-now-enables-you-to-optimize-how-long-you-can-access-aws-accounts/\n\nhttps://docs.aws.amazon.com/singlesignon/latest/userguide/howtosessionduration.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a set of applications hosted on AWS. Currently, the IT Admin is manually checking the database storage to see if it is getting full. Which of the following can be used to automate these checks? (Select 2)",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "CloudTrail"}, {"id": "B", "markdown": "Cloudwatch"}, {
        "id": "C",
        "markdown": "VPC Flow Logs"
    }, {"id": "D", "markdown": "AWS Trusted Advisor"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and D\n\nThe AWS Documentation mentions the following\n\nCloudWatch – You can watch a single Amazon RDS metric over a specific time period, and perform one or more actions based on the value of the metric relative to a threshold you set.\n\nOption A is incorrect since this is only used for API monitoring\n\nOption C is incorrect since this is used for monitoring network traffic to your EC2 Instances\n\nOption D is correct since AWS Trusted Advisor is an online tool that provides you real-time service limit checks\n\n\n\nhttps://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/\n\nFor more information on monitoring for databases, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MonitoringOverview.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has an application hosted in AWS. This application consists of a web tier and database tier. The web tier is hosted on EC2 Instances. The database is hosted in the AWS RDS service and data keeps changing every few hours. Recently performance issues have been encountered in the application and this is due to the high number of read requests. Which of the following can be used to help resolve the issue?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Multi-AZ for the database"}, {
        "id": "B",
        "markdown": "Use Read Replica"
    }, {"id": "C", "markdown": "Use Amazon DynamoDB Accelerator (DAX)"}, {
        "id": "D",
        "markdown": "Place an Elastic Cache service in front of the database service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer –B\n\nIn terms of load, they have the same goal, but they differ in some areas:\n\nUp-to-dateness of data:\n\n\n\tA read replica will continuously sync from the master. So your results will probably lag 0 - 3s (depending on the load) behind the master.\n\tA cache takes the query result at a specific point in time and stores it for a certain amount of time.\n\n\nPerformance:\n\n\n\tA cache can only return results for queries it has already seen. So if you run the same queries over and over again, it's a good match.\n\tIf you have many different, frequently changing, or dynamic queries, a read replica will be a better match.\n\tElastiCache should be much faster since it's returning values directly from RAM. However, this also limits the number of results you can store.\n\n\nOption B is correct since the question specifies data keeps changing frequently, as it keeps data up-to-date and read performance is also improved.\n\nElastiCache can be used to reduce the latency of requests but it is a caching service and according to question data keeps changing every few hours, so Elasticache is not recommended choice.\n\nOption A is incorrect since this is used for high availability for the databases\n\nOption C is incorrect since Amazon DynamoDB Accelerator (DAX) is a Fully managed, in-memory cache for DynamoDB only.\n\nFor more information on Read Replica and Elasticache, please refer to the below URL\n\nhttps://aws.amazon.com/rds/features/read-replicas/\n\nhttps://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/elasticache-use-cases.htm\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Startup company is launching a three-tier application with the Multicontainer Docker platform. This application needs to be integrated with the Amazon RDS database instance. The application will be launched using AWS Elastic Beanstalk. As an AWS consultant for this company, you need to design the environment for blue/green deployment along with decoupled architecture in the production environment. What would you recommend for integrating the Amazon RDS database with AWS Elastic Beanstalk?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Launch Amazon RDS instance within the same AWS Elastic Beanstalk environment, setting connection string to the database in environment properties."
    }, {
        "id": "B",
        "markdown": "Launch Amazon RDS instance outside the AWS Elastic Beanstalk environment storing the connection string in the S3 bucket."
    }, {
        "id": "C",
        "markdown": "Launch Amazon RDS instance within the same AWS Elastic Beanstalk environment storing the connection string in the S3 bucket."
    }, {
        "id": "D",
        "markdown": "Launch Amazon RDS instance outside AWS Elastic Beanstalk environment, setting connection string to the database in environment properties"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Elastic Beanstalk provisions and configures all the AWS resources required to run and support your application. For Amazon RDS database instance to be launched in the production environment, best practice is to launch it outside the AWS Elastic Beanstalk environment. It helps in having multiple environments connecting to a single database, using database types not supported with the integrated database, performing blue/green deployments. Also, the database instance remains up & running when the AWS Elastic Beanstalk environment is terminated.\n\nFor a production environment, you can launch a database instance outside of your environment and configure your application to connect to it outside of the functionality provided by Elastic Beanstalk. Using a database instance that is external to your environment requires additional security group and connection string configuration.\n\nProviding connection information to your application with environment properties is a good way to keep passwords out of your code, but it's not a perfect solution. Environment properties are discoverable in the environment management console and can be viewed by any user that has permission to describe configuration settings on your environment. Depending on the platform, environment properties may also appear in instance logs.\n\nYou can lock down your connection information by storing it in an Amazon S3 bucket that you control. The basic steps are as follows:\n\n\n\tUpload a file that contains your connection string to an Amazon S3 bucket.\n\tGrant the EC2 instance profile permission to read the file.\n\tConfigure your application to download the file during deployment.\n\tRead the file in your application code.\n\n\nOption A is incorrect as launching Amazon RDS in an AWS Elastic Beanstalk environment is suitable for test/development purposes & not for a production environment. If the AWS Elastic Beanstalk environment is terminated, the Amazon RDS database instance is also terminated.\n\nOption C is incorrect as launching Amazon RDS in an AWS Elastic Beanstalk environment is suitable for test/development purposes & not for the production environment.\n\nOption D is incorrect. When Amazon RDS instance is launched outside the AWS Elastic Beanstalk environment, best practice is to save the connection string in the Amazon S3 bucket.\n\nFor more information on launching Amazon RDS instance with AWS Elastic Beanstalk and storing the connection string, refer to the following URLs:\n\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.managing.db.html\n\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.RDS.html\n\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/rds-external-credentials.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has an application that has been developed and needs to be hosted on an EC2 Instance. The EC2 Instance is located in a private subnet and needs to access AWS Kinesis streams without passing into the Internet. How can you achieve this in the best manner possible?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Attach a NAT gateway to the VPC"}, {
        "id": "B",
        "markdown": "Attach an Internet gateway to the VPC"
    }, {"id": "C", "markdown": "Create a VPC Gateway Endpoint that would allow access to Kinesis Streams"}, {
        "id": "D",
        "markdown": "Create a VPC Interface Endpoint that would allow access to Kinesis Streams"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nYou can use an interface VPC endpoint to keep traffic between your Amazon VPC and Kinesis Data Streams from leaving the Amazon network. Interface VPC endpoints don't require an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Interface VPC endpoints are powered by AWS PrivateLink, an AWS technology that enables private communication between AWS services using an elastic network interface with private IPs in your Amazon VPC\n\nOptions A and B are incorrect since it is mentioned in the question that traffic should not go via the Internet\n\nOption C is incorrect since this is mostly used for S3 and DynamoDB access from Instances in the private subnet\n\nFor more information on VPC Endpoints Interfaces, please refer to the below URL\n\nhttps://docs.aws.amazon.com/streams/latest/dev/vpc.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to store sensitive documents in an S3 bucket. They want to ensure that documents are encrypted at rest. They want to ensure they manage the underlying keys which are used for encryption but not the encryption/decryption process. Which of the following can be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use S3 server-side encryption with Customer keys"}, {
        "id": "B",
        "markdown": "Use S3 client-side encryption"
    }, {"id": "C", "markdown": "Use S3 server-side encryption with AWS managed keys"}, {
        "id": "D",
        "markdown": "Use S3 server-side encryption with AWS KMS keys with Key policy document of size 40kb."
    }, {
        "id": "E",
        "markdown": "Use S3 server-side encryption with AWS KMS keys with the keys uploaded by the company to KMS"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nAWS Documentation mentions the following\n\nServer-side encryption is about protecting data at rest. Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your own encryption keys. With the encryption key you provide as part of your request, Amazon S3 manages both the encryption, as it writes to disks, and decryption, when you access your objects. Therefore, you don't need to maintain any code to perform data encryption and decryption. The only thing you do is manage the encryption keys you provide.\n\nIn short,\n\nSSE-S3 requires that Amazon S3 manage the data and master encryption keys.\nSSE-C requires that you manage the encryption key\n\nSSE-KMS requires that AWS manage the data key but you manage the master key in AWS KMS\n\nFor more information, please refer to the following URL.\nhttps://docs.aws.amazon.com/kms/latest/developerguide/services-s3.html\n\n Option B is incorrect because when you do client-side encryption data goes to s3 in an encrypted format. Again when you download, it is the client who has to decrypt the data. But question specifies customer should not manage the encryption/decryption process.\n\nOptions C is incorrect since here you will still not manage the complete lifecycle of the keys.\n\nOptions D is incorrect because the maximum key policy document size is 32kb.\n\nhttps://docs.aws.amazon.com/kms/latest/developerguide/limits.html\n\nhttps://aws.amazon.com/blogs/aws/new-bring-your-own-keys-with-aws-key-management-service/\n\nFor more information on Server-side encryption with customer keys and Client-side encryption, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has the following architecture for its e-commerce application\n\n·         EC2 Instances hosting the application\n\n·         An Autoscaling group for the EC2 Instances\n\nThe users who use the application keep on complaining that the application is slow in the morning from 9:00 – 9:30, after which no issues occur. Which of the following can be done to ensure the issue is not encountered during the morning time?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that a Simple scaling policy is added to the Auto scaling Group"
    }, {"id": "B", "markdown": "Ensure that a step scaling policy is added to the Auto scaling Group"}, {
        "id": "C",
        "markdown": "Ensure that a scheduled scaling policy is added to the Auto scaling Group"
    }, {"id": "D", "markdown": "Ensure that a static scaling policy is added to the Auto scaling Group"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nScaling based on a schedule allows you to scale your application in response to predictable load changes. For example, every week the traffic to your web application starts to increase on Wednesday, remains high on Thursday, and starts to decrease on Friday. You can plan your scaling activities based on the predictable traffic patterns of your web application.\n\nOption A is incorrect because simple scaling increase or decrease the current capacity of the group based on a single scaling adjustment.\n\nOption B is incorrect because Step Scaling increase or decrease the current capacity of the group based on a set of scaling adjustments, known as step adjustments, that vary based on the size of the alarm breach.\n\nOption D is incorrect since Static scaling policy doesn’t exist.\n\nFor more information on scaling policies for Auto scaling, please refer to the below URL's\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scale-based-on-demand.html#as-scaling-types\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A three-tier web application is running on AWS VPC in two availability zones as shown below. Here are the CIDR ranges for each subnet and the corresponding servers.\n\n  \n\n\n\t\n\t\t\n\t\t\tLayer\n\t\t\tEU-East-1a\n\t\t\tEU-east-1b\n\t\t\n\t\n\t\n\t\t\n\t\t\tWeb server\n\t\t\t10.16.0.0/25\n\t\t\t10.16.0.128/25\n\t\t\n\t\t\n\t\t\tApplication Server\n\t\t\t10.16.1.0/25\n\t\t\t10.16.1.128/25\n\t\t\n\t\t\n\t\t\tDB Server\n\t\t\t10.16.2.0/25\n\t\t\t10.16.2.128/25\n\t\t\n\t\n\n\nThe DB server is running MySQL, which would run on its default port, should only allow access to Application Server tier and access from the rest of the tiers should be denied.\n\nWhich inbound rule of Security Group on the DB server needs to be attached to meets this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Type     : MySQL |  Protocol: TCP |  Port: 3306 |  Source: 10.16.0.0/24"
    }, {"id": "B", "markdown": "Type      : MySQL |  Protocol: TCP |  Port: 3306 |  Source: 10.16.2.0/24"}, {
        "id": "C",
        "markdown": "Type     : MySQL |   Protocol: TCP |  Port     : 3306 |  Source: 10.16.1.0/24"
    }, {"id": "D", "markdown": "Type     : MySQL |   Protocol: TCP |   Port      : 3306 |   Source: 10.16.3.128/25"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: C\n\nThe requirement here is to allow access from Application Tier to DB Tier. The other point to note here is that MySQL would run on its default port. The default port for MySQL is ‘3306’\n\nTwo /25 networks equal a /24 network. Two /27 networks equal a /26 network. Two /26 networks equal a /25 network. And so on, and so on. The notion of combining two smaller networks into a larger one is another benefit of classless networks named supernetting In order to create a supernet the smaller networks must be contiguous. For example, 192.0.2.240/29 and 192.0.2.248/29 can form a supernet 192.0.2.240/28, but 192.0.2.240/29 and 192.0.2.8/29 could not as it must be 192.0.2.248/29 in order to form a supernet\n\nApplication Server tier IP's across two subnets are - 10.16.1.0/25 and 10.16.1.128/25 that is from 10.16.1.0 to 10.16.1.255 which is same as 10.16.1.0/24\n\nAction Required here\n\nCreate A VPC\n\nNow create 2 subnets inside this VPC\n\n\n\n \n\n\n\n \n\nSimilarly, create 2 more VPC for DB and 2 VPC for Application Type\n\nthereafter in creating 1 Rule in SG for outbound to while listing for DB Layer and attach to the Application tier\n\nSimilarly, Crate one More SG and Create Inbound to whitelist Application Tier and attach to DB Tier\n\n \n\nSo we need to create the following rule in SG\n\n\n\nSo Option C is the best answer\n\nOptions A, B, and D are incorrect because source should be 10.16.1.0/24\n\nOr alternatively, two inbound rules from Port 3306 but different sources i.e. 10.16.1.0/25 and 10.16.1.128/25\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You launched 9 spot instances for a specific workload in your AWS Account.  Your bid price was $0.07 per hour and the spot price at the time of launch was $0.06 per hour.  After 1.5 hours, the spot price rose to $0.08 an hour. What is the cost incurred?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "$0.54"}, {"id": "B", "markdown": "$0.24"}, {
        "id": "C",
        "markdown": "$0.00"
    }, {"id": "D", "markdown": "$0.44"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer : A\n\nSpot instance are those instances for which a user has to place a bid on the AWS portal. If the bid price is greater than the amazon price (i.e. spot price) then the spot instances are automatically granted. The user would be charged based on the ‘spot’ price instead of the ‘bid’ price.\n\nIf the bid price is lower than the amazon price (i.e. spot price) then the spot instances are cancelled\n\nNow, if a user has got a spot instance running and if suddenly the spot price goes up, then amazon automatically cancels the instance and the user is not charged for the extra minutes (rounded to one hour). This is called as amazon’s termination of the spot instance\n\nIn a second case, if a user has got a spot instance running (when the bid price is greater than the spot price and the user is granted the ‘spot instance’ on the ‘spot’ price) and the user by himself voluntarily terminates the spot instance then the user is charged till the minute he has used the spot instance. This is called as the user’s voluntary termination of the spot instance\n\nWith the above introduction we can proceed with the below calculation\n\nIn the first hour,\n\nBid price = $0.07\n\nSpot price = $0.06\n\n Therefore the user is granted the spot instance. Now the price for ‘9’ instances for the first hour would be = $0.06 * 9 = $0.54\n\nIn the second hour (i.e. for 0.5 hour)\n\nBid price = $0.07\n\nSpot price = $0.08\n\n Now the spot price is greater than the bid price which will end up in the spot instance being terminated by amazon and the user is not charged any amount for the instances, for the 0.5 hours that the instances ran.\n\nTherefore the total payable amount by the user for ‘9’ instances are = $0.54. \n\nTherefore Option ‘A’ is the correct answer.\n\nOption ‘B’ is incorrect because the total cost is $0.24 which is lesser than $0.54\n\nOption ‘C’ is incorrect because the total cost is $0.00 which is lesser than $0.54\n\nOption ‘D’ is incorrect because the total cost is $0.44 which is lesser than $0.54\n\nFor details on spot instances please refer to the following link:\n\nhttps://aws.amazon.com/ec2/spot/pricing/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have just launched an EC2 instance, and get the following error message when you try to connect to it from a workstation running Windows 7.\n\nError: Server refused our key or No supported authentication methods available\n\nWhat could be the reason for this error? (Select TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Verify that the key (.pem) has been converted to the format recognized by Putty (.ppk)"
    }, {
        "id": "B",
        "markdown": "The security group attached to the EC2 instance has not been configured for 'inbound' on '3389' port"
    }, {
        "id": "C",
        "markdown": "The security group attached to the EC2 instance has not been configured for 'inbound' on '389' port"
    }, {"id": "D", "markdown": "AWS console credentials are incorrect"}, {
        "id": "E",
        "markdown": "The user has not used the correct username for the AMI"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: A and E\n\nThere are two parts of the error message.\n\nThe first part is that ‘Server refused our key’\n\nPutty: This is a CLI (Command Line Interface) tool in Windows. To log in to this Putty tool we need to have the keys in the Putty readable format which would have the extension of ‘.ppk’.\n\nThere is a tool called ‘PuttyGen’ by which we can convert our ‘.pem’ key to the ‘.ppk’ format and if we feed this key to the Putty tool we can log in to our respective instance.\n\n\n\nLoad the ‘.pem’ key in the ‘PuttyGen’ tool and use the ‘Save private key’ in the ‘PuttyGen’ to save the private key in ‘.ppk’ format.\n\nThen load this key in the ‘Auth’ section of ‘Putty’ tool as shown below\n\n\n\nThe username should be provided in the ‘Data’ section as shown below\n\nThe second part of the error message is ‘No supported authentication methods available’.\n\nPlease refer to the below table for the AMI (Amazon Machine Images, which means the copy or the snapshot of an instance) and their corresponding usernames\n\n\n\t\n\t\t\n\t\t\t\n\t\t\tS.No.\n\t\t\t\n\t\t\t\n\t\t\tAMI\n\t\t\t\n\t\t\t\n\t\t\tUsername\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t1\n\t\t\t\n\t\t\t\n\t\t\tLinux\n\t\t\t\n\t\t\t\n\t\t\tec2-user\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t2\n\t\t\t\n\t\t\t\n\t\t\tCentos\n\t\t\t\n\t\t\t\n\t\t\tcentos\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t3\n\t\t\t\n\t\t\t\n\t\t\tDebian\n\t\t\t\n\t\t\t\n\t\t\tadmin / root\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t4\n\t\t\t\n\t\t\t\n\t\t\tFedora\n\t\t\t\n\t\t\t\n\t\t\tec2-user / fedora\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t5\n\t\t\t\n\t\t\t\n\t\t\tRHEL\n\t\t\t\n\t\t\t\n\t\t\tec2-user / root\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t6\n\t\t\t\n\t\t\t\n\t\t\tSUSE\n\t\t\t\n\t\t\t\n\t\t\tec2-user / root\n\t\t\t\n\t\t\n\t\t\n\t\t\t\n\t\t\t7\n\t\t\t\n\t\t\t\n\t\t\tUBUNTU\n\t\t\t\n\t\t\t\n\t\t\tubuntu\n\t\t\t\n\t\t\n\t\n\n\nTherefore Option ‘A’ and ‘E’ are correct.\n\n\n\tOption ‘B’ is incorrect, as port ‘3389’ denotes RDP (Remote Desktop access)\n\tOption C is incorrect as port '389' denotes 'LDAP' \n\tOption ‘D’ is incorrect, as the login to AWS console is not at all related to the error message.\n\n\nFor more information, check out the following URLs:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html#TroubleshootingInstancesConnectionTimeout\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company has a requirement to monitor API activity for audit purposes for their AWS account. This audit would be conducted in the future as well and should be applicable to all regions. How would you design your solution to meet the present and future needs?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure CloudTrail logs is enabled for each region and then enable for each future region."
    }, {"id": "B", "markdown": "Ensure one CloudTrail log is enabled for all regions"}, {
        "id": "C",
        "markdown": "Enable AWS Config to record the events in all regions."
    }, {"id": "D", "markdown": "Enable AWS Inspector to record the events in all regions."}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nWhen you create a trail that applies to all regions, CloudTrail records events in each region and delivers the CloudTrail event log files to an S3 bucket that you specify. If a region is added after you create a trail that applies to all regions that the new region is automatically included, and events in that region are logged. \n\nAWS CloudTrail increases visibility into your user and resource activity by recording AWS Management Console actions and API calls. You can identify which users and accounts called AWS, the source IP address from which the calls were made, and when the calls occurred.\n\nOption A is incorrect since this is an overhead to enable it each time for every new region\n\nOptions C is incorrect since AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations\n\nOption D is incorrect since Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices\n\nFor more information on AWS CloudTrail, please refer to the below URL\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team is planning on developing and deploying an application onto AWS with the following architecture\n\n·         A set of EC2 Instances in a VPC hosting the web tier\n\n·         A database hosted using the AWS RDS MySQL instance\n\nWhich of the following should ideally be set so that only HTTPS users to be able to access the web application and for the web application to access the database? (Choose 2)",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "An Inbound Security group rule for the web EC2 Instances allowing traffic from the source of 0.0.0.0/0 and port 443"
    }, {
        "id": "B",
        "markdown": "An Inbound Security group rule for the database layer allowing traffic from the source of 0.0.0.0/0 and port 443"
    }, {
        "id": "C",
        "markdown": "An Inbound Security group rule for the web EC2 Instances allowing traffic from the source of the database on port 3306"
    }, {
        "id": "D",
        "markdown": "An Inbound Security group rule for the database layer allowing traffic from the source of the web layer on port 3306"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and D\n\nOption A is correct because port 443 will allow only HTTPS traffic from all sources.\n\nOption D is correct because Database server Security Group must allow traffic from the source Web server on port 3306\n\n\n\nOption B is invalid since the database should not be exposed to the Internet\n\nOption C is invalid since the database security group should allow incoming traffic on port 3306\n\nFor more information on this scenario, please refer to the below URL and go to Security section\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In your AWS VPC, you need to add a new subnet that will allow you to host a total of 20 EC2 instances. Which IPv4 CIDR block would you use to achieve the same?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "151.0.0.0/27"}, {"id": "B", "markdown": "151.0.0.0/28"}, {
        "id": "C",
        "markdown": "151.0.0.0/29"
    }, {"id": "D", "markdown": "151.0.0.0/30"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer: A\n\nThe formula to calculate the number of assignable IP addresses to CIDR networks is similar to classful networking. Subtract the number of network bits from 32. Raise 2 to that power and subtract 2 for the network and broadcast addresses. For example, a /24 network has 2^(32-24) - 2 addresses available for host assignment.\n\nA.              Prefix Length is ‘27’\n\n            Therefore 32-27 = 5 and 2 ^ 5 (i.e 2 * 2 * 2 * 2 * 2) – 2 = 30\n\nB.              Prefix Length is ‘28’\n\n            Therefore 32-28 = 4 and 2 ^ 4 (i.e 2 * 2 * 2 * 2) - 2 = 14\n\nC.              Prefix Length is ‘29’\n\n            Therefore 32-29 = 3 and 2 ^ 3 (i.e 2 * 2 * 2) - 2 = 6\n\nD.              Prefix Length is ‘30’\n\n            Therefore 32-30 = 2 and 2 ^ 2 (i.e 2 * 2) - 2 = 2     \n\nFor option ‘A’ we get ‘30’ IP addresses (or indirectly the number of instances to be provisioned) as shown above\n\nSince the user has to provision ‘20’ EC2 instances, we need to go with option ‘A’ which is the only correct IPv4 CIDR block.\n\nOption ‘B’ is incorrect because we get only ‘14’ IP address (or indirectly the number of instances to be provisioned )\n\nOption ‘C’ is incorrect because we get only ‘6’ IP address\n\nOption ‘D’ is incorrect because we get only ‘2’ IP address\n\nFor more information, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#vpc-sizing-ipv4\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Company is currently hosting an application which connects to a MySQL AWS RDS Instance. Of late there have been many performance issues being encountered. After careful analysis, it has been determined that the issue is occurring as a result of similar queries being fired against the database. Which of the following can be added to the architecture to alleviate the performance issue?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable Multi-AZ for the database"}, {
        "id": "B",
        "markdown": "Use the Elastic Cache Service"
    }, {"id": "C", "markdown": "Use Read replica"}, {"id": "D", "markdown": "Use Cloudfront in front of the database"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nElastiCache can be used to reduce the latency of requests as it is a caching service\n\nLet's understand the difference in Read replica and ElastiCache\n\nIn terms of load, they have the same goal, but they differ in other areas:\n\nUp-to-dateness of data:\n\nA read replica will continuously sync from the master. So your results will probably lag 0 - 3s (depending on the load) behind the master.\n\nA cache takes the query result at a specific point in time and stores it for a certain amount of time.\n\nPerformance:\n\nA cache can only return results for queries it has already seen. So if you run the same queries over and over again, it's a good match.\n\nIf you have many different, frequently changing, or dynamic queries, a read replica will be a better match.\n\nElastiCache should be much faster since it's returning values directly from RAM. However, this also limits the number of results you can store.\n\nOption A is incorrect since this is used for high availability of the database\n\nOption C is incorrect since using ElastiCache is a better choice.\n\nOption D is incorrect since Cloudfront should be used with Web distributions\n\nFor more information on ElastiCache, please refer to the below URL\n\nhttps://aws.amazon.com/elasticache\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Administrator for a media company. They are using AWS resources in various regions for broadcasting live sports matches. Multiple EC2 On-Demand, Spot & Reserved Instances are launched as per user traffic on a daily basis resulting in huge monthly charges. Top management is looking for customized analysis for these charges based upon various factors like month-wise, instance-wise to deep dive into the incurred cost and they should be able to visualize the costs analysis. To meet this requirement, the accounts team is looking for a simpler way to analyze these charges and query this report. Suggest a cost-effective solution that can be set up with the least efforts?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Upload the AWS Cost and Usage Reports to S3. Integrate these reports with Amazon Athena to analyze billing data"
    }, {
        "id": "B",
        "markdown": "Upload AWS Cost & Usage Reports to Amazon QuickSight & analyze billing data"
    }, {
        "id": "C",
        "markdown": "Download CSV report from Amazon S3 & analyze cost & usage using a third-party tool."
    }, {"id": "D", "markdown": "Upload AWS Cost & Usage Reports to Amazon Redshift & analyze billing data"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon QuickSight is a business analytics service you can use to build visualizations, perform ad hoc analysis, and get business insights from your data. It can automatically discover AWS data sources and also works with your data sources.\n\nOption A is incorrect AWS Athena doesn’t provide visualizations.\n\nOption C is incorrect as using a third-party tool to analyze cost & usage reports can be costly.\n\nOption D is incorrect as Amazon Redshift is a petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. It is not used for such cost analysis. It is used for complex queries and data warehousing.\n\nFor more information on Amazon QuickSight, refer to the following URL,\n\nhttps://docs.aws.amazon.com/quicksight/latest/user/welcome.html#analyses\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Company is currently hosting an application which connects to a MySQL AWS RDS Instance The application behaves fine when there are 20 lookups against the database. When the lookups start to increase, the performance of the application starts to degrade. Which of the following can be added to the architecture to alleviate the performance issue?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a Read Replica for the database"}, {
        "id": "B",
        "markdown": "Enable Multi-AZ for the database"
    }, {"id": "C", "markdown": "Place the database behind a Cloudfront distribution"}, {
        "id": "D",
        "markdown": "Create a snapshot of the database"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nOption B is incorrect since this is used for high availability of the database\n\nOption C is incorrect since Cloudfront is used for web distributions\n\nOption D is incorrect since this is used for backups of databases\n\nThe AWS Documentation mentions the following\n\nAmazon RDS Read Replicas provide enhanced performance and durability for database (DB) instances. This feature makes it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput.\n\nFor more information on AWS Read Replica’s, please refer to the below URL\n\nhttps://aws.amazon.com/rds/details/read-replicas/\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company needs to develop an application that needs to have a login module in place. Their key requirement is to ensure that users can also use their current identities which they have with various providers such as facebook to log into the application. Which of the following can help you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using the AWS Cognito service"}, {
        "id": "B",
        "markdown": "Using the AWS Config service"
    }, {"id": "C", "markdown": "Using the AWS SQS service"}, {"id": "D", "markdown": "Using the AWS WAF service"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAmazon Cognito provides authentication, authorization, and user management for your web and mobile apps. Your users can sign in directly with a user name and password, or through a third party such as Facebook, Amazon, or Google.\n\nThe two main components of Amazon Cognito are user pools and identity pools. User pools are user directories that provide sign-up and sign-in options for your app users. Identity pools enable you to grant your users access to other AWS services. You can use identity pools and user pools separately or together.\n\nOption B is incorrect since this is a configuration service\n\nOption C is incorrect since this is a messaging service\n\nOption D is incorrect since this is a web application firewall service\n\nFor more information on AWS Cognito, please refer to the below URL\n\nhttps://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A mid-sized Fintech company is using AWS Organization to manage multiple AWS accounts created for each department. Each of the accounts has purchased a Reserved Instance & are running web applications on a mix of On-Demand & Reserved Instance pool. A default IAM policy is configured for all accounts. Due to high recurring cost, Management has appointed you as an AWS consultant to suggest recommendations to reduce cost. Post analysis, you suggested purchasing more Reserved Instance as compared to using On-Demand EC2 instance. How would you justify your recommendations to the management?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use organization master account to create RI coverage budgets for all the accounts in an organization and receive SNS alert once the threshold is below 50%."
    }, {
        "id": "B",
        "markdown": "Use Organization member account owners to create RI coverage budgets for their individual accounts in an organization & receive SNS alert once the threshold is below 50%."
    }, {
        "id": "C",
        "markdown": "Use Organization member account owners to create RI utilization budgets for their individual accounts in an organization and receive SNS alert once the threshold is below 50%."
    }, {
        "id": "D",
        "markdown": "Use Organization master account to create RI utilization budgets for all the accounts in an organization and receive SNS alert once the threshold is below 50%."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nCorrect Answer – B\n\nThe Reserved Instance Utilization and Coverage reports are not the same\n\nEC2 RI Utilization % offers relevant data to identify and act on opportunities to increase your Reserved Instance usage efficiency. It’s calculated by dividing the Reserved Instance used hours by total Reserved Instance purchased hours.\n\nEC2 RI Coverage % shows how much of your overall instance usage is covered by Reserved Instances. This lets you make informed decisions about when to purchase or modify a Reserved Instance to ensure maximum coverage. It’s calculated by dividing the Reserved Instance used hours by total EC2 On-Demand and Reserved Instance hours.\n\nRI Coverage Budget reports the number of instances that are part of the Reserved Instance. This helps you to get an alert when the number of instances covered by reservation falls below 50% of the total number of instances launched. This report can identify the instance which is consistently running using On-Demand instance & can be converted to Reserved Instance for cost savings. AWS Organization member accounts' owners can create a budget for individual accounts. AWS Organization master account pays for usage incurred by all accounts in the organization.\n\nOption A is incorrect since the company is using a default IAM policy, each member account owner needs to create a budget policy for individual accounts & not by master account.\n\nOption C is incorrect as RI utilization Budget reports the utilization of your RI instance and you need RI Coverage report to check when the number of instances covered by reservation falls below 50% of the total number of instances launched.\n\nOption D is incorrect since the company is using a default IAM policy, each member account owner needs to create a budget policy for individual accounts & not by master account. Also, you need RI Coverage report to check when the number of instances covered by reservation falls below 50% of the total number of instances launched\n\nFor more information, refer to the following URLs:\n\nhttps://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/aws-cost-explorer.html\n\nhttps://aws.amazon.com/aws-cost-management/reserved-instance-reporting/\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your current architecture consist of a set of web servers that are spun up as part of an Autoscaling group. These web servers then communicate with a set of database servers. You need to ensure that the security groups of the database servers are set properly to accept traffic from the web servers. Which of the following is the best way to accomplish this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Ensure that the Private IP addresses of the web servers are put as sources for the incoming rules in the database server security group"
    }, {
        "id": "B",
        "markdown": "Ensure that the Public IP addresses of the web servers are put as sources for the incoming rules in the database server security group"
    }, {
        "id": "C",
        "markdown": "Ensure that the web server security group is placed as the source for the incoming rules in the database server security group"
    }, {
        "id": "D",
        "markdown": "Ensure that the Instance ID of the web servers are put as sources for the incoming rules in the database server security group"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe below example from the AWS Documentation also shows the Source of the database security group involving the ID of the web server security groups.\n\n\n\n \n\nOptions A and B are invalid or not the best practise. Since they are part of the Autoscaling Group , the IP addresses of the instances can change.\n\n \n\nOption D is incorrect since normally you don’t specify the Instance ID in security Groups\n\nFor more information on the Security Groups for the VPC, please refer to the below URL\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company needs to host an application on an EC2 Instance. There is a requirement based on the compliance rules for the application that you need to have control over the number of cores allocated to the application. Which of the following should be used in such a case?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Lambda"}, {"id": "B", "markdown": "EC2 - Dedicated Hosts"}, {
        "id": "C",
        "markdown": "EC2 – Reserved Instances"
    }, {"id": "D", "markdown": "Elastic Beanstalk"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nWhen you launch instances on a Dedicated Host, the instances run on a physical server that is dedicated to your use. While Dedicated instances also run on dedicated hardware, Dedicated Hosts provide further visibility and control by allowing you to place your instances on a specific, physical server. This enables you to deploy instances using configurations that help address corporate compliance and regulatory requirements.\n\nYou have visibility of the number of sockets and physical cores that support your instances on a Dedicated Host. You can use this information to manage to license for your own server-bound software that is licensed per-socket or per-core.\n\nOption A is incorrect because AWS Lambda was launched to eliminate infrastructure management of computing. It enables developers to concentrate on writing the function code without having to worry about provisioning infrastructure. You don’t need to do any forecasting of the resources (CPU, Memory, Storage, etc.). It can scale resources up and down automatically.\n\nDedicated instances are placed on an EC2 Host machine dedicated to your account, but you use them exactly like shared tenancy instance types (On-Demand, Spot, and Reserved). Dedicated Hosts are the same thing, but with additional visibility into the hardware that your instances run on. Check here for more details.\n\nFrom the above explanation, Option C, D stands invalid.\n\nFor more details on Dedicated hosts, please refer below URL\n\nhttps://aws.amazon.com/elasticbeanstalk/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to store sensitive documents in a bucket in the Simple Storage service. They need to ensure that all objects are encrypted at rest in the bucket. Which of the following can help accomplish this? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Ensure that the default encryption is enabled for the S3 bucket"}, {
        "id": "B",
        "markdown": "Ensure that the bucket policy is set to encrypt all objects that are added to the bucket"
    }, {
        "id": "C",
        "markdown": "Ensure that the bucket ACL is set to encrypt all objects that are added to the bucket"
    }, {
        "id": "D",
        "markdown": "Ensure to change the configuration of the bucket to use a KMS key to encrypt the objects"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A and D\n\nOptions B and C are incorrect since these options cannot be used to actually encrypt the objects as by using an S3 bucket policy, you can enforce the encryption requirement when users upload objects\n\nRefer below URL for more details,\n\nhttps://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/\n\nThe term 'rest' means when data is resting (not in transition - while data is traveling to s3).\n\nServer-side encryption - facilitates encryption at rest.\n\nClient-side encryption - facilitates encryption both in transition and at rest.\n\nYou have three options depending on how you choose to manage the encryption keys:\n\nSSE-S3 requires that Amazon S3 manage the data and master encryption keys.\nSSE-C requires that you manage the encryption key\n\nSSE-KMS requires that AWS manage the data key but you manage the master key in AWS KMS\n\nFor more information, please refer the following URL.\nhttps://docs.aws.amazon.com/kms/latest/developerguide/services-s3.html\n\nAmazon S3 default encryption provides a way to set the default encryption behavior for an S3 bucket. You can set default encryption on a bucket so that all new objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or customer master keys (CMKs) stored in AWS Key Management Service (AWS KMS).\n\nFor more information on Server - Side encryption, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html\n\nTo know about default encryption (Option A) please refer to the below URL.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A global software company is using Amazon EC2 Reserved and On-Demand Instance for all project-related work. They are having different accounts created for each vertical like Finance, Project, HR which are managed individually by account owners in each vertical. Management is looking for options to decrease these recurring charges. How could the management save monthly billing charges without impacting the performance?  [Choose TWO]",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Each account should launch a Spot Instance instead of using On-Demand Instance."
    }, {
        "id": "B",
        "markdown": "Each account should share Reserved Instance which they have purchased with other accounts."
    }, {
        "id": "C",
        "markdown": "Use the Consolidated billing feature in AWS organization to get volume discounts on Amazon EC2."
    }, {"id": "D", "markdown": "Use Budgets to limit the charges incurred for using Amazon EC2."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B and C\n\nConsolidated Billing combines usage from all the accounts & billing is generated based on the total usage. Services like Amazon EC2, Amazon S3, etc. have volume pricing tiers where the overall charges decrease with more usage volume.\n\nOption A is incorrect. Although this will save the cost but will impact the performance.\n\nSpot Instance and On-demand Instance are very similar in nature. The main difference between these is commitment. In Spot Instance there is no commitment. As soon as the Bid price exceeds Spot price, a user gets the Instance. In an On-demand Instance, a user has to pay the On-demand rate specified by Amazon. Once they have bought the Instance they have to use it by paying that rate.\nIn Spot Instance, once the Spot price exceeds the Bid price, Amazon will shut the instance. The benefit to users is that they will not be charged for the partial hour in which Instance was taken back from them.\n\nSpot instances are not always cheaper than on-demand, they can and do sometimes fluctuate wildly, even to very high per hour amounts, higher than the on-demand price at times\n\nOption B is correct as Reserved Instance discounts can be applied to accounts in an organization but Reserved Instance sharing has to be turned on or off for the account\n\nFor details, please refer below URL\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/\n\nOption D is incorrect as the Budget will limit charges but will not provide discounts in services being used by various accounts.\n\nFor more information on using consolidated billing, refer to the following URL:\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-discounts.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to host an active-active site. One site will be deployed in AWS and the other one on their On-premise data center. They need to ensure that traffic is distributed proportionately between both sites. Which of the following routing policy would you use for this purpose?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Simple Routing"}, {"id": "B", "markdown": "Failover Routing"}, {
        "id": "C",
        "markdown": "Latency Routing"
    }, {"id": "D", "markdown": "Weighted Routing"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nWeighted routing lets you associate multiple resources with a single domain name (example.com) or subdomain name (acme.example.com) and choose how much traffic is routed to each resource. This can be useful for a variety of purposes, including load balancing and testing new versions of software.\n\nTo configure weighted routing, you create records that have the same name and type for each of your resources. You assign each record a relative weight that corresponds with how much traffic you want to send to each resource. Amazon Route 53 sends traffic to a resource based on the weight that you assign to the record as a proportion of the total weight for all records in the group\n\nOption A is incorrect since this should be used when you want to configure standard DNS records\n\nOption B is incorrect since this should be used when you want to route traffic to a resource when the resource is healthy or to a different resource when the first resource is unhealthy\n\nOption C is incorrect since this should be used when you want to improve performance for your users by serving their requests from the AWS Region that provides the lowest latency.\n\nFor more information on a Routing policy, please refer to the below URL\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to store sensitive documents in a S3 bucket. They want to keep the documents as private but serve content only to selected users based on a particular time frame. Which of the following can help you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Enable CORS for the S3 bucket"}, {
        "id": "B",
        "markdown": "Use KMS and enable encryption for the files"
    }, {"id": "C", "markdown": "Create pre-signed URL’s"}, {
        "id": "D",
        "markdown": "Enable versioning for the S3 bucket"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nThe AWS Documentation mentions the following\n\nA pre-signed URL gives you access to the object identified in the URL, provided that the creator of the pre-signed URL has permissions to access that object. That is, if you receive a pre-signed URL to upload an object, you can upload the object only if the creator of the pre-signed URL has the necessary permissions to upload that object.\n\nAll objects and buckets by default are private. The pre-signed URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. When you create a pre-signed URL, you must provide your security credentials and then specify a bucket name, an object key, an HTTP method (PUT for uploading objects), and expiration date and time. The pre-signed URLs are valid only for the specified duration.\n\nOption A is incorrect since this is used for Cross-origin access\n\nOption B is incorrect since this is used for encryption purposes.\n\nOption D is incorrect since this is used for versioning\n\nFor more information on pre-signed URL’s, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company currently is hosting a Redshift cluster. As part of the disaster recovery drill , you need to ensure that the cluster would be made available even if the primary region goes down. How can you accomplish this?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use the Elastic Beanstalk service to copy the cluster to another region"
    }, {"id": "B", "markdown": "Use Cloudformation templates to copy the cluster to another region"}, {
        "id": "C",
        "markdown": "Configure cross-region snapshots for the underlying Redshift cluster."
    }, {"id": "D", "markdown": "Use the snapshots stored in S3 to create a new Redshift cluster in another region"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - C\n\nYou can configure Amazon Redshift to automatically copy snapshots (automated or manual) for a cluster to another region. When a snapshot is created in the cluster’s primary region, it will be copied to a secondary region; these are known respectively as the source region and destination region. By storing a copy of your snapshots in another region, you have the ability to restore your cluster from recent data if anything affects the primary\n\nSnapshots are point-in-time backups of a cluster. There are two types of snapshots: automated and manual. Amazon Redshift stores these snapshots internally in Amazon S3 by using an encrypted Secure Sockets Layer (SSL) connection.\n\nAmazon Redshift automatically takes incremental snapshots that track changes to the cluster since the previous automated snapshot. Automated snapshots retain all of the data required to restore a cluster from a snapshot. You can create a snapshot schedule to control when automated snapshots are taken, or you can take a manual snapshot at any time.\n\nWhen you restore from a snapshot, Amazon Redshift creates a new cluster and makes the new cluster available before all of the data is loaded, so you can begin querying the new cluster immediately. The cluster streams data on demand from the snapshot in response to active queries then loads the remaining data in the background.\n\nhttps://aws.amazon.com/blogs/aws/automated-cross-region-snapshot-copy-for-amazon-redshift/\n\nOption A is invalid since AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and not used to copy snapshots for disaster recovery.\n\nOption B is invalid since the CloudFormation template can help in creating clusters but it won’t help in disaster recovery.\n\nTo check how to create Cluster using CloudFormation, refer below URL\n\nhttps://aws.amazon.com/blogs/big-data/automate-amazon-redshift-cluster-creation-using-aws-cloudformation/\n\nOption D is invalid since it will be a manual process\n\nFor more information on working with snapshots, please refer to the below URL\n\nhttps://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS Architect for a global Pharma company. They have multiple accounts created in an organization & are using Consolidated billing. Account A has 6 reserved instances while Account B do not have any Reserved Instance. Based on the current utilization, Account A uses 4 Reserved Instance at any time. Account B uses On-Demand Instance for its Web-based application. What will be True with regards to discounts offered by the use of Consolidated billing?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "To receive hourly benefits of Reserved Instance from other accounts, Accounts B should have prior approval from Account A to launch the Reserved Instance purchased by Account A."
    }, {
        "id": "B",
        "markdown": "To receive hourly benefits of Reserved Instance from other accounts, Accounts B should launch an Instance in any AZ in the same region"
    }, {
        "id": "C",
        "markdown": "To receive hourly benefits of Reserved Instance from other accounts, Account B should launch an Instance of the same VPC, where account A has purchased a Reserved Instance."
    }, {
        "id": "D",
        "markdown": "To receive hourly benefits of Reserved Instance from other accounts, Account B should launch Instance in any AZ in a different region"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nCorrect Answer – B\n\nConsolidate Billing combines the usage of all Accounts within an organization & shares Reserved Instance between multiple accounts. This discount is valid only if the account which has purchased Reserved Instance is not using its all Instances & other accounts have launched Instance in the same AZ as that of the account which has purchased this Instance.\n\nWhen you purchase a Reserved Instance, you determine the scope of the Reserved Instance. The scope is either regional or zonal.\n\nAs you might be aware AWS Randomizes in AZs but you can choose the scope as Zonal RIs in case you want to be in specific AZ or if you want to get discount in any AZ, you should go for Regional Reserved Instances\n\nFor more details on Zonal and Regional RIs, please refer below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html#reserved-instances-regional-zonal-differences\n\nBelow given example is for Zonal RIs,\n\nFor an Amazon EC2 Reserved Instances example, suppose that Bob and Susan each have an account in an organization. Susan has five Reserved Instances of the same type, and Bob has none. During one particular hour, Susan uses three instances and Bob uses six, for a total of nine instances on the organization's consolidated bill. AWS bills five instances as Reserved Instances, and the remaining four instances as regular instances.\n\nBob receives the cost-benefit from Susan's Reserved Instances only if he launches his instances in the same Availability Zone where Susan purchased her Reserved Instances. For example, if Susan specifies (us-west-2a) when she purchases her Reserved Instances, Bob must specify (us-west-2a) when he launches his instances to get the cost-benefit on the organization's consolidated bill.\n\nOption A is incorrect. When Consolidated Billing is enabled, Reserved Instance is by default shared between all accounts. No prior approvals are required to be granted for this sharing. You can turn it off also.\n\nOption C is incorrect as for Reserved Instance to be used by other accounts in the same organization, Instance should be launched in the any AZ and it can be part of different VPC.\n\nOption D is incorrect as to avail Reserved Instance discounts, each Account should use launch instance in the same region.\n\nFor more information on Consolidating Billing, refer to the following URL\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidatedbilling-other.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently has a set of web servers in a public subnet and database servers in the private subnet. You need to ensure administrators from your on-premises environment can access the database servers. Which of the following is a secure way to access the database servers?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a bastion host in the private subnet as the database servers. Ask the IT administrators to log into the database servers via the bastion host"
    }, {
        "id": "B",
        "markdown": "Create a bastion host in the public subnet. Ask the IT administrators to log into the database servers via the bastion host"
    }, {
        "id": "C",
        "markdown": "Create a NAT instance in the private subnet as the database servers. Ask the IT administrators to log into the database servers via the NAT Instance"
    }, {
        "id": "D",
        "markdown": "Create a NAT instance in the public subnet as the database servers. Ask the IT administrators to log into the database servers via the NAT Instance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nA bastion host is a server whose purpose is to provide access to a private network from an external network, such as the Internet. Because of its exposure to potential attack, a bastion host must minimize the chances of penetration. For example, you can use a bastion host to mitigate the risk of allowing SSH connections from an external network to the Linux instances launched in a private subnet of your Amazon Virtual Private Cloud (VPC).\n\n\n\tOption A is incorrect since the bastion host needs to be in the public subnet\n\tOptions C and D are incorrect since the NAT instance should not be used as a jump server to the database servers\n\tFor more information on using a bastion host, please refer to the below URL\n\t\n\t\thttps://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company needs to access a service provided by a consultant company.  The service from the consultant company and the application of the primary company exist in their respective VPCs.  The VPC's are located in different regions.  What are the steps that are needed to take to establish communication between these VPCs such that data should not traverse via the Internet? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Create a VPC peering between the VPC’s in the primary company and consultant company’s account"
    }, {
        "id": "B",
        "markdown": "Create a Network Load Balancer in the consultant VPC in front of the service. Create a VPC Endpoint. Make the application in the other VPC access this endpoint"
    }, {
        "id": "C",
        "markdown": "Modify the route tables for each VPC point to the VPC peering connection to access all the IPv4 CIDR blocks of the peer VPC (either way)"
    }, {
        "id": "D",
        "markdown": "Create an IPSec Virtual Private connection between both accounts. Access the resources accordingly"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and C\n\n\n\tOption B is incorrect since for VPC Endpoint interfaces, they have to be in the same region\n\tOption D is incorrect since here the traffic will traverse via the Internet\n\n\nThe AWS Documentation mentions the following\n\nA VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them privately. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, with a VPC in another AWS account, or with a VPC in a different AWS Region.\n\n\n\tFor more information on AWS Direct Connect and VPC peering, please refer to the below URL\n\t\n\t\thttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html\n\t\n\t\n\n\nthe 2 answers provided for the question are correct.  Let me explain to you why?\n\n1. Both Primary & Consultant company are existing within there own VPCs in different AWS Regions.\nIn order to have the connection among them, we create VPC Peering across the region.  \nHence, Option A is correct answer.\n\n\n\thttps://aws.amazon.com/about-aws/whats-new/2017/11/announcing-support-for-inter-region-vpc-peering/\n\thttps://aws.amazon.com/blogs/aws/new-almost-inter-region-vpc-peering/\n\n\n2. Please refer to the below link, section \"Two VPCs with Multiple CIDRs Peered Together\" for further details\n\n\n\thttps://docs.aws.amazon.com/vpc/latest/peering/peering-configurations-full-access.html#many-vpcs-full-access\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your team has deployed an application which consists of a web and database tier hosted on separate EC2 Instances. Both EC2 Instances are using General Purpose SSD for their underlying volume type. Of late, there are performance issues related to the read and writes of the database EC2 Instance. Which of the following could be used to alleviate the issue?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Change the Instance type to a higher Instance Type"}, {
        "id": "B",
        "markdown": "Change the EBS volume to Provisioned IOPS SSD"
    }, {"id": "C", "markdown": "Enable Enhanced Networking on the Instance"}, {
        "id": "D",
        "markdown": "Enable Multi-AZ for the database"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe Provisioned IOPS SSD EBS volume type is perfect for these types of workloads. The below excerpt from the documentation shows the key differences between the different volume types\n\n\n\n \n\nOption A is incorrect since the primary issue is that the volume type is not correct\n\n \n\nOption C is incorrect since networking is not an issue here\n\nOption D is incorrect since this option is applicable for the AWS RDS service\n\nFor more information on EBS volume types, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company currently stores documents in an S3 bucket. They want to transfer the files to a low-cost storage unit after a duration of 2 months to save on cost. Which of the following can be used to perform this activity automatically?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use the events of the S3 bucket to transfer the files to Amazon Glacier"
    }, {
        "id": "B",
        "markdown": "Use the events of the S3 bucket to transfer the files to EBS volumes – Cold HDD"
    }, {
        "id": "C",
        "markdown": "Use the lifecycle policies of the S3 bucket to transfer the files to Amazon Glacier"
    }, {
        "id": "D",
        "markdown": "Use the lifecycle policies of the S3 bucket to transfer the files to EBS volumes – Cold HDD"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nThe AWS Documentation mentions the following\n\nTo manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects. There are two types of actions:\n\n\n\tTransition actions—Define when objects transition to another storage class. For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the GLACIER storage class one year after creating them.\n\tExpiration actions—Define when objects expire. Amazon S3 deletes expired objects on your behalf.\n\n\n \n\nOptions B and D are incorrect because ideally you don’t transfer to EBS volumes – Cold HDD\n\nOption A is incorrect because you need to use lifecycle policies\n\nFor more information on lifecycle policies, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS architect for a global financial company that offers real-time stock trading quotes to customers. You are using Kinesis Data Streams to process stock market feeds from stock exchanges & provide a real-time dashboard to the customers. During stock market hours, there are a large number of users accessing these dashboards while after market hours, there are very few users accessing these dashboards.  The management team is looking for an optimum number of Kinesis Shards within Kinesis Data Streams. Which of the following would be an automated solution to achieve this? (Choose 2)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use Application Auto Scaling"}, {
        "id": "B",
        "markdown": "Use Amazon Kinesis Scaling Utility to modify the number of Shards in Kinesis Data Streams."
    }, {
        "id": "C",
        "markdown": "Use Amazon Kinesis Scaling Utility along with AWS Elastic Beanstalk to automatically modify the number of Shards in Kinesis Data Streams."
    }, {"id": "D", "markdown": "Use UpdateShardCount to scale Shard count as per requirement."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and C\n\nAWS Application Auto scaling can be used to automatically scale Kinesis Streams. For this, CloudWatch can be used to monitor Kinesis Data Stream shard metrics. Based on the changes in these metrics, CloudWatch can initiate a notification to Application Auto Scaling. This will trigger an API Gateway to call Lambda Functions to increase/decrease the number of Kinesis Data Stream Shards based upon metric values.\n\nAlternatively, you can use the Amazon Kinesis Scaling Utilities. To do so, you can use each utility manually, or automated with an AWS Elastic Beanstalk environment.\n\nOption B is incorrect because Amazon Kinesis Scaling Utility alone is a manual process as per documentation\n\nOption D is incorrect as using UpdateShardCount will be a manual process\n\nFor more information on Scaling Kinesis Data Streams using Application Auto Scaling and Amazon Kinesis Scaling Utilities, refer to the following URLs:\n\nhttps://aws.amazon.com/blogs/big-data/scaling-amazon-kinesis-data-streams-with-aws-application-auto-scaling/\n\nhttps://aws.amazon.com/blogs/big-data/under-the-hood-scaling-your-kinesis-data-streams/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have currently contacted an AWS partner to carry out an audit for your AWS account. You need to ensure that the partner can carry out an audit on your resources. Which one of the following steps would you ideally carry out?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create an IAM user for the partner account for login purposes"}, {
        "id": "B",
        "markdown": "Create a cross account IAM Role"
    }, {"id": "C", "markdown": "Create an IAM group for the partner account for login purposes"}, {
        "id": "D",
        "markdown": "Create an IAM profile for the partner account for login purposes"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nThe AWS Documentation mentions the following\n\nCross-account IAM roles allow customers to securely grant access to AWS resources in their account to a third party, like an APN Partner, while retaining the ability to control and audit who is accessing their AWS account. Cross-account roles reduce the amount of sensitive information APN Partners need to store for their customers so that they can focus on their product instead of managing keys.\n\nCross Account access is safer because,\n\nA basic analogy of the difference is handing someone an access badge (which could be used by anyone) vs handing someone an access badge that requires that person's fingerprints to successfully use.\n\nUsing an IAM user to control 3rd party access involves handing over a Access Key/Secret Key - this is the simple \"access badge\"\n\nUsing AssumeRole to control 3rd party access uses the same information plus a security token. To assume a role, your AWS account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. This is the \"access badge with fingerprint validation\".\n\n(Also, for added security, the Access key/secret key for AssumeRole can be temporary credentials that expire after a specific time period.)\n\nAnyone can use the IAM keys - they're just a key-pair. Anyone can take them and use them later on, and you would not be able to be identify from the trusted party they were given to. To use the AssumeRole, you must be first authenticated as the trusted entity, and in the case of temporary credentials, use them while they haven't expired. These extra security features are what make it more secure.\n\nTypically, you use AssumeRole for cross-account access\n\nOption A and C are invalid since it is not secured as IAM users and IAM group (a set of users) will be given permissions just like giving keys to them without extra security token.\n\nOption D is invalid since IAM Profile doesn’t exists in AWS\n\nFor more information on cross account roles, please refer to the below URL\n\nhttps://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/\n\nhttps://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working for a start-up company using Amazon DynamoDB for mobile applications. During performing POC for a new application using AWS SDK, most of the cases are successfully executed, but for certain cases, Amazon DynamoDB is returning an error message. Development Team is asking for your help to verify this error message & suggest a solution for the same so that application logic can be modified. For which of the following HTTP 400 status code returned by Amazon DynamoDB, will you suggest the development team to resubmit the request from the application for successful execution? (Select Two.)",
    "prompt": "",
    "correctAnswerId": ["C", "F"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "ResourceNotFoundException"}, {
        "id": "B",
        "markdown": "Internal Server Error"
    }, {"id": "C", "markdown": "ThrottlingException"}, {"id": "D", "markdown": "Service Unavailable"}, {
        "id": "E",
        "markdown": "ConditionalCheckFailedException"
    }, {"id": "F", "markdown": "LimitExceededException"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C, F\n\nThrottlingException & LimitExceededException are part of HTTP status code 4xx. ThrottlingException is an error message generated when you are executing operations like CreateTable, UpdateTable, DeleteTable, very rapidly. LimitExceededException is an error message generated when you are doing concurrent control plane operations. Both error message can be resolved after trying the same request again.\n\nOption A is incorrect as this exception is part of HTTP status code 4xx & for this error, you will need to fix errors before retrying. This error is generated when a table being requested does not exist or in CREATING state. Before retrying, you need to check if the table exists.\n\nOptions B & D are incorrect as these exceptions are part of HTTP status code 5xx which indicates issues at AWS end. AWS should take corresponding actions from their end.\n\nOption E is incorrect as this exception is part of HTTP status code 4xx & for this error, you will need to fix errors before retrying. This error is generated when a condition being process is failed before moving to the next query.\n\nFor more information, refer to the following URL,\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html#Programming.Errors.MessagesAndCodes\n\nPlease refer to page 222 and 223 of the below link\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/dynamodb-dg.pdf\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on making use of the Elastic Container service for managing their container-based applications. They are going to process both critical and non-critical workloads with these applications. Which of the following COST effective setup would they consider?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use ECS orchestration and Spot Instances for processing critical data and On-Demand for the non-critical data"
    }, {
        "id": "B",
        "markdown": "Use ECS orchestration and On-Demand Instances for processing critical data and Spot Instances for the non-critical data"
    }, {
        "id": "C",
        "markdown": "Use ECS orchestration and Spot Instances for both the processing of critical data and non-critical data"
    }, {
        "id": "D",
        "markdown": "Use ECS orchestration and On-Demand Instances for both the processing of critical data and non-critical data"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nSpot Instance and On-demand Instance are very similar in nature. The main difference between these is a commitment. In Spot Instance there is no commitment. As soon as the Bid price exceeds Spot price, a user gets the Instance. In an On-demand Instance, a user has to pay the On-demand rate specified by Amazon. Once they have bought the Instance they have to use it by paying that rate.\nIn Spot Instance, once the Spot price exceeds the Bid price, Amazon will shut the instance. The benefit to the user is that they will not be charged for the partial hour in which Instance was taken back from them.\n\nSpot instances are not always cheaper than on-demand, they can and do sometimes fluctuate wildly, even to very high per hour amounts, higher than the on-demand price at times\n\nA Spot Instance is an unused EC2 instance that is available for less than the On-Demand price. Because Spot Instances enable you to request unused EC2 instances at steep discounts, you can lower your Amazon EC2 costs significantly. The hourly price for a Spot Instance is called a Spot price. The Spot price of each instance type in each Availability Zone is set by Amazon EC2 and adjusted gradually based on the long-term supply of and demand for Spot Instances. Your Spot Instance runs whenever capacity is available and the maximum price per hour for your request exceeds the Spot price.\n\nOptions A and C are incorrect since Spot Instances can be taken back or interrupted and should not be used for critical workloads\n\nOption D is not a cost-effective solution. You can use Spot Instances for non-critical workloads\n\nFor more information on Spot Instances, please refer to the below URL\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on setting up an application that will consists of a web layer. This web layer will consist of EC2 Instances sitting behind an Application Load Balancer. The company wants to protect the application against application level attacks. Which of the following can be used for this purpose?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Cloudfront"}, {"id": "B", "markdown": "AWS WAF"}, {
        "id": "C",
        "markdown": "AWS Config"
    }, {"id": "D", "markdown": "AWS VPC NACL"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nYou use AWS WAF to control how Amazon CloudFront or an Application Load Balancer responds to web requests. You start by creating conditions, rules, and web access control lists (web ACLs). You define your conditions, combine your conditions into rules, and combine the rules into a web ACL.\n\nOption A is invalid because this is used for content delivery\n\nOption C is invalid because this is a configuration service\n\nOption D is invalid because this is used to just block traffic based on simple rules\n\nFor more information on how the AWS WAF works, please refer to the below URL\n\nhttps://docs.aws.amazon.com/waf/latest/developerguide/how-aws-waf-works.html\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on setting up an application that will consist of a presentation layer and a data store in DynamoDB. The data in DynamoDB will only be used frequently within the week in which the data is inserted. After a week, the data would tend to become stale. But the stale data would need to be available on durable storage for future analysis on historical data. Also, management overhead should not be there. Which of the following would be the ideal implementation steps for this sort of architecture?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Setup DynamoDB tables. Scan the tables for older data and transfer them to another DynamoDB table."
    }, {
        "id": "B",
        "markdown": "Setup DynamoDB TTL(Time-to-live) and transfer the old data to S3 using AWS Lambda"
    }, {
        "id": "C",
        "markdown": "Use the AWS Data Pipeline service to transfer the older data to EBS volumes"
    }, {"id": "D", "markdown": "Use the AWS Data Pipeline service to transfer the older data to Amazon S3"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nAWS Data Pipeline is a web service that you can use to automate the movement and transformation of data. With AWS Data Pipeline, you can define data-driven workflows, so that tasks can be dependent on the successful completion of previous tasks. You define the parameters of your data transformations and AWS Data Pipeline enforces the logic that you've set up.\n\n\n\nOption A is invalid because this would be an inefficient way to handle the data. You will be using too much throughput in the scan process.\n\nOption B is invalid since it involves a lot of management overhead, So better choice is to use Data Pipeline. However, it is possible to do so. Refer below URL for implementation details,\n\nhttps://aws.amazon.com/blogs/database/automatically-archive-items-to-s3-using-dynamodb-time-to-live-with-aws-lambda-and-amazon-kinesis-firehose/\n\nOption C is invalid because EBS volumes are not durable storage\n\nFor more information on AWS Data Pipeline, please refer to the below URL\n\nhttps://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is going to setup an application that will be based on Docker-based containers. The containers will be setup in the Elastic Container Service. You need to also setup load balancing for the underlying services which are based on dynamic port values. Which of the following would be the fully managed service to use for this purpose?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Classic Load Balancer"}, {"id": "B", "markdown": "Route 53"}, {
        "id": "C",
        "markdown": "Network Load Balancer"
    }, {"id": "D", "markdown": "Application Load Balancer"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - D\n\nApplication Load Balancers offer several features that make them attractive for use with Amazon ECS services:\n\nApplication Load Balancers allow containers to use dynamic host port mapping (so that multiple tasks from the same service are allowed per container instance).\n\nApplication Load Balancers support path-based routing and priority rules (so that multiple services can use the same listener port on a single Application Load Balancer).\n\n Application Load Balancer provides enhanced container support by load balancing across multiple ports on a single Amazon EC2 instance. Deep integration with the Amazon EC2 Container Service (ECS), provides a fully-managed container offering. ECS allows you to specify a dynamic port in the ECS task definition, giving the container an unused port when it is scheduled on the EC2 instance. The ECS scheduler automatically adds the task to the load balancer using this port.\n\nAn Application Load Balancer is more suited for Microservices based architecture or container-based architecture.\n\nOptions A, C, and D are incorrect because Network Load Balancers support dynamic host port mapping but it doesn’t provide fully managed support for Containers and Classic load balancer doesn’t support dynamic host port mapping and Route53 is DNS based routing across multiple regions and not balance containers.\n\nFor more information on Load balancing, please refer to the below URL\n\nhttps://aws.amazon.com/elasticloadbalancing/features/#details\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an architecture which consists of a set of web servers in the public subnets. And database servers in the private subnet along with a NAT instance. The NAT instance is now becoming a bottleneck and you are looking to replace it with a NAT gateway. Which of the following would ensure a high availability setup for the NAT device?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Disable source/destination check on the NAT Instances"}, {
        "id": "B",
        "markdown": "Deploy the NAT gateway in 2 availability zones"
    }, {"id": "C", "markdown": "Deploy a NAT gateway along with the NAT instance"}, {
        "id": "D",
        "markdown": "Deploy the NAT Gateway in 2 regions"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nFirst, here we have a difference between NAT Instance and NAT Gateway\n\nA NAT instance is an Amazon EC2 instance configured to forward traffic to the Internet. It can be launched from an existing AMI.\n\nInstances in a private subnet that want to access the Internet can have their Internet-bound traffic forwarded to the NAT Instance via a Route Table configuration. The NAT Instance will then make the request to the Internet (since it is in a Public Subnet) and the response will be forwarded back to the private instance.\n\nTraffic sent to a NAT Instance will typically be sent to an IP address that is not associated with the NAT Instance itself (it will be destined for a server on the Internet). Therefore, it is important to turn off the Source/Destination Check option on the NAT Instance otherwise the traffic will be blocked.\n\nAWS introduced a NAT Gateway Service that can take the place of a NAT Instance. The benefits of using a NAT Gateway service are:\n\nIt is a fully-managed service -- just create it and it works automatically, including fail-over\n\nIt can burst up to 10 Gbps (a NAT Instance is limited to the bandwidth associated with the EC2 instance type)\n\nHowever,\n\nSecurity Groups cannot be associated with a NAT Gateway\n\nYou'll need one in each AZ since they only operate in a single AZ\n\nFor more differences, please refer below URL\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html\n\nEnsure that your NAT gateways are deployed in at least two Availability Zones (AZs) in order to enable EC2 instances available within private subnets to connect to the Internet or to other AWS services but prevent the Internet from initiating a connection with those instances. AWS Availability Zones are distinct locations that are engineered to be isolated from failures that occurred in other zones. Each NAT gateway must be deployed within a specific Availability Zone to receive the redundancy implemented in that zone.\n\nOption A is invalid since this is a requirement for the NAT instance to function and will not satisfy the requirement for the question\n\nOption C is invalid since you should just use one type of device\n\nOption D is invalid since you should achieve redundancy via Availability Zones\n\nFor more information on the NAT gateway, please refer to the below URL\n\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning on setting up an application with the following architecture\n\n \n\n\n\tA set of EC2 Instances hosting a web application.\n\tThe application will sit behind an Elastic Load balancer\n\tThe users will access the application from the internet via the Elastic Load balancer\n\tThe application will connect to a backend database server\n\tA NAT Gateway is also implemented\n\n\n \n\nWhich of the following is the right architecture for the network, keeping high availability and security in mind?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "2 public subnets for the Elastic Load balancer and NAT Gateway, 2 public subnets for the Web server EC2 Instances, 2 private subnets for the database server"
    }, {
        "id": "B",
        "markdown": "2 public subnets for the Elastic Load balancer and NAT Gateway, 2 private subnets for the Web server EC2 Instances, 2 private subnets for the database server"
    }, {
        "id": "C",
        "markdown": "2 public subnets for the Elastic Load balancer and NAT Gateway, 2 public subnets for the Web server EC2 Instances, 2 public subnets for the database server"
    }, {
        "id": "D",
        "markdown": "2 public subnets for the Elastic Load balancer and NAT Gateway, 2 private subnets for the Web server EC2 Instances, 2 public subnets for the database server"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nYou need to have public subnets for the Elastic Load balancer to ensure that traffic can flow via the Internet\n\nThe Web servers can be in the Private subnet since the communication between the instances and the ELB happens via the private IP and also it provide better security for the Web Servers.\n\nThe database servers should be in the private subnet since it does not need to communicate with the Internet\n\n\n\tOption A is invalid since the ELB is in the Public subnet, there is no need to place the Web Server in the Public subnet because ELB and Web Server communicate via Private IP.\n\tOption C is invalid since the  database servers don’t need to be in the public subnet\n\tOption D is invalid since the database servers don’t need to be in the public subnet\n\n\n \n\n\n\tFor more information on Elastic Load balancing, please refer to the below URL\n\t\n\t\thttps://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html\n\t\n\t\n\n\nNote: There is no requirement for ec2 instances to be in public subnet as route53 will route the request to elb whose endpoint is exposed as lb(Load Balancer) is in public subnet and the communication between elb and ec2 instances happen via private ip. So its better for security purpose.\n\n \n\nURL: https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-internet-facing-load-balancers.html\n\n \n\nreate an Internet-Facing Load Balancer\n\nWhen you create a load balancer in a VPC, you can make it an internal load balancer or an Internet-facing load balancer. You create an Internet-facing load balancer in a public subnet. Load balancers in EC2-Classic are always Internet-facing load balancers.\n\nWhen you create your load balancer, you configure listeners, configure health checks, and register back-end instances. You configure a listener by specifying a protocol and a port for front-end (client to load balancer) connections, and a protocol and a port for back-end (load balancer to back-end instances) connections. You can configure multiple listeners for your load balancer.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working as an AWS consultant for a Bio-technology company that is working on the Human genome data processing. They are using HDFS to process this large amount of data. They are planning to migrate these systems to AWS Instance where 50 x EC2 C5 instance will be used to compute data. This is a critical project where any failure will result in huge financial loss. Company is seeking your recommendation for the best solution to avoid correlated failures. Which ways can be used to limit the impact of any Hardware failure in this scenario? (Select two)",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use AWS CLI to deploy EC2 instance in Partitioned Placement group."
    }, {"id": "B", "markdown": "Use AWS CLI to deploy EC2 instance in Cluster Placement group."}, {
        "id": "C",
        "markdown": "Use AWS CLI to deploy EC2 instance in Spread Placement group."
    }, {"id": "D", "markdown": "Use AWS Console to deploy EC2 instance in Partitioned Placement group."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A and D\n\nLaunching EC2 in the Placement group is possible using both CLI and Console.\n\nPlease refer below URL for details,\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/placement-groups.html#launch-instance-placement-group\n\nFirstly, a Rack server is a computer dedicated to use as a server and designed to be installed in a framework called a rack. Each rack has its own network and power source.\n\nIn Partition Placement group, each logical partition within the placement group has its own set of racks. If a rack fails (hardware failure), it may affect multiple instances on that rack within that logical partition. So, if you have replication in other partitions, then your data will be safe. This will be good for Big data applications like HDFS, HBase, Cassandra, Kafka or any other fault-tolerant systems. This placement group strikes a balance between High Performance and High Availability\n\nOption B is incorrect because, in the Cluster Placement group, all instances are placed within a rack. If the rack fails (hardware failure), all instances fail at the same time. Ideal for High-Performance applications.\n\nOption C is incorrect because, in the Spread Placement group, each instance is placed in its own distinct rack. Each rack has at most one instance. A rack failure (hardware failure) will not affect more than one instance. Ideal for High Availability or mission-critical applications.\n\nFor more information on Placement Groups, refer to the following URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An application needs to be set up on AWS. It consists of several components. Two primary components are required to run for 3 hours every day. The other components are required every day for more than 6-8 hours.  Which of the following would you use to ensure COSTS are minimized for the underlying EC2 Instances?\n\nPlease select :",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Reserved instances for the primary components and On-Demand Instances for the remaining components."
    }, {
        "id": "B",
        "markdown": "Spot instances for the primary components and On-Demand Instances for the remaining components."
    }, {
        "id": "C",
        "markdown": "On-Demand instances for the primary components and Spot  Instances for the remaining components."
    }, {
        "id": "D",
        "markdown": "On-Demand instances for the primary components and Reserved Instances for the remaining components."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following\n\nReserved Instances provide you with a significant discount compared to On-Demand Instance pricing. Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account. These On-Demand Instances must match certain attributes in order to benefit from the billing discount.\n\nOn-Demand Instances – Pay, by the second, for the instances that you launch.\n\n\n\tOption A is incorrect since the primary component just runs for 3 hours and also keeping minimal costs in mind, On-demand instances would be the correct choice here (since using reserved instances incur upfront costs)\n\tOptions B and C are incorrect since we don’t know the type of workload to decide whether Spot Instances are required\n\tFor more information on On-Demand and Reserved Instances, please refer to the below URL\n\t\n\t\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}]
