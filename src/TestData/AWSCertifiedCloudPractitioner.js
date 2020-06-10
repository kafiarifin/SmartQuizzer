export default [{
    "questionComplexityIndex": 0,
    "explanation": "Which AWS services\ncan be used to store files?  Choose 2\nanswers from the options given below:",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon CloudWatch"}, {
        "id": "B",
        "markdown": "Amazon Simple Storage Service (Amazon S3)"
    }, {"id": "C", "markdown": "Amazon Elastic Block Store (Amazon EBS)"}, {
        "id": "D",
        "markdown": "AWS Config"
    }, {"id": "E", "markdown": "Amazon Athena"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B and C\n\nThe\nAWS documentation mentions the following \n\nAmazon\nS3 is object storage built to store and retrieve\nany amount of data from anywhere – web sites and mobile apps, corporate\napplications, and data from IoT sensors or devices. It is designed to deliver\n99.999999999% durability, and stores data for millions of applications used by\nmarket leaders in every industry. \n\nFor\nmore information on the Simple Storage Service, please refer to the below URL:\n\nhttps://aws.amazon.com/s3/\n\nAmazon\nElastic Block Store (Amazon EBS) provides persistent block storage volumes for\nuse with Amazon EC2 instances in the AWS Cloud.\nEach Amazon EBS volume is automatically replicated within its Availability Zone\nto protect you from component failure, offering high availability and\ndurability.\n\nFor\nmore information on Amazon EBS, please refer to the below URL:\n\nhttps://aws.amazon.com/ebs/Answer A is incorrect. Amazon CloudWatch is used for performance monitoring.Answer D is incorrect. AWS Config is used to audit and monitor configuration changes.Answer E is incorrect. Amazon Athena is a serverless query service used to analyze BigData stored in S3.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the best-suited file storage option for use when an administrator is looking to deploy shared file access, linux-based workloads which will require up to petabytes of data stores?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EFS"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "AWS Snowball"
    }, {"id": "D", "markdown": "Amazon EBS"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A \n\nAmazon Elastic File Storage (EFS) is the best-suited file storage option for the described scenario as it is designed for shared file access as well as scaling to petabyte data store.\n\nhttps://aws.amazon.com/efs/when-to-choose-efs/\n\n\n\tOption B. is incorrect because Amazon S3 is an object data store which is not suitable for deploying linux-based workloads as the scenario outlines.\n\tOption C. is incorrect because AWS Snowball is a data transport solution and data migration which is not suitable for deploying shared file access builds.\n\t \n\t\n\t\thttps://aws.amazon.com/snowball/\n\t\n\t\n\tOption D. is incorrect because Amazon Elastic Block store is block storage service for access by an EC2 instance but without the capability of a share file access. Applications that utilize persistent or dedicated block storage for a single instance can use Amazon EBS storage.\n\t\n\t\thttps://aws.amazon.com/efs/when-to-choose-efs/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In Amazon S3, what is the difference between lifecycle policies and intelligent tiering?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Lifecycle policies are not dependant on access patterns as is the case with intelligent tiering, instead they are pre-configured with a transition rule."
    }, {
        "id": "B",
        "markdown": "Intelligent tiering is an object storage class which is not dependant on access patterns, it uses a pre-configured transition rule."
    }, {
        "id": "C",
        "markdown": "When transitioning objects into different storage classes, intelligent tiering is automatic whilst lifecycle policies have to be manually triggered."
    }, {
        "id": "D",
        "markdown": "Lifecycle policies cannot be configured to permanently delete objects from an S3 bucket whilst intelligent tiering can do so if versioning is turned on."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nWithin Amazon S3, lifecycle policies are used to automatically transition objects through different storage classes in accordance to a preconfigured rule. This rule will typically move the object regardless of how frequently it is accessed.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n\n\tOption B. is incorrect because intelligent tiering uses access patterns when determining transitioning action.\n\n\t\n\t\thttps://aws.amazon.com/s3/storage-classes/\n\t\n\t\n\tOption C. is incorrect because lifecycle policies are automatically triggered when the ‘days after creation’ period lapses.\n\tOption D. is incorrect because lifecycle policies can indeed be configured to permanently delete objects. Intelligent tiering cannot be configured to permanently delete objects even if versioning is turned on for the objects.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS service provides infrastructure\nsecurity optimization recommendations?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Application Programming Interface(API)"}, {
        "id": "B",
        "markdown": "Reserved Instances"
    }, {"id": "C", "markdown": "AWS Trusted Advisor"}, {
        "id": "D",
        "markdown": "Amazon Elastic Compute Cloud (Amazon EC2) SpotFleet"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C\n\nThe\nAWS documentation mentions the following \n\n An\nonline resource to help you reduce cost, increase performance, and improve\nsecurity by optimizing your AWS environment, Trusted Advisor provides real time\nguidance to help you provision your resources following AWS best practices\n\nFor\nmore information on the AWS Trusted Advisor, please refer to the below URL:\n\nhttps://aws.amazon.com/premiumsupport/trustedadvisor/Choices A, B, and D are incorrect. They are not related to infrastructure security optimization.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A department in an organisation has a stipulated monthly expenditure limit on their AWS account and is anxious about exceeding it. How best can they allay this concern?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Regularly review their Billing and Cost management dashboard during the course of the month in the management console."
    }, {
        "id": "B",
        "markdown": "Under Billing Preferences > Cost Management Preferences, they should tick the Receive Free Tier Usage Alerts checkbox."
    }, {
        "id": "C",
        "markdown": "In AWS CloudWatch they ought to create an alarm that triggers each time the services bill surpasses the limit."
    }, {
        "id": "D",
        "markdown": "In AWS Budgets, creating an email alert based on the budget parameters would suffice."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Budgets provides a useful feature of setting custom budgets that prompt the user when their costs or usage are forecasted to exceed. The forecast aspect gives a buffer period in advance when alerting the user. Budgets can be tracked at the monthly, quarterly, or yearly level, and have customizable start and end dates. Alerts can be sent via email and/or Amazon Simple Notification Service (SNS) topic.\n\n\n\thttps://aws.amazon.com/aws-cost-management/aws-budgets/\n\n\nOption A is INCORRECT because the regular review will not stop nor alert the department if their service bill were to exceed their stipulated budget.\n\n\n\thttps://docs.aws.amazon.com/account-billing/index.html\n\n\nOption B is INCORRECT because selecting the Receive Free Tier Usage Alerts checkbox would notify the department each time their service bills goes out of the free-tier range only and not when it approaches the limit.\n\n\n\thttps://aws.amazon.com/about-aws/whats-new/2017/12/aws-free-tier-usage-alerts-automatically-notify-you-when-you-are-forecasted-to-exceed-your-aws-service-usage-limits/\n\n\nOption C is INCORRECT because configuring an alarm in AWS CloudWatch that triggers after exceeding the bill will not meet the requirements of staying within the desired budget. The alarm triggers when the account billing exceeds the threshold specified. It triggers only when actual billing exceeds the threshold. It does not use projections based on the usage so far in the month.\n\n\n\thttps://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company needs to know which user was responsible for terminating several critical Amazon Elastic Compute Cloud (EC2) Instances. Where can the customer find this information?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Trusted Advisor"}, {
        "id": "B",
        "markdown": "Amazon EC2 instance usage report"
    }, {"id": "C", "markdown": "Amazon CloudWatch"}, {"id": "D", "markdown": "AWS CloudTrail logs"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - D\n\nUsing CloudTrail , one can monitor all the API activity conducted on all AWS services.\n\nThe AWS Documentation additionally mentions the following\n\nAWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.\n\nFor more information on AWS Cloudtrail, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/cloudtrail/\n\n\nAnswers A, B and C are incorrect. Cloudtrail is the most appropriate place to monitor activity in AWS.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "On a social media website, creative content goes viral for a few days and then rapidly declines in popularity and views thereafter. Which storage class and configuration option would you choose for a cost-effective storage?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3 Standard with object versioning"}, {
        "id": "B",
        "markdown": "Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)"
    }, {"id": "C", "markdown": "Amazon Elastic File Store (EFS)"}, {
        "id": "D",
        "markdown": "Amazon S3 Standard with lifecycle policies"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nTransition actions—Define when objects transition to another storage class.For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the GLACIER storage class one year after creating them.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html\n\n \n\n\n\tOption A. is incorrect because when the media file is no longer popular after a few weeks, storing it in Amazon S3 Standard with object versioning will not be cost-effective. Object versioning has little relevance in the scenario.\n\tOption B. is incorrect because Amazon S3 Intelligent-Tiering will transition the file between two storage classes only, frequent and infrequent access. When the media file is no longer popular, even infrequent access will not be cost-effective.\n\tOption C. is incorrect because Amazon Elastic File Store (EFS) is most appropriate as a shared file storage volume. It will not be a cost-effective method to store the media file.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the value of having AWS Cloud services accessible through an Application Programming Interface (API)?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "It allows developers to work with AWS resources programmatically"}, {
        "id": "B",
        "markdown": "AWS resources will always be cost-optimized"
    }, {"id": "C", "markdown": "All application testing can be managed by AWS."}, {
        "id": "D",
        "markdown": "Customer–owned, on–premises infrastructure becomes programmable."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nIt allows developers to easily work with the various AWS resources programmatically\n\n\n\tFor more information on the various programming tools available for AWS, please refer to the below URL:\n\t\n\t\thttps://aws.amazon.com/tools/\n\t\n\t\n\n\n \n\n\n\tOption B is incorrect. The AWS API does not reduce cost.\n\tOption C is incorrect. API allows the customer's developers to work with resources, not AWS.\n\tOptions D is incorrect. The AWS API only allows the customer to manage AWS resources, not on-premise.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator would like to prepare a report that will be presented to the auditing team. The report is meant to depict that the organizations’ cloud infrastructure has followed the widely accepted industry standards of deployment, maintenance, and monitoring. Which tool can they use to assist them?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CloudTrail"}, {"id": "B", "markdown": "AWS Trusted Advisor"}, {
        "id": "C",
        "markdown": "AWS Organisations"
    }, {"id": "D", "markdown": "AWS Total Cost of Ownership"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS CloudTrail is a service that primarily tracks governance, compliance, operational auditing, and risk auditing of your AWS account. CloudTrail logs continuously monitor, and retains account activity related to actions across all AWS infrastructure. CloudTrail provides event history of AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.\n\nhttps://aws.amazon.com/cloudtrail/\n\nOption B. is INCORRECT because AWS Trusted Advisor offers best practice checks and recommendations across five categories: cost optimization; security; fault tolerance; performance; and service limits. In the scenario, the administrator can be able to run a report on all of the organization’s infrastructure and present the information to the auditors accordingly.\n\nhttps://aws.amazon.com/premiumsupport/technology/trusted-advisor/\n\nOption C. INCORRECT because AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS. Whether you are a growing startup or a large enterprise, Organizations help you to centrally manage to bill; control access, compliance, and security; and share resources across your AWS accounts.  Using AWS Organizations, you can automate account creation, create groups of accounts to reflect your business needs, and apply policies for these groups for governance. You can also simplify billing by setting up a single payment method for all of your AWS accounts.\n\nhttps://aws.amazon.com/organizations/\n\nOption D. INCORRECT because AWS Total Cost of Ownership (TCO) helps in the assessment of the cost of infrastructure versus using cloud services. The resources help by reducing the need to invest in large capital expenditures and providing a pay-as-you-go model that empowers you to invest in the capacity you need and use only when the business requires it. TCO calculators allow for the estimation of the cost savings when using AWS and provide a detailed set of reports that can be used in executive presentations.\n\nhttps://aws.amazon.com/tco-calculator/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A file-sharing service uses Amazon S3 to store files uploaded by users. Files are accessed with random frequency, popular ones are downloaded every day whilst others not so often and some rarely. What is the most cost-effective Amazon S3 object storage class to implement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3 Standard"}, {"id": "B", "markdown": "Amazon S3 Glacier"}, {
        "id": "C",
        "markdown": "Amazon S3 One Zone-Infrequently Accessed"
    }, {"id": "D", "markdown": "Amazon S3 Intelligent-Tiering"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nS3 Intelligent-Tiering is a new Amazon S3 storage class designed for customers who want to optimize storage costs automatically when data access patterns change, without performance impact or operational overhead. S3 Intelligent-Tiering is the first cloud object storage class that delivers automatic cost savings by moving data between two access tiers — frequent access and infrequent access — when access patterns change, and is ideal for data with unknown or changing access patterns.\n\nS3 Intelligent-Tiering stores objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. For a small monthly monitoring and automation fee per object, S3 Intelligent-Tiering monitors access patterns and moves objects that have not been accessed for 30 consecutive days to the infrequent access tier. There are no retrieval fees in S3 Intelligent-Tiering. If an object in the infrequent access tier is accessed later, it is automatically moved back to the frequent access tier. No additional tiering fees apply when objects are moved between access tiers within the S3 Intelligent-Tiering storage class. S3 Intelligent-Tiering is designed for 99.9% availability and 99.999999999% durability, and offers the same low latency and high throughput performance of S3 Standard.\n\nhttps://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/\n\n\n\tOption A. is incorrect because Amazon S3 Standard would be an inefficient class for storing those objects that will be accessed rarely.\n\tOption B. is incorrect because storing objects that are frequently accessed in Amazon S3 Glacier would present operational bottlenecks since these objects would not be available instantly.\n\t\n\t\thttps://aws.amazon.com/s3/storage-classes/\n\t\n\t\n\tOption C. is incorrect because storing those objects that are rarely accessed and those that would be accessed frequently in Amazon S3 One Zone-Infrequently Accessed would be inefficient.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS service\nautomates infrastructure provisioning and administrative tasks for an\nanalytical data warehouse?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Redshift"}, {"id": "B", "markdown": "Amazon DynamoDB"}, {
        "id": "C",
        "markdown": "Amazon ElastiCache"
    }, {"id": "D", "markdown": "Amazon Aurora"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- A\n\nThe\nAWS documentation mentions the following\n\nAmazon\nRedshift is a fully managed, petabyte-scale data warehouse service in the\ncloud. You can start with just a few hundred gigabytes of data and scale to a\npetabyte or more. This enables you to use your data to acquire new insights for\nyour business and customers.\n\nFor\nmore information on AWS Redshift, please refer to the below URL:\n\nhttp://docs.aws.amazon.com/redshift/latest/mgmt/welcome.htmlChoices B, C and D are incorrect. Amazon Redshift is the only data warehousing service out of the choices below.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator would like to automate the creation of new AWS accounts for the research and development department of the organisation where new workloads need to be spun-up promptly and categorized into groups. How can this be achieved efficiently?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use of AWS CloudFormation would be sufficient"}, {
        "id": "B",
        "markdown": "Use of AWS Organisations"
    }, {
        "id": "C",
        "markdown": "Using the AWS API to programmatically create each account via command line interface"
    }, {"id": "D", "markdown": "AWS Identity Access Management (IAM)"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Organizations allows the user to automate the creation of new AWS accounts when they need to quickly launch new workloads. The administrator can add these new accounts to user-defined groups in an organization for easy categorization. For example, you can create separate groups to categorize development and production accounts, and then apply a Service Control Policy (SCP) to the production group allowing only access to AWS services required by production workloads.\n\nhttps://aws.amazon.com/organizations/\n\nOption A. is INCORRECT because AWS CloudFormation does not aide in the automated AWS account creation. AWS CloudFormation provides a common language for the administrator to describe and provision all the infrastructure resources in their cloud environment. CloudFormation allows the administrator to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for applications across all regions and accounts. This file serves as a single source of truth for your cloud environment.\n\nhttps://aws.amazon.com/cloudformation/\n\nOption C. is INCORRECT because using AWS API to programmatically create each account via command-line interface is feasible but not efficient.\n\nThe AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.\n\nhttps://aws.amazon.com/cli/\n\nOption D. is INCORRECT because using AWS Identity Access Management (IAM) to fulfill the task is inefficient and tedious. AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. IAM is a feature of your AWS account offered at no additional charge. You will be charged only for use of other AWS services by your users.\n\nhttps://aws.amazon.com/iam/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organisation utilizes a software suite, that consists of a multitude of underlying microservices hosted on the cloud. The application is frequently giving runtime errors. Which service will help in the troubleshooting process?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CloudTrail"}, {"id": "B", "markdown": "AWS CloudWatch"}, {
        "id": "C",
        "markdown": "AWS X-Ray"
    }, {"id": "D", "markdown": "Amazon Elasticsearch Service"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. With X-Ray, developers can understand how the application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors. X-Ray provides an end-to-end view of requests as they travel through an application, and shows a map of an application’s underlying components.\n\nhttps://aws.amazon.com/xray/\n\nOption A. is INCORRECT because AWS CloudTrail primarily records user or API activity, ‘who has done what’. It logs, continuously monitors, and retains account activity related to actions across AWS infrastructure. CloudTrail provides event history in the AWS account activity but NOT that of the interaction of software microservices within a suite.\n\nhttps://aws.amazon.com/cloudtrail/\n\nOption B. is INCORRECT because AWS CloudWatch does the primary function of monitoring and NOT debugging. It collates data and actionable insights to monitor applications, responds to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. The service, however, does neither debugs nor logs errors that occur amongst software microservices within a suite.\n\nhttps://aws.amazon.com/cloudwatch/\n\nOption D. is INCORRECT because Amazon Elasticsearch is a fully managed service that enables the secure ingest of data from any source so that it can be searched, analyzed, and visualized it in real time. It does not allow for debugging or error detection.\n\nhttps://aws.amazon.com/elasticsearch-service/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator would like to efficiently automate the replication and deployment of a specific software configuration existent on one EC2 instance onto four hundred others. Which AWS service is BEST suited for this implementation?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS OpsWorks"}, {"id": "B", "markdown": "AWS Beanstalk"}, {
        "id": "C",
        "markdown": "AWS Launch Configuration"
    }, {"id": "D", "markdown": "AWS Auto-scaling"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS OpsWorks provides a fully managed configuration automation and management service of Chef and Puppet. These platforms will allow for the use of code to automate the configuration of the EC2 instances, including replication as stated in the scenario. With Chef and Puppet, OpsWorks allows for the automation of how servers are configured, deployed, and managed across Amazon EC2 instances or on-premises compute environments.\n\nOption B. is INCORRECT because AWS Elastic Beanstalk is a service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS. It will not be able to autonomously replicate a specific software service configuration onto a multitude of EC2 instances.\n\nhttps://aws.amazon.com/elasticbeanstalk/\n\nOption C. is INCORRECT because a Launch Configuration is primarily an instance configuration template that an Auto Scaling group uses to launch EC2 instances. It is the blueprint of the Auto Scaling group and determines the configuration output of each instance.\n\nhttps://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html\n\nOption D. is INCORRECT because Auto-scaling is responsive to preset threshold levels in a deployment environment. It does not offer a fully managed functionality that allows for the mass replication of a specific configuration as the scenario outlines. CloudWatch parameters, it monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.\n\nhttps://aws.amazon.com/autoscaling/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "The main benefit of decoupling an application is to:",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create a tightly integrated application"}, {
        "id": "B",
        "markdown": "Reduce inter-dependencies so failures do not impact other components"
    }, {"id": "C", "markdown": "Enable data synchronization across the web application layer."}, {
        "id": "D",
        "markdown": "Have the ability to execute automated bootstrapping actions."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe entire concept of decoupling components is to ensure that the different components of an applications can be managed and maintained separately. If all components are tightly coupled then when one component goes down , the entire application would do down. Hence it is always a better design practice to decouple application components.\n\nFor more information on a decoupled architecture, please refer to the below URL:\n\n\n\thttp://whatis.techtarget.com/definition/decoupled-architecture\n\n\nA is incorrect. Decoupling would be the inverse of creating tight integration.\n\nC and D are incorrect. Decoupling has no impact on these choices.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is a benefit of running an application across two Availability Zones?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Performance is improved over running in a single Availability Zone."
    }, {"id": "B", "markdown": "It is more secure than running in a single Availability Zone."}, {
        "id": "C",
        "markdown": "It significantly reduces the total cost of ownership versus running in a single Availability Zone."
    }, {
        "id": "D",
        "markdown": "It increases the availability of an application compared to running in a single Availability Zone."
    }],
    "answerExplanation": "\n                            Explanation:\n                            The correct answer is Option D.\n\nEach AZ is a set of one or more data centers. By deploying your AWS resources to multiple Availability zones , you are designing with failure in mind. So if one AZ were to go down , the other AZ’s would still be up and running and hence your application would be more fault tolerant.\n\nFor more information on AWS Regions and AZ’s, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n\n\nA, B and C are incorrect. Spreading an application across availability zones increases redundancy. It does not have a positive impact on performance, security or cost. \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A cloud solutions architect needs to execute urgent mission-critical tasks on the  AWS Management console, but has left their Windows-based machine at home. What secure option can be used to administer these tasks on the cloud infrastructure given that only non-graphical user interface (non-GUI), Linux-based machines are readily available?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Share the AWS Management console credentials with the person at home over the phone, so they can execute on the cloud solutions architect behalf"
    }, {
        "id": "B",
        "markdown": "Use third-party remote desktop software to access the Windows-based machine at home from the non-GUI workstations and administer the necessary tasks"
    }, {
        "id": "C",
        "markdown": "Use Secure Shell (SSH) to securely connect to the Windows-based machine from one of the non-GUI Linux-based machines then log onto the AWS Management console"
    }, {
        "id": "D",
        "markdown": "Install and run AWS CLI on one of the non-GUI Linux-based machines, in a shell environment such as bash, the cloud solutions architect can access ALL services just as they could from a Windows-based machine."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Command Line Interface (AWS CLI) is an open source tool that enables access and interaction with AWS services using commands in the command-line shell. With minimal configuration the cloud solutions architect would  start using the functionality equivalent to that provided by the browser-based AWS Management Console from the command prompt in a terminal program such as bash.\n\nhttps://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html\n\nOption A. is INCORRECT because sharing AWS Management console credentials is bad-practice and poses a high security risk.\n\nhttps://aws.amazon.com/iam/details/managing-user-credentials/\n\nOption B. is INCORRECT accessing the AWS Management console via third-party remote desktop software is insecure since the remote machine can be compromised.\n\nOption C. is INCORRECT because it is rather cumbersome in comparison, though secure the option is oblivious of the direct access method of AWS CLI\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "According to the AWS, what is the benefit of Elasticity?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Minimize storage requirements by reducing logging and auditing activities"
    }, {
        "id": "B",
        "markdown": "Create systems that scale to the required capacity based on changes in demand"
    }, {"id": "C", "markdown": "Enable AWS to automatically select the most cost-effective services."}, {
        "id": "D",
        "markdown": "Accelerate the design process because recovery from failure is automated, reducing the need for testing"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe concept of Elasticity is the means of an application having the ability to scale up and scale down based on demand. An example of such a service is the Autoscaling service\n\nFor more information on AWS Autoscaling service, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/autoscaling/\n\n\nA, C and D are incorrect. Elasticity will not have positive effects on storage, cost or design agility.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Amazon Elastic Compute Cloud (Amazon EC2) Spot instances would be most appropriate for which of the following scenarios:",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Workloads that are only run in the morning and stopped at night"}, {
        "id": "B",
        "markdown": "Workloads where the availability of the Amazon EC2 instances can be flexible"
    }, {"id": "C", "markdown": "Workloads that need to run for long periods of time without interruption"}, {
        "id": "D",
        "markdown": "Workloads that are critical and need Amazon EC2 instances with termination protection"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS documentation mentions the following\n\nSpot Instances are a cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted. For example, Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks\n\nFor more information on AWS Spot Instances, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html\n\n\nA, C and D are incorrect. Since spot instances can be terminated by Amazon depending on market prices, it cannot be guaranteed to run during specific period of need, computing with time constraints or highly critical computing.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "\"S3 Intelligent-Tiering\" object storage class delivers automatic cost savings by moving data between which of the two access tiers?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Standard access and Frequent access"}, {
        "id": "B",
        "markdown": "Frequent access and Infrequent access"
    }, {"id": "C", "markdown": "Standard access and Infrequent access"}, {
        "id": "D",
        "markdown": "Standard access and One Zone-Infrequent access"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nS3 Intelligent-Tiering stores objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. The transitioning is based on the access patterns of the objects.\n\nhttps://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/\n\n\n\tOption A. is incorrect because Amazon S3 intelligent tiering storage class does not transition objects into the Standard storage class\n\tOption C. is incorrect because the Standard storage class though similar to Frequent access, is not the same.\n\tOption D. is incorrect because Amazon S3 intelligent tiering storage class does not transition objects into the Standard and One Zone-Infrequent access classes.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which tool can you use to forecast your AWS spending?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Organizations"}, {"id": "B", "markdown": "Amazon Dev Pay"}, {
        "id": "C",
        "markdown": "AWS Trusted Advisor"
    }, {"id": "D", "markdown": "AWS Cost Explorer"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – D\n\nThe AWS Documentation mentions the following\n\nCost Explorer is a free tool that you can use to view your costs. You can view data up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase. You can use Cost Explorer to see patterns in how much you spend on AWS resources over time, identify areas that need further inquiry, and see trends that you can use to understand your costs. You also can specify time ranges for the data, and view time data by day or by month.\n\nFor more information on the AWS Cost Explorer, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-explorer-what-is.html\n\n\nA, B and C are incorrect. These services do not relate to billing and cost.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator noticed a consistent spike in processor and memory activity on the organisation’s web servers that host a large web application, this was after installing Secure Socket Layer/Transport Layer Security (SSL/TLS) for security. This increased activity degraded the web application’s responsiveness. What is the best-practice solution to resolve the situation?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Migrate the web application onto m4.4xlarge EC2 instances with robust compute, processing and networking capability."
    }, {"id": "B", "markdown": "Offload the SSL/TLS from running locally to AWS CloudHSM."}, {
        "id": "C",
        "markdown": "Create an auto-scaling group that scales out as traffic to the web application cluster increases."
    }, {
        "id": "D",
        "markdown": "Create a custom AWS CloudWatch metric to monitor the instance resources, by writing a script in the AWS Command Line Interface (AWS CLI)."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS CloudHSM service can take up SSL/TLS processing for the web servers. Layer Security (TLS) are used to confirm the identity of web servers and establish secure HTTPS connections over the Internet. Using CloudHSM for this processing reduces the burden on the organisation’s web servers and provides extra security by storing the web server's private key in CloudHSM.\n\nhttps://aws.amazon.com/cloudhsm/\n\nOption A. is INCORRECT because opting for EC2 instances with larger resource capacities is not best-practice. During periods of low activity, these resources will be idle therefore not cost-effective. Cloud infrastructure and resources should scale-in and out on-demand, thereby aligning service costs to actual usage.\n\nhttps://aws.amazon.com/ec2/instance-types/\n\nOption C. is INCORRECT because the cause of the degraded web application is not due to increased traffic, therefore the auto-scaling group will not solve the situation since it will respond to the web application traffic metric to the web servers.\n\nhttps://aws.amazon.com/autoscaling/\n\nOption D. is INCORRECT because creating a custom AWS CloudWatch metric to monitor the instance’s resources will not help reduce the high workload on the web servers in any way. It will, however, give visual output to the administrator to observe usage patterns. From the scenario, this is already in place.\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/mon-scripts.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A radio station compiles a list of the most popular songs each year and will seldom refer to the information thereafter. Listeners can get access to this information up to 24 hours after request. Which is the most cost-effective object storage for this information?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3 Glacier"}, {
        "id": "B",
        "markdown": "Amazon S3 One Zone - Infrequently Accessed"
    }, {"id": "C", "markdown": "Amazon S3 Glacier Deep Archive"}, {
        "id": "D",
        "markdown": "Amazon S3 Standard - Infrequently Accessed"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAmazon S3 Glacier Deep Archive is the most cost-effective object storage to implement because the information will be rarely accessed and when it is accessed, its retrieval period will not be instant.\n\nhttps://aws.amazon.com/s3/faqs/#Amazon_S3_Glacier_Deep_Archive\n\n\n\tOption A. is incorrect because the information is relevant once, when it is created and might not be referred to again, Amazon S3 Glacier is appropriate to a certain degree but not the most cost-effective option.\n\tOption B. is incorrect because Amazon S3 One Zone - Infrequently Accessed is suitable for information that warrants a short retrieval time. In the scenario, a short retrieval time is not critical.\n\tOption D. is incorrect because Amazon S3 Standard - Infrequently Accessed is not a cost-effective option since the list of songs will only be relevant once and then rarely accessed thereafter.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A Disaster Recovery Strategy\non AWS should be based on launching resources in a separate :",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Subnet"}, {"id": "B", "markdown": "AWS Region"}, {
        "id": "C",
        "markdown": "Security Group"
    }, {"id": "D", "markdown": "Amazon Virtual Private Cloud (Amazon VPC)"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nAWS Documentation mentions the following\n\nBusinesses\nare using the AWS cloud to enable faster disaster recovery of their critical IT\nsystems without incurring the infrastructure expense of a second physical site.\nThe AWS cloud supports many popular disaster recovery (DR) architectures from\n“pilot light” environments that may be suitable for small customer workload\ndata center failures to “hot standby” environments that enable rapid failover\nat scale. With data centers in Regions all around the world, AWS provides a set of\ncloud-based disaster recovery services that enable rapid recovery of your IT\ninfrastructure and data.\n\nFor\nmore information on enabling AWS Disaster Recovery, please refer to the below URL:\n\nhttps://aws.amazon.com/disaster-recovery/A, C and D are incorrect. A subnet, security group and VPC will not add the additional redundancy required for Disaster Recovery. \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing is a factor when calculating Total Cost of Ownership (TCO) for the\nAWS Cloud?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The number of servers migrated to AWS"}, {
        "id": "B",
        "markdown": "The number of users migrated to AWS"
    }, {"id": "C", "markdown": "The number of passwords migrated to AWS"}, {
        "id": "D",
        "markdown": "The number of keys migrated to AWS"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A\n\nRunning servers will incur costs. The number of running servers is one factor of Server Costs; a key component of AWS's Total Cost of Ownership (TCO).\n\nFor\nmore information on AWS TCO, please refer to the below URL:\n\nhttps://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/B, C and D are incorrect. These are not factors in AWS's Total Cost of Ownership.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A group of developers for a startup company store their source code and binary files on a shared open-source repository platform which is publicly accessible over the internet. They have embarked on a new project in which their client requires high confidentiality and security on all development assets. What AWS service can the developers use to meet the requirement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CodeCommit"}, {"id": "B", "markdown": "AWS CodeDeploy"}, {
        "id": "C",
        "markdown": "AWS Lambda"
    }, {"id": "D", "markdown": "AWS CodeStar"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS CodeCommit is a managed source control service that can be used as a data store to store source code, binaries, scripts, HTML pages and images which are accessible over the internet. CodeCommit encrypts files in transit and at rest which fulfills the additional client requirement (high confidentiality & security) mentioned in the question. Also, CodeCommit works well with Git tools, and other existing CI/CD tools.\n\nhttps://aws.amazon.com/codecommit/\n\nOption B. is INCORRECT because AWS CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services.\n\nhttps://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html\n\nOption C. is INCORRECT because AWS Lambda will allow the developers in the scenario to run code without provisioning or managing servers. The company would pay only for the compute time consumed - there would be no charge when your code is not running. \n\nhttps://aws.amazon.com/lambda/\n\nOption D. is INCORRECT because AWS CodeStar provides a unified user interface, enabling you to easily manage your software development activities in one place. With AWS CodeStar, you can set up your entire continuous delivery toolchain in minutes, allowing you to start releasing code faster. AWS CodeStar makes it easy for your whole team to work together securely, allowing you to easily manage access and add owners, contributors, and viewers to your projects.\n\nhttps://aws.amazon.com/codestar/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organisation has a persistently high amount of throughput, it requires connectivity with no jitter and very low latency between its on-premise infrastructure and its AWS cloud build to support live streaming and real-time services. What is the MOST appropriate solution to meet this requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Data Streams"}, {"id": "B", "markdown": "AWS Kinesis"}, {
        "id": "C",
        "markdown": "Kinesis Data Firehose"
    }, {"id": "D", "markdown": "AWS Direct Connect"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Direct Connect is a cloud service solution that makes it easy to establish a dedicated network connection from the organisation’s premises to AWS. The service provides a dedicated network connection with one of the AWS Direct Connect locations making it possible to guaranteed high bandwidth and very low latency connectivity.\n\nhttps://aws.amazon.com/directconnect/\n\nOption A. is INCORRECT because the scenarios requires a connectivity option whilst Amazon Kinesis Data Streams (KDS),  is a massively scalable and durable real-time data streaming service. It does not, however, guarantee the quality of connectivity between the organisations on-premise infrastructure and the AWS cloud build. The data  KDS collects is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more.\n\nhttps://aws.amazon.com/kinesis/data-streams/\n\nOption B. is INCORRECT because the organisation requires a connectivity solution and not an application service. Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data in order to get timely insights and react quickly to new information.\n\nhttps://aws.amazon.com/kinesis/\n\nOption C. is INCORRECT because Amazon Kinesis Data Firehose is used to load streaming data into various destinations like data lakes, data stores and analytics tools. The service, however, does not guarantee link quality between the organisation’s on-premise infrastructure and that in the AWS cloud.\n\nhttps://aws.amazon.com/kinesis/data-firehose/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A professional educational institution maintains a dedicated web server and database cluster that hosts an exam results portal for modules undertaken by its students. The resource is idle for most of the learning cycle and becomes excessively busy when exam results are released. How can this architecture be improved to be cost-efficient?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configure AWS elastic load-balancing between the webserver and database cluster"
    }, {"id": "B", "markdown": "Configure RDS multi-availability zone for performance optimisation"}, {
        "id": "C",
        "markdown": "Configure serverless architecture leveraging AWS Lambda functions"
    }, {"id": "D", "markdown": "Migrate the web servers onto Amazon EC2 Spot Instances"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nLeveraging AWS Lambda functions will remove the need to run a dedicated web server for the organisation. During periods of high requests to the database cluster, AWS lambda backend infrastructure will automatically scale out resources to adequately meet the demand. AWS Lambda provides a platform to run code without provisioning or managing any servers. The organisation pays only for the compute time they consume - there is no charge when your code is not running.\n\nhttps://aws.amazon.com/lambda/\n\nOption A. INCORRECT because the premise of the scenario is about cost-efficiency more than load and server responsiveness. Load-balancing would manage the traffic amongst the database clusters but would not relieve the organisation of maintaining a dedicated web server which only works occasionally.\n\nhttps://aws.amazon.com/elasticloadbalancing/\n\nOption B. INCORRECT because RDS multi-availability zone does not optimise the setup, rather it allows for disaster recovery, enhanced availability and durability. The scenarios requires a solution that reduces the cost of maintaining the organization's infrastructure and run it efficiently.\n\nhttps://aws.amazon.com/rds/details/multi-az/\n\nOption D. INCORRECT because migrating to Amazon EC2 Spot Instances will negatively affect the operation of the portal during periods of high traffic. Instances could be terminated mid-transaction which would have adverse effects on the overall user experience. This would not be a cost-effective solution. Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud. Spot Instances are available at up to a 90% discount compared to On-Demand prices. Spot Instances can reclaim the capacity back with two-minutes of notice.\n\nhttps://aws.amazon.com/ec2/spot/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A business analyst would like to move away from creating complex database queries and static spreadsheets when generating regular reports for high-level management. They would like to dynamically publish insightful, graphically appealing reports with interactive dashboards. Which service can they use to accomplish this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon QuickSight"}, {
        "id": "B",
        "markdown": "Business intelligence on Amazon Redshift"
    }, {"id": "C", "markdown": "Amazon CloudWatch dashboards"}, {
        "id": "D",
        "markdown": "Amazon Athena integrated with Amazon Glue"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon QuickSight is the most appropriate service to utilise in the scenario, it is a fully-managed service that allows for insightful business intelligence reporting, with creative methods of data delivery including graphical and interactive dashboards. QuickSight includes machine learning which allows users to discover inconspicuous trends and patterns on their datasets.\n\nhttps://aws.amazon.com/quicksight/\n\n\n\tOption B. is INCORRECT because Amazon Redshift service is a data warehouse and will not meet the requirements of interactive dashboards and dynamic means of delivering reports.\n\tOption C. is INCORRECT because Amazon CloudWatch dashboards will not accomplish the requirements of the scenario, they are used to monitor AWS system resources and infrastructure services, though they are customizable and present information in a graphical manner.\n\tOption D. is INCORRECT because Amazon Athena is query service that allows for easy data analysis in Amazon S3 by using standard SQL. This services will not meet the requirements of the scenario. \n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the AWS feature that enables fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "File Transfer"}, {"id": "B", "markdown": "HTTP Transfer"}, {
        "id": "C",
        "markdown": "Amazon S3 Transfer Acceleration"
    }, {"id": "D", "markdown": "S3 Acceleration"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nThe AWS Documentation mentions the following\n\nAmazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. Transfer Acceleration takes advantage of Amazon CloudFront’s globally distributed edge locations. As the data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.\n\nFor more information on S3 transfer acceleration, please visit the Link:\n\n\n\thttp://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html\n\n\nOption A, B and D are incorrect. These features deal with transferring data but not between clients and an S3 bucket.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "As per the AWS Acceptable Use Policy, penetration testing of EC2 instances:",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "May be performed by AWS, and will be performed by AWS upon customer request."
    }, {"id": "B", "markdown": "May be performed by AWS, and is periodically performed by AWS."}, {
        "id": "C",
        "markdown": "Are expressly prohibited under all circumstances."
    }, {
        "id": "D",
        "markdown": "Can be performed by the customer, provided they work with the list of services mentioned by AWS."
    }, {
        "id": "E",
        "markdown": "May be performed by the customer on their owninstances, only if performed from EC2 instances."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D.\n\nYou no need to take prior authorization from AWS before doing a penetration test on EC2 Instances.\n\nPlease refer to the below URL: for more details.\n\n\n\thttps://aws.amazon.com/security/penetration-testing/\n\n\nA B and C are incorrect. AWS says as below:\n\n############\n\nPermitted Services – You're welcome to conduct security assessments against AWS resources that you own if they make use of the services listed below. We're constantly updating this list; click here to leave us feedback, or request for inclusion of additional services:\n\no Amazon EC2 instances, NAT Gateways, and Elastic Load Balancers\no Amazon RDS\no Amazon CloudFront\no Amazon Aurora\no Amazon API Gateways\no AWS Lambda and Lambda Edge functions\no Amazon Lightsail resources\no Amazon Elastic Beanstalk environments\n\n###########\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "The Trusted Advisor service provides insight regarding which five categories of an AWS account?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Security, fault tolerance, high availability, connectivity and Service Limits"
    }, {
        "id": "B",
        "markdown": "Security, access control, high availability, performance and Service Limits"
    }, {
        "id": "C",
        "markdown": "Performance, cost optimization, security, fault tolerance and Service Limits"
    }, {"id": "D", "markdown": "Performance, cost optimization, access control, connectivity and Service Limits"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nBelow is the screenshot of what services the Trusted Advisor Dashboard offers.\n\n \n\nFor more information on the AWS Trusted Advisor, please visit the Link:\n\n\n\thttps://aws.amazon.com/premiumsupport/trustedadvisor/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In a multi-node deployment architecture of Amazon Redshift data warehouse, what is the role of a leader node?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "To access compressed data from the underlying columns"}, {
        "id": "B",
        "markdown": "To receive queries and manage client connections"
    }, {
        "id": "C",
        "markdown": "Primarily act as an in-memory buffer area to improve operational efficiency"
    }, {"id": "D", "markdown": "To store data and perform computations and queries"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThere are two conventional architectures in which to deploy the Amazon Redshift data warehouse, as a single node which handles both client session and computations. The second as a multi node deployment. The latter consists of a leader node which receives queries and manages client connections to the database warehouse, whilst one or more compute nodes will store data and perform computations.\n\nhttps://docs.aws.amazon.com/redshift/latest/dg/c_high_level_system_architecture.html\n\n\n\tOption A is INCORRECT because the leader node does not fetch data from underlying tables, it is the function of the compute nodes\n\tOption C is INCORRECT because an in-memory buffer area is a caching service which is not the function of the leader node.\n\tOption D is INCORRECT because writing to file and performing computations and queries is the function of the compute nodes\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What best describes the \"Principle of Least Privilege\"? Choose the correct answer from the options given below:",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "All users should have the same baseline permissions granted to them to use basic AWS services."
    }, {
        "id": "B",
        "markdown": "Users should be granted permission to access only resources they need to do their assigned job."
    }, {
        "id": "C",
        "markdown": "Users should submit all access requests in written form so that there is a paper trail of who needs access to different AWS resources."
    }, {
        "id": "D",
        "markdown": "Users should always have a little more access granted to them then they need, just in case they end up needed it in the future."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe principle means giving a user account only those privileges which are essential to perform its intended function. For example, a user account for the sole purpose of creating backups does not need to install software: hence, it has rights only to run backup and backup-related applications. \n\nFor more information on principle of least privilege, please refer to the following Link:\n\n\n\thttps://en.wikipedia.org/wiki/Principle_of_least_privilege\n\n\nA, C and D are incorrect. These actions would not adhere to the Principle of Least Privilege.\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A developer would like to automate the installation, updating of a set of applications on a series of EC2 instances and on-premise servers. Which is the most appropriate service to use to achieve this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CodeBuild"}, {"id": "B", "markdown": "AWS CodeCommit"}, {
        "id": "C",
        "markdown": "AWS CodeDeploy"
    }, {"id": "D", "markdown": "AWS CloudFormation"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS CodeDeploy is a deployment service that allows developers to automate the installation of applications to hosts, Amazon EC2 instances, Amazon ECS instances, serverless Lambda functions or even on-premises servers. AWS CodeDeploy can enable the update of those applications.\n\nhttps://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html\n\n\n\tOption A. is INCORRECT because AWS CodeBuild is a fully managed service that primarily compiles source code and runs unit tests with the output being artifacts that will be ready for deployment.\n\n\nhttps://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html\n\n\n\tOption B. is INCORRECT because AWS CodeCommit service primarily serves the function of controlling software build versions as well as a private storage for software development assets such as binary files, source code and related documentation.\n\n\nhttps://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html\n\n\n\tOption D. is INCORRECT because AWS CloudFormation will not be able to run deployments of applications onto on-premises infrastructure. Furthermore, AWS CloudFormation automates the deployment of AWS resources but not applications and code onto hosts.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which statements accurately distinguish AWS Cloud9 from AWS Lambda. (Select TWO).",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "With AWS Cloud9, developers can share in real-time a development environment with just a few clicks and pair program together. This is not possible with AWS Lambda"
    }, {"id": "B", "markdown": "AWS Lambda can be used to create functions that run in AWS Cloud9 IDE"}, {
        "id": "C",
        "markdown": "AWS Lambda functions are dependent on the Amazon API Gateway whilst AWS Cloud9 IDE can write, run, and debug any code"
    }, {
        "id": "D",
        "markdown": "AWS Cloud9 provides an online platform to write, run, and debug code from the browser, whilst AWS Lambda functions can be installed locally"
    }, {
        "id": "E",
        "markdown": "Without locally installing an integrated development environment, AWS Cloud9 will not run."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, B\n\nAWS Cloud9 IDE has a real-time collaborative function that allows developers to share environments amongst teams and live code. It is accurate that functions written in AWS Lambda environment can be run and debugged in the AWS Cloud9 IDE.\n\nhttps://docs.aws.amazon.com/cloud9/latest/user-guide/lambda-functions.html\n\n \n\n\n\tOption C. is INCORRECT because functions written in AWS Lambda can still be invoked or triggered by a service without going through an API gateway\n\tOption D. is INCORRECT because AWS Lambda is a serverless environment service that does not require any resources to be installed locally on a server or desktop\n\tOption E. is INCORRECT because AWS Cloud9 is an integrated development environment that runs off Amazon infrastructure in the cloud and is fully functional without the need to run any resources locally on any server or desktop.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "During a live sports event in a remote location, local photographers are required to promptly upload images into an Amazon S3 bucket for processing by the editorial team. How can this process be optimized?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using Cross Region replication"}, {
        "id": "B",
        "markdown": "Using S3 Transfer Acceleration"
    }, {"id": "C", "markdown": "Using S3 Standard as the object storage class"}, {
        "id": "D",
        "markdown": "Using an FTP server with a web interface"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nUsing S3 Transfer Acceleration will allow the photographers to upload the images to a distinct URL, allowing them to upload images to the nearest Edge Location, then the file will be transferred in a fast, secure via the Amazon backbone network to the S3 bucket.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html\n\n\n\tOption A. is incorrect because Cross Region replication is not relevant in this scenario as there is no immediate need to copy (replicate) S3 bucket contents.\n\tOption C. is incorrect because using S3 Standard as the object storage class will not optimize the process of uploading images as outlined in the scenario.\n\tOption D. is incorrect because using an FTP server will not optimize the process of uploading the files to the S3 bucket.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You plan to deploy an application on AWS. This application needs to be PCI Compliant.  Which of the below steps are needed to ensure compliance? Choose 3 answers from the below:",
    "prompt": "",
    "correctAnswerId": ["A", "B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Choose AWS services which are PCI Compliant"}, {
        "id": "B",
        "markdown": "Ensure the right steps are taken during application development for PCI Compliance"
    }, {"id": "C", "markdown": "Ensure the AWS Services are made PCI Compliant"}, {
        "id": "D",
        "markdown": "Do an audit after the deployment of the application for PCI Compliance"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A, B and D\n\nThe below snapshot from the AWS Documentation mentions that some of the AWS services are already PCI compliant. This list should be checked when designing the application.\n\n\n\n \n\n\n\tFor more information on PCI Compliance and AWS, please refer to the following Link:\n\t\n\t\thttps://aws.amazon.com/compliance/pci-dss-level-1-faqs/\n\t\n\t\n\n\nApart from Option A & B, the application needs to be audited for PCI compliance.\n\n\n\tC is incorrect. Some AWS services are PCI compliant but additional steps relating to Development may be required by the Customer to be fully PCI compliant.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following solutions can improve the performance of a web server that receives high levels of traffic, running an online banking portal? (Select TWO).",
    "prompt": "",
    "correctAnswerId": ["D", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Web server to be configured with a private IP address and hosted behind a NAT gateway"
    }, {
        "id": "B",
        "markdown": "Web server to be configured with a public IP address and hosted behind a WAF"
    }, {
        "id": "C",
        "markdown": "For an added layer of security, host the web server on a Content Distribution Network (CDN)"
    }, {"id": "D", "markdown": "Use of SSL acceleration"}, {
        "id": "E",
        "markdown": "Relieve computational overhead on the web server by offloading HTTPS session processes to hardware security modules in an AWS CloudHSM cluster."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D, E\n\nDuring the SSL/TLS session transactions between the browsers and web server, there is a heightened demand for computational capacity thus offloading these processes to AWS CloudHSM cluster would greatly improve the performance of the web server. This is referred to as SSL acceleration.\n\nhttps://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload.html\n\n\n\tOption A. is INCORRECT because configuring the server to a private IP address behind a NAT gateway will not improve the performance of the web server, though it will add a security layer.\n\tOption B. is INCORRECT because configuring the server with a public IP address will not add any performance enhancement to the web server.\n\n\n\n\tOption C. is INCORRECT because hosting the server on a CDN will not add a layer of security.\n\n\nhttps://aws.amazon.com/cloudfront/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A building access security system is generating inaccurate logs because users often share access tags when entering the building. How can this be solved effectively?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Encourage users not to share tags by introducing violation penalties"
    }, {"id": "B", "markdown": "Use Amazon Rekognition"}, {
        "id": "C",
        "markdown": "Implement Amazon SageMaker"
    }, {"id": "D", "markdown": "Implement Amazon Transcribe"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon Rekognition enables the uptake of imagery and video for analysis  in applications. By uploading imagery or video footage to the Rekognition API, the service engine would then identify and distinguish facial features, text, objects and activities. This service will meet the requirements of the scenario as an access control solution.\n\nhttps://docs.aws.amazon.com/rekognition/latest/dg/what-is.html\n\n\n\tOption A. is INCORRECT because though the method could deter users from sharing tags, it could still happen. It is not an effective way of managing user access.\n\tOption C. is INCORRECT because AWS SageMaker is a fully managed machine learning service. Developers build and train machine learning models, then deploy them into a live hosted environments. This services will not meet the requirements of the scenario.\n\tOption D. is INCORRECT because AWS Transcribe uses machine learning technologies to convert audio files, spoken words, into plain text. The service will not resolve the scenario.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which TWO statements best describe the AWS Personal Health Dashboard.",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "A concise representation of the general status of AWS services"}, {
        "id": "B",
        "markdown": "User-specific view on the availability and performance of AWS services underlying  their AWS resources."
    }, {
        "id": "C",
        "markdown": "A service that prompts the user with alerts and notifications on AWS scheduled activities, pending issues, and planned changes."
    }, {
        "id": "D",
        "markdown": "A minute-by-minute update of system outages and service errors on the AWS global infrastructure"
    }, {
        "id": "E",
        "markdown": "A rolling log of all service interruptions across the AWS network, records of incidencies persistent for a year"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B, C\n\nThe Personal Health Dashboard is a tool that shows the status of AWS services that are running user-specific resources. It is a graphical representation that sends alerts, notifications of any personal pending issues, planned changes and scheduled activities.\n\nhttps://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/\n\n\n\tOption A. is INCORRECT because it describes a general overview of the Service Health Dashboard\n\tOption D. is INCORRECT because it describes the Service Health Dashboard\n\tOption E. is INCORRECT because it describes the Status History of the Service Health Dashboard\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A startup company for social media apps would like to grant freelance developers temporary access to its Lambda functions setup on AWS. These developers would be signing-in via Facebook authentication. Which service is most appropriate to use in securely granting access?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Create user credentials using Identity Access Management, IAM"}, {
        "id": "B",
        "markdown": "Use Amazon Cognito for web-identity federation"
    }, {"id": "C", "markdown": "Create temporary access roles using IAM"}, {
        "id": "D",
        "markdown": "Use a third-party Web ID, federated access provider"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon Cognito web identity federation service acts as a broker that allows successfully authenticated users access to AWS resources. After successful authentication on platforms such as Facebook, LinkedIn or Google - users are awarded temporary authentication code from Amazon Cognito thereby gaining temporary access.\n\nhttps://aws.amazon.com/cognito/\n\n\n\tOption A. is INCORRECT because the access required is temporary and from a social media sign-in not directly onto the AWS environment.  Identity Access Management (IAM) user will  be granted access directly using AWS specified credentials.\n\tOption C. in INCORRECT because the IAM user credentials will not authenticate on Facebook, they are confined to logging onto the AWS environment in this instance.\n\tOption D. is INCORRECT because there is no need to take on third-party Web ID,  federated access providers since Amazon has the Cognito service to perform that function.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to store objects. The objects must be downloadable via a URL. Which storage option would you choose?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3"}, {"id": "B", "markdown": "Amazon Glacier"}, {
        "id": "C",
        "markdown": "Amazon Storage Gateway"
    }, {"id": "D", "markdown": "Amazon EBS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A\n\nAmazon S3 is the perfect storage option. It also provides the facility of assigning a URL to each object which can be used to download the object.\n\n\n\tFor more information on AWS S3, please visit the Link:\n\t\n\t\thttps://aws.amazon.com/s3/\n\t\n\t\n\tB is incorrect. Glacier is for archival and long-term storage.\n\n\nThis question is to check the user understanding of AWS S3 service terminology and use cases. If you see the question, they mentioned \"Object\" and those should be downloadable via a URL. It's not possible with EBS\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to host a database server for a minimum period of one year. Which of the following would result in the least cost?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Spot Instances"}, {"id": "B", "markdown": "On-Demand"}, {
        "id": "C",
        "markdown": "No Upfront costs Reserved"
    }, {"id": "D", "markdown": "Partial Upfront costs Reserved"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - D\n\nIf the database is going to be used for a minimum of one year at least , then it is better to get Reserved Instances. You can save on costs , and if you use a partial upfront options , you can get a better discount\n\n\n\tFor more information on AWS Reserved Instances, please visit the Link:\n\t\n\t\thttps://aws.amazon.com/ec2/pricing/reserved-instances/\n\t\n\t\n\n\n \n\n\n\tA is incorrect. Spot instances can be terminated with fluctuations in market prices. Unless the question specifies a use case where high availability is not a requirement, this cannot be assumed.\n\tB is incorrect. On-Demand is not the most cost efficient solution.\n\tC is incorrect. No upfront payment is required , however its costlier option than Partial/All upfront payment.\n\n\n \n\n\n\tFor more information on Reserved Instances Payment option, please check below AWS Docs:\n\t\n\t\thttps://docs.aws.amazon.com/aws-technical-content/latest/cost-optimization-reservation-models/reserved-instance-payment-options.html\n\t\n\t\n\n\nNote:\n\n\n\tReserved Instances do not renew automatically; when they expire, you can continue using the EC2 instance without interruption, but you are charged On-Demand rates. In the above example, when the Reserved Instances that cover the T2 and C4 instances expire, you go back to paying the On-Demand rates until you terminate the instances or purchase new Reserved Instances that match the instance attributes.\n\t\n\t\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "During an organisation’s information systems audit, the administrator is requested to provide a dossier of security and compliance reports as well as online service agreements that exist between the organisation and AWS. Which service can they utilize to acquire this information?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Artifact"}, {"id": "B", "markdown": "AWS Resource Center"}, {
        "id": "C",
        "markdown": "AWS Service Catalog"
    }, {"id": "D", "markdown": "AWS Directory Service"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Artifact is a comprehensive resource center for access to AWS’ auditor issued reports as well as security and compliance documentation from several renowned independent standards organisations.\n\nhttps://aws.amazon.com/artifact/\n\n\n\tOption B. is INCORRECT because the AWS Resource Center a repository of tutorials, whitepapers, digital trainings and project Use cases that aid in learning the core concepts of Amazon Web Services.\n\n\nhttps://aws.amazon.com/getting-started/\n\n\n\tOption C. is INCORRECT because AWS Service Catalog allows organisations to create and save their own IT service catalogs for use, they have to be approved by AWS. IT service catalogs can be multi-tiered application architectures.\n\n\nhttps://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html\n\n\n\tOption D. is INCORRECT because AWS Directory Service is an AWS tool that provides multiple ways to use Amazon Cloud Directory and Microsoft Active Directory with other AWS services.\n\n\nhttps://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A new department has recently joined the organization and the administrator needs to compose access permissions for the group of users. Given that they have varying roles and access needs, what is the best-practice approach when granting access?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "After gathering information on their access needs, the administrator should allow every user to access the most common resources and privileges on the system."
    }, {
        "id": "B",
        "markdown": "The administrator should grant all users the same permissions and then grant more upon request."
    }, {
        "id": "C",
        "markdown": "The administrator should grant all users the least privilege and add more privileges to only to those who need it."
    }, {
        "id": "D",
        "markdown": "Users should have no access and be granted temporary access on the occasions that they need to execute a task."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe best-practice for AWS Identity Access Management (IAM) is to grant the least amount of permissions on the system, enough to only execute the required tasks of the user’s role. Additional permissions can be granted per user in accordance to the tasks they wish to perform on the system.\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege\n\n\n\tOption A. is incorrect because granting users access to the most common resources presents security vulnerabilities, especially from those who have access to resources they do not need.\n\tOption B. is incorrect because granting users the same privileges on the system means other users might get access to resources they do not need to carry out their job functions. This presents a security risk.\n\tOption D. is incorrect because the users are part of the organisation, it will be cumbersome for the administrator to constantly create temporal access passes for internal staff.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following are advantages of having infrastructure hosted on the AWS Cloud?\nChoose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Having complete control over the physical infrastructure"}, {
        "id": "B",
        "markdown": "Having the pay as you go model"
    }, {"id": "C", "markdown": "No Upfront costs"}, {"id": "D", "markdown": "Having no need to worry about security"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B and C\n\nThe Physical infrastructure is a responsibility of AWS and not with the customer. Hence it is not an advantage of moving to the AWS Cloud.\n\nAnd AWS provides security mechanisms, but even the responsibility of security lies with the customer.\n\n \n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is an external audit being carried out on your company. The IT auditor needs to have a log of all access to the AWS resources in the company’s account. Which of the below services can assist in providing these details?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Cloudwatch"}, {"id": "B", "markdown": "AWS CloudTrail"}, {
        "id": "C",
        "markdown": "AWS EC2"
    }, {"id": "D", "markdown": "AWS SNS"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B\n\nUsing CloudTrail , one can monitor all the API activity conducted on all AWS services.\n\nThe AWS Documentation additionally mentions the following\n\nAWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting.\n\nFor more information on AWS Cloudtrail, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/cloudtrail/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A web administrator maintains several public and private web-based resources for an organisation. Which service can they use to keep track of the expiry dates of SSL/TLS certificates as well as updating and renewal?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Data Lifecycle Manager"}, {
        "id": "B",
        "markdown": "AWS License Manager"
    }, {"id": "C", "markdown": "AWS Firewall Manager"}, {"id": "D", "markdown": "AWS Certificate Manager"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe AWS Certificate Manager allows the web administrator to maintain one or several SSL/TLS certificates, both private and public certificates, including their update and renewal such that the administrator does not worry about imminent expiry of certificates.\n\nhttps://aws.amazon.com/certificate-manager/\n\n\n\tOption A. is INCORRECT because an AWS Lifecycle Manager serves the purpose of creating lifecycle policies for specified resources in order to automate operations.\n\n\nhttps://docs.aws.amazon.com/dlm/?id=docs_gateway\n\n\n\tOption B. is INCORRECT because AWS License Manager serves the purpose of differentiating, maintaining third-party software provisioning vendor licenses as well as decreases the risk of license expirations and the penalties.\n\n\nhttps://docs.aws.amazon.com/license-manager/?id=docs_gateway\n\n\n\tOption C. is INCORRECT because AWS Firewall Manager aids in the administration of Web Application Firewall (WAF), by presenting a centralised point of setting firewall rules across different web resources.\n\n\nhttps://docs.aws.amazon.com/firewall-manager/?id=docs_gateway\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has a\nset of EC2 Instances hosted in AWS. There is a requirement to create snapshots\nfrom the EBS volumes attached to these EC2 Instances in another geographical\nlocation. As per this requirement , where would you create the snapshots",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "In another Availability Zone"}, {
        "id": "B",
        "markdown": "In another data center"
    }, {"id": "C", "markdown": "In another Region"}, {"id": "D", "markdown": "In another Edge location"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C\n\nRegions\ncorrespond to different geographic locations in AWS.\n\nFor\nmore information on Regions and Availability Zones in AWS, please refer to the\nbelow URL:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "One of a blogger’s articles has gone viral which has resulted in a lot of traffic to their blog. This excessive amount of traffic has in turn caused poor browsing experience for some readers. How can normal service to the blog be restored?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Set up a Web Application Firewall (WAF) that will allow legitimate traffic and deny maliciously generated traffic."
    }, {
        "id": "B",
        "markdown": "Set up Read replicas of the backend RDS instance where the article resides"
    }, {"id": "C", "markdown": "Upgrade the backend RDS instance to a non-relational database."}, {
        "id": "D",
        "markdown": "Configure Multi-AZ to enhance the performance of the backend RDS instances running the blog."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nRead replicas will enhance the database performance and durability by allowing for automated distribution of load amongst several database instances with the exact copy of the parent database. In this scenario the web server will read the target article from several RDS instances in the read replica cluster, thereby getting good response times, consequently improving browsing experience.\n\n\n\thttps://aws.amazon.com/rds/details/read-replicas/\n\n\n\n\tOption A. is INCORRECT because the increase in traffic is not due to malicious synthetic traffic, therefore setting up a Web Application Firewall (WAF) would not meet the requirements of the scenario.\n\tOption C. is INCORRECT because upgrading the RDS instance to non-relation instance will still result in a high amount of read requests from the web server, therefore will not meet the needs of the scenario.\n\tOption D. is INCORRECT because Multi-AZ will not enhance the performance and durability of the RDS instance in the scenario. It would ensure that the RDS instance remains reachable even when the AWS Availability Zone it was initially provisioned in is down or unreachable\n\t\n\t\thttps://aws.amazon.com/rds/details/multi-az/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Select which use case scenario best suits the implementation of an Amazon RDS database instance instead of a NoSQL/non-relational database.",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Where datasets are constantly evolving and cannot be confined to a static data schema"
    }, {
        "id": "B",
        "markdown": "Where vertical scaling of the database’s resources is not permissible and is seldom necessary."
    }, {"id": "C", "markdown": "In an organisation whose datasets are dynamic and document-based"}, {
        "id": "D",
        "markdown": "In an organisation where only a finite number of processes query the database in predictable and well-structured Schemas.."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAmazon Relational databases service (RDS) is best suited in scenarios where the dataset and forms are consistent such that their data schema is persistently valid. It is best to deploy in an environment where the load can be anticipated and is somewhat finite. Amazon RDS engines include Amazon Aurora, MariaDB, PostgreSQL\n\n\n\thttps://aws.amazon.com/rds/\n\tOption A. is INCORRECT because Amazon RDS engines are inappropriate  in a scenario where datasets are constantly evolving and the data schema is flexible. NoSQL/non-relational databases fit this use case.\n\tOption B. is INCORRECT because Amazon Relational Database service engines will scale up with the increase in load and is often necessary as the traffic patterns to the database increases.\n\tOption C. is INCORRECT because in a scenario where the datasets are dynamic and document-based, the use of JSON and not SQL is appropriate, therefor non-relationals/NoSQL database engines such as Amazon DynamoDB.\n\t\n\t\thttps://aws.amazon.com/nosql/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following statements about scalability is most accurate? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "A scalable system diverts traffic based on demand"}, {
        "id": "B",
        "markdown": "A scalable system diverts traffic to instances with the least load"
    }, {"id": "C", "markdown": "A scalable system diverts traffic across multiple regions"}, {
        "id": "D",
        "markdown": "A scalable system diverts traffic to instances with higher capacity"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and B\n\nScalability would scale-out ( increase the number of instances ) or scale in ( decrease the number of instances )\n\nAlso when one of the instances is with the least load it will divert the traffic to the least loaded instance, so that it takes more load\n\nBoth of the above are taken care of by 'autoscaling' We just need to enable autoscaling for our instances and traffic would automatically diverted based on demand or load\n\nFor more information on AWS Autoscaling service, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/autoscaling/\n\thttps://aws.amazon.com/elasticloadbalancing/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is the concept of the Elastic load balancer?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "To distribute traffic to multiple EC2 Instances"}, {
        "id": "B",
        "markdown": "To scale up EC2 Instances"
    }, {"id": "C", "markdown": "To distribute traffic to AWS resources across multiple regions"}, {
        "id": "D",
        "markdown": "To increase the size of the EC2 Instance based on demand"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nThe AWS Documentation mentions the following\n\nA load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. Elastic Load Balancing detects unhealthy instances and routes traffic only to healthy instances.\n\nFor more information on the Elastic Load Balancer service, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is the concept of Autoscaling",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "To scale out resources based on demand"}, {
        "id": "B",
        "markdown": "To distribute traffic to multiple EC2 Instances"
    }, {"id": "C", "markdown": "To distribute traffic to AWS resources across multiple regions"}, {
        "id": "D",
        "markdown": "To increase the size of the EC2 Instance based on demand"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it’s easy to setup application scaling for multiple resources across multiple services in minutes. \n\n\n\tFor more information on the Auto Scaling service, please refer to the below URL:\n\t\n\t\thttps://aws.amazon.com/autoscaling/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In Cost Optimization, what is referred to as EC2 Right Sizing?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "It is a cost-effective solution to determine the appropriate Amazon EC2 resources such as memory, processor type and storage when provisioning an instance type."
    }, {
        "id": "B",
        "markdown": "It is a cost-saving solution that analyses data over a period of time to determine and recommend the type of Amazon EC2 instances appropriate for your workload."
    }, {
        "id": "C",
        "markdown": "It is the scaling down or scaling up of Amazon EC2 instances and instance types to meet workload demand by maintaining only the threshold resources."
    }, {
        "id": "D",
        "markdown": "It is a cost-saving solution that outlines the recommendations of best practice in four aspects namely cost optimization, performance, fault-tolerance and service limits."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nCost Optimization: EC2 Right Sizing utilizes managed services to execute  right-sizing analysis to provide detailed recommendations for more cost-saving builds and implementations of Amazon EC2 instances.\n\n\n\thttps://aws.amazon.com/solutions/cost-optimization-ec2-right-sizing/\n\n\n\n\tOption A. is INCORRECT because when provisioning a new Amazon EC2 instance, the user  is presented with instance types to choose from, these have varying capacities depending on use case.\n\tOption C. is INCORRECT because it describes the mechanism of Auto Scaling and not Amazon EC2 Right Sizing\n\tOption D. is INCORRECT because it describes the function of AWS Trusted Advisor which outlines the recommendations of best practice in five not four aspects. Cost optimization, security, performance, fault-tolerance and service limits.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is the responsibility of the customer when ensuring that data on EBS volumes is kept safe",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deleting the data when the device is destroyed"}, {
        "id": "B",
        "markdown": "Creating EBS snapshots"
    }, {"id": "C", "markdown": "Attaching volumes to EC2 Instances"}, {
        "id": "D",
        "markdown": "Creating copies of EBS Volumes"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nCreating snapshots of EBS Volumes can help ensure that you have a backup of your EBS volume in place.\n\nFor more information on EBS Snapshots, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS service gives the user the ability to group AWS resources across different AWS Regions by application and then collectively view their operational data for monitoring purposes?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Systems Manager"}, {"id": "B", "markdown": "Management Console"}, {
        "id": "C",
        "markdown": "Resource Groups"
    }, {"id": "D", "markdown": "Resource Access Manager (AWS RAM)"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Systems Manager allows users to gain control of their AWS resources by unifying services into a user interface. One in which they can be able to view, automate and monitor operational tasks.\n\nhttps://aws.amazon.com/systems-manager/\n\nhttps://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html\n\n\n\tOption B. is incorrect because the Manage Console is a web-based graphical user interface that users interact with when administering AWS services and resources.\n\n\t\n\t\thttps://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html?id=docs_gateway#learn-whats-new\n\t\n\t\n\tOption C. is incorrect because Resource Groups are a collection of AWS resources within a single AWS Region. In the scenario, the AWS resources are in different AWS Regions.\n\t\n\t\thttps://docs.aws.amazon.com/ARG/latest/userguide/welcome.html\n\t\n\t\n\tOption D. is incorrect because Resource Access Manager (AWS RAM) allows users to share resources with other AWS accounts or via AWS Organizations. AWS RAM can be used to collate a set of AWS resources across multiple AWS accounts in order to share capacity.\n\t\n\t\thttps://docs.aws.amazon.com/ram/latest/userguide/what-is.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is a situation that would require using both Spot and Reserved EC2 Instances?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "A build that has sudden unpredictable workload spikes but for a short time horizon."
    }, {
        "id": "B",
        "markdown": "One in which there is a predictable resource demand over a long time horizon."
    }, {
        "id": "C",
        "markdown": "One that has a predictable workload over a long time horizon with prolonged and unpredictable spikes."
    }, {"id": "D", "markdown": "One that has a constantly predictable workload with brief unpredictable spikes."}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nIn use cases that are characterised by a constantly predictable workload with brief unpredictable spikes, Amazon EC2 Reserved Instances would be the most cost-effective to meet the constantly predictable workload. Whilst Spot Instances in an auto scaling group would be suffice to meet the demands of the build.\n\n\n\thttps://aws.amazon.com/solutions/case-studies/mercadolibre-ec2/\n\tOption A. is INCORRECT because this use case would be cost-effectively serviced by Amazon EC2 Reserved Instances with on-demand instances in an auto scaling group to meet the resource demands of the spike.\n\tOption B. is INCORRECT because this use case would be cost-effectively serviced by Amazon EC2 Reserved Instances alone.\n\tOption C. is INCORRECT because this use case would be cost-effectively serviced by Amazon EC2 Reserved Instances with on-demand instances in an auto scaling group to meet the resource demands of the spike.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "When designing a highly available architecture, what is the difference between vertical scaling (scaling up) and horizontal scaling (scaling out)?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Scaling up provides for high availability whilst scaling out brings fault-tolerance"
    }, {"id": "B", "markdown": "Scaling out is not cost-effective compared to scaling up"}, {
        "id": "C",
        "markdown": "Scaling up adds more resources to an instance, scaling out adds more instances"
    }, {"id": "D", "markdown": "Autoscaling groups require scaling up whilst launch configurations use scaling out"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nIn high availability architectures, Autoscaling is used to give elasticity to the design where horizontal scaling (scaling out) uses Autoscaling groups to increase processing capacity in response to changes in preset threshold parameters. It could involve adding more EC2 instances of a web server. Vertical scaling (scaling up), which can create a single point of failure, involves adding more resources to a particular instance to meet demand.\n\n\n\thttps://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html\n\tOption A. is INCORRECT because scaling up does not provide high availability, adding more resources to one instance is often not a best-practice in architecture design.\n\tOption B. is INCORRECT because scaling out is actually cost-effective since it involves only adding more resources in response to demand and reducing resources (scaling down) when demand is low\n\tOption D. is INCORRECT because all Autoscaling groups require a launch configuration as the basis of what resources would be provisioned or deprovisioned to meet predefined parameters.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is an accurate statement regarding AWS resource tags? (Select TWO.)",
    "prompt": "",
    "correctAnswerId": ["D", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "All AWS resource tags have a semantic interpretation"}, {
        "id": "B",
        "markdown": "Within a resource tag, every defined key must have a value string"
    }, {"id": "C", "markdown": "By default, resource tags are assigned as null, null"}, {
        "id": "D",
        "markdown": "Resource tags can be edited or removed at any time"
    }, {"id": "E", "markdown": "Placement groups support tags"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D, E\n\nResource tags are critical when architecting in the cloud for labeling assets to make it possible to easily administer and manage them. Useful when running queries about billing, auditing and asset lookups for quantities. They are a  user-defined key-value pair with variable characters. \n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n\tPlacement groups support tags. Please refer the below link\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n\n\n\n\tOption A. is INCORRECT because resource tags to do not have a semantic meaning they are plain-text characters whose utility can be derived by the user who defines them.\n\tOption B. is INCORRECT because a user can define a key and not specify the character string for its value, leaving it empty but cannot set the value to null\n\tOption C. is INCORRECT because resource tags are not assigned by default, the user has to explicitly define them.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing services can be used as a web application firewall in AWS.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EC2"}, {"id": "B", "markdown": "AWS WAF"}, {
        "id": "C",
        "markdown": "AWS Firewall"
    }, {"id": "D", "markdown": "AWS Protection"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- B\n\nThe\nAWS Documentation mentions the following\n\nAWS\nWAF is a web application firewall that lets you monitor the HTTP and HTTPS\nrequests that are forwarded to Amazon CloudFront or an Application Load\nBalancer. AWS WAF also lets you control access to your content.\n\nFor\nmore information on AWS WAF, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What can be termed as a user-defined label that has a key-value pair of variable character length. It is assigned to AWS resources as metadata for administration and management purposes?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Resource Tag"}, {"id": "B", "markdown": "Resource Group"}, {
        "id": "C",
        "markdown": "Resource Flag"
    }, {"id": "D", "markdown": "Tag key"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A \n\nAWS Resource tags are critical component when architecting in the cloud, they create an identifying mechanism for the user to group, classify and order all their provisioned resources appropriately.\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html\n\tOption B. is INCORRECT because AWS Resource groups enable the ordering of AWS resources into logical groupings. Resources can be ordered by application, environment or software component.\n\tOption C. is INCORRECT because flags are used in AWS CloudFormation, the option is inaccurate.\n\tOption D. is INCORRECT because a tag key is only part of what makes up a resource tag, each resource tag will have a key and value string.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Choose the disaster recovery deployment mechanism that has the lowest downtime.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Pilot light"}, {"id": "B", "markdown": "Warm standby"}, {
        "id": "C",
        "markdown": "Backup Restore"
    }, {"id": "D", "markdown": "Devops"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe below snapshot from the AWS Documentation shows the spectrum of the Disaster recovery methods. If you go to the further end of the spectrum you have the least time for downtime for the users.\n\n\n\n \n\nFor more information on Disaster recovery techniques, please refer to the below URL:\n\n \n\n\n\thttps://aws.amazon.com/blogs/aws/new-whitepaper-use-aws-for-disaster-recovery/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A start-up organisation would like to instantaneously deploy a complex web and mobile application development environment, complete with the necessary resources and peripheral assets. How can this be achieved efficiently?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "By putting together the necessary components from AWS services, starting with EC2 instances."
    }, {
        "id": "B",
        "markdown": "Creating AWS Lambda functions that will be triggered by single-button click to call the appropriate API of the respective resources and peripheral assets needed."
    }, {
        "id": "C",
        "markdown": "Using AWS Quick Starts to identify and provision the appropriate AWS CloudFormation templates"
    }, {
        "id": "D",
        "markdown": "Making use of the AWS Serverless Application Repository to identify and deploy the resources needed for a web and mobile application development environment."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS CloudFormation can be used in conjunction with AWS Quick Starts templates, which are a repository of AWS CloudFormation templates designed by expert architects. These can include third-party resources and peripheral assets tailor-made for a single-button push deployment of specific environments.\n\n\n\thttps://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc\n\n\n\n\tOption A. is INCORRECT because it is cumbersome and not efficient to put together the AWS services and resources necessary to deploy a complex web and mobile application development environment.\n\tOption B. is INCORRECT because it is tedious and not efficient to create AWS Lambda function for each of the required components.\n\tOption D. is INCORRECT because AWS Serverless Application Repository is primarily used by developers and enterprises to search, look-up, publish and deploy serverless applications on the cloud.\n\t\n\t\thttps://docs.aws.amazon.com/serverlessrepo/latest/devguide/what-is-serverlessrepo.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following can be attached to EC2 Instances to store data?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Glacier"}, {"id": "B", "markdown": "Amazon EBS Volumes"}, {
        "id": "C",
        "markdown": "Amazon EBS Snapshots"
    }, {"id": "D", "markdown": "Amazon SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following on EBS Volumes\n\nAn Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application\n\nFor more information on EBS Volumes, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing networking component can be used to host EC2 resources in the AWS\nCloud?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Trusted Advisor"}, {"id": "B", "markdown": "AWS VPC"}, {
        "id": "C",
        "markdown": "AWS Elastic Load Balancer"
    }, {"id": "D", "markdown": "AWS Autoscaling"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- B\n\nThe\nAWS Documentation mentions the following on Amazon VPC\n\nAmazon\nVirtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a\nvirtual network that you've defined. This virtual network closely resembles a\ntraditional network that you'd operate in your own data center, with the\nbenefits of using the scalable infrastructure of AWS.\n\nFor\nmore information on AWS VPC, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to host resources in the AWS Cloud. They want to use services which can be used to decouple resources hosted on the cloud. Which of the following services can help fulfil this requirement",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EBS Volumes"}, {"id": "B", "markdown": "AWS EBS Snapshots"}, {
        "id": "C",
        "markdown": "AWS Glacier"
    }, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following on the Simple Queue Service\n\nAmazon Simple Queue Service (Amazon SQS) offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components\n\nFor more information on AWS SQS, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html\n\n\nNote:\n\nDecoupling is where the different components/layers that make up the system interact with each other using well-defined interfaces rather than depending tightly on eah other.  With this architecture, the components/layers can be developed independently without having to wait for their dependencies to complete.  This leads to pipelined development, resulting in more streamlined and faster development.  This also improves testability of the components.\n Please find the links that explains more about decoupling with SQS and examples.\n\n\n\t https://aws.amazon.com/blogs/compute/building-loosely-coupled-scalable-c-applications-with-amazon-sqs-and-amazon-sns/\n\thttps://www.youtube.com/watch?v=UesxWuZMZqI\n\thttps://aws.amazon.com/getting-started/tutorials/send-fanout-event-notifications/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing components of the Cloudfront service can be used to distribute\ncontents to users across the globe.",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon VPC"}, {"id": "B", "markdown": "Amazon Regions"}, {
        "id": "C",
        "markdown": "Amazon Availability Zones"
    }, {"id": "D", "markdown": "Amazon Edge locations"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- D\n\nThe\nAWS documentation mentions the following \n\nAmazon\nCloudFront is a web service that speeds up distribution of your static and\ndynamic web content, such as .html, .css, .js, and image files, to your users.\nCloudFront delivers your content through a worldwide network of data centers\ncalled edge locations.\n\nFor\nmore information on Amazon Cloudfront, please refer to the below URL:\n\nhttp://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to move to the AWS Cloud. You need to give a presentation on the cost perspective when moving existing resources to the AWS Cloud. When it comes to Amazon EC2, which of the following is an advantage when it comes to the cost perspective.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Having the ability of automated backups of the EC2 instance, so that you don’t need to worry about the maintenance costs."
    }, {"id": "B", "markdown": "The ability to choose low cost AMI’s to prepare the EC2 Instances"}, {
        "id": "C",
        "markdown": "The ability to only pay for what you use"
    }, {"id": "D", "markdown": "Ability to tag instances to reduce the overall cost"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - C\n\nOne of the advantages of EC2 Instances is the per second billing concept. This is given in the AWS documentation also\n\nWith per-second billing, you pay for only what you use. It takes cost of unused minutes and seconds in an hour off of the bill, so you can focus on improving your applications instead of maximizing usage to the hour. Especially, if you manage instances running for irregular periods of time, such as dev/testing, data processing, analytics, batch processing and gaming applications, can benefit.\n\nFor more information on EC2 Pricing, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/ec2/pricing/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is\nplanning on moving to the AWS Cloud. Once the movement to the Cloud is complete,\nthey want to ensure that the right security settings are put in place. Which of\nthe below tools can assist from a Security compliance. Choose 2 answers from\nthe options given below.",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Inspector"}, {"id": "B", "markdown": "AWS Trusted Advisor"}, {
        "id": "C",
        "markdown": "AWS Support"
    }, {"id": "D", "markdown": "AWS Kinesis"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A and B\n\nThe AWS documentation mentions the following \n\nAn online resource to help you\nreduce cost, increase performance, and improve security by optimizing your AWS\nenvironment, Trusted Advisor provides real time guidance to help you provision\nyour resources following AWS best practices\n\nThe AWS Inspector can inspect EC2\nInstances against common threats.\n\nFor more information on the AWS\nTrusted Advisor, please refer to the below URL:\n\nhttps://aws.amazon.com/premiumsupport/trustedadvisor/https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html\n\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to collect important metrics from AWS RDS and EC2 Instances. Which AWS service would be helpful to fulfill this requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon CloudFront"}, {"id": "B", "markdown": "Amazon CloudSearch"}, {
        "id": "C",
        "markdown": "Amazon CloudWatch"
    }, {"id": "D", "markdown": "Amazon Config"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe AWS documentation mentions the following:\n\nAmazon CloudWatch is a monitoring service for AWS cloud resources and the applications you run on AWS. You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, set alarms, and automatically react to changes in your AWS resources\n\nFor more information on AWS Cloudwatch, please refer to the URL below:\n\n\n\thttps://aws.amazon.com/cloudwatch/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator is looking to run their cloud infrastructure along best practice guidelines by leveraging on Amazon Inspector and AWS Trusted Advisor services.\n\nWhich of the following statements correctly describe how this can be done? (Select TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Running Amazon Inspector service to probe and protect cloud infrastructure from threats regularly"
    }, {
        "id": "B",
        "markdown": "Adhering to recommendations given in the main pillars of AWS Trusted Advisor, which are cost optimization, security, performance, fault-tolerance and service limits"
    }, {
        "id": "C",
        "markdown": "Regularly running Amazon Inspector service on EC2 instances to get a concise list of security vulnerabilities and exposures to attack."
    }, {
        "id": "D",
        "markdown": "AWS Trusted Advisor will highlight pending tasks to be resolved in only performance and cost optimization best practices whilst Amazon Inspector will alert the administrator of security vulnerabilities."
    }, {
        "id": "E",
        "markdown": "Amazon Inspector will highlight pending tasks to be resolved in only performance and cost optimization best practices whilst AWS Trusted Advisor will alert the administrator of security vulnerabilities."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B, C\n\nAmazon Inspector will assess AWS provisioned infrastructure for compliance and security vulnerabilities. AWS Trusted Advisor will provide real-time guidelines in best practice implementation and maintenance of AWS resources.\n\n\n\thttps://aws.amazon.com/premiumsupport/technology/trusted-advisor/\n\n\n\n\thttps://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html\n\n\n\n\tOption A. is INCORRECT because Amazon Inspector service does not protect against any security threats to a user’s resources on the cloud.\n\tOption D. is INCORRECT because AWS Trusted Advisor will highlight recommendations of best practice in five aspects namely cost optimization, security, performance, fault-tolerance and service limits.\n\tOption E. is INCORRECT because Amazon Inspector will alert the administrator of security vulnerabilities and not AWS Trusted Advisor.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following service is most useful when a Disaster Recovery method is triggered in AWS.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Route 53"}, {"id": "B", "markdown": "Amazon SNS"}, {
        "id": "C",
        "markdown": "Amazon SQS"
    }, {"id": "D", "markdown": "Amazon Inspector"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A\n\nRouet53 is a domain name system service by AWS. When a Disaster does occur , it can be easy to switch to secondary sites using the Route53 service.\n\nThe AWS Documentation additionally mentions the following\n\nAmazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well\n\nFor more information on AWS Route53, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/route53/\n\tOption B - Amazon SNS\n\tThis service is used for notification service and primarily used for mass delivery of messages, predominantly to mobile users.  This service will not help us when moving to the DR site, but rather can be used to inform the required users with reference to the change in the server.\n\t\n\t\thttps://aws.amazon.com/sns/\n\t\thttps://aws.amazon.com/disaster-recovery/\n\t\n\t\n\n\n \n\n\n\tOption C - Amazon SQS\n\tThis service is a distributed message queuing service and supports programmatic sending of messages via web service applications as a way to communicate over the Internet.  Since the question refers to triggering of service that is needed for DR job this service is not the required service for this requirement. \n\t\n\t\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html\n\t\n\t\n\n\n \n\n\n\tOption D - Amazon Inspector\n\tThis is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.  It automatically assesses applications for exposure, vulnerabilities, and deviations from best practices.  For our requirement this service is not the correct option, reason we need to use a service that will help us in pointing the correct DNS server when an DR operation is done, so that the existing and new users doesn't get disrupted from the services they are accessing.\n\t\n\t\thttps://aws.amazon.com/inspector/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which statement is accurate about AWS Budgets and Cost Explorer?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Budgets uses the cost visualizations provided by AWS Cost Explorer to show the status of preset budgets and to provide forecasts of estimated costs."
    }, {
        "id": "B",
        "markdown": "Both AWS Budgets and AWS Cost Explorer can be used to predict usage and to give recommended cost-optimization measures."
    }, {
        "id": "C",
        "markdown": "AWS Cost Explorer will lists the costs incurred over a period of time with a further breakdown by region and linked account."
    }, {
        "id": "D",
        "markdown": "Due to the sensitivity of billing and cost management information, with the AWS Cost Explorer and AWS Budgets services, it is not possible to view the information for multiple accounts."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A \n\nUnder the Billing and Cost Management service in the AWS management service, it is possible to use the AWS Budgets and Cost Explorer to show the status of preset budgets and to provide forecasts of estimated costs.\n\nhttps://aws.amazon.com/aws-cost-management/aws-cost-explorer/\n\n\n\tOption B. is incorrect because AWS Budgets does not provide cost-optimization recommendations.\n\tOption C. is incorrect because this is the function of the AWS Bills module under Billing and Cost Management.\n\tOption D. is incorrect because it is possible to view billing information for multiple AWS accounts as long as the administrator has lawful jurisdiction over them.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "When designing a\nsystem, you use the principle of “design for failure and nothing will fail”.\nWhich of the following services/features of AWS can assist in supporting this design\nprinciple. Choose 3 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Availability Zones"}, {"id": "B", "markdown": "Regions"}, {
        "id": "C",
        "markdown": "Elastic Load Balancer"
    }, {"id": "D", "markdown": "Pay as you go"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A,B and C\n\nEach\nAZ is a set of one or more data centers. By deploying your AWS resources to\nmultiple Availability zones , you are designing with failure with mind. So if\none AZ were to go down , the other AZ’s would still be up and running and hence\nyour application would be more fault tolerant.\n\nFor\ndisaster recovery scenarios , one can move or make resources run in other regions\n\nAnd\nfinally one can use the Elastic Load Balancer to distribute load to multiple\nbackend instances within a particular region.\n\nFor\nmore information on AWS Regions and AZ’s, please refer to the below URL:\n\nhttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Currently your organization has an operational team that takes care of ID management in their on-premise data center. They now also need to manage users and groups created in AWS. Which of the following AWS tools would they need to use for performing this management function.",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Config"}, {"id": "B", "markdown": "AWS Cloud Trail"}, {
        "id": "C",
        "markdown": "AWS Key Management Service (AWS KMS)"
    }, {"id": "D", "markdown": "AWS Identity and Access Management (IAM)"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS documentation mentions the following\n\nAWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.\n\n\n\tFor more information on AWS IAM, please refer to the below URL:\n\t\n\t\thttp://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html\n\t\n\t\n\tOption A - AWS Config\n\tThis service is used to assess, audit, and evaluate the configurations of your AWS resources.  It continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.\n\n\n \n\n\n\t With this description, it's clearly understood that this service is not for managing users and groups as mentioned, but rather used for working on configuration of your AWS services.  Hence this option is not the correct option for the question asked.\n\t\n\t\thttps://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html\n\t\n\t\n\n\n \n\n\n\tOption B - AWS CloudTrail\n\tThis service is used for enabling governance, compliance, operational auditing, and risk auditing of your AWS account.  Since this service is basically meant for \"auditing\", and not for managing of users in the cloud, and hence not the correct option for our requirement.\n\t\n\t\thttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html\n\t\n\t\n\n\n \n\n \n\n\n\tOption C - AWS Key Management Service (AWS KMS)\n\tThis service is used for creating and managing of keys and control the use of encryption across a wide range of AWS services and in your applications.  The basic usage of this to protect the data at various stages like in-transit, rest, etc.,  and not for handling users and groups in AWS.  Hence this option is not the correct answer for the question asked.\n\t\n\t\thttps://docs.aws.amazon.com/kms/latest/developerguide/overview.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a devops\nteam in your current organization structure. They are keen to know if there is\nany service available in AWS which can be used to manage infrastructure as\ncode. Which of the following can be met with such a requirement",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using AWS Cloudformation"}, {
        "id": "B",
        "markdown": "Using AWS Config"
    }, {"id": "C", "markdown": "Using AWS Inspector"}, {"id": "D", "markdown": "Using AWS Trusted Advisor"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- A\n\nThe\nAWS documentation mentions the following\n\nAWS\nCloudFormation is a service that helps you model and set up your Amazon Web\nServices resources so that you can spend less time managing those resources and\nmore time focusing on your applications that run in AWS. You create a template\nthat describes all the AWS resources that you want (like Amazon EC2 instances\nor Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning\nand configuring those resources for you. You don't need to individually create\nand configure AWS resources and figure out what's dependent on what; AWS\nCloudFormation handles all of that\n\nFor\nmore information on AWS Cloudformation, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Select TWO statements that describe the main roles of AWS Web Application Firewall (WAF) and AWS Shield?",
    "prompt": "",
    "correctAnswerId": ["A", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Shield Standard is inherently available within the AWS WAF service at no extra cost"
    }, {
        "id": "B",
        "markdown": "AWS WAF is inherently available within the AWS Shield Standard service at an additional charge"
    }, {
        "id": "C",
        "markdown": "AWS Web Application Firewall (WAF) will provide expanded protection against SYN floods, DNS query floods and UDP reflection attacks at no additional cost"
    }, {
        "id": "D",
        "markdown": "AWS Web Application Firewall (WAF) and AWS Shield are fully-managed services"
    }, {
        "id": "E",
        "markdown": "AWS WAF is included with AWS Shield Advanced at no extra cost - a service that prevents distributed denial of service (DDoS) attacks"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, E\n\nAWS Web Application Firewall (WAF) is a web-based application that allows for monitoring of ingress and egress traffic on provisioned web services. These could be in an AWS CloudFront distribution, behind an AWS Load Balancer or standalone instance. AWS WAF includes AWS Shield (AWS Shield Standard that comes at no additional cost and AWS Shield Advanced, on subscription) that protects against SYN floods, DNS query floods and UDP reflection attacks amongst others.\n\n\n\thttps://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html\n\tOption B. is INCORRECT because AWS Shield Standard service currently comes with no additional charge and the service is inherently available within AWS WAF and not vice versa.\n\tOption C. is INCORRECT because AWS WAF includes AWS Shield Standard that comes at no additional cost and AWS Shield Advanced, available on subscription\n\tOption D. is INCORRECT because AWS Web Application Firewall (WAF) and AWS Shield are not fully-managed services\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is the responsibility of AWS according to the Shared Security Model? Choose 3 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Managing AWS Identity and Access Management (IAM)"}, {
        "id": "B",
        "markdown": "Securing edge locations"
    }, {"id": "C", "markdown": "Monitoring physical device security"}, {
        "id": "D",
        "markdown": "Implementing service organization Control (SOC) standards"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B,C and D\n\nThe responsibility of AWS includes the following\n\n1)      Securing edge locations\n\n2)      Monitoring physical device security\n\n3)      Implementing service organization Control (SOC) standards\n\nFor more information on AWS Shared Responsibility Model, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/compliance/shared-responsibility-model/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company has just started using the resources on the AWS Cloud. They want to get an idea on the costs being incurred so far for the resources being used. How can this be achieved.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "By going to the Amazon EC2 dashboard. Here you can see the costs of the running EC2 resources."
    }, {
        "id": "B",
        "markdown": "By using the AWS Cost Explorer. Here you can see the running and forecast costs."
    }, {
        "id": "C",
        "markdown": "By using the AWS Trusted Advisor dashboard. This dashboard will give you all the costs."
    }, {"id": "D", "markdown": "By seeing the AWS Cloud Trail logs."}],
    "answerExplanation": "\n                            Explanation:\n                            The correct answer is Option B.\n\nThe AWS documentation mentions the following on AWS Cost Reports\n\nCost Explorer is a free tool that you can use to view your costs. You can view data up to the last 13 months, forecast how much you are likely to spend for the next three months, and get recommendations for what Reserved Instances to purchase\n\nFor more information on AWS Cost Reports, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-explorer-what-is.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "By default who from the below roles has complete administrative control over all resources in the respective AWS account?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Support Team"}, {"id": "B", "markdown": "AWS Account Owner"}, {
        "id": "C",
        "markdown": "AWS Security Team"
    }, {"id": "D", "markdown": "AWS Technical Account Manager (TAM)"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe entire of control of data within an AWS account is with the Account Owner.\n\n\n\tFor more information on AWS Account identifiers, please refer to the below URL:\n\t\n\t\thttps://docs.aws.amazon.com/general/latest/gr/root-vs-iam.html\n\t\thttps://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your design team is\nplanning to design an application that will be hosted on the AWS Cloud. One of\ntheir main non-functional requirements is given belowReduce\ninter-dependencies so failures do not impact other componentsWhich\nof the following concepts does this requirement relate to?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Integration"}, {"id": "B", "markdown": "Decoupling"}, {
        "id": "C",
        "markdown": "Aggregation"
    }, {"id": "D", "markdown": "Segregation"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nentire concept of decoupling components is to ensure that the different\ncomponents of an applications can be managed and maintained separately. If all\ncomponents are tightly coupled then when one component goes down , the entire\napplication would do down. Hence it is always a better design practice to\ndecouple application components.\n\nFor\nmore information on a decoupled architecture, please refer to the below URL:\n\nhttp://whatis.techtarget.com/definition/decoupled-architecture\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following can be used to increase the fault tolerance of an application.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deploying resources across multiple edge locations"}, {
        "id": "B",
        "markdown": "Deploying resources across multiple VPC’s"
    }, {"id": "C", "markdown": "Deploying resources across multiple Availability Zones"}, {
        "id": "D",
        "markdown": "Deploying resources across multiple AWS Accounts"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nEach AZ is a set of one or more data centers. By deploying your AWS resources to multiple Availability zones , you are designing with failure with mind. So if one AZ were to go down , the other AZ’s would still be up and running and hence your application would be more fault tolerant.\n\nFor more information on AWS Regions and AZ’s, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing security requirements are managed by AWS? Select 3 answers from the\noptions given below.",
    "prompt": "",
    "correctAnswerId": ["C", "D", "E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Password Policies"}, {"id": "B", "markdown": "User permissions"}, {
        "id": "C",
        "markdown": "Physical security"
    }, {"id": "D", "markdown": "Disk disposal"}, {"id": "E", "markdown": "Hardware patching"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C, D and E\n\nAs\nper the Shared Responsibility model , the Patching of the underlying hardware\nand physical security of AWS resources is the responsibility of AWS.\n\nFor\nmore information on AWS Shared Responsibility Model, please refer to the below URL:\n\nhttps://aws.amazon.com/compliance/shared-responsibility-model/Disk disposal:Storage Device Decommissioning When a storage device has reached the end of its useful life, AWS procedures include a decommissioning process that is designed to prevent customer data from being exposed to unauthorized individuals. AWS uses the techniques detailed in DoD 5220.22-M (“National Industrial Security Program Operating Manual “) or NIST 800-88 (“Guidelines for Media Sanitization”) to destroy data as part of the decommissioning process. All decommissioned magnetic storage devices are degaussed and physically destroyed in accordance with industry-standard practices.For more information on Disk disposal, please refer to the below URL:https://d0.awsstatic.com/whitepapers/aws-security-whitepaper.pdf\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following Amazon Web Services can be referred to as a serverless service? (Select three).",
    "prompt": "",
    "correctAnswerId": ["A", "C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Lambda"}, {"id": "B", "markdown": "Elastic Load Balancing"}, {
        "id": "C",
        "markdown": "AWS cloud9"
    }, {"id": "D", "markdown": "Amazon DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                            The correct answers are A, C, and D.\n\nThe serverless concept refers to the ability to leverage compute processing functions without the infrastructure overhead. AWS Lambda is a serverless online code scripting platform within AWS that allows the user to write, edit, and run code functions in various languages including JSON. These functions can be triggered to call or invoke other AWS applications in the user’s build. AWS Cloud9 is a serverless online integrated development environment (IDE) used to author, edit, run debug code of various languages.\n\nhttps://aws.amazon.com/serverless/\n\n\n\tOption B is incorrect because Elastic Load Balancing can be described as a fully-managed service but not serverless.\n\tOption D is correct. With DynamoDB, there are no servers to provision, patch, or manage and no software to install, maintain, or operate.\n\n\nNote:\n\nAWS cloud9 is just a bonus point to help on know that they can write Lambda functions using an AWS IDE. And as you well know lambda help enhance server-less architectures. But Cloud9 needs an Instance for the environment.\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is\nplanning to offload some of the batch processing workloads on to AWS. These\njobs can be interrupted and resumed at any time. Which of the following\ninstance types would be the most cost effective to use for this purpose.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "On-Demand"}, {"id": "B", "markdown": "Spot"}, {
        "id": "C",
        "markdown": "Full Upfront Reserved"
    }, {"id": "D", "markdown": "Partial Upfront Reserved"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nAWS documentation mentions the following\n\nSpot\nInstances are a cost-effective choice if you can be flexible about when your\napplications run and if your applications can be interrupted. For example, Spot\nInstances are well-suited for data analysis, batch jobs, background processing,\nand optional tasks\n\nFor\nmore information on AWS Spot Instances, please refer to the below URL:\n\nhttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following options is true regarding the vulnerability and security assessment on AWS resources ?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS is responsible for security of the cloud, vulnerability and penetration testing is not permissible and unnecessary on AWS resources and infrastructure."
    }, {
        "id": "B",
        "markdown": "An organisation can contract a third-party organisation to run vulnerability and security assessments on any of their AWS resources."
    }, {
        "id": "C",
        "markdown": "Vulnerability and security assessments can be conducted on specified AWS resources."
    }, {
        "id": "D",
        "markdown": "It is not permissible to run vulnerability and penetration tests on AWS resources without the prior consent and approval of AWS."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nAWS permits users to conduct vulnerability and penetration testing certain specified AWS services. This allows organisations to comply with any industry regulations that stipulate that vulnerability and penetration testing be conducted on services and infrastructure.\n\nhttps://aws.amazon.com/security/penetration-testing/\n\n\n\tOption A. is incorrect because vulnerability and penetration testing and security assessments are permissible, even as AWS maintains robust security measures on infrastructure.\n\tOption B. is incorrect because vulnerability and penetration testing, security assessments can only be run on a specified list of AWS resources. There are AWS resources which these tests are not allowed.\n\tOption D. is incorrect because vulnerability and penetration tests can be conducted on specific AWS service resources without the consent of AWS.\n\t\n\t\thttps://aws.amazon.com/security/penetration-testing/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to use the AWS Cloud. But there is a management decision that resources need to split department wise. And the decision is tending towards managing multiple AWS accounts. Which of the following would help in effective management and also provide an efficient costing model.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Organizations"}, {"id": "B", "markdown": "Amazon Dev Pay"}, {
        "id": "C",
        "markdown": "AWS Trusted Advisor"
    }, {"id": "D", "markdown": "AWS Cost Explorer"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nThe AWS Documentation mentions the following\n\nAWS Organizations offers policy-based management for multiple AWS accounts. With Organizations, you can create groups of accounts and then apply policies to those groups. Organizations enables you to centrally manage policies across multiple accounts, without requiring custom scripts and manual processes.\n\nFor more information on the AWS Organizations, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/organizations/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing can be used as an additional layer of security to using a user name\nand password when logging into the AWS Console.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Multi-Factor Authentication (MFA)"}, {
        "id": "B",
        "markdown": "Secondary password"
    }, {"id": "C", "markdown": "Root access privileges"}, {"id": "D", "markdown": "Secondary user name"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A\n\nThe\nAWS Documentation mentions the following\n\nAWS\nMulti-Factor Authentication (MFA) is a simple best practice that adds an extra\nlayer of protection on top of your user name and password. \n\nFor\nmore information on the AWS MFA, please refer to the below URL:\n\nhttps://aws.amazon.com/iam/details/mfa/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS Cloud\nservice helps in quick deployment of resources which can make use of different\nprogramming languages such as .Net and Java?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Elastic Beanstalk"}, {
        "id": "B",
        "markdown": "AWS Elastic Compute Cloud (Amazon EC2)"
    }, {"id": "C", "markdown": "AWS VPC"}, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A\n\nThe\nAWS Documentation mentions the following\n\nAWS\nElastic Beanstalk is an easy-to-use service for deploying and scaling web\napplications and services developed with Java, .NET, PHP, Node.js, Python,\nRuby, Go, and Docker on\nfamiliar servers such as Apache, Nginx, Passenger, and IIS.\n\nFor\nmore information on enabling AWS Elastic beanstalk, please refer to the below URL:\n\nhttps://aws.amazon.com/elasticbeanstalk/?p=tile\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company handles a crucial ecommerce application. This applications needs to have an uptime of at least 99.5%. There is a decision to move the application to the AWS Cloud. Which of the following deployment strategies can help build a robust architecture for such an application.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deploying the application across multiple VPC’s"}, {
        "id": "B",
        "markdown": "Deploying the application across multiple Regions"
    }, {"id": "C", "markdown": "Deploying the application across Edge locations"}, {
        "id": "D",
        "markdown": "Deploying the application across multiple subnets"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS Documentation mentions the following\n\nBusinesses are using the AWS cloud to enable faster disaster recovery of their critical IT systems without incurring the infrastructure expense of a second physical site. The AWS cloud supports many popular disaster recovery (DR) architectures from “pilot light” environments that may be suitable for small customer workload data center failures to “hot standby” environments that enable rapid failover at scale. With data centers in Regions all around the world, AWS provides a set of cloud-based disaster recovery services that enable rapid recovery of your IT infrastructure and data.\n\nFor more information on enabling AWS Disaster Recovery, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/disaster-recovery/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is moving a large application to AWS using a set of EC2 instances. A key requirement is reusing existing server-bound software licensing. Which of the following options is the best for satisfying the requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EC2 Dedicated Instances"}, {
        "id": "B",
        "markdown": "EC2 Reserved Instances"
    }, {"id": "C", "markdown": "EC2 Dedicated Hosts"}, {"id": "D", "markdown": "EC2 Spot Instances"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: C\n\n\n\tOption A is INCORRECT because despite instances run on a single-tenant hardware AWS does not give visibility to sockets and cores required for reusing server bound licenses. AWS highlights this in the comparison table at the following link:\n\n\t\n\t\thttps://aws.amazon.com/ec2/dedicated-hosts/\n\t\n\t\n\tOption B is INCORRECT because Reserved Instances are only a purchasing option and there’s no way to control the hardware where these instances are running on.\n\tOption C is CORRECT because instances run on a dedicated hardware where AWS gives visibility of physical characteristics. AWS documentation mentions this with the following sentence:  “...Dedicated Host gives you additional visibility and control over how instances are placed on a physical server, and you can consistently deploy your instances to the same physical server over time. As a result, Dedicated Hosts enable you to use your existing server-bound software licenses and address corporate compliance and regulatory requirements.”\n\tOption D is INCORRECT because Spot Instances are only a purchasing option.\n\n\nDiagram: none\n\nReferences: \n\nAWS documentation that explains the possibility of reusing server bound license\n\n\n\thttps://aws.amazon.com/ec2/dedicated-hosts/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning on\ndeploying a video based application onto the AWS Cloud. These videos will be\naccessed by users across the world. Which of the below services can help stream\nthe content in an efficient manner to the users across the globe?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon SES"}, {"id": "B", "markdown": "Amazon Cloudtrail"}, {
        "id": "C",
        "markdown": "Amazon CloudFront"
    }, {"id": "D", "markdown": "Amazon S3"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C\n\nThe\nAWS Documentation mentions the following\n\nAmazon\nCloudFront is a web service that gives businesses and web application\ndevelopers an easy and cost effective way to distribute content with low\nlatency and high data transfer speeds. Like other AWS services, Amazon\nCloudFront is a self-service, pay-per-use offering, requiring no long term\ncommitments or minimum fees. With CloudFront, your files are delivered to\nend-users using a global network of edge locations.\n\nFor\nmore information on CloudFront, please visit the Link:\n\nhttps://aws.amazon.com/cloudfront/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Using Content Delivery Network (CDN) an administrator would like to serve varying types of content based on the viewer’s browser cookies. Which is the most appropriate serverless technique that can be used to achieve this?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CodeCommit"}, {"id": "B", "markdown": "AWS Lambda@Edge"}, {
        "id": "C",
        "markdown": "AWS CodeStar"
    }, {"id": "D", "markdown": "AWS Cloud9"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Lambda@Edge is a serverless service that makes it possible to run event-triggered functions on Edge Locations within the AWS Content Delivery Network. Using AWS CloudFront, an administrator can introduce decision-making and compute processing closer to the viewer’s location, thereby improving on their browsing experience.\n\nhttps://aws.amazon.com/lambda/edge/\n\n\n\tOption A. is INCORRECT because AWS CodeCommit is inappropriate in addressing the scenario, it is a service that allows for the management of software development versions as well as software development assets such. These include binary files, documents and source code.\n\tOption C. is INCORRECT because AWS CodeStar is a service used to manage  software development  projects. It is not the appropriate Option for the scenario. CodeStar project makes it possible to develop, build and deploy applications\n\tOption D. is INCORRECT because it is not the best solution though it can be used in the scenario to write, run and deploy code. It is an integrated development environment (IDE) that can accommodate various runtimes. Since the Lambda@Edge is best suited to meet the requirements of the scenario, this makes this Option incorrect.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following scenarios is most appropriate to implement Amazon ElastiCache in order to improve on performance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Where there are frequent writes to a database instance"}, {
        "id": "B",
        "markdown": "Where there are frequent reads of static content on a web application"
    }, {"id": "C", "markdown": "Where there are frequent reads of dynamic content on a web application"}, {
        "id": "D",
        "markdown": "Where there are infrequent random reads to static content on a web application"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nIn the scenario outlined in Option B, implementing and configuring Amazon ElastiCache will improve the performance by storing frequently accessed content in-memory. The storage type is a managed, high-speed, volatile and not disk-based, making information retrieval faster than disk-based stored content.\n\nhttps://aws.amazon.com/caching/\n\n\n\tOption A. is INCORRECT because caching frequent writes to a database instance will not be the most appropriate method to improve on its performance. Deploying the most appropriate storage type would be suffice.\n\tOption C. is INCORRECT because caching dynamic content will still result in retrieval of content from disk. This would not improve on the performance. Caching is most effective when the same information or content is frequently accessed.\n\tOption D. is INCORRECT because this scenario can be improved by opting for appropriate storage option. Random and infrequently accessed content will expire regularly whilst cached therefore, this will not improve the performance in the scenario.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to host EC2 Instances in the AWS Cloud, wherein the utilization is for a duration of more than 3 years. Which of the following would you utilize to ensure costs are minimized?\"",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Reserved instances"}, {
        "id": "B",
        "markdown": "On-demand instances"
    }, {"id": "C", "markdown": "Spot instances"}, {"id": "D", "markdown": "Regular instances"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nWhen you have instances that will be used continuously and throughout the year, the best option is to buy reserved instances. By buying reserved instances, you are actually allocated an instance for the entire year or the duration you specify with a reduced cost.\n\nFor more information on Reserved Instances, please visit the Link:\n\n\n\thttps://aws.amazon.com/ec2/pricing/reserved-instances/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator would like to check if the Amazon CloudFront identity they created is making access API calls to an S3 bucket where a static website is hosted. Where can this information be obtained?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Configuring Amazon Athena to run queries on the Amazon CloudFront distribution"
    }, {"id": "B", "markdown": "Check AWS CloudWatch logs on the S3 bucket."}, {
        "id": "C",
        "markdown": "In the webserver, tail for identity access logs from the Amazon CloudFront identity"
    }, {
        "id": "D",
        "markdown": "In AWS CloudTrail Event history, look up access calls and filter for the Amazon CloudFront identity."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nBy viewing Event history in Amazon CloudTrail, the administrator can be able to access operational, access and activity logs for the past 90 days, to the S3 bucket that hosts the static website.\n\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events-console.html\n\n\n\tOption A. is INCORRECT because Amazon Athena will need a specific data repository from which a database and table can be created in order to run queries from. Data repositories can be a folder in an S3 bucket where logs are written to.\n\tOption B. is INCORRECT because AWS CloudWatch does not log access API calls from one resource to another. AWS CloudTrail can do this.\n\tOption C. is INCORRECT because it is not possible to access the underlying webserver, be it for Amazon CloudFront or S3, when an S3 bucket is configured for static web hosting. It is fully-managed by AWS.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "After making changes to a record set in a Route53 hosted zone and saving accordingly, an administrator immediately attempts to test for the new settings. All the attempts are unsuccessful. What is the most plausible reason for this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "In Amazon Route53, changes in the hosted zones cannot reflect until the set Time to live (TTL) duration has lapsed."
    }, {
        "id": "B",
        "markdown": "It is likely that the administrator cleared the browser and DNS cache before testing."
    }, {
        "id": "C",
        "markdown": "Changes to hosted zones propagate and reflect instantly but the administrator’s browser has cached content."
    }, {
        "id": "D",
        "markdown": "Whilst logged onto the hosted zone, the administrator did not commit the changes to the respective Amazon Route53 nameservers."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nIn Amazon Route53 any alterations made to record sets in hosted zones will take the duration of the set Time to live (TTL) before they can reflect. However, flushing of the local DNS and browser cache will prompt a new query to the Route53 hosted zone thereby giving the new changes.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values-basic.html#rrsets-values-basic-ttl\n\n\n\tOption B. is INCORRECT because clearing the browser and DNS cache is actually the solution when attempting to view recently made changes to a hosted zone. So this cannot be the reason why the administrator got unsuccessful results.\n\tOption C. is INCORRECT because changes to hosted zones in Amazon Route53 do not reflect instantly, only after the Time to live (TTL) duration has lapsed will the changes be realized.\n\tOption D. is INCORRECT because the question states that the administrator saved the changes accordingly.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is deploying a two-tier, highly available web application to AWS. The application needs a storage layer to store artifacts such as photos and videos. Which of the following services can be used as the underlying storage mechanism?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EBS volume"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "Amazon EC2 instance store"
    }, {"id": "D", "markdown": "Amazon RDS instance"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nAmazon S3 is the default storage service that should be considered for companies. It provides durable storage for all static content.\n\nFor more information on AWS S3, please visit the Link:\n\n\n\thttps://aws.amazon.com/s3/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization runs several EC2 instances inside a VPC using three subnets, one for Development, one for Test and one for Production. The Security team has some concerns about the VPC configuration and requires to restrict the communication across the EC2 instances using Security Groups.\n\nWhich of the following options is true for Security Groups?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "You can change a Security Group associated to an instance if the instance state is stopped or running."
    }, {
        "id": "B",
        "markdown": "You can change a Security Group associated to an instance if the instance state is stopped but not if the instance state is running."
    }, {
        "id": "C",
        "markdown": "You can change a Security Group only if there are no instances associated to it."
    }, {"id": "D", "markdown": "The only Security Group you can change is the Default Security Group."}, {
        "id": "E",
        "markdown": "None of the above"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: A\n\n\n\tOption A is CORRECT because the AWS documentation mentions it in the section called  “Changing an Instance’s Security Group” using the following sentence: “After you launch an instance into a VPC, you can change the security groups that are associated with the instance. You can change the security groups for an instance when the instance is in the running or stopped state.”\n\tOption B, C, D and E are INCORRECT as a consequence of A.\n\n\nDiagram: none\n\nReferences:\n\nhttps://docs.aws.amazon.com/en_pv/vpc/latest/userguide/VPC_SecurityGroups.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the below mentioned services is equivalent to hosting virtual\nservers on an on-premises location?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS IAM"}, {"id": "B", "markdown": "AWS Server"}, {
        "id": "C",
        "markdown": "AWS EC2"
    }, {"id": "D", "markdown": "AWS Regions"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - C\n\nThe AWS\nDocumentation mentions the following\n\nAmazon\nElastic Compute Cloud (Amazon EC2) is a web service that provides secure,\nresizable compute capacity in the cloud. It is designed to make web-scale cloud\ncomputing easier for developers.\n\nFor more\ninformation on AWS EC2, please refer to the following Link:\n\nhttps://aws.amazon.com/ec2/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a set of EC2 Instances hosted on the AWS Cloud. The EC2 Instances are hosting a web application. Which of the following acts as a firewall to your VPC and the instances in it? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Usage of Security Groups"}, {
        "id": "B",
        "markdown": "Usage of AWS Config"
    }, {"id": "C", "markdown": "Usage of Network Access Control Lists"}, {
        "id": "D",
        "markdown": "Usage of the Internet gateway"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A and C\n\nThe AWS Documentation mentions the following\n\nA security group acts as a virtual firewall for your instance to control inbound and outbound traffic\n\nA network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. \n\nFor more information on Security Groups, please refer to the following Link:\n\n \n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html\n\n\n \n\nFor more information on Network Access Control Lists, please refer to the following Link:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following can be used to spin up EC2 instances on the AWS Cloud ?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS Volumes"}, {"id": "B", "markdown": "EBS Snapshots"}, {
        "id": "C",
        "markdown": "Amazon Machine Image"
    }, {"id": "D", "markdown": "Amazon VMware"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nThe AWS Documentation mentions the following\n\nAn Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need.\n\nFor more information on Amazon Machine Images, please refer to the following Link:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the below option cannot be used to work with Amazon Glacier?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Glacier API"}, {"id": "B", "markdown": "AWS Console"}, {
        "id": "C",
        "markdown": "AWS Glacier SDK"
    }, {"id": "D", "markdown": "AWS S3 Lifecycle policies"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nNote that the AWS Console cannot be used to upload data onto Glacier. The console can only be used to create a Glacier vault which can be used to upload the data.\n\n\n\tFor more information on uploading data onto Glacier, please refer to the following link:\n\t\n\t\thttps://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html\n\t\n\t\n\tOption A - AWS Glacier API\n\t- AWS Glacier is a storage service optimized for infrequently used data, or \"cold data\".  This option is used for programmatically access Glacier and work with it.  Due to this reason this option is not matched with the question.\n\t\n\t\thttps://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-api.html\n\t\n\t\n\t Option C - AWS Glacier SDK: SDK i.e., Software Development Kit is used to develop applications for Amazon S3 Glacier.  They provide libraries that map to the underlying REST API and provide objects that you can use to easily construct requests and process responses.  Due to this reason, it's not a valid answer to the asked question.\n\t\n\t\t https://docs.aws.amazon.com/amazonglacier/latest/dev/using-aws-sdk.html\n\t\n\t\n\tOption D - AWS S3 Lifecycle Policies: S3 Lifecycle Policies allow you to automatically review objects within your S3 Buckets and have them moved to Glacier or have the objects deleted from S3.\n\thttps://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-lifecycle.html\n\thttps://aws.amazon.com/glacier/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to pay for an AWS Support plan. They have the following requirements as far as the support plan goes\n\n\n\t24x7 access to Cloud Support Engineers via email, chat & phone\n\tResponse time of less than 1 hour for any business critical system faults\n\n\nWhich of the following plans will suffice to keep in mind the above requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Basic"}, {"id": "B", "markdown": "Developer"}, {
        "id": "C",
        "markdown": "Business"
    }, {"id": "D", "markdown": "Enterprise"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nAs per the AWS document, there is no critical support available for Basic, Developer and Business plans. \n\nIf you see the second point, it says \"critical faults\". Critical faults can be handled only by the \"Sr. Cloud Support Engineers\". Even if it is less than 1 hour or 15 mins. \n\nEnterprise plan has critical support within 15 minutes. The question mentions less than 1 hour for critical faults. Normally it will be less than 15 minutes. Hence the correct answer is Enterprise. \n\nThe Enterprise support plan has support time less than 15 minutes for Business-critical system down.\n\nFor more information on the support plans, please refer to the following Link:\n\n\n\thttps://aws.amazon.com/premiumsupport/compare-plans/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing are features of an edge location. Choose 3 answers from the options\ngiven below",
    "prompt": "",
    "correctAnswerId": ["A", "B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Distribute content to users"}, {
        "id": "B",
        "markdown": "Cache common responses"
    }, {"id": "C", "markdown": "Distribute load across multiple resources"}, {
        "id": "D",
        "markdown": "Used in conjunction with the Cloudfront service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer –\nA,B and D\n\nThe AWS\nDocumentation mentions the following\n\nAmazon\nCloudFront employs a global network of edge locations and regional edge caches\nthat cache copies of your content close to your viewers. Amazon CloudFront\nensures that end-user requests are served by the closest edge location. As a\nresult, viewer requests travel a short distance, improving performance for your\nviewers. For files not cached at the edge locations and the regional edge\ncaches, Amazon CloudFront keeps persistent connections with your origin servers\nso that those files can be fetched from the origin servers as quickly as\npossible. \n\nFor more\ninformation on Cloudfront and Edge locations, please refer to the following Link:\n\nhttps://aws.amazon.com/cloudfront/details/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following storage options provides the option of Lifecycle\npolicies that can be used to move objects to archive storage.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3"}, {"id": "B", "markdown": "Amazon Glacier"}, {
        "id": "C",
        "markdown": "Amazon Storage Gateway"
    }, {"id": "D", "markdown": "Amazon EBS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS\nDocumentation mentions the following\n\nLifecycle configuration enables you to specify the lifecycle\nmanagement of objects in a bucket. The configuration is a set of one or more\nrules, where each rule defines an action for Amazon S3 to apply to a group of objects.\nThese actions can be classified as follows:\n\n·        \nTransition\nactions – In which you define when objects transition to another storage class. For example, you may choose to\ntransition objects to the STANDARD_IA (IA, for infrequent access) storage class\n30 days after creation, or archive objects to the GLACIER storage class one\nyear after creation.\n\n ·        \nExpiration\nactions – In which you specify when the objects expire. Then Amazon S3\ndeletes the expired objects on your behalf.\n\n For more\ninformation on AWS Object Lifecycle management, please visit the Link:\n\nhttps://aws.amazon.com/s3/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following features of Amazon RDS allows for better availability of databases. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "VPC Peering"}, {"id": "B", "markdown": "Multi-AZ"}, {
        "id": "C",
        "markdown": "Read Replicas"
    }, {"id": "D", "markdown": "Multi-Region"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B and C\n\nThe AWS Documentation mentions the following\n\nIf you are looking to use replication to increase database availability while protecting your latest database updates against unplanned outages, consider running your DB instance as a Multi-AZ deployment. \n\nYou can use Multi-AZ deployments and Read Replicas in conjunction to enjoy the complementary benefits of each. You can simply specify that a given Multi-AZ deployment is the source DB Instance for your Read Replicas. That way you gain both the data durability and availability benefits of Multi-AZ deployments and the read scaling benefits of Read Replicas.\n\nFor more information on AWS RDS, please visit the FAQ Link:\n\n\n\thttps://aws.amazon.com/rds/faqs/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Why does it take between 24 to 48 hours for changes made to a hosted zone in Amazon Route53 to reflect globally?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "AWS Name Servers need between 24 to 48 hours to create record sets, update their respective values and process changes."
    }, {
        "id": "B",
        "markdown": "DNS resolvers around the world can only reflect the changes in their cache after the Time To Live (TTL) has expired, it is 24 hours by default."
    }, {
        "id": "C",
        "markdown": "AWS Name Servers around the world update their cache in tandem, it takes between 24 hours to 48 hours for the process to complete."
    }, {
        "id": "D",
        "markdown": "If changes to the hosted zone are made in the same AWS Region as the DNS resolver, it can take between 6 to 12 hours."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nGenerally, DNS resolvers query for changes every 86400 seconds, which means DNS resolver cache is stagnant for up to 24 hours. This can be changed, but the widely accepted time is 24 hours.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/troubleshooting-new-dns-settings-not-in-effect.html#troubleshooting-new-dns-settings-not-in-effect-cached-resource-record-set\n\n\n\tOption A. is INCORRECT because AWS Name servers save the changes made to hosted zones within 60 seconds.\n\n\t\n\t\thttps://aws.amazon.com/route53/faqs/\n\t\n\t\n\tOption C. is INCORRECT because Amazon Route53 uses a global network of interconnected DNS servers which simultaneously take up changes to a hosted zone. The process does not occur in tandem.\n\tOption D. is INCORRECT because Amazon Route53 is not Region-specific, therefore it is not possible to determine in which AWS Region changes are made.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Whilst running an application on an EC2 instance behind an Elastic Load Balancer, an administrator receives a 504 error on their browser. What does this mean?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "The ELB instance has stopped running"}, {
        "id": "B",
        "markdown": "The application running on the EC2 instance is serving the 504 error page because it has exceeded its response timeout"
    }, {"id": "C", "markdown": "The URL for the application has expired"}, {
        "id": "D",
        "markdown": "The application is unresponsive so the ELB instance serves the 504 error page"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe 504 error is served by the Elastic Load Balancer to indicated that the application is unresponsive, the idle time-out period has lapsed.\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ts-elb-error-message.html#ts-elb-errorcodes-http504\n\n \n\n\n\tOption A. is INCORRECT because the error that is served when the ELB instance has stopped running is 503.\n\tOption B. is INCORRECT because when the application behind the ELB is unresponsive, the error page is served by the ELB instance itself and not the application.\n\tOption C. is INCORRECT because in the scenario there is no mention of signed URLs. The error that is served in such a scenario is “Request has expired” error.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are the architect of a custom application running inside your corporate data center. The application runs with some unresolved bugs that produce a lot of data inside custom log files generating time-consuming activities to the operation team who is responsible for analyzing them.\n\nYou want to move the application to AWS using EC2 instances, and at the same time, take the opportunity for improving logging and monitoring capabilities but without touching the application code.\n\nWhat AWS service should you use to satisfy the requirement?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Kinesis Data Streams"}, {
        "id": "B",
        "markdown": "AWS CloudTrail"
    }, {"id": "C", "markdown": "AWS CloudWatch Logs"}, {"id": "D", "markdown": "AWS Application Logs"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: C\n\n\n\tOption A is INCORRECT because in order to feed a Data Streams from custom logs you have to change the application code. AWS documentations describes this with the following sentence: “To put data into the stream, you must specify the name of the stream, a partition key, and the data blob to be added to the stream.”\n\tOption B is INCORRECT because is unrelated to the scenario and custom log files.\n\tOption C is CORRECT because AWS CloudWatch Logs has the capability to reuse existing application logs increasing efficiency in operation with the ability to generate on them metrics, alerts and analytics with AWS CloudWatch Logs Insight.\n\n\nAs the application and custom log files are exactly as they were when the application was running on-prem you don’t need to change any piece of application code that make them ingestible by AWS CloudWatch Logs\n\nAWS official documentation in the FAQ section highlights the reusing capability with the sentence “AWS CloudWatch Logs lets you monitor and troubleshoot your systems and applications using your existing system, application and custom log files… so, no code changes are required.”\n\nYou can also leverage CloudWatch Metrics, Alarms and Dashboards with Logs to get full operational visibility into your applications. This empowers you to understand your applications, make improvements, and find and fix problems quickly, so that you can continue to innovate rapidly.\n\n\n\tOption D is INCORRECT because AWS Application Logs does not exist.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/cloudwatch/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company wants to move an existing Oracle database to the AWS Cloud.\nWhich of the following services can help facilitate this move.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Database Migration Service"}, {
        "id": "B",
        "markdown": "AWS VM Migration Service"
    }, {"id": "C", "markdown": "AWS Inspector"}, {"id": "D", "markdown": "AWS Trusted Advisor"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A\n\nThe AWS\nDocumentation mentions the following\n\nAWS\nDatabase Migration Service helps you migrate databases to AWS quickly and\nsecurely. The source database remains fully operational during the migration,\nminimizing downtime to applications that rely on the database. The AWS Database\nMigration Service can migrate your data to and from most widely used commercial\nand open-source databases.\n\nFor more\ninformation on AWS Database migration, please refer to the below URL:\n\nhttps://aws.amazon.com/dms/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following features of AWS RDS allows you to reduce the load on the database while reading data?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Cross region replication"}, {
        "id": "B",
        "markdown": "Creating Read Replicas"
    }, {"id": "C", "markdown": "Using snapshots"}, {"id": "D", "markdown": "Using Multi-AZ feature"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nThe AWS Documentation mentions the following\n\nYou can reduce the load on your source DB Instance by routing read queries from your applications to the read replica. Read replicas allow you to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads.\n\nFor more information on Read Replicas, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/rds/details/read-replicas/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following terms refers to a geographic location in AWS?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Availability Zone"}, {"id": "B", "markdown": "Data center"}, {
        "id": "C",
        "markdown": "Region"
    }, {"id": "D", "markdown": "Edge location"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nRegions correspond to different geographic locations in AWS.\n\nFor more information on Regions and Availability Zones in AWS, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to have a database hosted on AWS. As much as possible they want to have control over the database itself. Which of the following would be an ideal option for this.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using the AWS DynamoDB service"}, {
        "id": "B",
        "markdown": "Using the AWS RDS service"
    }, {"id": "C", "markdown": "Hosting the database on an EC2 Instance"}, {
        "id": "D",
        "markdown": "Using the Amazon Aurora service"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nIf you want a self-managed database, that means you want complete control over the database engine and the underlying infrastructure. In such a case you need to host the database on an EC2 Instance\n\nFor more information on EC2 Instances, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/ec2/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company currently\nhas an application which consist of a .Net layer which connects to a MySQL\ndatabase. They now want to move this application onto AWS. They want to make\nuse of all AWS features such as high availability and automated backups. Which\nof the following would be an ideal database in AWS to migrate to for this\nrequirement.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Aurora"}, {"id": "B", "markdown": "DynamoDB"}, {
        "id": "C",
        "markdown": "An EC2 instance with MySQL installed."
    }, {"id": "D", "markdown": "An EC2 instance with Aurora installed."}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A\n\nThe AWS\nDocumentation mentions the following\n\nAmazon\nAurora (Aurora) is a fully managed, MySQL- and PostgreSQL-compatible,\nrelational database engine. It combines the speed and reliability of high-end\ncommercial databases with the simplicity and cost-effectiveness of open-source\ndatabases. It delivers up to five times the throughput of MySQL and up to three\ntimes the throughput of PostgreSQL without requiring changes to most of your\nexisting applications.\n\nFor more\ninformation on Amazon Aurora, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing statements are FALSE when it comes to elasticity. Choose 2 answers\nfrom the options given below",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Diverting traffic to instances based on the demand"}, {
        "id": "B",
        "markdown": "Diverting traffic to instances with the least load"
    }, {"id": "C", "markdown": "Diverting traffic across multiple regions"}, {
        "id": "D",
        "markdown": "Diverting traffic to instances with higher capacity"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\nand D\n\nThe concept\nof Elasticity is the means of an application having the ability to scale up and\nscale down based on demand. An example of such a service is the Autoscaling\nservice\n\nFor more\ninformation on AWS Autoscaling service, please refer to the below URL:\n\nhttps://aws.amazon.com/autoscaling/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An ELB instance is configured with the default HealthCheck and Response Timeout intervals as 30 seconds and 5 seconds respectively. How long will it take for an instance within a target group to be labelled as OutOfService, if it goes down a second after the latest HealthCheck?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "34 seconds"}, {"id": "B", "markdown": "30 seconds"}, {
        "id": "C",
        "markdown": "35 seconds"
    }, {"id": "D", "markdown": "4 seconds"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nSince the health check runs every 30 seconds and the instance goes down one second into the cycle, it means 29 seconds will lapse before a new health check is run. Additionally, it will take 5 more seconds of the ELB instance probing the instance that is down, upon getting no response, it would then fail the health check. Therefore, 29 + 5 seconds = 34 seconds.\n\nhttps://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html\n\n\n\tOption B. is INCORRECT because when a health check starts, the ELB gives the instance 5 seconds to respond during the probe.\n\tOption C. is INCORRECT because the instance within the target group goes down 1 second after the latest health check cycle.\n\tOption D. is INCORRECT because the health check runs after every 30 seconds window. So during this window, the ELB will not be probing the target group.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Why is Amazon DynamoDB service best-suited for implementation in mobile, Internet of Things (IoT) and gaming applications?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "DynamoDB is a fully-managed database instance with no infrastructure overheads"
    }, {"id": "B", "markdown": "DynamoDB has a flexible data model and single-digit millisecond latency"}, {
        "id": "C",
        "markdown": "Whilst in operation, DynamoDB instances are spread across at least three geographically distinct centers, AWS Regions"
    }, {"id": "D", "markdown": "DynamoDB supports eventual and strongly consistent reads"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nThe use cases mentioned in the scenario have unstructured data in common, therefore, the most appropriate attribute of Amazon DynamoDB is its flexible data model and single-digit millisecond latency.\n\nhttps://aws.amazon.com/blogs/database/how-to-determine-if-amazon-dynamodb-is-appropriate-for-your-needs-and-then-plan-your-migration/\n\n\n\tOption A. is INCORRECT because being fully-managed and having no infrastructure overheads does not distinguish DynamoDB as the best-suited solution for the given use cases.\n\tOption C. is INCORRECT because the aspect of fault-tolerance, disaster recovery and high availability is also present in Amazon Relational Databases (RDS), this feature does not distinguish the service in accordance with the described use cases.\n\tOption D. is INCORRECT because this attribute of DynamoDB does not fully justify its exclusive choice over other instances when considered for implementation in the use cases mentioned in the question.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is planning to migrate their On-premises Services to the Cloud. Which of the following would help them do a cost benefit analysis of moving to the AWS Cloud.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS TCO calculator"}, {"id": "B", "markdown": "AWS Config"}, {
        "id": "C",
        "markdown": "AWS Cost Explorer"
    }, {"id": "D", "markdown": "AWS Consolidating billing"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS\nDocumentation mentions the following\n\nUse\nthis calculator to compare the cost of running your applications in\nan on-premises or colocation environment to AWS. Describe your on-premises\nor colocation configuration to produce a detailed cost comparison\nwith AWS.\n\nFor more\ninformation on the TCO Calculator, please refer to the below URL:\n\nhttps://awstcocalculator.com/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing does AWS perform on its behalf for EBS volumes to make it less prone\nto failure?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Replication of the volume across Availability Zones"}, {
        "id": "B",
        "markdown": "Replication of the volume in the same Availability Zone"
    }, {"id": "C", "markdown": "Replication of the volume across Regions"}, {
        "id": "D",
        "markdown": "Replication of the volume across Edge locations"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nWhen you\ncreate an EBS volume in an Availability Zone, it is automatically replicated\nwithin that zone to prevent data loss due to failure of any single hardware\ncomponent \n\nFor more\ninformation on EBS Volumes, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are requested to expose your serverless application implemented with AWS Lambda to HTTP clients.( using HTTP Proxy )\n\nWhich of the following AWS services can you use to accomplish the task? (Select TWO)",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Elastic Load Balancing (ELB)"}, {
        "id": "B",
        "markdown": "AWS Route53"
    }, {"id": "C", "markdown": "AWS API Gateway"}, {"id": "D", "markdown": "AWS Lightsail"}, {
        "id": "E",
        "markdown": "AWS Elastic Beanstalk"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: A and C\n\n\n\tOption A is CORRECT because AWS documentation mentions it “Application Load Balancers now support invoking Lambda functions to serve HTTP(S) requests. This enables users to access serverless applications from any HTTP client, including web browsers.\n\tOption B is INCORRECT because Route53 is a Domain Name System and not an HTTP proxy.\n\tOption C is CORRECT because API Gateway + Lambda is a common pattern for exposing serverless functions via HTTP/HTTPS. AWS documentation mentions it “Creating, deploying, and managing a REST application programming interface (API) to expose backend HTTP endpoints, AWS Lambda functions, or other AWS services” \n\tOption D is INCORRECT because AWS Lightsail has a completely different goal. It is a service to speed up provisioning of AWS resources.\n\tOption E is INCORRECT because AWS Elastic Beanstalk has a completely different goal. It is a service that makes easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.\n\n\nDiagram: none\n\nReferences:\n\nELB:\n\n\n\thttps://aws.amazon.com/elasticloadbalancing/faqs/?nc=sn&loc=6\n\n\nAPI Gateway:\n\n\n\thttps://aws.amazon.com/api-gateway/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have an EC2\nInstance in development that interacts with the Simple Storage Service. The EC2\nInstance is going to be promoted to the production environment. Which of the\nfollowing features should be used for secure communication between the EC2\nInstance and the Simple Storage Service.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "IAM Users"}, {"id": "B", "markdown": "IAM Roles"}, {
        "id": "C",
        "markdown": "IAM Groups"
    }, {"id": "D", "markdown": "IAM policies"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nThe AWS\nDocumentation mentions the following\n\nAn\nIAM role is similar to a user, in that it is an AWS identity\nwith permission policies that determine what the identity can and cannot do in\nAWS. However, instead of being uniquely associated with one person, a role is\nintended to be assumable by anyone who needs it. Also, a role does not have\nstandard long-term credentials (password or access keys) associated with it. Instead,\nif a user assumes a role, temporary security credentials are created dynamically and\nprovided to the user.\n\nFor more\ninformation on IAM Roles, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A live online game uses DynamoDB instances in the backend to store real-time scores of the participants as they compete against each other from various parts of the world. Which data consistency option it the most appropriate to implement?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Strongly consistent"}, {
        "id": "B",
        "markdown": "Eventually consistent"
    }, {"id": "C", "markdown": "Strong Eventual consistency"}, {"id": "D", "markdown": "Optimistic consistency"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nSince the gamers are participating live over the internet from geographically distinct locations, the data consistency will need to be that of immediately readable within a second of them being written. Therefore strongly consistent.\n\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html\n\n \n\n\n\tOption B. is INCORRECT because the scenarios outlines that the participants of the game are live, it will not suffice if any of them get updates on scores in less than real-time.\n\tOption C. is INCORRECT because strong eventual consistency is not applicable in DynamoDB.\n\tOption D. is INCORRECT because only two data consistency models are available with the DynamoDB service, optimistic consistency is not supported\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your company is planning to host a large ecommerce application on the AWS Cloud. One of their major concerns is Internet attacks such as DDos attacks. Which of the following services can help mitigate this concern. Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Cloudfront"}, {"id": "B", "markdown": "AWS Shield"}, {
        "id": "C",
        "markdown": "AWS EC2"
    }, {"id": "D", "markdown": "AWS Config"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and B\n\nThe AWS Documentation mentions the following on DDoS attacks\n\nAWS Services for DDoS Attack Mitigation\n\nAWS offers globally distributed, high network bandwidth and resilient services that, when used in conjunction with application-specific strategies, are key to mitigating DDoS attacks. For more information on how to leverage each of these services and details on how their various features help protect against DDoS attacks, see the whitepaper AWS Best Practices for DDoS Resiliency.\n\nAWS Shield\n\nAWS Shield is a managed DDoS protection service that is available in two tiers: Standard and Advanced. AWS Shield Standard applies always-on detection and inline mitigation techniques, such as deterministic packet filtering and priority-based traffic shaping, to minimize application downtime and latency. AWS Shield Standard is included automatically and transparently to your Elastic Load Balancing load balancers, Amazon CloudFront distributions, and Amazon Route 53 resources at no additional cost. When you use these services that include AWS Shield Standard, you receive comprehensive availability protection against all known infrastructure layer attacks. Customers who have the technical expertise to manage their own monitoring and mitigation of application layer attacks can use AWS Shield together with AWS WAF rules to create a comprehensive DDoS attack mitigation strategy.\n\nAWS Shield Advanced provides enhanced DDoS attack detection and monitoring for application-layer traffic to your Elastic Load Balancing load balancers, CloudFront distributions, Amazon Route 53 hosted zones and resources attached to an Elastic IP address, such Amazon EC2 instances. AWS Shield Advanced uses additional techniques to provide granular detection of DDoS attacks, such as resource-specific traffic monitoring to detect HTTP floods or DNS query floods. AWS Shield Advanced includes 24x7 access to the AWS DDoS Response Team (DRT), support experts who apply manual mitigations for more complex and sophisticated DDoS attacks, directly create or update AWS WAF rules, and can recommend improvements to your AWS architectures. AWS WAF is included at no additional cost for resources that you protect with AWS Shield Advanced.\n\nAWS Shield Advanced includes access to near real-time metrics and reports, for extensive visibility into infrastructure layer and application layer DDoS attacks. You can combine AWS Shield Advanced metrics with additional, fine-tuned AWS WAF metrics for a more comprehensive CloudWatch monitoring and alarming strategy. Customers subscribed to AWS Shield Advanced can also apply for a credit for charges that result from scaling during a DDoS attack on protected Amazon EC2, Amazon CloudFront, Elastic Load Balancing, or Amazon Route 53 resources. See the AWS Shield Developer Guide for a detailed comparison of the two AWS Shield offerings.\n\nAWS WAF\n\nAWS WAF is a web application firewall that helps protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. You can use AWS WAF to define customizable web security rules that control which traffic accesses your web applications. If you use AWS Shield Advanced, you can use AWS WAF at no extra cost for those protected resources and can engage the DRT to create WAF rules.\n\nAWS WAF rules use conditions to target specific requests and trigger an action, allowing you to identify and block common DDoS request patterns and effectively mitigate a DDoS attack. These include size constraint conditions to block a web request based on the length of its query string or request body, and geographic match conditions to implement geo restriction (also known as geoblocking) on requests that originate from specific countries. For a complete list of conditions, see the AWS WAF Developer Guide. With AWS WAF, you can also create rate-based rules that automatically block requests from a single IP address if they exceed a customer-defined rate limit. One benefit of rate-based rules is that you can block requests from an IP address while it exceeds the threshold, and then automatically allow requests from that same client once they drop to an acceptable rate. This helps ensure that regular viewers are not held in a persistent block list. You can also combine the rate limit with conditions to trigger different actions for distinct scenarios.\n\nAmazon Route 53\n\nOne of the most common targets of DDoS attacks is the Domain Name System (DNS). Amazon Route 53 is a highly available and scalable DNS service designed to route end users to infrastructure running inside or outside of AWS. Route 53 makes it possible to manage traffic globally through a variety of routing types, and provides out-of-the-box shuffle sharding and Anycast routing capabilities to protect domain names from DNS-based DDoS attacks.\n\nAmazon CloudFront\n\nAmazon CloudFront distributes traffic across multiple edge locations and filters requests to ensure that only valid HTTP(S) requests will be forwarded to backend hosts. CloudFront also supports geoblocking, which you can use to prevent requests from particular geographic locations from being served.\n\nElastic Load Balancing\n\nElastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon Elastic Compute Cloud (Amazon EC2) instances, containers, and IP addresses, and multiple Availability Zones, which minimizes the risk of overloading a single resource. Elastic Load Balancing, like CloudFront, only supports valid TCP requests, so DDoS attacks such as UDP and SYN floods are not able to reach EC2 instances. It also offers a single point of management and can serve as a line of defense between the internet and your backend, private EC2 instances. Elastic Load Balancing includes the Application Load Balancer, which is best suited for load balancing of HTTP and HTTPS traffic and also directly supports AWS WAF.\n\nVPCs and Security Groups\n\nAmazon Virtual Private Cloud (Amazon VPC) allows customers to configure subnet routes, public IP addresses, security groups, and network access control lists in order to minimize application attack surfaces. You can configure load balancers and EC2 instance security groups to allow traffic that originates from specific IP addresses only, such as that from CloudFront or AWS WAF, protecting backend application components from a direct attack.\n\nFor more information on DDos attack prevention, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A research team conducting its work in remote locations of the world, without internet access, wishes to leverage Amazon services for their storage. The team collects petabytes of information at a time. Which service will best meet to transfer the petabytes of information?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon S3"}, {
        "id": "B",
        "markdown": "Amazon Elastic Block Store (EBS)"
    }, {"id": "C", "markdown": "Amazon S3 Glacier"}, {"id": "D", "markdown": "AWS Snowball"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nThe AWS Snowball service uses physical storage devices to transfer large amounts of data between Amazon Simple Storage Service (Amazon S3) and your onsite data storage location at faster-than-internet speeds. By working with AWS Snowball, you can save time and money. Snowball provides powerful interfaces that you can use to create jobs, track data, and track the status of your jobs through to completion.\n\nSnowball devices are physically rugged devices that are protected by the AWS Key Management Service (AWS KMS). They secure and protect your data in transit. \n\nhttps://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html\n\n\n\tOption A. is incorrect because Amazon S3 is object storage most suitable when there is internet connectivity, in this scenario there is none.\n\tOption B. is incorrect because Amazon EBS provide block level storage volumes suitable for operating systems, database instances and applications. In order for the research team to store data to detached EBS volumes (not attached to EC2 instances), they would need internet connectivity. In the scenario, remote location does not have connectivity.\n\tOption C. is incorrect because is object storage optimized for infrequent access nor usage, it would require the researchers in the scenario to be online in order to upload the data. The solution ought to be accessible offline.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following AWS services use serverless technology. Choose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["A", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "DynamoDB"}, {"id": "B", "markdown": "EC2"}, {
        "id": "C",
        "markdown": "Simple Storage Service"
    }, {"id": "D", "markdown": "AWS Autoscaling"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A and C\n\nThe Simple Storage service and DynamoDB are services where you don’t need to manage the underlying infrastructure.\n\n\n\tFor more information on AWS S3 and DynamoDB, please refer to the below URL:\n\t\n\t\thttps://aws.amazon.com/serverless/\n\t\thttps://aws.amazon.com/s3/\n\t\thttps://aws.amazon.com/dynamodb/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following disaster recovery deployment mechanisms that has the highest downtime",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Pilot light"}, {"id": "B", "markdown": "Warm standby"}, {
        "id": "C",
        "markdown": "Multi Site"
    }, {"id": "D", "markdown": "Backup and Restore"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe below snapshot from the AWS Documentation shows the spectrum of the Disaster recovery methods. If you go to the further end of the spectrum you have the least time for downtime for the users.\n\n\n\n\n\n\t In most traditional environments, data is backed up to tape and sent off-site regularly. If you use this method, it can take a long time to restore your system in the event of a disruption or disaster.  \n\t\n\t\thttps://d1.awsstatic.com/whitepapers/aws-disaster-recovery.pdf\n\t\n\t\n\n\nFor more information on Disaster recovery techniques, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-whitepaper-use-aws-for-disaster-recovery/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following services allows you to analyze EC2 Instances against pre-defined security templates to check for vulnerabilities",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Trusted Advisor"}, {"id": "B", "markdown": "AWS Inspector"}, {
        "id": "C",
        "markdown": "AWS WAF"
    }, {"id": "D", "markdown": "AWS Shield"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS Documentation mentions the following\n\nAmazon Inspector enables you to analyze the behavior of your AWS resources and helps you to identify potential security issues. Using Amazon Inspector, you can define a collection of AWS resources that you want to include in an assessment target. You can then create an assessment template and launch a security assessment run of this target.\n\nFor more information on AWS Inspector, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following storage mechanisms can be used to store messages effectively?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Glacier"}, {"id": "B", "markdown": "Amazon EBS Volumes"}, {
        "id": "C",
        "markdown": "Amazon EBS Snapshots"
    }, {"id": "D", "markdown": "Amazon SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – D\n\nThe AWS Documentation mentions the following on AWS SQS\n\nAmazon Simple Queue Service (Amazon SQS) offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components\n\nFor more information on AWS SQS, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/Welcome.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are exploring which AWS service will help you in the processing of a large number of data sets. Choose the correct answer from the given list.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EMR"}, {"id": "B", "markdown": "S3"}, {
        "id": "C",
        "markdown": "Glacier"
    }, {"id": "D", "markdown": "Storage gateway"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – A\n\nThe AWS Documentation mentions the following\n\nAmazon EMR helps you analyze and process vast amounts of data by distributing the computational work across a cluster of virtual servers running in the AWS Cloud. The cluster is managed using an open-source framework called Hadoop. Amazon EMR lets you focus on crunching or analyzing your data without having to worry about the time-consuming setup, management, and tuning of Hadoop clusters or the compute capacity they rely on.\n\n\n\tFor more information on AWS EMR, please refer to the below URL:\n\t\n\t\thttp://docs.amazonaws.cn/en_us/aws/latest/userguide/emr.html\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In a fully managed service such as Amazon Aurora, what are the implications of the Shared Responsibility Model?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Amazon is responsible for only the physical infrastructure on which the user’s data resides."
    }, {
        "id": "B",
        "markdown": "Amazon is responsible for the EC2 instances, the operating system updates, patching of software and its maintenance"
    }, {
        "id": "C",
        "markdown": "The user is responsible for the operating system updates, patching of software and its maintenance."
    }, {
        "id": "D",
        "markdown": "The user is responsible for the security of the EC2 instances on which the relational database resides."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nIn fully managed service such as Amazon Aurora, the user does not have access to the backend EC2 instances where the relational database resides. Backups, software updates and patches are administered by Amazon.\n\nhttps://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html\n\n\n\tOption A. is INCORRECT because the service in the scenario is a fully managed service, so this slightly skews the Shared Responsibility Model\n\tOption C. is INCORRECT because in a fully managed service such as Amazon Aurora, the user does not have access to the EC2 instances where the database resides.\n\tOption D. is INCORRECT because in a fully managed service such as Amazon Aurora, the user does not have access to the EC2 instances where the database resides therefore is not responsible for their security.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are planning to serve a web application on the AWS Platform by using EC2 Instances. Which of the below principles would you adopt to ensure that even if some of the EC2 Instances crashes , you still have a working application",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Using a scalable system"}, {
        "id": "B",
        "markdown": "Using an elastic system"
    }, {"id": "C", "markdown": "Using a regional system"}, {"id": "D", "markdown": "Using a fault tolerant system"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - D\n\nA fault tolerant system is one that ensures that the entire system works as expected even there are issues.\n\nFor more information on designing fault tolerant applications in AWS, please refer to the below URL:\n\nhttps://d1.awsstatic.com/whitepapers/aws-building-fault-tolerant-applications.pdf?did=wp_card&trk=wp_card\n\nhttps://aws.amazon.com/premiumsupport/knowledge-center/autoscaling-fault-tolerance-load-balancer/\n\nhttps://aws.amazon.com/whitepapers/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing options would entice a company to use AWS over an on-premises data\ncenter? Choose 2 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Having access to Free and Unlimited Storage"}, {
        "id": "B",
        "markdown": "Having access to Unlimited Physical servers"
    }, {"id": "C", "markdown": "Having a highly available infrastructure"}, {
        "id": "D",
        "markdown": "Ability to use resources on demand"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- C and D\n\nThe\nentire advantage of the AWS Cloud or any cloud system is the ability to have a\nhighly available infrastructure and to use resources on demand\n\nFor\nmore information on advantages on using AWS, please refer to the below URL:\n\nhttps://aws.amazon.com/application-hosting/benefits/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In serverless services such as AWS Lambda, what are the implications of the Shared Responsibility Model?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Amazon has overall responsibility for the infrastructure, including IAM roles and identities that can invoke functions."
    }, {
        "id": "B",
        "markdown": "The user is responsible for the security and access to the instances that handle the compute capacity."
    }, {
        "id": "C",
        "markdown": "Amazon is responsible for any malicious code written in the IDE and can terminate any rouge activity"
    }, {
        "id": "D",
        "markdown": "The user is responsible for IAM roles and identities that can invoke the AWS Lambda functions"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nIn serverless services such as AWS Lambda, Amazon adopts the responsibility of running all the compute, network and storage of the integrated development environment. The user is responsible for the code itself and identity access management.\n\nhttps://aws.amazon.com/lambda/\n\n\n\tOption A. is INCORRECT because in the Shared Responsibility Model, Amazon is not responsible for identity access management (IAM).\n\tOption B. is INCORRECT because in serverless services, the user is not responsible for the security and access to the underlying instances that provide compute capacity\n\tOption C. is INCORRECT because in serverless services such as AWS Lambda, Amazon is not responsible for code written in the IDE.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have 2 accounts in your AWS account. One for the Dev and the other for QA. All are part of consolidated billing. The master account has purchased 3 reserved instances. The Dev department is currently using 2 reserved instances. The QA team is planning on using 3 EC2 instance launch types. What is the pricing tier of the instances that can be used by the QA Team?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "No Reserved and 3 on-demand"}, {
        "id": "B",
        "markdown": "One Reserved and 2 on-demand"
    }, {"id": "C", "markdown": "Two Reserved and 1 on-demand"}, {
        "id": "D",
        "markdown": "Three Reserved and no on-demand"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - B\n\nSince all are a part of consolidating billing, the pricing of reserved instances can be shared by All. And since 2 are already used by the Dev team , another one can be used by the QA team. The rest of the instances can be on-demand instances.\n\nFor more information on AWS Reserved instances, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/ec2/pricing/reserved-instances/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following are best practices when designing cloud based systems? Choose 2 answers from the options below",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Build Tightly-coupled components"}, {
        "id": "B",
        "markdown": "Build loosely-coupled components"
    }, {"id": "C", "markdown": "Assume everything will fail"}, {
        "id": "D",
        "markdown": "Use as many services as possible"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and C\n\nAlways build components which are loosely coupled. This is so that even if one component does fail, the entire system does not fail.\n\nAlso if you build with the assumption that everything will fail, then you will ensure that the right measures are taken to build a highly available and fault tolerant system.\n\nFor more information on a well architected framework, please refer to the below URL:\n\n\n\thttps://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which statement about the Shared Responsibility Model is accurate?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "The user is responsible for AWS physical infrastructure when moving data from their on-premise data center using AWS Snowball"
    }, {"id": "B", "markdown": "The hypervisor and its security is the users’ responsibility"}, {
        "id": "C",
        "markdown": "Amazon is responsible for running operating system updates, patching of application software and its maintenance."
    }, {
        "id": "D",
        "markdown": "Compliance with industry bodies and regulatory authorities is the users’ responsibility"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nWhen moving large amounts of data AWS Snowball allows users to book the service and have the appliance shipped out to their location. A local (offline) transfer data onto the storage appliance owned by Amazon is then effected. During the time the appliance is in the users’ possession, they are responsible for it.\n\nhttps://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html\n\n\n\tOption B. is INCORRECT because the hypervisor controls the virtual machines on AWS infrastructure and is not the responsibility of the user.\n\tOption C. is INCORRECT because Amazon is not responsible for running operating system updates, patching of application software and its maintenance. This is the responsibility of the user.\n\tOption D. is INCORRECT because compliance with industry bodies and regulatory authorities is the responsibility of Amazon.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing is the amount of storage that can be stored in the Simple Storage\nservice?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "1 TB"}, {"id": "B", "markdown": "5 TB"}, {
        "id": "C",
        "markdown": "1 PB"
    }, {"id": "D", "markdown": "Virtually unlimited storage"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– D\n\nThe\nAWS Documentation mentions the following\n\nAmazon\nS3 provides a simple web service interface that you can use to store and\nretrieve any amount of data, at any time, from anywhere on the web\n\nFor\nmore information on AWS S3, please refer to the below URL:\n\nhttps://aws.amazon.com/s3/faqs/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which services allow\nthe customer to retain full administrative privileges of the underlying virtual\ninfrastructure?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EC2"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "Amazon Lambda"
    }, {"id": "D", "markdown": "Amazon DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A\n\nAll\nof the other services are all managed by AWS as serverless components. Only you\nhave complete control over the EC2 serviceFor\nmore information on AWS EC2, please refer to the below URL:\n\nhttps://aws.amazon.com/ec2/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A website for an international sports governing body would like to serve its content to viewers from different parts of the world in their vernacular language. Which is the most suitable service that will allow different language versions of the same website to be served, according to where in the world the browser is viewing from.",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon CloudFront"}, {
        "id": "B",
        "markdown": "Content Delivery Network (CDN)"
    }, {"id": "C", "markdown": "Amazon Lightsail"}, {"id": "D", "markdown": "Amazon Route 53"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nIn Amazon Route 53, the geolocation routing policy allows for different resources to serve content based on the origin of the request. This in turn makes it possible in the scenario for different versions of the website to be served.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo\n\n\n\tOption A. is INCORRECT because Amazon CloudFront will not be able to meet the requirement without the use of Lambda@Edge functions. Therefore, this option is not the most suitable.\n\n\t\n\t\thttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-content-based-routing-examples\n\t\n\t\n\tOption B. is INCORRECT because content delivery network allows for the distribution of content around the world, using AWS infrastructure, edge locations, to cache and serve content closest to the requester. On its own, the Amazon CloudFront service will not be suitable in meeting the requirements of the scenario.\n\tOption C. is INCORRECT because Amazon Lightsail will primarily allow for the development, deploying and hosting of websites and web applications. The service will not meet the requirements of the scenario.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a\nmission-critical application which must be globally available at all times. If\nthis is the case, which of the below deployment mechanisms would you employ",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Deployment to multiple edge locations"}, {
        "id": "B",
        "markdown": "Deployment to multiple Availability Zones"
    }, {"id": "C", "markdown": "Deployment to multiple Data Centers"}, {
        "id": "D",
        "markdown": "Deployment to multiple Regions"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– D\n\nRegions\nrepresent different geographic locations and is bets to host your application\nacross multiple regions for disaster recovery\n\nFor\nmore information on AWS Regions, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following\ncan be used to protect against Ddos attacks. Choose 2 answers from the options\ngiven below",
    "prompt": "",
    "correctAnswerId": ["C", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EC2"}, {"id": "B", "markdown": "AWS ELB"}, {
        "id": "C",
        "markdown": "AWS Shield"
    }, {"id": "D", "markdown": "AWS Shield Advanced"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C and D\n\nThe\nAWS Documentation mentions the following\n\nAWS\nShield - All AWS customers benefit from the automatic protections of AWS Shield\nStandard, at no additional charge. AWS Shield Standard defends against most\ncommon, frequently occurring network and transport layer DDoS attacks that\ntarget your web site or applications\n\nAWS\nShield Advanced - For higher levels of protection against attacks targeting\nyour web applications running on Amazon EC2, Elastic Load Balancing (ELB),\nCloudFront, and Route 53 resources, you can subscribe to AWS Shield\nAdvanced. AWS Shield Advanced provides expanded DDoS attack protection for\nthese resources.\n\nFor\nmore information on AWS Shield, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing is a serverless compute offering from AWS?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EC2"}, {"id": "B", "markdown": "AWS Lambda"}, {
        "id": "C",
        "markdown": "AWS SNS"
    }, {"id": "D", "markdown": "AWS SQS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nAWS Documentation mentions the following\n\nAWS\nLambda is a compute service that lets you run code without provisioning or\nmanaging servers. AWS Lambda executes your code only when needed and scales\nautomatically, from a few requests per day to thousands per second\n\nFor\nmore information on AWS Lambda, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/lambda/latest/dg/welcome.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following helps you set up a logically isolated section of your AWS cloud ?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Subnets"}, {"id": "B", "markdown": "AWS VPC"}, {
        "id": "C",
        "markdown": "AWS Regions"
    }, {"id": "D", "markdown": "AWS Availability Zones"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS Documentation mentions the following\n\nAmazon Virtual Private Cloud (Amazon VPC) enables you to launch AWS resources into a virtual network that you've defined. This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.\n\nFor more information on AWS VPC, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Introduction.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the most appropriate routing policy to implement in Amazon Route 53, when a web application co-located in two geographically distinct locations is experiencing degraded service in one of the locations.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Geolocation routing policy"}, {
        "id": "B",
        "markdown": "Weighted routing policy"
    }, {"id": "C", "markdown": "Failover routing policy"}, {"id": "D", "markdown": "Latency-based routing policy"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nFailover routing policy is the most appropriate routing policy to implement because it will make it possible for traffic to be routed to the resource in good health and not to the one experiencing poor response times. Several instances can be configured.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-failover\n\n \n\n\n\tOption A. is INCORRECT because Geolocation routing policy is particularly necessary when traffic to the hosted resources is meant to be routed according to originating source address.\n\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo\n\t\n\t\n\tOption B. is INCORRECT because weighted routing policy can distribute request traffic amongst resources but in this scenario it would be undesirable and cumbersome to manually set weights (preferences) each time any resource is unhealthy. This will not be the most appropriate routing policy.\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted\n\t\n\t\n\tOption D. is INCORRECT because latency-based routing policy allows for queries to be served by the resources that have the smallest response times to the user’s location. The routing policy does not give the required functionality in the scenario.\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-latency\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the concept of an AWS region?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "It is a collection of Edge locations"}, {
        "id": "B",
        "markdown": "It is a collection of Compute capacity"
    }, {"id": "C", "markdown": "It is a geographical area divided into Availability Zones"}, {
        "id": "D",
        "markdown": "It is the same as an Availability zone"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nA region is a geographical area divided into Availability Zones. Each region contains at least two Availability Zones.\n\nFor more information on AWS regions and availability zones, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In AWS, which security aspects are the customer’s responsibility? Choose 4 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "C", "D", "F"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Security Group and ACL (Access Control List) settings"}, {
        "id": "B",
        "markdown": "Decommissioning storage devices"
    }, {"id": "C", "markdown": "Patch management on the EC2 instance’s operating system"}, {
        "id": "D",
        "markdown": "Life-cycle management of IAM credentials"
    }, {"id": "E", "markdown": "Controlling physical access to compute resources"}, {
        "id": "F",
        "markdown": "Encryption of EBS (Elastic Block Storage) volumes"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A, C, D and F.\n\nBelow is the snapshot of the AWS Shared Responsibility Model\n\n\n\n \n\nFor more information on the Shared Responsibility Model, please refer to the below URL:\n\n \n\n\n\thttps://aws.amazon.com/compliance/shared-responsibility-model/\n\n\n \n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing can be used to manage identities in AWS.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Config"}, {"id": "B", "markdown": "AWS IAM"}, {
        "id": "C",
        "markdown": "AWS Trusted Advisor"
    }, {"id": "D", "markdown": "AWS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nAWS Documentation mentions the following\n\nAWS\nIdentity and Access Management (IAM) is a web service that helps you securely\ncontrol access to AWS resources. You use IAM to control who is authenticated\n(signed in) and authorized (has permissions) to use resources.\n\nFor\nmore information on AWS IAM, please refer to the below URL:\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You are working on an e-commerce web application, which is running on an EC2 instance and is experiencing a bad performance in browsing and searching use cases. When heavy load use-cases are running at the same time. The application monitors highlight a bottleneck in the web tier.\n\nYou decide to re-engineer the application code by decoupling the web tier from the orders heavy workloads.  What AWS service can support the application change?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Auto Scaling"}, {
        "id": "B",
        "markdown": "AWS Elastic Load Balancing"
    }, {"id": "C", "markdown": "Amazon SQS"}, {"id": "D", "markdown": "Amazon Kinesis Streams"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: C\n\n\n\tOption A is INCORRECT because it is not a service for decoupling use-case. AWS Auto Scaling adjusts the capacity to maintain performance leaving unchanged the application design.\n\tOption B is INCORRECT because AWS ELB is a service to distribute the workload across EC2 instance and not a service to support application refactoring or re-engineering.\n\tOption C is CORRECT because Amazon SQS implements messaging that is a typical integration pattern to decouple application components. AWS documentation mention it “Amazon SQS offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components. “\n\tOption D is INCORRECT because it is a streaming service not suitable for the scenario.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/sqs/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An online streaming company is prohibited from broadcasting its content in certain countries and regions in the world. Which Amazon Route 53 routing policy would be most suitable in guaranteeing their compliance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Geoproximity"}, {"id": "B", "markdown": "Geolocation"}, {
        "id": "C",
        "markdown": "Multi-value answer"
    }, {"id": "D", "markdown": "Failover"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon Route 53 geolocation routing policy makes it possible for different types of content to be served depending on the geographical location of where the browser is. In this use case, the streaming company is able to serve a restriction message if Amazon Route 53 detects origin request to be from prohibited country.\n\nhttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo\n\n\n\tOption A. is INCORRECT because geoproximity allows for DNS traffic to be routed in accordance to a bias, or preset preference rule. This allows the user to be served with content from resources closest to their geographical location. This routing manipulates DNS traffic flow only. This routing policy is not the most suitable\n\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geoproximity\n\t\n\t\n\tOption C. is INCORRECT because multi-value answer primarily addresses the quality of service and resources that are queried in DNS requests. This routing policy is not the most suitable.\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue\n\t\n\t\n\tOption D. is INCORRECT because failover allows for the automatic switch to healthy DNS resources in the event that another becomes unavailable. It will not allow for the preferential serving of content based on the geographical location. This routing policy is not the most suitable.\n\t\n\t\thttps://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "When working on the costing for on-demand EC2 instances , which of the following are attributes which determine the costing of the EC2 Instance. Choose 3 answers from the options given below",
    "prompt": "",
    "correctAnswerId": ["A", "B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Instance Type"}, {"id": "B", "markdown": "AMI Type"}, {
        "id": "C",
        "markdown": "Region"
    }, {"id": "D", "markdown": "Edge location"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer- A,B and C\n\nIf you see the below snapshot from the EC2 on-demand pricing page, you can see the different components that make up the pricing\n\n\n\n \n\n \n\nFor more information on AWS Ec2 On-demand pricing, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/ec2/pricing/on-demand/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to utilize aws storage. For them low storage cost is paramount, the data is rarely retrieved, and data retrieval times of several hours are acceptable for them. What is the best storage option to use?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Glacier"}, {
        "id": "B",
        "markdown": "AWS S3 Reduced Redundancy Storage"
    }, {"id": "C", "markdown": "EBS backed storage connected to EC2"}, {"id": "D", "markdown": "AWS CloudFront"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nAmazon Glacier is a storage service optimized for infrequently used data, or \"cold data.\" The service provides durable and extremely low-cost storage with security features for data archiving and backup. With Amazon Glacier, you can store your data cost effectively for months, years, or even decades. \n\nFor more information on AWS Glacier, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/documentation/glacier/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What are characteristics of Amazon S3?\nChoose 2 answers from the options given below.",
    "prompt": "",
    "correctAnswerId": ["B", "D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "S3 allows you to store objects of virtually unlimited size."}, {
        "id": "B",
        "markdown": "S3 allows you to store virtually unlimited amounts of data"
    }, {"id": "C", "markdown": "S3 should be used to host a relational database."}, {
        "id": "D",
        "markdown": "Objects are directly accessible via a URL."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B and D\n\nEach object does have a limitation in S3, but you can store virtually unlimited amounts of data. Also each object gets a directly accessible URL\n\nFor more information on AWS S3, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/s3/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which AWS service provides a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS RDS"}, {"id": "B", "markdown": "DynamoDB"}, {
        "id": "C",
        "markdown": "Oracle RDS"
    }, {"id": "D", "markdown": "Elastic Map Reduce"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer: - B\n\nDynamoDB is a fully managed NoSQL offering provided by AWS. It is now available in most regions for users to consume. The link provides the full details on the product\n\nFor more information on AWS DynamoDB, please refer to the below URL:\n\n\n\thttp://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In the AWS Billing and Management service, which tool will allow the user to graphically visualize billing and usage over time, particularly monthly running costs.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Bills"}, {"id": "B", "markdown": "AWS Cost Explorer"}, {
        "id": "C",
        "markdown": "AWS Reports"
    }, {"id": "D", "markdown": "AWS Budgets"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAWS Cost Explorer allows the user to generate a graphical representation of their billing and usage over time.\n\nhttps://aws.amazon.com/aws-cost-management/aws-cost-explorer/\n\n\n\tOption A. is INCORRECT because AWS Bills will list the historical costs that would have been incurred over the past month with granular options. The tool will not give the graphical visualization as specified in the question.\n\tOption C. is INCORRECT because AWS Reports will give a composite overview of costs and usage. The tool gives a granular perspective of usage and billing but without a graphical output.\n\tOption D. is INCORRECT because AWS Budgets will give the user the status of user-set budgets and provide forecasts of estimated costs. The tool will not give a graphical representation of the data.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is deploying a three-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower Overall CPU resources for the web tier?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon EBS volume"}, {"id": "B", "markdown": "Amazon S3"}, {
        "id": "C",
        "markdown": "Amazon EC2 instance store"
    }, {"id": "D", "markdown": "Amazon RDS instance"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nAmazon S3 is the default storage service that should be considered for companies. If provides durable storage for all static content.\n\nFor more information on AWS S3, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/s3/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In the AWS Billing and Management service, which tool can provide usage-based forecasts of estimated billing costs and usage for the coming months?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Cost Explorer"}, {"id": "B", "markdown": "AWS Bills"}, {
        "id": "C",
        "markdown": "AWS Reports"
    }, {"id": "D", "markdown": "Cost & Usage Reports"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Cost Explorer can create user-defined, custom forecasts for future  usage patterns.\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html\n\nhttps://aws.amazon.com/about-aws/whats-new/2019/07/usage-based-forecasting-in-aws-cost-explorer/\n\n\n\tOption B. is INCORRECT because AWS Bills will list the historical costs that would have been incurred over the past month with granular options. The tool will not give the usage-based forecasts as specified in the question.\n\tOption C. is INCORRECT because AWS Reports will give a composite overview of costs and usage. The tool gives a granular perspective of usage and billing but without usage-based forecasts.\n\tOption D. is INCORRECT because AWS Reports and Cost & Usage Reports are the same tool. Option C. explanation outlines why it is inaccurate as a response to the question.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the below AWS services allows you to increase the number of resources based on the demand of the application or users.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS EC2"}, {"id": "B", "markdown": "AWS Autoscaling"}, {
        "id": "C",
        "markdown": "AWS ELB"
    }, {"id": "D", "markdown": "AWS Inspector"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B\n\nThe AWS Documentation mentions the following\n\nAWS Auto Scaling enables you to configure automatic scaling for the scalable AWS resources for your application in a matter of minutes. AWS Auto Scaling uses the Auto Scaling and Application Auto Scaling services to configure scaling policies for your scalable AWS resources.\n\nFor more information on AWS Autoscaling, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following AWS managed database service provides processing power that is up to 5X faster than a traditional MySQL database.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "MariaDB"}, {"id": "B", "markdown": "Aurora"}, {
        "id": "C",
        "markdown": "PostgreSQL"
    }, {"id": "D", "markdown": "DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS Documentation mentions the following\n\nAmazon Aurora (Aurora) is a fully managed, MySQL- and PostgreSQL-compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications.\n\nFor more information on AWS Aurora, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.Overview.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which statements regarding VPC Peering is accurate? Select TWO.",
    "prompt": "",
    "correctAnswerId": ["A", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Two VPCs in different AWS Regions and under separate AWS Accounts can share traffic between each other."
    }, {"id": "B", "markdown": "In order for VPC Peering to work each VPC should have a public subnet."}, {
        "id": "C",
        "markdown": "In VPC Peering, it is possible for traffic from one VPC to traverse through a transit VPC in order to reach a third VPC."
    }, {
        "id": "D",
        "markdown": "Traffic between VPC peers in different AWS Regions is not encrypted by default."
    }, {
        "id": "E",
        "markdown": "VPC Peering can be used to replicate data to geographically distinct locations for fault-tolerance, disaster recovery and redundancy"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, E\n\nVPC Peering can be established between VPCs in different AWS Regions and in separate AWS Accounts. The logical networks still use the same common AWS backbone network infrastructure to communicate. By utilizing this infrastructure, VPC Peering makes it possible to securely store mission-critical data to geographically distinct locations for fault-tolerance, disaster recovery and redundancy.\n\nhttps://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html\n\n\n\tOption B. is INCORRECT because VPC Peering can still work without the use of public IP addresses. Private IP address subnets can be routed between peers as long as their respective CIDR block ranges do not overlap.\n\tOption C. is INCORRECT because it is not permissible on the AWS cloud to route traffic of one VPC peer through a transitive peer to get to a third VPC.\n\t\n\t\thttps://docs.aws.amazon.com/vpc/latest/peering/invalid-peering-configurations.html\n\t\n\t\n\tOption D. is INCORRECT because traffic between VPC peers in different AWS Regions is indeed encrypted by default\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following services helps in governance,\ncompliance, and risk auditing in AWS.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Config"}, {"id": "B", "markdown": "AWS Cloudtrail"}, {
        "id": "C",
        "markdown": "AWS Cloudwatch"
    }, {"id": "D", "markdown": "AWS SNS"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- B\n\nThe\nAWS Documentation mentions the following\n\nAWS\nCloudTrail is a service that enables governance, compliance, operational\nauditing, and risk auditing of your AWS account. With CloudTrail, you can log,\ncontinuously monitor, and retain account activity related to actions across\nyour AWS infrastructure. CloudTrail provides event history of your AWS account\nactivity, including actions taken through the AWS Management Console, AWS SDKs,\ncommand line tools, and other AWS services. This event history simplifies\nsecurity analysis, resource change tracking, and troubleshooting.\n\nFor\nmore information on AWS Cloudtrail, please refer to the below URL:\n\nhttps://aws.amazon.com/cloudtrail/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "When using On-Demand instances in AWS, which of the following is a false statement when it comes to the costing for the Instance.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "You pay no upfront costs for the instance"}, {
        "id": "B",
        "markdown": "You are charged per second based on the hourly rate"
    }, {"id": "C", "markdown": "You have to pay the termination fees if you terminate the instance"}, {
        "id": "D",
        "markdown": "You pay for as much as you use."
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – C\n\nYou don’t need to pay any termination fees when it comes to Ec2 Instances\n\nFor more information on AWS Ec2 On-demand pricing, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/ec2/pricing/on-demand/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following statements about the Total Cost of Ownership (TCO) calculator is accurate.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "The TCO calculator will generate an estimated usage report and anticipated billing when using on-premise infrastructure"
    }, {
        "id": "B",
        "markdown": "The TCO calculator will make suggestions and recommendations on appropriate resource types based on operational best-practices."
    }, {
        "id": "C",
        "markdown": "The TCO calculator will make suggestions and recommendations on appropriate resource types based on the user’s input values and settings."
    }, {
        "id": "D",
        "markdown": "The TCO calculator can generate a detailed report on redundant resources on on-premise infrastructure and recommend operationally efficient best-practices."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – C\n\nThe Total Cost of Ownership (TCO) calculator generates the potential cost savings when running resources on AWS infrastructure rather than on-premises. The calculator uses the user input values and parameters to generate the estimations.\n\nhttps://aws.amazon.com/tco-calculator/\n\n\n\tOption A. is INCORRECT because the TCO calculator does not generate estimated usage report.\n\tOption B. is INCORRECT because the TCO calculator does not generate estimations, based on operational best-practices only, but on the users’ input parameters and values.\n\tOption D. is INCORRECT because the TCO calculator does not generate a report on on-premise infrastructure and recommend operationally efficient best-practices\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following statements are FALSE when it comes to AWS DataSync? (Choose TWO)",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "A fully managed data transfer service with built-in retry mechanism"
    }, {"id": "B", "markdown": "Can work only over AWS Direct:Connect"}, {
        "id": "C",
        "markdown": "It is an agentless data transfer service"
    }, {
        "id": "D",
        "markdown": "Can copy data between NFS servers, SMB file shares, Amazon S3 buckets, and Amazon EFS file systems."
    }, {"id": "E", "markdown": "It is integrated with AWS CloudWatch"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: B and C\n\nB and C are FALSE, all the others are TRUE  according to the AWS Documentation (see reference below)\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/datasync/\n\thttps://aws.amazon.com/datasync/faq/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to move 100 TB data warehouse to the AWS cloud. Which of the following is an ideal service which can be used to move this amount of data to the AWS Cloud.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Snowball"}, {
        "id": "B",
        "markdown": "Amazon Direct Connect"
    }, {"id": "C", "markdown": "Amazon S3 MultiPart Upload"}, {"id": "D", "markdown": "Amazon S3 Connector"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – A\n\nThe AWS Documentation mentions the following\n\nAWS Snowball is a service that accelerates transferring large amounts of data into and out of AWS using physical storage appliances, bypassing the Internet. Each AWS Snowball appliance type can transport data at faster-than internet speeds. This transport is done by shipping the data in the appliances through a regional carrier. The appliances are rugged shipping containers, complete with E Ink shipping labels.\n\nFor more information on AWS Snowball, please refer to the below URL:\n\n\n\thttps://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the key difference between an availability zone and an edge location?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "An availability zone is a grouping of AWS resources in a specific region; an edge location is a specific resource within the AWS region"
    }, {
        "id": "B",
        "markdown": "An availability zone is an isolated location within an AWS region, whereas an edge location will deliver cached content to the closest location to reduce latency"
    }, {"id": "C", "markdown": "Edge locations are used as control stations for AWS resources"}, {
        "id": "D",
        "markdown": "None of the above"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer – B\n\nIn AWS , there are regions with each region separated in a separate geographic area. Each region has multiple, isolated locations known as Availability Zones. An availability zone is used to host resources in a specific region.\n\nFor more information on Regions and availability zone, please visit the URL:\n\n\n\thttp://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following security features is associated with a Subnet in a VPC to protect against Incoming traffic requests.",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Inspector"}, {"id": "B", "markdown": "Subnet Groups"}, {
        "id": "C",
        "markdown": "Security Groups"
    }, {"id": "D", "markdown": "Network ACL"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – D\n\nThe AWS Documentation mentions the following\n\nA network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPC. \n\nFor more information on Network ACL’s, please visit the URL:\n\n\n\thttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In AWS billing what option can be used to ensure costs can be reduced if you have multiple accounts",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Combined billing"}, {
        "id": "B",
        "markdown": "Consolidated billing"
    }, {"id": "C", "markdown": "Costs are automatically reduced for multiple accounts by AWS."}, {
        "id": "D",
        "markdown": "It is not possible to reduce costs with multiple accounts"
    }],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nYou can use the Consolidated Billing feature to consolidate payment for multiple Amazon Web Services (AWS) accounts or multiple Amazon International Services Pvt. Ltd (AISPL) accounts within your organization by designating one of them to be the payer account. With Consolidated Billing, you can see a combined view of AWS charges incurred by all accounts, as well as get a cost report for each individual account associated with your payer account\n\nFor more information on consolidated billing, please visit the URL:\n\n\n\thttp://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a Web application hosted in an EC2\nInstance that needs to send notifications based on events. Which of the below\nservices can assist in sending notifications",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS SES"}, {"id": "B", "markdown": "AWS SNS"}, {
        "id": "C",
        "markdown": "AWS SQS"
    }, {"id": "D", "markdown": "AWS EC2"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B\n\nThe\nAWS Documentation mentions the following\n\nAmazon\nSimple Notification Service (Amazon SNS) is a web service that enables\napplications, end-users, and devices to instantly send and receive\nnotifications from the cloud.\n\nFor\nmore information on AWS SNS, please visit the URL:\n\nhttps://aws.amazon.com/documentation/sns/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following options is TRUE for AWS Database Migration Service (AWS DMS) ?",
    "prompt": "",
    "correctAnswerId": ["E"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS DMS can migrate databases from on-premise to AWS"}, {
        "id": "B",
        "markdown": "AWS DMS can migrate databases from AWS to on-premise"
    }, {"id": "C", "markdown": "AWS DMS can migrate databases from EC2 to Amazon RDS"}, {
        "id": "D",
        "markdown": "AWS DMS can have Amazon Redshift and Amazon DynamoDB as target databases."
    }, {"id": "E", "markdown": "All the above"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer: E\n\nAll the options are CORRECT.\n\nOptions are clearly described in the AWS DMS documentation at the link below.\n\n\n\tOption A is TRUE and is the “most common” way to use AWS DMS.\n\tOption B is TRUE and can be used to create a copy (or migrate) a database from AWS to on-premise data center.\n\tOption C is TRUE and can be used to migrate a IaaS solution (e.g. generated from a lift-and-shift wave) to a managed service like Amazon RDS.\n\tOption D is TRUE according to AWS documentation.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/dms/\n\thttps://aws.amazon.com/dms/faqs/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A user would like to be notified when their usage bill on any AWS resource surpasses a specified amount. Which combination of AWS services can be used to achieve this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Budgets and Amazon Simple Email Service (SES)"}, {
        "id": "B",
        "markdown": "AWS Lambda and AWS CloudTrial"
    }, {"id": "C", "markdown": "AWS Cost Explorer and Amazon Simple Notification Service (SNS)"}, {
        "id": "D",
        "markdown": "AWS Billing & Cost Management and Amazon CloudWatch"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.\nYou can also use AWS Budgets to set reservation utilization or coverage targets and receive alerts when your utilization drops below the threshold you define. Reservation alerts are supported for Amazon EC2, Amazon RDS, Amazon Redshift, Amazon ElastiCache, and Amazon Elasticsearch reservations.\n\nhttps://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/\n\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html\n\nOption B. is incorrect because using AWS Lambda function would be longer and tedious method of achieving the objective, furthermore, AWS CloudTrail is not an applicable service to utilise in the given scenario.\n\n\n\tOption C. is incorrect because AWS Cost Explorer will give the user a graphical representation of  their usage without the capability of triggering notifications itself. Amazon SNS will not get any notification triggers from AWS Cost Explorer.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following are benefits of the AWS's Relational Database Service (RDS)? Choose the 2 correct answers from the options below",
    "prompt": "",
    "correctAnswerId": ["A", "B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Automated patches and backups"}, {
        "id": "B",
        "markdown": "DB owner can resize the capacity accordingly"
    }, {"id": "C", "markdown": "It allows you to store unstructured data"}, {
        "id": "D",
        "markdown": "It allows you to store NoSQL data"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer - A and B\n\nThe AWS Documentation mentions the following\n\nAmazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.\n\nFor more information on AWS RDS, please visit the URL:\n\n\n\thttps://aws.amazon.com/rds/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "In Identity Access Management (IAM), what is meant by Identity Federation? Select TWO most suitable statements.",
    "prompt": "",
    "correctAnswerId": ["A", "E"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "It is possible for users to log into the AWS environment using their Facebook, Twitter or LinkedIn login credentials."
    }, {
        "id": "B",
        "markdown": "IAM activity logs can be obtained in AWS CloudTrail then uploaded onto Amazon Athena tables for querying."
    }, {
        "id": "C",
        "markdown": "A user with multiple AWS accounts and multiple log-in credentials can combine them into one set of login credentials for the multiple AWS accounts."
    }, {
        "id": "D",
        "markdown": "It is the temporary provision of access, using a temporary disposable set of credentials, to an untrusted user."
    }, {
        "id": "E",
        "markdown": "An administrator can configure identity federation so that users can access the AWS environment using their active directory credentials."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, E\n\nIAM Identity Federation allows access to the AWS environment using a central single sign-on (SSO) set of credentials from third-party or corporate active directory. Federation uses open standards such as SAML2.0 to transact identity information between identity provider (IdP) the respective applications.\n\nhttps://aws.amazon.com/identity/federation/\n\n\n\tOption B. is incorrect because the logic flow regarding AWS CloudTrail and Amazon Athena is accurate, but does not involve any identity federation.\n\tOption C. is incorrect because this scenario does not include any identity federation, though it is possible to create the same login credentials in each of the accounts administered by the user, it is not best-practice. \n\tOption D. is incorrect because this is not the function of IAM identity federation, instead it is the function of AWS Security Token Service (STS).\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company wants to create standard templates for\ndeployment of their Infrastructure. Which AWS service can be used in this\nregard? Please choose one option.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Simple Workflow Service"}, {
        "id": "B",
        "markdown": "AWS Elastic Beanstalk"
    }, {"id": "C", "markdown": "AWS CloudFormation"}, {"id": "D", "markdown": "AWS OpsWorks"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– C\n\nAWS\nCloudFormation gives developers and systems administrators an easy way to\ncreate and manage a collection of related AWS resources, provisioning and\nupdating them in an orderly and predictable fashion.\n\nFor\nmore information on Cloudformation, please visit the URL:\n\nhttps://aws.amazon.com/cloudformation/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You have a\ndistributed application that periodically processes large volumes of data\nacross multiple Amazon EC2 Instances. The application is designed to recover\ngracefully from Amazon EC2 instance failures. You are required to accomplish\nthis task in the most cost-effective way.Which of the following will meet\nyour requirements?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Spot Instances"}, {"id": "B", "markdown": "Reserved instances"}, {
        "id": "C",
        "markdown": "Dedicated instances"
    }, {"id": "D", "markdown": "On-Demand instances"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- A\n\nWhen\nyou think of cost effectiveness, you can either have to choose Spot or Reserved\ninstances. Now when you have a regular processing job, the best is to use spot\ninstances and since your application is designed recover gracefully from Amazon\nEC2 instance failures, then even if you lose the Spot instance , there is no\nissue because your application can recover.\n\nFor\nmore information on spot instances, please visit the URL: \n\nhttps://aws.amazon.com/ec2/spot/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "You want to create a stream processing solution to process and query real-time streaming data using a SQL-based solution. You are looking for the simplest approach available that AWS provides.\n\nWhat AWS service should you use?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Kinesis Data Streams"}, {
        "id": "B",
        "markdown": "Amazon Kinesis Data Analytics"
    }, {"id": "C", "markdown": "Amazon Kinesis Client Library"}, {
        "id": "D",
        "markdown": "Amazon Kinesis Data Firehose"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: B\n\n\n\tOption A is INCORRECT because Amazon Kinesis Data Streams is not an AWS service to build analytics application. It is an ingestion service that provides data streams to consumers (e.g. analytic applications).\n\n\nAWS documentation mentions “Amazon Kinesis Data Streams (KDS) is a massively scalable and durable real-time data streaming service…. The data collected is available in milliseconds to enable real-time analytics use cases such as real-time dashboards, real-time anomaly detection, dynamic pricing, and more”\n\n\n\tOption B is CORRECT because AWS documentation (FAQ section) says “If you want a fully managed solution and you want to use SQL to process the data from your data stream, you should use Kinesis Data Analytics”\n\tOption C is INCORRECT because despite Amazon Kinesis Client Library (KCL) is a service to process and query streaming data using SQL KCL is more complicated than AWS Kinesis Data Analytics.\n\n\nAWS documentation mentions “Kinesis Data Analytics uses the KCL to read data from streaming data sources as one part of your underlying application. The service abstracts this from you, as well as many of the more complex concepts associated with using the KCL, such as checkpointing”.\n\n\n\tOption D is INCORRECT because Amazon Kinesis Data Firehose is a service for loading data streams and not for creating SQL-based applications.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/kinesis/data-streams/\n\thttps://aws.amazon.com/kinesis/data-analytics/faqs/?nc=sn&loc=6 (explanation of option C)\n\thttps://aws.amazon.com/kinesis/data-firehose/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "What is the service provided by AWS that allows developers to easily deploy and manage applications on the cloud? Please choose an answer from the options below.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "CloudFormation"}, {"id": "B", "markdown": "Elastic Beanstalk"}, {
        "id": "C",
        "markdown": "Opswork"
    }, {"id": "D", "markdown": "Container service"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B\n\nAWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.\n\nFor more information on Elastic Beanstalk, please visit the URL:\n\n\n\thttps://aws.amazon.com/elasticbeanstalk/faqs/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company is deploying a new two-tier web application in AWS. The company wants to store their most frequently used data so that the response time for the application is improved. Which AWS service provides the solution for the company’s requirements?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "MySQL Installed on two Amazon EC2 Instances in a single Availability Zone"
    }, {"id": "B", "markdown": "Amazon RDS for MySQL with Multi-AZ"}, {
        "id": "C",
        "markdown": "Amazon ElastiCache"
    }, {"id": "D", "markdown": "Amazon DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer – C\n\nAmazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases\n\n\n\tFor more information on Elastic cache, please visit the link:\n\t\n\t\thttps://aws.amazon.com/elasticache/\n\t\n\t\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "If you wanted to take\na backup of an EBS Volume, what would you do?",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Store the EBS volume in S3"}, {
        "id": "B",
        "markdown": "Store the EBS volume in an RDS database"
    }, {"id": "C", "markdown": "Create an EBS snapshot"}, {"id": "D", "markdown": "Store the EBS volume in DynamoDB"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- C\n\nThe\nAWS Documentation mentions the following\n\nYou\ncan back up the data on your Amazon EBS volumes to Amazon S3 by taking\npoint-in-time snapshots.\n\nFor\nmore information on EBS Snapshots, please visit the link:\n\nhttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An organization wants to move a mission-critical application based on PostgreSQL to cloud and requires to minimize both the refactoring of database code and the operations to keep it running and healthy.\n\nWhat is the AWS service that the organization must choose to accomplish the goal?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Amazon Aurora"}, {
        "id": "B",
        "markdown": "Spin up a set of EC2 instances across multi-AZs and install the same PostgreSQL version used on-premises."
    }, {"id": "C", "markdown": "Amazon RDS for PostgreSQL"}, {
        "id": "D",
        "markdown": "Use a PostgreSQL Certified image from AWS Marketplace"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: A\n\n\n\tOption A is CORRECT because Aurora is a fully managed RDS service compatible with PostgreSQL and MySQL. Being fully managed (compared to other RDS options that are only managed) means that the operation is kept to the minimum. Fully compatibility with PostgreSQL accomplished the goal of minimizing the refactoring of the database code.\n\n\nAWS documentation clearly describes the above comments at https://aws.amazon.com/rds/aurora/ in the sections called “Fully Managed” and “Migration Support”.\n\n\n\tOption B is INCORRECT because a IaaS solution with EC2 does not minimize the operations: customer has the responsibilities to install, patch, backup, etc.. the database instances.\n\tOption C is INCORRECT because Amazon RDS for PostgreSQL is not a fully managed service. In terms of operations there are more responsibilities in charge of the customer compared to Amazon Aurora.\n\tOption D is INCORRECT because an image from AWS Marketplace is not a fully managed service. It’s a IaaS-like solution that does not require (simplify) the first installation but leaves in charge of the customer more responsibilities than Aurora.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/rds/aurora/\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following\noptions of AWS RDS allows for AWS to failover to a secondary database in case\nthe primary one fails.",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Multi-AZ"}, {"id": "B", "markdown": "AWS Failover"}, {
        "id": "C",
        "markdown": "AWS Secondary"
    }, {"id": "D", "markdown": "AWS Standby"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– A\n\nThe\nAWS Documentation mentions the following\n\nAmazon\nRDS Multi-AZ deployments provide enhanced availability and durability for\nDatabase (DB) Instances, making them a natural fit for production database\nworkloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically\ncreates a primary DB Instance and synchronously replicates the data to a\nstandby instance in a different Availability Zone (AZ). Each AZ runs on its own\nphysically distinct, independent infrastructure, and is engineered to be highly\nreliable. In case of an infrastructure failure, Amazon RDS performs an\nautomatic failover to the standby (or to a read replica in the case of Amazon\nAurora), so that you can resume database operations as soon as the failover is\ncomplete. \n\nFor\nmore information on AWS RDS Multi-AZ visit the below link:\n\nhttps://aws.amazon.com/rds/details/multi-az/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Each time a drone flight simulator crashes, it produces a plethora of event logs which the research and development team would like to query and derive utility from. Since this rarely occurs, what cost-effective services can they use to extract their target information?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Use Extract, Transform, Load (ETL) processes into an Amazon DynamoDB instance for querying."
    }, {
        "id": "B",
        "markdown": "Upload event logs into an Amazon S3 bucket then use Amazon Athena for querying."
    }, {"id": "C", "markdown": "Use Extract, Transform, Load (ETL) processes into MySQL RDS for querying."}, {
        "id": "D",
        "markdown": "Configure the simulator to write logs into an Amazon S3 bucket then use Extract, Transform, Load (ETL) processes to build an Amazon Aurora database instance for querying."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – B\n\nAmazon Athena a serverless query service that uses Amazon S3 as its data source. The service is ideal for the scenario due to the ad hoc nature of the query task, thus building a database is unnecessary. The service does not need to build databases on dedicated Elastic Block Store (EBS) volumes, instead, it builds tables from data read directly from Amazon S3 bucket.\n\nhttps://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html\n\n\n\tOption A. is incorrect because building a DynamoDB instance for an ad hoc task is not cost-effective.\n\tOption C. is incorrect because Extract, Transform, Load (ETL) processes are complex and building a MySQL RDS for a once-off task is not cost-effective.\n\tOption D. is incorrect because once the data is in an Amazon S3 bucket, there is no need to perform complex Extract, Transform, Load (ETL) processes. Amazon Athena can handle the backend table building processes, no database instances are necessary to meet the scenario requirements of cost-effectiveness.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following statements regarding Amazon Athena are accurate? Select TWO.",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Amazon Athena queries data directly from Amazon S3 and there are no additional data storage commitments beyond the object storage."
    }, {
        "id": "B",
        "markdown": "Amazon Athena is not suitable for complex analysis such as large joins, window functions and arrays."
    }, {
        "id": "C",
        "markdown": "Amazon Athena resources are allocated in accordance to processing and memory requirements prior to deployment."
    }, {
        "id": "D",
        "markdown": "Amazon Athena is compatible with data formats such as CSV, JSON, ORC, AVRO and Parquet"
    }, {
        "id": "E",
        "markdown": "Amazon Athena uses a variety of query languages including SQL, LDAP, JPQL as well as CQL."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, D\n\nAmazon Athena a serverless query service that does not need to build databases on dedicated Elastic Block Store (EBS) volumes, instead, it builds tables from data read directly from Amazon S3 buckets. Amazon Athena does not store any of the data. The service is compatible with the regular data formats that include CSV, JSON, ORC, AVRO and Parquet.\n\nhttps://docs.aws.amazon.com/athena/latest/ug/what-is.html\n\n\n\tOption B. is incorrect because Amazon Athena can indeed query Big Data, complex analysis such as large joins, window functions and arrays.\n\tOption C. is incorrect because Amazon Athena is serverless, thus the service scales in accordance with the resource demands. No prior resource planning is necessary.\n\tOption E. is incorrect because Amazon Athena uses SQL only.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "An administrator is running a large deployment of AWS resources that is spread across several AWS Regions. They would like to persistently keep track of configuration changes on all the resources as well as maintain a configuration inventory. What is the best service they can use?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS CloudFormation"}, {
        "id": "B",
        "markdown": "Stacks and Templates"
    }, {"id": "C", "markdown": "AWS Backup"}, {"id": "D", "markdown": "AWS Config"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – D\n\nAWS Config will meet the requirements of the scenario, the service allows the administrator to monitor and record configuration changes on AWS resources in their account. The service also allows the administrator to create a resource configuration inventory.\n\nhttps://aws.amazon.com/config/\n\n\n\tOption A. is incorrect because AWS CloudFormation will allow the administrator to create templates of resources such as EC2 instances and RDS instances but not the actual configurations in these resources.\n\tOption B. is incorrect because Templates and Stacks form the basis of AWS CloudFormation, they aid in the automated deployment of whole environments but not the applications that run in them.\n\tOption C. is incorrect because AWS Backup is a fully managed service that allows the administrator to backup data in the cloud and on-premises, the service is not the most appropriate to monitor and record resource configuration changes.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Whilst working on a collaborative project, an administrator would like to record the initial configuration and the several authorized changes that engineers make to the route table of a VPC. What is the best method to achieve this?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Use of AWS Config"}, {
        "id": "B",
        "markdown": "Use of VPC Flow Logs"
    }, {"id": "C", "markdown": "Use of AWS CloudTrail"}, {
        "id": "D",
        "markdown": "Use of an AWS Lambda function that is triggered to save a log file to an S3 bucket each time configuration changes are made."
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAWS Config can be used to keep track of configuration changes on AWS resources, keeping multiple date-stamped versions in a reviewable history. This makes it the best method to meet the scenario requirements.\n\nhttps://aws.amazon.com/config/\n\n\n\tOption B. is incorrect because VPC flow logs will only capture ip traffic related information that is passing through and from network interfaces within the VPC. VPC flow logs will not be able to capture configuration changes made to route tables.\n\n\t\n\t\thttps://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html\n\t\n\t\n\tOption C. is incorrect because AWS CloudTrail will capture  identity access activity, event history into the AWS environment. Recording the actions and API calls but not best suited to keep a record of configurations.\n\t\n\t\thttps://aws.amazon.com/cloudtrail/\n\t\n\t\n\tOption D. is incorrect because using a Lambda function to write configuration changes might meet the requirements but would not be the best method. Since AWS Config can deliver what is needed with much less administrative input.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "A company does not\nwant to manage their database. Which of the following services is a fully\nmanaged NoSQL database provided by AWS.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS RDS"}, {"id": "B", "markdown": "DynamoDB"}, {
        "id": "C",
        "markdown": "Oracle RDS"
    }, {"id": "D", "markdown": "Elastic Map Reduce"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n- B \n\nDynamoDB\nis a fully managed NoSQL offering provided by AWS. It is now available in most\nregions for users to consume. \n\nFor\nmore information on AWS DynamoDB visit the below link:\n\nhttps://aws.amazon.com/dynamodb/\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which statement about Amazon Macie is accurate? Select TWO.",
    "prompt": "",
    "correctAnswerId": ["A", "D"],
    "codeString": "",
    "options": [{
        "id": "A",
        "markdown": "Using artificial intelligence (AI), Amazon Macie can be able to alert the administrator of sensitive information in a document residing in an S3 bucket."
    }, {
        "id": "B",
        "markdown": "Amazon Macie cannot read user data but can formulate access patterns on it."
    }, {
        "id": "C",
        "markdown": "Amazon Macie provides comprehensive security for user data by preventing unauthorized access to it."
    }, {
        "id": "D",
        "markdown": "Through observing Amazon CloudTrail logs, Amazon Macie is able to detect if a permitted user is accessing data that they seldom do."
    }, {
        "id": "E",
        "markdown": "Amazon Macie is a fully managed service that does not need permission to access user data and resources"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A, D\n\nUsing artificial intelligence (AI), machine learning (ML), natural language understanding (NLU), Amazon Macie has the capability to read documents and sift through user data for sensitive or vulnerable information that can be exploited. Information such as credit/debit card numbers, access keys in documents will trigger an alert. Amazon Macie integrates with Amazon CloudTrail to detect unusual access patterns to user data and alerts the administrator.\n\nhttps://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html\n\n\n\tOption B. is incorrect because Amazon Macie is indeed capable of reading user data if configured to do so. The service can also learn access patterns to user data.\n\tOption C. is incorrect because Amazon Macie does not prevent unauthorized access to user data, instead it alerts the administrator of any out-of-the-usual access to it.\n\tOption E. is incorrect because Amazon Macie does indeed need to be configured and permitted to access user data and resources\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Your Security Team has security concerns about some application data that are persisted on S3 in plain text and requires you to introduce two improvements: (i) add “encryption at rest” and (ii) give them the possibility to monitor who/when access data (encrypts/decrypts S3 data).\n\nWhat AWS solution should you adopt to satisfy the requirement?",
    "prompt": "",
    "correctAnswerId": ["D"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS Certificate Manager"}, {
        "id": "B",
        "markdown": "Server Side Encryption managed by S3 (SSE-S3)"
    }, {"id": "C", "markdown": "Server Side Encryption managed by customer (SSE-C)"}, {
        "id": "D",
        "markdown": "Server Side Encryption managed by KMS (SSE-KMS)"
    }],
    "answerExplanation": "\n                            Explanation:\n                            Answer: D\n\n\n\tOption A is INCORRECT AWS Certificate Manager is not a solution for encryption at rest. It is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates, hence a solution for “encryption in transit” and not an “encryption at rest”\n\tOption B is INCORRECT because SSE-S3 does “encryption/decryption at rest” but it does not offer monitoring capabilities (who/when encrypts/decrypts).\n\tOption C is INCORRECT because SSE-C does “encryption/decryption at rest” but it does not offer monitoring capabilities (who/when encrypts/decrypts).\n\tOption D is CORRECT because SSE-KMS does “encryption/decryption at rest” and does offer monitoring capabilities. AWS documentation mentions “AWS KMS is integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs.'' See AWS link below for further details.\n\n\nDiagram: none\n\nReferences:\n\n\n\thttps://aws.amazon.com/cloudtrail/?nc1=h_ls\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the\nfollowing services helps provide a connection from on-premises infrastructure to\nresources hosted in the AWS Cloud. Choose 2 answers from the options given\nbelow",
    "prompt": "",
    "correctAnswerId": ["B", "C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "AWS VPC"}, {"id": "B", "markdown": "AWS VPN"}, {
        "id": "C",
        "markdown": "AWS Direct Connect"
    }, {"id": "D", "markdown": "AWS Subnets"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer\n– B and C\n\nThe\nAWS Documentation mentions the following\n\nAWS\nDirect Connect makes it easy to establish a dedicated network connection from\nyour premises to AWS. Using AWS Direct Connect, you can establish private\nconnectivity between AWS and your datacenter, office, or colocation\nenvironment, which in many cases can reduce your network costs, increase\nbandwidth throughput, and provide a more consistent network experience than\nInternet-based connections. \n\nYou\ncan connect your VPC to remote networks by using a VPN connection. \n\nFor\nmore information on AWS Direct Connect, please visit the link:\n\nhttps://aws.amazon.com/directconnect/?p=tile\n\nFor\nmore information on AWS VPN, please visit the link:\n\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/vpn-connections.html\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is a template that contains the software configuration to launch an ec2 instance?",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "EBS Volumes"}, {"id": "B", "markdown": "AMI"}, {
        "id": "C",
        "markdown": "EC2 Snapshot"
    }, {"id": "D", "markdown": "EBS Snapshot"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer – B\n\nThe AWS Documentation mentions the following\n\nAn Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need.\n\nFor more information on Amazon Machine Images, please refer to the following link:\n\n\n\thttps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "There is a requirement to host a set of servers in the Cloud for a short period of 3 months. Which of the following types of instances should be chosen to be cost-effective.",
    "prompt": "",
    "correctAnswerId": ["B"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Spot Instances"}, {"id": "B", "markdown": "On-Demand"}, {
        "id": "C",
        "markdown": "No Upfront costs Reserved"
    }, {"id": "D", "markdown": "Partial Upfront costs Reserved"}],
    "answerExplanation": "\n                            Explanation:\n                             \n\nAnswer - B\n\nSince the requirement is just for 3 months, then the best cost effective option is to use On-Demand Instances.\n\nFor more information on AWS On-Demand Instances pricing, please visit the link:\n\n\n\thttps://aws.amazon.com/ec2/pricing/on-demand/\n\n\n \n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Amazon Macie uses artificial intelligence (AI) and machine learning (ML) in which three main functional components on users’ data?",
    "prompt": "",
    "correctAnswerId": ["A"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Discover, Classify, Protect"}, {
        "id": "B",
        "markdown": "Observe, Design, Alert"
    }, {"id": "C", "markdown": "Optimize, Alert, Secure"}, {"id": "D", "markdown": "Detect, Discover, Alert"}],
    "answerExplanation": "\n                            Explanation:\n                            Correct Answer – A\n\nAmazon Macie is a fully managed security service that uses AI and ML to continuously observe data access activity in order to alert the user of any anomalies if they arise. Alerts may include unauthorized access, data leaks and any out-of-the-norm patterns. The major functions are to discover, classify and protect the user data.\n\nhttps://aws.amazon.com/macie/\n\nhttps://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html\n\n\n\tOption B. is incorrect because observe, design, alert: are not the main functional components of Amazon Macie.\n\tOption C. is incorrect because optimize, alert, secure: are not the main functional components of Amazon Macie.\n\tOption D. is incorrect because detect, discover, alert are not the main functional components of Amazon Macie.\n\n                        ",
    "referenceImage": ""
}, {
    "questionComplexityIndex": 0,
    "explanation": "Which of the following is not a disaster recovery deployment technique.",
    "prompt": "",
    "correctAnswerId": ["C"],
    "codeString": "",
    "options": [{"id": "A", "markdown": "Pilot light"}, {"id": "B", "markdown": "Warm standby"}, {
        "id": "C",
        "markdown": "Single Site"
    }, {"id": "D", "markdown": "Multi-Site"}],
    "answerExplanation": "\n                            Explanation:\n                            Answer - C\n\nThe below snapshot from the AWS documentation shows the different disaster recovery techniques\n\n \n\nFor more information on Disaster recovery techniques, please refer to the below URL:\n\n\n\thttps://aws.amazon.com/blogs/aws/new-whitepaper-use-aws-for-disaster-recovery/\n\n\n \n                        ",
    "referenceImage": ""
}]
