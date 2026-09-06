"use strict";
const SettlementWater={
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        this.drawPond(ctx,left+110,top+145,150,82);
        this.drawPond(ctx,right-125,bottom-70,115,62);
    },
    drawPond(ctx,x,y,width,height){
        ctx.fillStyle="#121716";
        ctx.fillRect(x-width/2-9,y-height/2-9,width+18,height+18);
        ctx.fillStyle="#514b3c";
        ctx.fillRect(x-width/2-5,y-height/2-5,width+10,height+10);
        ctx.fillStyle="#263b3c";
        ctx.fillRect(x-width/2,y-height/2,width,height);
        ctx.fillStyle="#304b4b";
        ctx.fillRect(x-width*.36,y-height*.25,width*.65,6);
        ctx.fillRect(x-width*.18,y-height*.4,width*.4,4);
        ctx.fillStyle="#3d5b58";
        ctx.fillRect(x-width*.3,y+height*.2,width*.48,4);
        ctx.fillStyle="#182a2b";
        ctx.fillRect(x-width*.42,y-height*.05,width*.22,5);
        ctx.fillRect(x+width*.2,y+height*.1,width*.18,4);
        this.drawRocks(ctx,x,y,width,height);
        this.drawReeds(ctx,x,y,width,height);
    },
    drawRocks(ctx,x,y,width,height){
        const rocks=[
            [x-width*.35,y-height*.38,7],
            [x+width*.37,y-height*.12,6],
            [x-width*.3,y+height*.36,6],
            [x+width*.3,y+height*.32,8]
        ];
        rocks.forEach((rock)=>{
            ctx.fillStyle="#202522";
            ctx.fillRect(rock[0]-rock[2],rock[1]-rock[2]/2,rock[2]*2,rock[2]);
            ctx.fillStyle="#4a514c";
            ctx.fillRect(rock[0]-rock[2]*.5,rock[1]-rock[2]*.65,rock[2],rock[2]*.3);
        });
    },
    drawReeds(ctx,x,y,width,height){
        const points=[
            [x-width*.46,y-height*.35],
            [x+width*.46,y-height*.2],
            [x-width*.4,y+height*.25],
            [x+width*.4,y+height*.3]
        ];
        points.forEach((point)=>{
            ctx.fillStyle="#354335";
            ctx.fillRect(point[0],point[1]-12,3,12);
            ctx.fillRect(point[0]+5,point[1]-9,3,9);
            ctx.fillRect(point[0]+9,point[1]-14,3,14);
        });
    }
};
window.KAVRYXSettlementWater=SettlementWater;