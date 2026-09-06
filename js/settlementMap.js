"use strict";
const SettlementMap={
    width:940,
    height:540,
    left:-470,
    right:470,
    top:-270,
    bottom:270,
    centerX:0,
    centerY:0,
    buildings:[
        {x:0,y:20,w:210,h:155},
        {x:-230,y:110,w:170,h:150},
        {x:230,y:120,w:170,h:150},
        {x:330,y:-120,w:125,h:230},
        {x:-350,y:-90,w:180,h:170}
    ],
    roads:[
        {x:-470,y:65,w:940,h:42},
        {x:-15,y:-270,w:30,h:335},
        {x:-350,y:-90,w:365,h:30},
        {x:15,y:-120,w:315,h:30},
        {x:-230,y:100,w:230,h:30},
        {x:0,y:105,w:230,h:30}
    ],
    water:[
        {x:-380,y:-190,w:120,h:75},
        {x:380,y:190,w:120,h:75},
        {x:-350,y:210,w:90,h:55}
    ],
    inside(x,y,padding=0){
        return x>=this.left+padding&&x<=this.right-padding&&y>=this.top+padding&&y<=this.bottom-padding;
    },
    inRect(x,y,rect,padding=0){
        return x>=rect.x-rect.w/2-padding&&x<=rect.x+rect.w/2+padding&&y>=rect.y-rect.h/2-padding&&y<=rect.y+rect.h/2+padding;
    },
    inBuildings(x,y,padding=0){
        return this.buildings.some((rect)=>this.inRect(x,y,rect,padding));
    },
    inRoads(x,y,padding=0){
        return this.roads.some((rect)=>this.inRect(x,y,rect,padding));
    },
    inWater(x,y,padding=0){
        return this.water.some((rect)=>this.inRect(x,y,rect,padding));
    },
    blocked(x,y,padding=0){
        return !this.inside(x,y,padding)||this.inBuildings(x,y,padding)||this.inRoads(x,y,padding)||this.inWater(x,y,padding);
    }
};
window.KAVRYXSettlementMap=SettlementMap;