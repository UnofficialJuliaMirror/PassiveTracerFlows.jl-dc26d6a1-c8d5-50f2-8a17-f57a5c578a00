var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#FourierFlows.jl-Documentation-1",
    "page": "Home",
    "title": "FourierFlows.jl Documentation",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "FourierFlows provides solvers for partial differential equations on doubly-periodic domains using Fourier-based pseudospectral methods. A central intent of the software\'s design is also to provide a framework for writing new, fast solvers for new physical problems. The code is written in Julia."
},

{
    "location": "index.html#Usage-1",
    "page": "Home",
    "title": "Usage",
    "category": "section",
    "text": "The code solves partial differential equations of the general form:partial_t u = mathcalLu + mathcalN(u) We decompose the right hand side of the above in a linear part (mathcalLu) and a nonlinear part (mathcalN(u)). The nonlinear part may include external forcing, e.g., mathcalN(u) = -upartial_x u + f."
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "FourierFlows is a registered package and so can be installed via Pkg.add.Pkg.add(\"FourierFlows\")For now, this package supports Julia 0.6. Support for version 0.7 is on its way."
},

{
    "location": "index.html#Writing-fast-solvers-1",
    "page": "Home",
    "title": "Writing fast solvers",
    "category": "section",
    "text": "The performance-intensive part of the code involves just two functions: the time-stepping scheme stepforward!, and the function calcN! that calculates the nonlinear part of the given equation\'s right-hand side. Optimization of these two functions for a given problem will produce the fastest possible code."
},

{
    "location": "index.html#Future-work-1",
    "page": "Home",
    "title": "Future work",
    "category": "section",
    "text": "The code is in the chaotic stage of development. A main goal for the future is to permit the use of shared memory parallelism in the compute-intensive routines (shared-memory parallelism provided already by FFTW/MKLFFT, but is not yet native to Julia for things like element-wise matrix multiplication, addition, and assignment). This feature may possibly be enabled by Intel Lab\'s ParallelAccelerator package."
},

{
    "location": "index.html#Developers-1",
    "page": "Home",
    "title": "Developers",
    "category": "section",
    "text": "FourierFlows is currently being developed by Gregory L. Wagner and Navid C. Constantinou."
},

{
    "location": "index.html#Cite-1",
    "page": "Home",
    "title": "Cite",
    "category": "section",
    "text": "The code is citable via zenodo. Please cite as:Gregory L. Wagner & Navid C. Constantinou. (2018). FourierFlows/FourierFlows.jl: FourierFlows v0.1.1 (Version v0.1.1). Zenodo.  http://doi.org/10.5281/zenodo.1302136"
},

{
    "location": "modules/traceradvdiff.html#",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "page",
    "text": ""
},

{
    "location": "modules/traceradvdiff.html#TracerAdvDiff-Module-1",
    "page": "TracerAdvDiff Module",
    "title": "TracerAdvDiff Module",
    "category": "section",
    "text": ""
},

{
    "location": "modules/traceradvdiff.html#Basic-Equations-1",
    "page": "TracerAdvDiff Module",
    "title": "Basic Equations",
    "category": "section",
    "text": "This module solves the advection diffusion equation for a passive tracer concentration c(x y t) in two-dimensions:partial_t c + boldsymbolu boldsymbolcdot boldsymbolnabla c = underbraceeta partial_x^2 c + kappa partial_y^2 c_textrmdiffusivity + underbracekappa_h (-1)^n_h nabla^2n_hc_textrmhyper-diffusivity where boldsymbolu = (uv) is the two-dimensional advecting flow, eta the x-diffusivity and kappa is the y-diffusivity. If eta is not defined then the code uses isotropic diffusivity, i.e., eta partial_x^2 c + kappa partial_y^2 cmapstokappanabla^2. The advecting flow could be either compressible or incompressible. "
},

{
    "location": "modules/traceradvdiff.html#Implementation-1",
    "page": "TracerAdvDiff Module",
    "title": "Implementation",
    "category": "section",
    "text": "The equation is time-stepped forward in Fourier space:partial_t widehatc = - widehatboldsymbolu boldsymbolcdot boldsymbolnabla c - left (eta k_x^2 + kappa k_y^2) +kappa_h k^2nu_h rightwidehatc Thus:beginalign*\nmathcalL = -eta k_x^2 - kappa k_y^2 - kappa_h k^2nu_h  \nmathcalN(widehatc) = - mathrmFFT(u partial_x c + upsilon partial_y c) \nendalign*"
},

{
    "location": "man/types.html#",
    "page": "Private types",
    "title": "Private types",
    "category": "page",
    "text": ""
},

{
    "location": "man/types.html#Private-types-1",
    "page": "Private types",
    "title": "Private types",
    "category": "section",
    "text": ""
},

{
    "location": "man/types.html#Private-types-in-module-PassiveTracerFlows:-1",
    "page": "Private types",
    "title": "Private types in module PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/types.html#PassiveTracerFlows.TracerAdvDiff.ConstDiffParams",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.ConstDiffParams",
    "category": "type",
    "text": "ConstDiffParams(eta, kap, kaph, nkaph, u, v)\nConstDiffParams(eta, kap, u, v)\n\nReturns the params for constant diffusivity problem with time-varying flow.\n\n\n\n\n\n"
},

{
    "location": "man/types.html#PassiveTracerFlows.TracerAdvDiff.ConstDiffSteadyFlowParams",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.ConstDiffSteadyFlowParams",
    "category": "type",
    "text": "ConstDiffSteadyFlowParams(eta, kap, kaph, nkaph, u, v, g)\nConstDiffSteadyFlowParams(eta, kap, u, v, g)\n\nReturns the params for constant diffusivity problem with time-steady flow.\n\n\n\n\n\n"
},

{
    "location": "man/types.html#PassiveTracerFlows.TracerAdvDiff.Vars-Tuple{Any}",
    "page": "Private types",
    "title": "PassiveTracerFlows.TracerAdvDiff.Vars",
    "category": "method",
    "text": "Vars(g)\n\nReturns the vars for constant diffusivity problem on grid g.\n\n\n\n\n\n"
},

{
    "location": "man/types.html#Private-types-in-module-PassiveTracerFlows:-2",
    "page": "Private types",
    "title": "Private types in module PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows.TracerAdvDiff]\nPublic = false\nOrder = [:type]"
},

{
    "location": "man/functions.html#",
    "page": "Functions",
    "title": "Functions",
    "category": "page",
    "text": ""
},

{
    "location": "man/functions.html#Functions-1",
    "page": "Functions",
    "title": "Functions",
    "category": "section",
    "text": ""
},

{
    "location": "man/functions.html#Functions-exported-from-PassiveTracerFlows:-1",
    "page": "Functions",
    "title": "Functions exported from PassiveTracerFlows:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows]\nPrivate = false\nOrder = [:function]"
},

{
    "location": "man/functions.html#Functions-exported-from-TracerAdvDiff:-1",
    "page": "Functions",
    "title": "Functions exported from TracerAdvDiff:",
    "category": "section",
    "text": "Modules = [PassiveTracerFlows.TracerAdvDiff]\nPrivate = false\nOrder = [:function]"
},

]}
