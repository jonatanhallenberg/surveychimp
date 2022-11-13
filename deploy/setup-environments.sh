SCRIPT_PATH=`pwd`
echo $SCRIPT_PATH
CLUSTER_NAME=surveychimp-db

# Create database cluster
doctl databases create $CLUSTER_NAME --engine mongodb --version 5 --region ams3

# Get ID for database cluster
CLUSTER_ID=$(doctl databases list | grep $CLUSTER_NAME | awk '{print $1}')

# Create database for dev in cluster
doctl databases db create $CLUSTER_ID dev

# Create database for prod in cluster
doctl databases db create $CLUSTER_ID prod

#doctl apps create --spec ./surveychimp-app.yaml --format "ID"
doctl apps create --spec ./surveychimp-app-dev.yaml

