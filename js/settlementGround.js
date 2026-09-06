"use strict";
const SettlementGround={
    seed:731,
    draw(ctx,width,height,centerX,centerY){
        const map=window.KAVRYXSettlementMap;
        if(!map)return;
        ctx.fillStyle="#171b19";
        ctx.fillRect(map.left,map.top,map.width,map.height);
        this.drawTerrain(ctx,map);
        this.drawPaths(ctx,map);
        this.drawEdges(ctx,map);
    },
    drawTerrain(ctx,map){
        let value=this.seed;
        const random=()=>{
            value=(value*9301+49297)%233280;
            return value/233280;
        };
        for(let i=0;i<520;i++){
            const x=map.left+random()*map.width;
            const y=map.top+random()*map.height;
            const size=4+random()*14;
            const type=Math.floor(random()*5);
            ctx.fillStyle=type===0?"#202522":type===1?"#242a25":type===2?"#2d352d":type===3?"#292b27":"#202522";
            if(type===0)ctx.fillRect(x,y,size,size*.55);
            if(type===1){
                ctx.fillRect(x,y,size*.7,size*.35);
                ctx.fillRect(x+size*.5,y+size*.2,size*.5,2);
            }
            if(type===2){
                ctx.fillRect(x,y,size*.35,size);
                ctx.fillRect(x+size*.25,y-size*.35,2,size*.7);
            }
            if(type===3){
                ctx.fillRect(x,y,size,size*.7);
                ctx.fillStyle="#36382f";
                ctx.fillRect(x+2,y+2,size*.45,2);
            }
            if(type===4){
                ctx.strokeStyle="#111514";
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(x,y);
                ctx.lineTo(x+size*.55,y+size*.2);
                ctx.lineTo(x+size*.25,y+size*.55);
                ctx.stroke();
            }
        }
    },
    drawPaths(ctx,map){
        ctx.fillStyle="#252a25";
        map.roads.forEach((road)=>{
            ctx.fillRect(road.x-road.w/2,road.y-road.h/2,road.w,road.h);
        });
        ctx.fillStyle="#3a3d35";
        for(let x=map.left;x<map.right;x+=38){
            if(Math.abs(x)<18)continue;
            ctx.fillRect(x,map.roads[0].y-6,24,10);
        }
        for(let y=map.top;y<65;y+=38){
            if(Math.abs(y-65)<20)continue;
            ctx.fillRect(-5,y,10,25);
        }
        ctx.fillStyle="#171a18";
        ctx.fillRect(map.left,map.roads[0].y-21,map.width,4);
        ctx.fillRect(map.left,map.roads[0].y+17,map.width,4);
        ctx.fillRect(-19,map.top,4,335);
        ctx.fillRect(15,map.top,4,335);
    },
    drawEdges(ctx,map){
        ctx.fillStyle="#252b27";
        ctx.fillRect(map.left,map.bottom-28,map.width,28);
        ctx.fillRect(map.left,map.top,map.width,22);
        ctx.fillStyle="#101312";
        ctx.fillRect(map.left,map.bottom-5,map.width,5);
        ctx.fillRect(map.left,map.top,map.width,5);
        for(let x=map.left+10;x<map.right;x+=52){
            ctx.fillStyle="#343a35";
            ctx.fillRect(x,map.bottom-20,28,6);
            ctx.fillRect(x,map.top+9,28,6);
        }
    }
};
window.KAVRYXSettlementGround=SettlementGround;