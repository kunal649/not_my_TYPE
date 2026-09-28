/**
 * sdk's has built event emitters like : 
 * emitter.on("captured", (e) => console.log(e.mesage));  
 * emitter.emit("captured", { count: 3 });                 // wrong payload, nobody warns you
 * emitter.emit("erorr", {...});
 * 
 * emitter.<method>("event-type", <args/payload> , so & so)
 * emitter.<method>("event-type", <event-handler> ); 
 */

type Handler<P> = (payload: P) => void; 


/**
 * Events = { event-name: payload }
 */
interface SDKEvents {
    captured: { message: string, level: "error" | "info" }; 
    flushed: { count: number }; 
}

class TypeEmitter <Events extends object> {
    private handlers : {[K in keyof Events]?: Handler<Events[K]>[] } = {}; 

    on<K extends keyof Events> (event: K, handler: Handler<Events[K]>) : () => void {
        const list = this.handlers[event] ?? []; 
        this.handlers[event] = [...list, handler]; 
        return () => this.off(event, handler); 
    }

    off<>(){}
    
}

