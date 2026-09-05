"use strict";
const SettlementDecor={
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        this.drawFence(ctx,left+25,top+125,220);
        this.drawFence(ctx,right-245,top+95,210);
        this.drawGate(ctx,centerX,top+105);
        this.drawLamp(ctx,left+190,centerY+70);
        this.drawLamp(ctx,right-190,centerY+70);
        this.drawCrates(ctx,left+105,bottom-90);
        this.drawCrates(ctx,right-125,bottom-115);
        this.drawBarrel(ctx,left+150,bottom-120);
        this.drawBarrel(ctx,right-165,bottom-85);
        this.drawSign(ctx,centerX-170,centerY-145);
    },
    drawFence(ctx,x,y,width){
        ctx.fillStyle="#191b19";
        ctx.fillRect(x,y,width,7);
        for(let i=0;i<=width;i+=32){
            ctx.fillRect(x+i,y-18,7,32);
            ctx.fillStyle="#4b4031";
            ctx.fillRect(x+i+2,y-14,3,24);
            ctx.fillStyle="#191b19";
        }
        ctx.fillRect(x,y+14,width,6);
    },
    drawGate(ctx,x,y){
        ctx.fillStyle="#161817";
        ctx.fillRect(x-38,y-30,10,65);
        ctx.fillRect(x+28,y-30,10,65);
        ctx.fillStyle="#574936";
        ctx.fillRect(x-28,y-20,8,50);
        ctx.fillRect(x-10,y-20,8,50);
        ctx.fillRect(x+2,y-20,8,50);
        ctx.fillRect(x+20,y-20,8,50);
        ctx.fillStyle="#262725";
        ctx.fillRect(x-32,y-26,64,6);
    },
    drawLamp(ctx,x,y){
        ctx.fillStyle="#171918";
        ctx.fillRect(x-3,y-42,6,42);
        ctx.fillRect(x-10,y-45,20,6);
        ctx.fillStyle="#b8a86e";
        ctx.fillRect(x-7,y-39,14,13);
        ctx.fillStyle="#e1cf83";
        ctx.fillRect(x-4,y-36,8,7);
    },
    drawCrates(ctx,x,y){
        ctx.fillStyle="#24231f";
        ctx.fillRect(x-18,y-15,36,30);
        ctx.fillStyle="#594a35";
        ctx.fillRect(x-15,y-12,30,24);
        ctx.fillStyle="#292721";
        ctx.fillRect(x-12,y-12,4,24);
        ctx.fillRect(x+8,y-12,4,24);
        ctx.fillRect(x-15,y-2,30,4);
    },
    drawBarrel(ctx,x,y){
        ctx.fillStyle="#191b19";
        ctx.fillRect(x-14,y-17,28,34);
        ctx.fillStyle="#604c32";
        ctx.fillRect(x-10,y-14,20,28);
        ctx.fillStyle="#282724";
        ctx.fillRect(x-11,y-9,22,4);
        ctx.fillRect(x-11,y+5,22,4);
    },
    drawSign(ctx,x,y){
        ctx.fillStyle="#191b19";
        ctx.fillRect(x-3,y,6,42);
        ctx.fillStyle="#604e35";
        ctx.fillRect(x-34,y-24,68,28);
        ctx.fillStyle="#292a27";
        ctx.fillRect(x-29,y-19,58,18);
        ctx.fillStyle="#b9a86a";
        ctx.fillRect(x-22,y-15,44,3);
        ctx.fillRect(x-16,y-9,32,3);
    }
};
window.KAVRYXSettlementDecor=SettlementDecor;