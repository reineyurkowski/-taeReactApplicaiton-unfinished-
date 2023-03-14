import Modules from ".";

export default function PageRouter() {
    return (
        <div id="bodyContainer">
            <Modules.BrowserRouter>
                <Modules.Routes>
                    <Modules.Route path='/' element={<Modules.Home />} />
                    <Modules.Route path='/home' element={<Modules.Home />} />
                    <Modules.Route path="/plans" element={<Modules.Plans />} />
                    <Modules.Route path="/plans" element={<Modules.Plans />} />
                    <Modules.Route path="/about" element={<Modules.About />} />
                    <Modules.Route path="/everything" element={<Modules.Everything />} />
                </Modules.Routes>
            </Modules.BrowserRouter>
        </div>
      
    );
}