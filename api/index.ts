import { constants } from "buffer";
import { ExtractPropTypes } from "vue";

interface Env{
    ASSETS: Fetcher ;
}
    export default{
        fetch(request, env){
            const url = new URL (request.url);

            if (url.pathname.startsWith('/api/prelations')){
                return Response.json([
                  { id: '1',
                    name: "jobdist",
                    caption: "none",
                  },  
                  { id: '2',
                    name: "proker",
                    caption: "none",
                  },
                  { id: '3',
                    name: "kontak",
                    caption: "none",
                  },
                ]);
            }
            return env.ASSETS.fetch(request);
        
        },
    } satisfies ExtractHandler<Env>;