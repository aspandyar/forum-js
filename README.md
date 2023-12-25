    $ npm install
 install requimenets packages, which were used in following project

    $ node index.js
run project on http://localhost:3000/

BUT, before you should set up your db, as i used mongoDB on Atlas, connections can be work only when I started it locally on my website page, to run project localy on your pc, you should change following link:
    const DBuri = "mongodb+srv://aspandyar:AkUE6zyIGRZjtWNg@cluster0.fsit9t7.mongodb.net/?retryWrites=true&w=majority";

To your working mongoDB (only mongoDB, because I used logic from that DB)

following link lie on /index.js path


nodemon => to run server and do upgrade in real time
