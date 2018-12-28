const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
var Request = require('request');
express().use(bodyParser.json()).get('/', (req, res) => {
    res.send({
        replies: [{
            type: 'text'
            , content: 'Welcome to Itelli Botttt'
    }]
    })
}).post('/CreateSO', (req, res) => {
    let materialNo = req.body.conversation.memory.MatNo.value.toString().toUpperCase()
    let qty = req.body.conversation.memory.Qty.value;
    res.send({
        replies: [{
            type: 'text'
            , content: 'Created Order for Material ' + materialNo + 'with Qty ' + qty
    }], conversation: {
            memory: {
                key: 'value'
            }
        }
    })
}).post('/getStatus', function (req, res) {
    // Call the backend service 
    var data = {
        "order": 2823
    };
    /*var reply = [{
			type: 'text',
			content: "From js"
		}];
    res.send(reply);*/
    
   /* res.send({
    replies: [{
      type: 'text',
      content: 'Roger that',
    }],
    conversation: {
      memory: { key: 'value' }
    }
  })*/

    Request.post({
        headers: {
            'content-type': 'application/json'
        }, 
        url: 'https://j4ia5972ceee.hana.ondemand.com/ChatBotProject/services/sample.xsjs', 
        body: JSON.stringify(data)
    }, function (error, response, body) {
        if (error) {
            res.send(error)
        }
        //res.send(body);
      /*  res.send({
        replies: [{
            type: 'text'
            , content: 'Order Status for Given Order is' +body
    }], conversation: {
            memory: {
                key: 'value'
            }
        }
    })*/
        res.send({
    replies: [{
      type: 'text',
      content: 'C',
    }],
    conversation: {
      memory: { key: 'value' }
    }
  })
    });
}).listen(PORT, () => console.log(`Listening on ${ PORT }`))