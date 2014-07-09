describe("Activity Testing", function() {
    var activity = new Activity(1, "type", "description");
    
    it("Contructor testing", function() {
        expect(activity.getId()).toBe(1);
        expect(activity.getType()).toBe("type");
        expect(activity.getDescription()).toBe("description");
        expect(activity.getOptionList().length).toBe(0);
        expect(activity.getEventList().length).toBe(0);
    });
   
    it("Adding an Option", function(){
        var option = new Option(1,"place", "hour");
        
        activity.addOption(option);
        expect(activity.getOptionList().length).toBe(1);
        expect(activity.getOptionList()[0].getId()).toBe(1);
        expect(activity.getOptionList()[0].getPlace()).toBe("place");
        expect(activity.getOptionList()[0].getHour()).toBe("hour");
    });
    
    it("Adding an Event", function(){
        var event = new Event(1,"name");
        
        activity.addEvent(event);
        expect(activity.getEventList().length).toBe(1);
        expect(activity.getEventList()[0].getId()).toBe(1);
        expect(activity.getEventList()[0].getName()).toBe("name");
    });
});