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
            if(map.inRoads(x,y,2))continue;
            if(type===0){
                ctx.fillStyle="#202522";
                ctx.fillRect(x,y,size,size*.55);
                ctx.fillStyle="#303631";
                ctx.fillRect(x+2,y,size*.55,2);
            }
            if(type===1){
                ctx.fillStyle="#242a25";
                ctx.fillRect(x,y,size*.7,size*.35);
                ctx.fillRect(x+size*.5,y+size*.2,size*.5,2);
            }
            if(type===2){
                ctx.fillStyle="#2d352d";
                ctx.fillRect(x,y,size*.35,size);
                ctx.fillRect(x+size*.25,y-size*.35,2,size*.7);
            }
            if(type===3){
                ctx.fillStyle="#292b27";
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
        map.roads.forEach((road)=>{
            if(road.w>road.h){
                for(let x=road.x-road.w/2+10;x<road.x+road.w/2;x+=38){
                    ctx.fillRect(x,road.y-5,24,9);
                }
            }else{
                for(let y=road.y-road.h/2+10;y<road.y+road.h/2;y+=38){
                    ctx.fillRect(road.x-5,y,10,25);
                }
            }
        });
        ctx.fillStyle="#171a18";
        map.roads.forEach((road)=>{
            if(road.w>road.h){
                ctx.fillRect(road.x-road.w/2,road.y-road.h/2,road.w,4);
                ctx.fillRect(road.x-road.w/2,road.y+road.h/2-4,road.w,4);
            }else{
                ctx.fillRect(road.x-road.w/2,road.y-road.h/2,4,road.h);
                ctx.fillRect(road.x+road.w/2-4,road.y-road.h/2,4,road.h);
            }
        });
    },
    drawEdges(ctx,map){
        ctx.fillStyle="#252b27";
        ctx.fillRect(map.left,map.top,map.width,22);
        ctx.fillRect(map.left,map.bottom-28,map.width,28);
        ctx.fillStyle="#101312";
        ctx.fillRect(map.left,map.top,map.width,5);
        ctx.fillRect(map.left,map.bottom-5,map.width,5);
    }
};
window.KAVRYXSettlementGround=SettlementGround;