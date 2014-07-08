describe("Resource Testing", function() {
    var resource = new Resource(1, "name", 1);
    it("Contructor testing", function() {
        expect(resource.getId()).toBe(1);
        expect(resource.getName()).toBe("name");
        expect(resource.getQuantity()).toBe(1);
    });
});