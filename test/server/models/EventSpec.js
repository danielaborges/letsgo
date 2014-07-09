describe("Event Testing", function() {
    var event = new Event(1, "name");
    it("Contructor testing", function() {
        expect(event.getId()).toBe(1);
        expect(event.getName()).toBe("name");
        expect(event.getActivityList().length).toBe(0);
    });
    
    it("Adding an Activity", function() {
        var activity = new Activity(1, "type", "description");
        
        event.addActivity(activity);
        expect(event.getActivityList().length).toBe(1);
        expect(event.getActivityList()[0].getId()).toBe(1);
        expect(event.getActivityList()[0].getType()).toBe("type");
        expect(event.getActivityList()[0].getDescription()).toBe("description");
    });
});