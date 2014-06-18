Setup Development Environment
-----------------------------

1. Install Virtualbox

    ``https://www.virtualbox.org/wiki/Downloads``

1. Install Vagrant

    ``http://www.vagrantup.com/``

1. Install GIT    

    ``http://git-scm.com/downloads``
    
1. Clone the apache-vm from github:  https://github.com/mjb14/apache-vm.git

1. Change to the apache-vm root directory

1. Build the development environment

    ``vagrant up``


At this point the server will be running at

    localhost:9696  (Application will be running at http://localhost:9696/app/#)

To stop your vm:
        
    vagrant halt
    
To start your vm back up:

    vagrant up
    
To SSH to your server:

    vagrant ssh
    
If you need to stop or start apache, after you ssh in:

    sudo /etc/init.d/apache2 stop
    sudo /etc/init.d/apache2 start    