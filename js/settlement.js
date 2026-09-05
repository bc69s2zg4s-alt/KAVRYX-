"use strict";
const Settlement = {
    camera:{x:0,y:0,zoom:1},
    touch:{active:false,x:0,y:0,startX:0,startY:0},
    selectedBuilding:null,
    buildings:[
        {id:"core",type:"core",x:0,y:0,level:1},
        {id:"house1",type:"house",x:-150,y:40,level:1},
        {id:"house2",type:"house",x:150,y:55,level:1},
        {id:"tower",type:"tower",x:230,y:-20,level:1},
        {id:"workshop",type:"workshop",x:-260,y:15,level:1}
    ],
    init(){
        this.buildings.forEach((building)=>building.level=Math.max(1,building.level));
        this.initCamera();
    },
    initCamera(){
        const canvas=document.getElementById("gameCanvas");
        if(!canvas)return;
        canvas.addEventListener("pointerdown",(event)=>{
    this.touch.active=true;
    this.touch.x=event.clientX;
    this.touch.y=event.clientY;
    this.touch.startX=event.clientX;
    this.touch.startY=event.clientY;
    });
        canvas.addEventListener("pointerup",(event)=>{
    if(this.touch.active&&Math.hypot(event.clientX-this.touch.startX,event.clientY-this.touch.startY)<10)this.selectBuilding(event.clientX,event.clientY);
    this.touch.active=false;
    });
            if(!this.touch.active)return;
            this.camera.x=Math.max(-300,Math.min(300,this.camera.x-(event.clientX-this.touch.x)/this.camera.zoom));
            this.camera.y=Math.max(-180,Math.min(180,this.camera.y-(event.clientY-this.touch.y)/this.camera.zoom));
            this.touch.x=event.clientX;
            this.touch.y=event.clientY;
        });
        canvas.addEventListener("pointerup",()=>this.touch.active=false);
        canvas.addEventListener("pointercancel",()=>this.touch.active=false);
        canvas.addEventListener("pointerleave",()=>this.touch.active=false);
    },
    draw(ctx,width,height){
    selectBuilding(screenX,screenY){
    const canvas=document.getElementById("gameCanvas");
    if(!canvas)return;
    const rect=canvas.getBoundingClientRect();
    const worldX=(screenX-rect.left-this.camera.x*0+0);
    const worldY=(screenY-rect.top);
    const centerX=canvas.clientWidth/2;
    const centerY=canvas.clientHeight*.58;
    const x=(worldX-centerX)/this.camera.zoom+this.camera.x;
    const y=(worldY-centerY)/this.camera.zoom+this.camera.y;
    this.selectedBuilding=null;
    for(const building of this.buildings){
        const width=building.type==="core"?160:building.type==="tower"?90:building.type==="workshop"?140:120;
        const height=building.type==="tower"?150:110;
        if(x>=building.x-width/2&&x<=building.x+width/2&&y>=building.y-height&&y<=building.y+30){
            this.selectedBuilding=building.id;
            break;
        }
    }
},
        const centerX=width/2;
        const centerY=height*.58;
        ctx.save();
        ctx.translate(centerX,centerY);
        ctx.scale(this.camera.zoom,this.camera.zoom);
        ctx.translate(-this.camera.x,-this.camera.y);
        this.drawGround(ctx,width,height,0,0);
        this.buildings.forEach((building)=>this.drawBuilding(ctx,building,0,0));
        ctx.restore();
    },
    drawGround(ctx,width,height,centerX,centerY){
        const size=Math.min(width*.82,700);
        ctx.fillStyle="#1b2020";
        ctx.fillRect(centerX-size/2,centerY-40,size,size*.62);
        ctx.strokeStyle="rgba(0,0,0,.28)";
        ctx.lineWidth=2;
        const block=32;
        for(let x=centerX-size/2;x<centerX+size/2;x+=block){
            for(let y=centerY-40;y<centerY-40+size*.62;y+=block)ctx.strokeRect(x,y,block,block);
        }
    },
    drawBuilding(ctx,building,centerX,centerY){
        const x=centerX+building.x;
        const y=centerY+building.y;
        if(this.selectedBuilding===building.id){
    ctx.strokeStyle="#d9d8c5";
    ctx.lineWidth=4;
    ctx.strokeRect(x-75,y-155,150,180);
    }
        if(building.type==="core")this.drawCore(ctx,x,y,building.level);
        if(building.type==="house")this.drawHouse(ctx,x,y,building.level);
        if(building.type==="tower")this.drawTower(ctx,x,y,building.level);
        if(building.type==="workshop")this.drawWorkshop(ctx,x,y,building.level);
    },
    drawCore(ctx,x,y,level){
        ctx.fillStyle="#343b3d";
        ctx.fillRect(x-65,y-70,130,100);
        ctx.fillStyle="#4a5355";
        ctx.fillRect(x-78,y-82,156,18);
        ctx.fillStyle="#171a1b";
        ctx.fillRect(x-20,y-20,40,50);
        ctx.fillStyle="#d9d8c5";
        ctx.fillRect(x-38,y-52,28,24);
        ctx.fillRect(x+10,y-52,28,24);
        ctx.fillStyle="#8d7548";
        ctx.fillRect(x-12,y-4,24,34);
        this.drawLevel(ctx,x,y-105,level);
    },
    drawHouse(ctx,x,y,level){
        ctx.fillStyle="#303738";
        ctx.fillRect(x-45,y-45,90,65);
        ctx.fillStyle="#24292a";
        ctx.beginPath();
        ctx.moveTo(x-58,y-45);
        ctx.lineTo(x,y-82);
        ctx.lineTo(x+58,y-45);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle="#c3b982";
        ctx.fillRect(x-30,y-25,22,20);
        ctx.fillRect(x+8,y-25,22,20);
        ctx.fillStyle="#171a1b";
        ctx.fillRect(x-10,y-5,20,25);
        this.drawLevel(ctx,x,y-95,level);
    },
    drawTower(ctx,x,y,level){
        ctx.fillStyle="#353c3e";
        ctx.fillRect(x-28,y-105,56,125);
        ctx.fillStyle="#252b2c";
        ctx.beginPath();
        ctx.moveTo(x-42,y-105);
        ctx.lineTo(x,y-135);
        ctx.lineTo(x+42,y-105);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle="#c3b982";
        ctx.fillRect(x-12,y-75,24,20);
        ctx.fillRect(x-12,y-35,24,20);
        this.drawLevel(ctx,x,y-148,level);
    },
    drawWorkshop(ctx,x,y,level){
        ctx.fillStyle="#383e3f";
        ctx.fillRect(x-58,y-48,116,68);
        ctx.fillStyle="#292e30";
        ctx.fillRect(x-68,y-58,136,14);
        ctx.fillStyle="#171a1b";
        ctx.fillRect(x-38,y-28,76,30);
        ctx.fillStyle="#8d7548";
        ctx.fillRect(x-30,y-20,60,14);
        this.drawLevel(ctx,x,y-70,level);
    },
    drawLevel(ctx,x,y,level){
        ctx.fillStyle="#d9d8c5";
        ctx.font="bold 12px monospace";
        ctx.textAlign="center";
        ctx.fillText("LV."+level,x,y);
    }
};
Settlement.init();
window.KAVRYXSettlement=Settlement;