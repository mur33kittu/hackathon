for windows:

one time install
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml


update /etc/hosts

C:\Windows\System32\drivers\etc\hosts

127.0.0.1 products.com

products-api-secret - helm charts


run kubectl dashboard

kubectl apply -f initial.yaml

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login

kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"


remove account:

kubectl -n kubernetes-dashboard delete serviceaccount admin-user
kubectl -n kubernetes-dashboard delete clusterrolebinding admin-user


connect to kubernetes cluster

https://cloud.ibm.com/kubernetes/clusters


https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started#getting-started

team8-namespace

docker push us.icr.io/teams8-namespace/products:0.0.1

docker tag products:0.0.1 de.icr.io/teams8-namespace/products:0.0.1
docker push de.icr.io/teams8-namespace/products:0.0.1


architecture diagram:

https://docs.google.com/drawings/d/1-0z1_yUpg0qwxltFuJEeo3k-GHnR0Zq0RdJmzcupvy4/edit

deploy to container

https://cloud.ibm.com/docs/containers?topic=containers-deploy_app#app_cli



**************\

text: gXpv7YhuwCKfkkGxjweQ1EtYBPBp24PitIP55ydSfcUU



**************/