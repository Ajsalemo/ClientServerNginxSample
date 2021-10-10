# ClientServerNginxSample

A sample with a containerized React frontend that uses NGINX to call to a containerized Express backend. This uses docker-compose and Azure Multicontainers as an example of container-to-container communication.

`/client` - Folder containing the React project.
  - `nginx` - Folder containing the NGINX configuration that is used to help call to the Express backend.
 
`/server` - Folder containing the Express project.

`nginx/default.conf` is copied into `/etc/nginx/conf.d` during the image build and is what helps proxy requests between the client to the server for the API call to retrieve neighborhoods.

Expected output is a list of neighborhoods as seen below.

### Usage
You can clone this locally and navigate to the respective folders to build the images with `docker build -t <yourimagename> .` for both the `/client` and `/server`. After both images are built you can run the example with `docker-compose up`.

![Imgur](https://imgur.com/QBxRTYk.png)
