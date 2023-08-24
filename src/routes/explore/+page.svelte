<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    console.log(data)
    export const imgURL = (collectionId:string, id:string, submission:string) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${submission}`;
}
</script>


{#each data.gallery as gallery}
<div class="card">
    <img class="img" src={imgURL(gallery?.collectionId,gallery?.id, gallery?.submission)} alt="{gallery.title} by {gallery.user}">
    <div class="img-info">
    <div class="rainbow"></div>    
    <p class="img-title">{gallery.title}<span class="topicef">{gallery.expand.topicse.topicshow}</span></p>
    <p class="img-desc">{gallery.description}</p>
</div>
</div>
{/each}