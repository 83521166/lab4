$.index.open();

function btClick(e) { 
    $.mapView.region = {
        latitude : 22.339468, 
        longitude : 114.181879,
        latitudeDelta : 0.001,
        longitudeDelta : 0.001 
    };
};

function tableClick(e) { 
    //console.log("Table Clicked");
    var eventListController = Alloy.createController('eventList', {
        dept_id : e.row.dept_id
    });
    
    $.index.activeTab.open(eventListController.getView());
};

Alloy.Collections.webNews.fetch();

function transformFunction(model) { 
    var transform = model.toJSON(); 
    
    transform.name = "🤣" + transform.name;

    return transform; 
}

function mapClicked(e) {
    
    if (e.clicksource == 'rightButton' && e.annotation.id == 'acHall') {
            
        console.log("map Clicked");
        alert("map Clicked");
        
    }   
}

function loginFunction(e) {
    
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
        alert(this.responseText);
    };
    xhr.open('POST','http://simplelogin.cs7184.comp.hkbu.edu.hk/User/signin');
    xhr.send({
        "userid": $.textField.value,
        "password": $.textField2.value
    });

}