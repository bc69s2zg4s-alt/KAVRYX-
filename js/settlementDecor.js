"use strict";
const SettlementDecor={
    draw(ctx,width,height,centerX,centerY){
        const map=window.KAVRYXSettlementMap;
        if(!map)return;
        this.drawOuterFence(ctx,map);
        this.drawWorkAreas(ctx,map);
        this.drawStorageAreas(ctx,map);
        this.drawLights(ctx,map);
    },
    drawOuterFence(ctx,map){
        const left=map.left+8;
        const right=map.right-8;
        const top=map.top+8;
        const bottom=map.bottom-8;
        const gateLeft=-55;
        const gateRight=55;
        ctx.fillStyle="#111412";
        for(let x=left;x<=right;x+=38){
            if(x>=gateLeft-10&&x<=gateRight+10)continue;
            ctx.fillRect(x,top,9,30);
            ctx.fillRect(x,bottom-30,9,30);
        }
        for(let y=top+38;y<bottom-25;y+=38){
            ctx.fillRect(left,y,9,30);
            ctx.fillRect(right-9,y,9,30);
        }
        ctx.fillStyle="#493c2c";
        ctx.fillRect(left,top+7,right-left,7);
        ctx.fillRect(left,bottom-7,gateLeft-left,7);
        ctx.fillRect(gateRight,bottom-7,right-gateRight,7);
        ctx.fillRect(left,top,7,bottom-top);
        ctx.fillRect(right-7,top,7,bottom-top);
        this.drawEntrance(ctx,0,bottom);
    },
    drawEntrance(ctx,x,y){
        ctx.fillStyle="#111412";
        ctx.fillRect(x-50,y-42,10,42);
        ctx.fillRect(x+40,y-42,10,42);
        ctx.fillStyle="#624d32";
        ctx.fillRect(x-38,y-32,8,32);
        ctx.fillRect(x-20,y-32,8,32);
        ctx.fillRect(x-2,y-32,8,32);
        ctx.fillRect(x+16,y-32,8,32);
        ctx.fillRect(x+34,y-32,8,32);
        ctx.fillStyle="#1c1e1b";
        ctx.fillRect(x-45,y-39,90,7);
    },
    drawWorkAreas(ctx,map){
        const points=[
            [-105,-115],
            [110,-120],
            [-300,175]
        ];
        points.forEach((point)=>{
            if(map.blocked(point[0],point[1],35))return;
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
    drawStorageAreas(ctx,map){
        const points=[
            [-400,180],
            [400,125],
            [400,-35],
            [-100,220]
        ];
        points.forEach((point,index)=>{
            if(map.blocked(point[0],point[1],35))return;
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
    drawLights(ctx,map){
        const points=[
            [-390,-25],
            [390,-25],
            [-300,215],
            [300,215]
        ];
        points.forEach((point)=>{
            if(map.blocked(point[0],point[1],20))return;
            this.drawLamp(ctx,point[0],point[1]);
        });
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