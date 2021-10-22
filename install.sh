cd products && docker build -t products:0.0.1 .
cd ..
cd infra

kubectl apply -f products-depl.yaml
kubectl apply -f products-srv.yaml

kubectl apply -f ingress-srv.yaml