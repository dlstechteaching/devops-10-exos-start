const deleteX =require('../deleteX');

describe("deleteX test suite", ()=>{ 
        it("should return the same tableau", ()=>{
            const tab=["Momo",'Hadji','Leo'];

            const result=deleteX(tab);
            expect(result).toBe(tab);
    });
});