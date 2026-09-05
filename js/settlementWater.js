"use strict";
const SettlementWater={
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        this.drawPond(ctx,left+105,top+135,118,72);
        this.drawPond(ctx,right-145,bottom-100,92,58);
    },
    drawPond(ctx,x,y,width,height){
        ctx.fillStyle="#151918";
        ctx.fillRect(x-width/2-8,y-height/2-8,width+16,height+16);
        ctx.fillStyle="#303b39";
        ctx.fillRect(x-width/2-4,y-height/2-4,width+8,height+8);
        ctx.fillStyle="#253b3c";
        ctx.fillRect(x-width/2,y-height/2,width,height);
        ctx.fillStyle="#304d4e";
        ctx.fillRect(x-width*.35,y-height*.25,width*.7,7);
        ctx.fillRect(x-width*.18,y-height*.4,width*.36,5);
        ctx.fillStyle="#3d5c59";
        ctx.fillRect(x-width*.25,y+height*.18,width*.45,4);
        this.drawShore(ctx,x,y,width,height);
        this.drawWaterRocks(ctx,x,y,width,height);
    },
    drawShore(ctx,x,y,width,height){
        ctx.fillStyle="#514b3b";
        ctx.fillRect(x-width/2-7,y-height/2-3,7,6);
        ctx.fillRect(x+width/2,y-height/2-3,7,6);
        ctx.fillRect(x-width/2-7,y+height/2-3,7,6);
        ctx.fillRect(x+width/2,y+height/2-3,7,6);
        ctx.fillRect(x-width*.25,y-height/2-6,42,6);
        ctx.fillRect(x+width*.08,y+height/2,45,6);
    },
    drawWaterRocks(ctx,x,y,width,height){
        const rocks=[
            [x-width*.35,y-height*.38,7],
            [x+width*.36,y-height*.12,5],
            [x-width*.28,y+height*.36,6],
            [x+width*.3,y+height*.3,7]
        ];
        rocks.forEach((rock)=>{
            ctx.fillStyle="#252b29";
            ctx.fillRect(rock[0]-rock[2],rock[1]-rock[2]/2,rock[2]*2,rock[2]);
            ctx.fillStyle="#4a514c";
            ctx.fillRect(rock[0]-rock[2]*.5,rock[1]-rock[2]*.65,rock[2],rock[2]*.35);
        });
    }
};
window.KAVRYXSettlementWater=SettlementWater;