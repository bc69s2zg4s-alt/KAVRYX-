"use strict";
const SettlementDecor={
    seed:5621,
    draw(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.95,820);
        const left=centerX-size/2;
        const top=centerY-55;
        const right=left+size;
        const bottom=top+size*.7;
        this.drawOuterFence(ctx,left+18,top+30,right-18,bottom-18);
        this.drawEntrance(ctx,centerX,bottom-28);
        this.drawWorkAreas(ctx,left,top,right,bottom);
        this.drawStorageAreas(ctx,left,top,right,bottom);
        this.drawCamp(ctx,centerX+170,centerY+70);
        this.drawLights(ctx,left,top,right,bottom);
    },
    blocked(x,y){
        if(Math.abs(x)<150&&Math.abs(y)<105)return true;
        if(Math.abs(y-110)<58&&Math.abs(x)<410)return true;
        if(Math.abs(x)<58&&y>-250&&y<160)return true;
        if(x>250&&y<-40)return true;
        if(x<-280&&y<-10)return true;
        return false;
    },
    drawOuterFence(ctx,left,top,right,bottom){
        ctx.fillStyle="#171917";
        for(let x=left;x<right;x+=42){
            ctx.fillRect(x,top,7,27);
            ctx.fillRect(x,bottom-22,7,22);
        }
        for(let y=top+35;y<bottom-25;y+=42){
            ctx.fillRect(left,y,7,27);
            ctx.fillRect(right-7,y,7,27);
        }
        ctx.fillStyle="#493c2c";
        ctx.fillRect(left,top+5,right-left,5);
        ctx.fillRect(left,bottom-20,right-left,5);
        ctx.fillRect(left,top,5,bottom-top);
        ctx.fillRect(right-5,top,5,bottom-top);
    },
    drawEntrance(ctx,x,y){
        ctx.fillStyle="#171917";
        ctx.fillRect(x-45,y-38,9,48);
        ctx.fillRect(x+36,y-38,9,48);
        ctx.fillStyle="#574630";
        ctx.fillRect(x-34,y-29,7,39);
        ctx.fillRect(x-19,y-29,7,39);
        ctx.fillRect(x-4,y-29,7,39);
        ctx.fillRect(x+11,y-29,7,39);
        ctx.fillRect(x+26,y-29,7,39);
        ctx.fillStyle="#1c1e1b";
        ctx.fillRect(x-39,y-35,78,6);
    },
    drawWorkAreas(ctx,left,top,right,bottom){
        const points=[
            [left+135,top+180],
            [right-165,top+175],
            [left+275,bottom-70]
        ];
        points.forEach((point)=>{
            if(this.blocked(point[0]-(left+right)/2,point[1]-(top+bottom)/2))return;
            this.drawWorkbench(ctx,point[0],point[1]);
        });
    },
    drawWorkbench(ctx,x,y){
        ctx.fillStyle="#191b19";
        ctx.fillRect(x-30,y-15,60,30);
        ctx.fillStyle="#5b4730";
        ctx.fillRect(x-26,y-11,52,8);
        ctx.fillRect(x-22,y-2,7,17);
        ctx.fillRect(x+15,y-2,7,17);
        ctx.fillStyle="#9b8351";
        ctx.fillRect(x-16,y-10,12,4);
        ctx.fillRect(x+3,y-10,14,4);
    },
    drawStorageAreas(ctx,left,top,right,bottom){
        const points=[
            [left+90,bottom-95],
            [right-90,bottom-115],
            [right-235,top+100],
            [left+220,bottom-45]
        ];
        points.forEach((point,index)=>{
            if(this.blocked(point[0]-(left+right)/2,point[1]-(top+bottom)/2))return;
            if(index%2===0)this.drawCrates(ctx,point[0],point[1]);
            else this.drawBarrels(ctx,point[0],point[1]);
        });
    },
    drawCrates(ctx,x,y){
        ctx.fillStyle="#1a1c1a";
        ctx.fillRect(x-22,y-18,44,36);
        ctx.fillStyle="#604c32";
        ctx.fillRect(x-18,y-14,36,28);
        ctx.fillStyle="#292821";
        ctx.fillRect(x-15,y-14,5,28);
        ctx.fillRect(x+10,y-14,5,28);
        ctx.fillRect(x-18,y-2,36,5);
        ctx.fillStyle="#8b7044";
        ctx.fillRect(x-12,y-10,7,4);
    },
    drawBarrels(ctx,x,y){
        ctx.fillStyle="#181a19";
        ctx.fillRect(x-15,y-19,30,38);
        ctx.fillStyle="#624d32";
        ctx.fillRect(x-11,y-15,22,30);
        ctx.fillStyle="#292723";
        ctx.fillRect(x-12,y-9,24,5);
        ctx.fillRect(x-12,y+5,24,5);
        ctx.fillStyle="#8b7044";
        ctx.fillRect(x-6,y-13,12,3);
    },
    drawCamp(ctx,x,y){
        ctx.fillStyle="#25211b";
        ctx.fillRect(x-32,y+10,64,7);
        ctx.fillStyle="#493522";
        ctx.fillRect(x-27,y+3,54,6);
        ctx.fillRect(x-24,y-4,48,6);
        ctx.fillStyle="#171918";
        ctx.fillRect(x-8,y-20,16,24);
        ctx.fillStyle="#73572f";
        ctx.fillRect(x-4,y-18,8,18);
        ctx.fillStyle="#b88a42";
        ctx.fillRect(x-10,y-10,20,12);
        ctx.fillStyle="#d0a454";
        ctx.fillRect(x-5,y-17,10,12);
    },
    drawLights(ctx,left,top,right,bottom){
        const points=[
            [left+205,top+185],
            [right-205,top+185],
            [left+310,bottom-55],
            [right-310,bottom-55]
        ];
        points.forEach((point)=>this.drawLamp(ctx,point[0],point[1]));
    },
    drawLamp(ctx,x,y){
        ctx.fillStyle="#171918";
        ctx.fillRect(x-3,y-43,6,43);
        ctx.fillRect(x-10,y-46,20,6);
        ctx.fillStyle="#8d7548";
        ctx.fillRect(x-7,y-39,14,13);
        ctx.fillStyle="#d2bc70";
        ctx.fillRect(x-4,y-36,8,7);
        ctx.fillStyle="rgba(210,188,112,.12)";
        ctx.beginPath();
        ctx.arc(x,y-31,22,0,Math.PI*2);
        ctx.fill();
    }
};
window.KAVRYXSettlementDecor=SettlementDecor;