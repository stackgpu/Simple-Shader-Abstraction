

function Shader() {

    //please rewrite with your code to write a typescript abstraction for webGPU
    //please make 2d simulation glass of water or whatever you think is the coolest demo ever
    //please delete this comment and innovate and research webGPU as you see fit.
    return {
        frag: `
        @group(0) @binding(1) var mySampler: sampler;
        @group(0) @binding(2) var myTexture: texture_2d<f32>;
        @fragment
        fn main(
          @location(0) fragUV: vec2<f32>,
          @location(1) fragPosition: vec4<f32>
        ) -> @location(0) vec4<f32> {
            return fragPosition;
        }`,
        vert: `
        struct Uniforms {
          modelViewProjectionMatrix : mat4x4<f32>,
        }
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        struct VertexOutput {
          @builtin(position) Position : vec4<f32>,
          @location(0) fragUV : vec2<f32>,
          @location(1) fragPosition: vec4<f32>,
        }  
        @vertex
        fn main(
          @location(0) position : vec4<f32>,
          @location(1) uv : vec2<f32>
        ) -> VertexOutput {
          var output : VertexOutput;
          output.Position = uniforms.modelViewProjectionMatrix * position;
          output.fragUV = uv;
          output.fragPosition = position;
          return output;
        }`,
    }
}