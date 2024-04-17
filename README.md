- Création du fichier index.html
- Création du DOCKERFILE

```dockerfile
# Use a lightweight base image
FROM nginx:alpine

# Copy the static website files to the Nginx document root
COPY . /usr/share/nginx/html
```

- Build

```
docker build -t mydockertest .
```

-> Fail, il fallait installer Docker Desktop, l'ouvrir et ensuite lancer la commande
![[Pasted image 20240417105316.png]](./Pasted%20image%2020240417105316.png)

![[Pasted image 20240417105334.png]](./Pasted%20image%2020240417105334.png)
On retrouve bien notre image désormais.

Mise en ligne

```
docker run -d -p 80:80 mydockertest
```

Tout fonctionne, sur l'url "http://localhost"

Pour push vers le hub ensuite :

- `docker tag mydockertest:latest 0xEzis/mydockertest:v1.0`

On tag l'image qu'on a actuellement (`mydockertest:latest`) avec un nouveau nom qui spécifie l'utilisateur, et on lui applique le tag qu'on veut (`0xEzis/mydockertest:v1.0`)

> Problème : il faut push avec username/nom_de_limage:tag !

Or mon nom a été réinitialisé en 0xezis (sans le E majuscule)

Delete de l'image via Docker Hub puis nouvelle image avec le bon username :

`docker tag mydockertest:latest 0xezis/mydockertest:v1.0`
`docker push 0xezis/mydockertest:v1.0`

![[Pasted image 20240417110851.png]](./Pasted%20image%2020240417110851.png)

![[Pasted image 20240417111033.png]](./Pasted%20image%2020240417111033.png)
